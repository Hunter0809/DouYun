/** API 配置 */
export interface ApiConfig {
  textModelApiKey: string;
  textModelName: string;
  imageModelApiKey: string;
  imageModelName: string;
  visionModelApiKey?: string;
  visionModelName?: string;
  autoSaveIntervalSeconds?: number;
  /** 是否使用系统环境变量中的默认模型，为 true 时隐藏 apikey 输入 */
  useDefaultModel?: boolean;
}

type ModelOption = { name: string; label: string; icon: string; purchaseUrl: string };

/** Models backed by the server's configured OpenAI-compatible providers. */
export const TEXT_MODEL_OPTIONS: ModelOption[] = [
  { name: "deepseek-v4-flash", label: "DeepSeek V4 Flash", icon: "🦈", purchaseUrl: "https://platform.deepseek.com/api_keys" },
  { name: "doubao-seed-2-1-pro-260915", label: "豆包 Seed 2.1 Pro", icon: "✨", purchaseUrl: "https://console.volcengine.com/ark" },
];

/** 图片生成模型选项，附带购买链接 */
export const IMAGE_MODEL_OPTIONS: ModelOption[] = [
  { name: "doubao-seedream-4-0-250828", label: "Seedream 4.0", icon: "🎨", purchaseUrl: "https://console.volcengine.com/ark" },
];

/** 项目历史记录 */
/** 图像理解/主体识别模型选项 */
export const VISION_MODEL_OPTIONS: { name: string; icon: string; purchaseUrl: string }[] = [
  { name: "GPT-4o", icon: "👁️", purchaseUrl: "https://platform.openai.com/api-keys" },
  { name: "GPT-4o-mini", icon: "👁️", purchaseUrl: "https://platform.openai.com/api-keys" },
  { name: "Qwen2.5-VL", icon: "🔍", purchaseUrl: "https://help.aliyun.com/document_detail/2712195.html" },
  { name: "doubao-seed-1-6-vision", icon: "🔍", purchaseUrl: "https://console.volcengine.com/" },
  { name: "Gemini 1.5 Pro", icon: "✦", purchaseUrl: "https://aistudio.google.com/apikey" },
];

export interface ProjectRecord {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  completed: boolean;
  currentStep?: "config" | "extract" | "pattern" | "preview";
  theme: string;
  element: string;
  meaning?: string;
  productId: string;
  gridSize: number;
  colorCount: number;
  aspectRatio: string;
  showGrid: boolean;
  antiAlias: boolean;
  connectIslands?: boolean;
  selectedFilter?: "none" | "contrast" | "vibrant" | "pastel" | "warm" | "cool" | "grayscale" | "sepia";
  forcedColors?: string[];
  sourceImageUrl: string | null;
  extractedImageUrl: string | null;
  extractPrompt?: string | null;
  patternData: string | null;
  patternUrl: string | null;
  cleanPatternUrl: string | null;
  mockupUrl: string | null;
  productSceneUrl: string | null;
}
