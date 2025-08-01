import { Holiday } from "./types";

// 一月节日数据
export const januaryHolidays: Holiday[] = [
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
    date: "01-02",
    name: "National Science Fiction Day",
    country: "USA",
    category: "cultural",
    description: "A day to celebrate science fiction literature and culture",
    article: {
      origins:
        "National Science Fiction Day was established to honor the birthday of famed science fiction writer Isaac Asimov, who was born on January 2, 1920. The day celebrates the genre that has inspired technological innovation and expanded human imagination.",
      modernCelebrations:
        "Today, science fiction fans celebrate by reading classic and modern sci-fi literature, watching sci-fi films, attending conventions, and discussing the genre's impact on society and technology.",
      educationalValue:
        "Science fiction teaches critical thinking, creativity, and the importance of questioning the status quo. It helps readers understand complex scientific concepts and explore ethical implications of technological advancement.",
    },
    colors: {
      primary: "#4169E1",
      secondary: "#00CED1",
      accent: "#FFD700",
    },
    emojis: ["🚀", "👽", "🌌", "🤖", "⚡"],
    keywords: ["science fiction", "literature", "technology", "imagination"],
  },
  // 这里可以继续添加1月份的其他节日...
  // 为了演示，我只添加了前两个节日
];
