import { ThemeConfig } from "@/types/game";

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

// 全球节日数据库
export const globalHolidays: Holiday[] = [
  // 主题游戏
  {
    date: "theme-cupcakes",
    name: "Cupcakes",
    country: "Global",
    category: "themed",
    description:
      "A delightful cupcake-themed 2048 game with sweet treats and pastries",
    article: {
      origins:
        "Cupcakes have been a beloved dessert for centuries, originating from the concept of individual cakes that could be easily shared and enjoyed. The modern cupcake as we know it today became popular in the 19th century, offering a perfect portion-controlled treat that combines the joy of cake with the convenience of individual servings.",
      modernCelebrations:
        "Today, cupcakes are celebrated worldwide as symbols of joy, creativity, and celebration. They appear at birthdays, weddings, holidays, and everyday moments that call for a sweet treat. Cupcake bakeries, competitions, and themed events showcase the endless creativity possible with these miniature masterpieces.",
      educationalValue:
        "Cupcakes teach us about creativity, precision, and the joy of sharing. Baking cupcakes involves science (chemistry of ingredients), art (decorating), and mathematics (measurements). They also represent cultural diversity, as different countries have their own variations of individual cakes and pastries.",
    },
    colors: {
      primary: "#FFB6C1",
      secondary: "#FFC0CB",
      accent: "#FF69B4",
    },
    emojis: ["🧁", "🍰", "🎂", "🍪", "🍩"],
    keywords: ["cupcakes", "desserts", "baking", "sweets", "pastries"],
  },
  {
    date: "theme-christmas",
    name: "Christmas",
    country: "Global",
    category: "themed",
    description:
      "Celebrate the magic of Christmas with festive holiday symbols and traditions",
    article: {
      origins:
        "Christmas has its roots in both Christian tradition and ancient winter celebrations. The holiday commemorates the birth of Jesus Christ while incorporating elements from pagan winter solstice celebrations, creating a rich tapestry of religious and cultural traditions that have evolved over centuries.",
      modernCelebrations:
        "Modern Christmas celebrations include decorating trees, exchanging gifts, singing carols, and gathering with family and friends. The holiday has become a global phenomenon, celebrated by people of various faiths and cultures, each adding their own unique traditions and customs to the festive season.",
      educationalValue:
        "Christmas teaches us about generosity, family bonds, and cultural traditions. It provides opportunities to learn about different cultures' holiday customs, the history of various Christmas symbols, and the importance of giving and community spirit during the winter season.",
    },
    colors: {
      primary: "#FF0000",
      secondary: "#228B22",
      accent: "#FFD700",
    },
    emojis: ["🎄", "🎅", "🎁", "⭐", "🦌"],
    keywords: ["christmas", "holiday", "winter", "gifts", "family"],
  },
  {
    date: "theme-halloween",
    name: "Halloween",
    country: "Global",
    category: "themed",
    description:
      "Experience the spooky fun of Halloween with ghosts, pumpkins, and magical creatures",
    article: {
      origins:
        "Halloween traces its origins to the ancient Celtic festival of Samhain, which marked the end of harvest season and the beginning of winter. The Celts believed that on this night, the boundary between the living and the dead became blurred, allowing spirits to walk the earth.",
      modernCelebrations:
        "Today, Halloween is celebrated with costume parties, trick-or-treating, haunted houses, and pumpkin carving. The holiday has evolved into a fun, family-friendly celebration that embraces creativity, imagination, and the thrill of the supernatural in a safe and enjoyable way.",
      educationalValue:
        "Halloween offers lessons in creativity, cultural history, and overcoming fears. It provides opportunities to learn about different cultural traditions, the history of various Halloween symbols, and the importance of imagination and play in human development.",
    },
    colors: {
      primary: "#FF8C00",
      secondary: "#800080",
      accent: "#000000",
    },
    emojis: ["🎃", "👻", "🦇", "🕷️", "🍬"],
    keywords: ["halloween", "spooky", "costumes", "pumpkins", "candy"],
  },

  // 一月
  {
    date: "01-01",
    name: "New Year's Day",
    country: "Global",
    category: "international",
    description:
      "Celebrate the beginning of a new year with fireworks and resolutions",
    article: {
      origins:
        "New Year's Day celebrations date back to ancient civilizations, with the Babylonians being among the first to celebrate the new year around 2000 BCE. The date of January 1st was established by Julius Caesar in 46 BCE when he introduced the Julian calendar, marking the beginning of the civil year.",
      modernCelebrations:
        "Today, New Year's Day is celebrated worldwide with fireworks, parties, and various cultural traditions. From the ball drop in Times Square to temple visits in Japan, people around the world welcome the new year with hope, reflection, and celebration of new beginnings.",
      educationalValue:
        "New Year's Day teaches us about time, renewal, and cultural diversity. It provides opportunities to learn about different calendar systems, cultural traditions around the world, and the universal human desire for fresh starts and positive change.",
    },
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
  {
    date: "01-14",
    name: "Orthodox New Year",
    country: "Eastern Orthodox",
    category: "religious",
    description: "New Year celebration according to the Julian calendar",
    colors: {
      primary: "#FFD700",
      secondary: "#4169E1",
      accent: "#FF69B4",
    },
    emojis: ["🎆", "⛪", "🕯️", "🌟", "✨"],
    keywords: ["orthodox", "julian calendar", "new year", "christian"],
  },
  {
    date: "01-26",
    name: "Australia Day",
    country: "Australia",
    category: "national",
    description:
      "National day of Australia celebrating the arrival of the First Fleet",
    colors: {
      primary: "#FF0000",
      secondary: "#0000FF",
      accent: "#FFFFFF",
    },
    emojis: ["🇦🇺", "🦘", "🏖️", "🌊", "🌞"],
    keywords: ["australia", "national day", "first fleet", "celebration"],
  },

  // 二月
  {
    date: "02-02",
    name: "Groundhog Day",
    country: "USA",
    category: "cultural",
    description: "A traditional holiday where a groundhog predicts the weather",
    colors: {
      primary: "#8B4513",
      secondary: "#228B22",
      accent: "#FFD700",
    },
    emojis: ["🦫", "🌤️", "🌨️", "🌱", "🌞"],
    keywords: ["groundhog day", "weather prediction", "spring", "winter"],
  },
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
  {
    date: "02-21",
    name: "International Mother Language Day",
    country: "Global",
    category: "international",
    description: "A day to promote linguistic and cultural diversity",
    colors: {
      primary: "#4169E1",
      secondary: "#228B22",
      accent: "#FFD700",
    },
    emojis: ["🌍", "🗣️", "📚", "🎭", "🤝"],
    keywords: [
      "mother language",
      "linguistic diversity",
      "culture",
      "education",
    ],
  },

  // 三月
  {
    date: "03-08",
    name: "International Women's Day",
    country: "Global",
    category: "international",
    description:
      "A day to celebrate women's achievements and promote gender equality",
    colors: {
      primary: "#FF69B4",
      secondary: "#FF1493",
      accent: "#FFD700",
    },
    emojis: ["👩", "💪", "🌹", "🎉", "✨"],
    keywords: ["women's day", "gender equality", "empowerment", "celebration"],
  },
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
  {
    date: "03-20",
    name: "International Day of Happiness",
    country: "Global",
    category: "international",
    description:
      "A day to recognize the importance of happiness in people's lives",
    colors: {
      primary: "#FFD700",
      secondary: "#FF69B4",
      accent: "#00CED1",
    },
    emojis: ["😊", "🌈", "☀️", "🎉", "💛"],
    keywords: ["happiness", "joy", "well-being", "positive thinking"],
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
  {
    date: "04-22",
    name: "Earth Day",
    country: "Global",
    category: "international",
    description: "A day to demonstrate support for environmental protection",
    colors: {
      primary: "#228B22",
      secondary: "#32CD32",
      accent: "#4169E1",
    },
    emojis: ["🌍", "🌱", "🌿", "🌳", "♻️"],
    keywords: ["earth day", "environment", "conservation", "sustainability"],
  },
  {
    date: "04-23",
    name: "World Book Day",
    country: "Global",
    category: "international",
    description: "A day to promote reading, publishing, and copyright",
    colors: {
      primary: "#8B4513",
      secondary: "#FFD700",
      accent: "#4169E1",
    },
    emojis: ["📚", "📖", "✍️", "🎭", "📝"],
    keywords: ["world book day", "reading", "literature", "education"],
  },

  // 五月
  {
    date: "05-01",
    name: "International Workers' Day",
    country: "Global",
    category: "international",
    description:
      "A day to celebrate the achievements of workers and the labor movement",
    colors: {
      primary: "#FF0000",
      secondary: "#FFD700",
      accent: "#4169E1",
    },
    emojis: ["👷", "🔨", "⚒️", "🏭", "💪"],
    keywords: ["workers' day", "labor day", "workers rights", "celebration"],
  },
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
  {
    date: "05-12",
    name: "International Nurses Day",
    country: "Global",
    category: "international",
    description: "A day to recognize the contributions of nurses to society",
    colors: {
      primary: "#FF69B4",
      secondary: "#FFFFFF",
      accent: "#4169E1",
    },
    emojis: ["👩‍⚕️", "🏥", "💊", "❤️", "🩺"],
    keywords: ["nurses day", "healthcare", "nursing", "medical"],
  },

  // 六月
  {
    date: "06-01",
    name: "International Children's Day",
    country: "Global",
    category: "international",
    description:
      "A day to promote the welfare and rights of children worldwide",
    colors: {
      primary: "#FF69B4",
      secondary: "#00CED1",
      accent: "#FFD700",
    },
    emojis: ["👶", "🎈", "🎪", "🎨", "🎭"],
    keywords: ["children's day", "kids", "celebration", "rights"],
  },
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
  {
    date: "06-30",
    name: "International Asteroid Day",
    country: "Global",
    category: "international",
    description:
      "A day to raise awareness about asteroids and their potential impact",
    colors: {
      primary: "#2F4F4F",
      secondary: "#FFD700",
      accent: "#4169E1",
    },
    emojis: ["☄️", "🌌", "⭐", "🚀", "🔭"],
    keywords: ["asteroid day", "space", "astronomy", "science"],
  },

  // 七月
  {
    date: "07-01",
    name: "Canada Day",
    country: "Canada",
    category: "national",
    description: "National day of Canada celebrating the confederation",
    colors: {
      primary: "#FF0000",
      secondary: "#FFFFFF",
      accent: "#FFD700",
    },
    emojis: ["🇨🇦", "🍁", "🎆", "🎊", "🏒"],
    keywords: ["canada day", "canada", "national day", "celebration"],
  },
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
  {
    date: "07-14",
    name: "Bastille Day",
    country: "France",
    category: "national",
    description: "French National Day commemorating the French Revolution",
    colors: {
      primary: "#FF0000",
      secondary: "#FFFFFF",
      accent: "#4169E1",
    },
    emojis: ["🇫🇷", "🗼", "🎆", "🎊", "🍷"],
    keywords: ["bastille day", "france", "french revolution", "national day"],
  },

  // 八月
  {
    date: "08-09",
    name: "International Day of the World's Indigenous Peoples",
    country: "Global",
    category: "international",
    description:
      "A day to promote and protect the rights of indigenous peoples",
    colors: {
      primary: "#228B22",
      secondary: "#FFD700",
      accent: "#8B4513",
    },
    emojis: ["🌍", "🏹", "🌿", "🎭", "🤝"],
    keywords: ["indigenous peoples", "culture", "rights", "diversity"],
  },
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
  {
    date: "08-26",
    name: "Women's Equality Day",
    country: "USA",
    category: "national",
    description: "A day to commemorate the adoption of the 19th Amendment",
    colors: {
      primary: "#FF69B4",
      secondary: "#FF1493",
      accent: "#FFD700",
    },
    emojis: ["👩", "🗽", "📜", "💪", "🎉"],
    keywords: ["women's equality", "suffrage", "rights", "equality"],
  },

  // 九月
  {
    date: "09-08",
    name: "International Literacy Day",
    country: "Global",
    category: "international",
    description: "A day to highlight the importance of literacy and education",
    colors: {
      primary: "#4169E1",
      secondary: "#FFD700",
      accent: "#228B22",
    },
    emojis: ["📚", "✍️", "🎓", "📖", "🎭"],
    keywords: ["literacy day", "education", "reading", "learning"],
  },
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
  {
    date: "09-30",
    name: "International Translation Day",
    country: "Global",
    category: "international",
    description: "A day to celebrate the work of language professionals",
    colors: {
      primary: "#4169E1",
      secondary: "#FFD700",
      accent: "#228B22",
    },
    emojis: ["🌍", "🗣️", "📝", "📚", "🤝"],
    keywords: ["translation day", "languages", "communication", "culture"],
  },

  // 十月
  {
    date: "10-01",
    name: "International Day of Older Persons",
    country: "Global",
    category: "international",
    description:
      "A day to recognize the contributions of older persons to society",
    colors: {
      primary: "#FFD700",
      secondary: "#FF69B4",
      accent: "#4169E1",
    },
    emojis: ["👴", "👵", "💝", "🎁", "❤️"],
    keywords: ["older persons", "seniors", "elderly", "respect"],
  },
  {
    date: "10-16",
    name: "World Food Day",
    country: "Global",
    category: "international",
    description: "A day to raise awareness about hunger and food security",
    colors: {
      primary: "#228B22",
      secondary: "#FFD700",
      accent: "#FF69B4",
    },
    emojis: ["🍎", "🌾", "🍽️", "🌍", "🤝"],
    keywords: ["world food day", "hunger", "food security", "agriculture"],
  },
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
    date: "11-05",
    name: "Guy Fawkes Night",
    country: "UK",
    category: "cultural",
    description: "A British celebration with bonfires and fireworks",
    colors: {
      primary: "#FF8C00",
      secondary: "#FFD700",
      accent: "#FF0000",
    },
    emojis: ["🔥", "🎆", "🎭", "👑", "💥"],
    keywords: ["guy fawkes night", "bonfire night", "uk", "fireworks"],
  },
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
  {
    date: "11-20",
    name: "Universal Children's Day",
    country: "Global",
    category: "international",
    description:
      "A day to promote international togetherness and awareness among children",
    colors: {
      primary: "#FF69B4",
      secondary: "#00CED1",
      accent: "#FFD700",
    },
    emojis: ["👶", "🎈", "🎪", "🎨", "🎭"],
    keywords: ["children's day", "kids", "rights", "celebration"],
  },

  // 十二月
  {
    date: "12-10",
    name: "Human Rights Day",
    country: "Global",
    category: "international",
    description:
      "A day to commemorate the adoption of the Universal Declaration of Human Rights",
    colors: {
      primary: "#4169E1",
      secondary: "#FFFFFF",
      accent: "#FFD700",
    },
    emojis: ["🌍", "🤝", "📜", "⚖️", "✨"],
    keywords: ["human rights day", "rights", "equality", "justice"],
  },
  {
    date: "12-21",
    name: "Winter Solstice",
    country: "Global",
    category: "cultural",
    description: "The shortest day of the year",
    colors: {
      primary: "#4169E1",
      secondary: "#FFFFFF",
      accent: "#00CED1",
    },
    emojis: ["❄️", "🌨️", "⛄", "🌙", "⭐"],
    keywords: ["winter solstice", "shortest day", "winter", "snow"],
  },
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
  {
    date: "12-31",
    name: "New Year's Eve",
    country: "Global",
    category: "international",
    description: "Celebrate the end of the year and welcome the new year",
    colors: {
      primary: "#FFD700",
      secondary: "#FF69B4",
      accent: "#00CED1",
    },
    emojis: ["🎆", "🎊", "🎉", "🕐", "✨"],
    keywords: ["new year's eve", "celebration", "fireworks", "countdown"],
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
