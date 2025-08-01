import { Holiday } from "./types";

// 主题游戏节日
export const themeHolidays: Holiday[] = [
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
];
