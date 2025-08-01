import { ThemeConfig } from "@/types/game";
import { generateHolidayTheme, getHolidayByTheme } from "./holidayThemes";

// 保留经典主题作为后备
export const gameThemes: Record<string, ThemeConfig> = {
  classic: {
    name: "Classic",
    colors: {
      background: "#faf8ef",
      tile: "#eee4da",
      text: "#776e65",
      accent: "#f59563",
    },
    tiles: {
      2: { label: "2", color: "#eee4da", emoji: "2" },
      4: { label: "4", color: "#ede0c8", emoji: "4" },
      8: { label: "8", color: "#f2b179", emoji: "8" },
      16: { label: "16", color: "#f59563", emoji: "16" },
      32: { label: "32", color: "#f67c5f", emoji: "32" },
      64: { label: "64", color: "#f65e3b", emoji: "64" },
      128: { label: "128", color: "#edcf72", emoji: "128" },
      256: { label: "256", color: "#edcc61", emoji: "256" },
      512: { label: "512", color: "#edc850", emoji: "512" },
      1024: { label: "1024", color: "#edc53f", emoji: "1024" },
      2048: { label: "2048", color: "#edc22e", emoji: "2048" },
      4096: { label: "4096", color: "#3c3a32", emoji: "4096" },
    },
  },
};

// 统一获取主题配置的函数
export function getThemeConfig(themeName: string): ThemeConfig {
  // 尝试从节日主题获取（包括主题和日期）
  const holiday = getHolidayByTheme(themeName);
  if (holiday) {
    return generateHolidayTheme(holiday);
  }

  // 后备到经典主题
  return gameThemes[themeName] || gameThemes.classic;
}
