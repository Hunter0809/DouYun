import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * GET /api/env-config
 * 返回服务器环境变量中配置的 AI 模型信息（不暴露密钥本身）
 * 供前端 ProfilePage 在"使用默认模型"模式下展示
 */
export async function GET() {
  const textApiKeyExists = Boolean(process.env.DEEPSEEK_API_KEY?.trim() || process.env.ARK_API_KEY?.trim());
  const imageApiKeyExists = Boolean(process.env.ARK_API_KEY?.trim());
  const textBaseUrl = process.env.DEEPSEEK_API_KEY?.trim()
    ? process.env.DEEPSEEK_BASE_URL ?? "https://api.deepseek.com"
    : process.env.ARK_BASE_URL ?? "https://ark.cn-beijing.volces.com/api/v3";
  const imageBaseUrl = process.env.ARK_BASE_URL ?? "https://ark.cn-beijing.volces.com/api/v3";
  const imageModel = process.env.ARK_IMAGE_MODEL ?? process.env.AI_IMAGE_MODEL ?? "doubao-seedream-4-0-250828";
  const textModel = process.env.DEEPSEEK_API_KEY?.trim()
    ? process.env.DEEPSEEK_TEXT_MODEL ?? "deepseek-v4-flash"
    : process.env.ARK_TEXT_MODEL ?? process.env.AI_TEXT_MODEL ?? "doubao-seed-1-6-250615";
  const visionModel = process.env.ARK_VISION_MODEL ?? process.env.AI_VISION_MODEL ?? "";

  return NextResponse.json({
    configured: textApiKeyExists || imageApiKeyExists,
    textConfigured: textApiKeyExists,
    imageConfigured: imageApiKeyExists,
    textBaseUrl,
    imageBaseUrl,
    defaultImageModel: imageModel,
    defaultTextModel: textModel,
    defaultVisionModel: visionModel,
  });
}
