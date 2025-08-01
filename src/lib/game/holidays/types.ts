// 节日数据结构
export interface Holiday {
  date: string; // MM-DD 格式，对于非日期主题使用 "theme-xxx"
  name: string;
  country: string;
  category: "religious" | "cultural" | "national" | "international" | "themed";
  description: string;
  // 知识性文章内容
  article?: {
    origins: string;
    modernCelebrations: string;
    educationalValue: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  emojis: string[];
  keywords: string[];
}
