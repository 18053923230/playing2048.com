import { ThemeConfig } from "@/types/game";

// 节日数据结构
export interface Holiday {
  date: string; // MM-DD 格式
  name: string;
  country: string;
  category: "religious" | "cultural" | "national" | "international";
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  emojis: string[];
  keywords: string[];
}

// 全球节日数据库
export const globalHolidays: Holiday[] = [
  // 一月
  {
    date: "01-01",
    name: "New Year's Day",
    country: "Global",
    category: "international",
    description:
      "Celebrate the beginning of a new year with fireworks and resolutions",
    colors: {
      primary: "#FFD700",
      secondary: "#FF69B4",
      accent: "#00CED1",
    },
    emojis: ["🎆", "🎊", "🎉", "🕐", "✨"],
    keywords: ["new year", "celebration", "fireworks", "resolution"],
  },
  {
    date: "01-06",
    name: "Epiphany",
    country: "Christian",
    category: "religious",
    description: "The revelation of Jesus Christ to the world",
    colors: {
      primary: "#4169E1",
      secondary: "#FFD700",
      accent: "#FF69B4",
    },
    emojis: ["👑", "⭐", "🎁", "🌟", "✨"],
    keywords: ["epiphany", "christian", "three kings", "star"],
  },

  // 二月
  {
    date: "02-14",
    name: "Valentine's Day",
    country: "Global",
    category: "cultural",
    description: "A day to celebrate love and affection",
    colors: {
      primary: "#FF69B4",
      secondary: "#FF1493",
      accent: "#FFD700",
    },
    emojis: ["💕", "💖", "💝", "🌹", "💌"],
    keywords: ["valentine", "love", "romance", "hearts"],
  },

  // 三月
  {
    date: "03-17",
    name: "St. Patrick's Day",
    country: "Ireland",
    category: "cultural",
    description: "Celebrate Irish culture and heritage",
    colors: {
      primary: "#228B22",
      secondary: "#32CD32",
      accent: "#FFD700",
    },
    emojis: ["🍀", "☘️", "🌿", "🍺", "🎭"],
    keywords: ["st patrick", "ireland", "green", "shamrock"],
  },

  // 四月
  {
    date: "04-01",
    name: "April Fools' Day",
    country: "Global",
    category: "cultural",
    description: "A day for harmless pranks and jokes",
    colors: {
      primary: "#FFA500",
      secondary: "#FFD700",
      accent: "#FF69B4",
    },
    emojis: ["🤡", "🎭", "🎪", "🎨", "🎯"],
    keywords: ["april fools", "pranks", "jokes", "fun"],
  },

  // 五月
  {
    date: "05-05",
    name: "Cinco de Mayo",
    country: "Mexico",
    category: "national",
    description: "Celebrate Mexican heritage and culture",
    colors: {
      primary: "#228B22",
      secondary: "#FFD700",
      accent: "#FF0000",
    },
    emojis: ["🇲🇽", "🌮", "🎭", "🎪", "🌶️"],
    keywords: ["cinco de mayo", "mexico", "celebration", "heritage"],
  },

  // 六月
  {
    date: "06-21",
    name: "Summer Solstice",
    country: "Global",
    category: "cultural",
    description: "The longest day of the year",
    colors: {
      primary: "#FFD700",
      secondary: "#FFA500",
      accent: "#FF69B4",
    },
    emojis: ["☀️", "🌞", "🌻", "🏖️", "🌊"],
    keywords: ["summer solstice", "longest day", "sun", "summer"],
  },

  // 七月
  {
    date: "07-04",
    name: "Independence Day",
    country: "USA",
    category: "national",
    description: "Celebrate American independence",
    colors: {
      primary: "#FF0000",
      secondary: "#0000FF",
      accent: "#FFFFFF",
    },
    emojis: ["🇺🇸", "🎆", "🎊", "🏈", "🍔"],
    keywords: ["independence day", "usa", "america", "freedom"],
  },

  // 八月
  {
    date: "08-15",
    name: "Obon Festival",
    country: "Japan",
    category: "cultural",
    description: "A Buddhist festival honoring ancestors",
    colors: {
      primary: "#FF69B4",
      secondary: "#FFD700",
      accent: "#00CED1",
    },
    emojis: ["🏮", "🎭", "🌸", "🍡", "🎪"],
    keywords: ["obon", "japan", "ancestors", "lanterns"],
  },

  // 九月
  {
    date: "09-21",
    name: "International Day of Peace",
    country: "Global",
    category: "international",
    description: "A day dedicated to world peace",
    colors: {
      primary: "#4169E1",
      secondary: "#FFFFFF",
      accent: "#228B22",
    },
    emojis: ["🕊️", "☮️", "🌍", "🤝", "✨"],
    keywords: ["peace", "international", "harmony", "unity"],
  },

  // 十月
  {
    date: "10-31",
    name: "Halloween",
    country: "Global",
    category: "cultural",
    description: "A spooky celebration with costumes and candy",
    colors: {
      primary: "#FF8C00",
      secondary: "#800080",
      accent: "#000000",
    },
    emojis: ["🎃", "👻", "🦇", "🕷️", "🍬"],
    keywords: ["halloween", "spooky", "costumes", "candy"],
  },

  // 十一月
  {
    date: "11-11",
    name: "Veterans Day",
    country: "USA",
    category: "national",
    description: "Honor military veterans",
    colors: {
      primary: "#FF0000",
      secondary: "#FFFFFF",
      accent: "#0000FF",
    },
    emojis: ["🇺🇸", "🎖️", "🏛️", "🕊️", "🌹"],
    keywords: ["veterans day", "military", "honor", "service"],
  },

  // 十二月
  {
    date: "12-25",
    name: "Christmas",
    country: "Global",
    category: "religious",
    description: "Celebrate the birth of Jesus Christ",
    colors: {
      primary: "#FF0000",
      secondary: "#228B22",
      accent: "#FFD700",
    },
    emojis: ["🎄", "🎅", "🎁", "⭐", "🦌"],
    keywords: ["christmas", "jesus", "nativity", "gifts"],
  },
];

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
