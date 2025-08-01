import { Holiday } from "./types";
import { ThemeConfig } from "@/types/game";
import { globalHolidays } from "./index";

// 获取指定日期的节日
export function getHolidaysForDate(date: Date): Holiday[] {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dateString = `${month}-${day}`;

  return globalHolidays.filter((holiday) => holiday.date === dateString);
}

// 获取今天的节日
export function getTodayHolidays(): Holiday[] {
  return getHolidaysForDate(new Date());
}

// 根据主题名称获取节日（支持主题和日期）
export function getHolidayByTheme(themeName: string): Holiday | null {
  // 处理主题名称
  if (themeName.startsWith("holiday-")) {
    const dateString = themeName.replace("holiday-", "");
    return getHolidayByDate(dateString);
  }

  // 处理主题名称（如 cupcakes, christmas, halloween）
  const themeDate = `theme-${themeName}`;
  return globalHolidays.find((holiday) => holiday.date === themeDate) || null;
}

// 根据节日生成主题配置
export function generateHolidayTheme(holiday: Holiday): ThemeConfig {
  return {
    name: holiday.name,
    colors: {
      background: `${holiday.colors.primary}10`,
      tile: holiday.colors.secondary,
      text: "#2f4f4f",
      accent: holiday.colors.accent,
    },
    tiles: {
      2: {
        label: holiday.emojis[0] || "🎯",
        color: holiday.colors.primary,
        emoji: holiday.emojis[0] || "🎯",
      },
      4: {
        label: holiday.emojis[1] || "🎪",
        color: holiday.colors.secondary,
        emoji: holiday.emojis[1] || "🎪",
      },
      8: {
        label: holiday.emojis[2] || "🎭",
        color: holiday.colors.accent,
        emoji: holiday.emojis[2] || "🎭",
      },
      16: {
        label: holiday.emojis[3] || "✨",
        color: holiday.colors.primary,
        emoji: holiday.emojis[3] || "✨",
      },
      32: {
        label: holiday.emojis[4] || "🎨",
        color: holiday.colors.secondary,
        emoji: holiday.emojis[4] || "🎨",
      },
      64: {
        label: "Special",
        color: holiday.colors.accent,
        emoji: "🌟",
      },
      128: {
        label: "Rare",
        color: holiday.colors.primary,
        emoji: "💎",
      },
      256: {
        label: "Epic",
        color: holiday.colors.secondary,
        emoji: "👑",
      },
      512: {
        label: "Legendary",
        color: holiday.colors.accent,
        emoji: "🔥",
      },
      1024: {
        label: "Mythical",
        color: holiday.colors.primary,
        emoji: "🌈",
      },
      2048: {
        label: "Divine",
        color: holiday.colors.secondary,
        emoji: "⭐",
      },
      4096: {
        label: "Ultimate",
        color: holiday.colors.accent,
        emoji: "💫",
      },
    },
  };
}

// 获取所有可用日期
export function getAllHolidayDates(): string[] {
  return globalHolidays.map((holiday) => holiday.date);
}

// 根据日期字符串获取节日
export function getHolidayByDate(dateString: string): Holiday | null {
  return globalHolidays.find((holiday) => holiday.date === dateString) || null;
}
