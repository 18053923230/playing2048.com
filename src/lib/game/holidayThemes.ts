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
  {
    date: "01-03",
    name: "International Mind-Body Wellness Day",
    country: "Global",
    category: "international",
    description: "A day to promote mental and physical wellness",
    article: {
      origins:
        "International Mind-Body Wellness Day was created to raise awareness about the importance of holistic health, recognizing the connection between mental and physical well-being in achieving overall wellness.",
      modernCelebrations:
        "People celebrate by practicing yoga, meditation, mindfulness exercises, and other wellness activities. Many participate in workshops, wellness retreats, and community health events.",
      educationalValue:
        "This day teaches the importance of holistic health, stress management, and the mind-body connection. It promotes healthy lifestyle choices and mental health awareness.",
    },
    colors: {
      primary: "#98FB98",
      secondary: "#87CEEB",
      accent: "#DDA0DD",
    },
    emojis: ["🧘", "💚", "🌿", "☮️", "✨"],
    keywords: ["wellness", "mind-body", "health", "meditation"],
  },
  {
    date: "01-04",
    name: "World Braille Day",
    country: "Global",
    category: "international",
    description: "A day to raise awareness about the importance of Braille",
    article: {
      origins:
        "World Braille Day commemorates the birthday of Louis Braille, who invented the Braille system in 1824. This tactile writing system has enabled millions of visually impaired people to read and write.",
      modernCelebrations:
        "Organizations worldwide hold events to promote Braille literacy, demonstrate Braille technology, and advocate for accessibility rights for visually impaired individuals.",
      educationalValue:
        "This day teaches about accessibility, inclusion, and the importance of making information available to all people regardless of their abilities. It highlights the power of innovation to improve lives.",
    },
    colors: {
      primary: "#2F4F4F",
      secondary: "#FFFFFF",
      accent: "#FFD700",
    },
    emojis: ["👁️", "📖", "🤝", "♿", "💡"],
    keywords: ["braille", "accessibility", "inclusion", "blind"],
  },
  {
    date: "01-05",
    name: "National Bird Day",
    country: "USA",
    category: "cultural",
    description: "A day to appreciate and protect birds",
    article: {
      origins:
        "National Bird Day was established to raise awareness about the plight of captive birds and to promote the conservation of wild bird populations. It coincides with the end of the annual Christmas Bird Count.",
      modernCelebrations:
        "Bird enthusiasts participate in bird watching, educational programs, and conservation activities. Many visit wildlife sanctuaries or learn about local bird species and their habitats.",
      educationalValue:
        "This day teaches about biodiversity, environmental conservation, and the important role birds play in ecosystems. It promotes appreciation for nature and wildlife protection.",
    },
    colors: {
      primary: "#228B22",
      secondary: "#FFD700",
      accent: "#87CEEB",
    },
    emojis: ["🐦", "🦅", "🦜", "🦢", "🦉"],
    keywords: ["birds", "conservation", "wildlife", "nature"],
  },
  {
    date: "01-06",
    name: "Three Kings Day",
    country: "Spain",
    category: "religious",
    description: "A traditional Spanish celebration of the Epiphany",
    article: {
      origins:
        "Three Kings Day, or Día de los Reyes, commemorates the biblical story of the three wise men who visited the baby Jesus. This celebration has been a central part of Spanish and Latin American culture for centuries.",
      modernCelebrations:
        "In Spain and Latin America, families gather for special meals, children receive gifts from the Three Kings, and communities hold parades and celebrations. Traditional foods like Rosca de Reyes are enjoyed.",
      educationalValue:
        "This day teaches about cultural traditions, religious history, and the importance of family celebrations. It provides insight into Spanish and Latin American cultural heritage.",
    },
    colors: {
      primary: "#FFD700",
      secondary: "#4169E1",
      accent: "#FF69B4",
    },
    emojis: ["👑", "⭐", "🎁", "🌟", "✨"],
    keywords: ["three kings day", "epiphany", "spain", "christian"],
  },
  {
    date: "01-07",
    name: "International Programmers' Day",
    country: "Global",
    category: "international",
    description: "A day to celebrate the contributions of programmers",
    article: {
      origins:
        "International Programmers' Day was established to recognize the contributions of programmers to technological advancement. The date 256 (2^8) was chosen as it's a significant number in programming.",
      modernCelebrations:
        "Programmers worldwide celebrate by sharing code, participating in hackathons, attending tech meetups, and recognizing the importance of software development in modern society.",
      educationalValue:
        "This day highlights the importance of computer science education, coding skills, and the role of technology in solving global challenges. It promotes STEM education and digital literacy.",
    },
    colors: {
      primary: "#2F4F4F",
      secondary: "#00CED1",
      accent: "#FFD700",
    },
    emojis: ["💻", "⌨️", "🔧", "⚡", "🚀"],
    keywords: ["programmers day", "coding", "technology", "software"],
  },
  {
    date: "01-08",
    name: "National English Toffee Day",
    country: "USA",
    category: "cultural",
    description: "A day to celebrate the delicious English toffee",
    article: {
      origins:
        "English toffee, a traditional confection made from sugar and butter, has been enjoyed for centuries. National English Toffee Day celebrates this beloved sweet treat and its cultural significance.",
      modernCelebrations:
        "People celebrate by making or enjoying toffee, sharing recipes, and learning about the history of this traditional confection. Many bakeries and candy shops offer special toffee treats.",
      educationalValue:
        "This day teaches about culinary traditions, the history of confectionery, and cultural food practices. It promotes appreciation for traditional recipes and cooking techniques.",
    },
    colors: {
      primary: "#8B4513",
      secondary: "#FFD700",
      accent: "#FF69B4",
    },
    emojis: ["🍬", "🍯", "🍫", "🍪", "🎂"],
    keywords: ["english toffee", "candy", "dessert", "sweets"],
  },
  {
    date: "01-09",
    name: "National Static Electricity Day",
    country: "USA",
    category: "cultural",
    description: "A day to explore the fascinating world of static electricity",
    article: {
      origins:
        "National Static Electricity Day was created to raise awareness about the science of static electricity and its everyday applications. It encourages people to learn about this fundamental physical phenomenon.",
      modernCelebrations:
        "Schools and science centers hold demonstrations, people share static electricity experiments on social media, and educators use this day to teach about electricity and physics.",
      educationalValue:
        "This day promotes STEM education, scientific curiosity, and understanding of basic physics concepts. It helps people appreciate the science behind everyday phenomena.",
    },
    colors: {
      primary: "#4169E1",
      secondary: "#FFD700",
      accent: "#FF69B4",
    },
    emojis: ["⚡", "🔋", "💡", "🔌", "⚡"],
    keywords: ["static electricity", "science", "physics", "education"],
  },
  {
    date: "01-10",
    name: "National Save the Eagles Day",
    country: "USA",
    category: "cultural",
    description: "A day dedicated to eagle conservation and protection",
    article: {
      origins:
        "National Save the Eagles Day was established to raise awareness about the importance of protecting eagle populations and their habitats. Eagles are important symbols of freedom and strength in many cultures.",
      modernCelebrations:
        "Conservation organizations hold educational events, people learn about eagle habitats, and communities participate in eagle watching and protection activities.",
      educationalValue:
        "This day teaches about wildlife conservation, environmental protection, and the importance of preserving biodiversity. It promotes appreciation for these majestic birds.",
    },
    colors: {
      primary: "#8B4513",
      secondary: "#FFD700",
      accent: "#228B22",
    },
    emojis: ["🦅", "🦅", "🌿", "🏔️", "🦅"],
    keywords: ["eagles", "conservation", "wildlife", "protection"],
  },
  {
    date: "01-11",
    name: "International Thank You Day",
    country: "Global",
    category: "international",
    description: "A day to express gratitude and appreciation",
    article: {
      origins:
        "International Thank You Day was created to promote gratitude and appreciation in our daily lives. It encourages people to express thanks and recognize the positive impact of kindness.",
      modernCelebrations:
        "People send thank you notes, express gratitude on social media, and participate in community service activities. Many organizations hold appreciation events.",
      educationalValue:
        "This day teaches the importance of gratitude, positive communication, and building strong relationships. It promotes emotional intelligence and social skills.",
    },
    colors: {
      primary: "#FF69B4",
      secondary: "#FFD700",
      accent: "#98FB98",
    },
    emojis: ["🙏", "💝", "💌", "💕", "✨"],
    keywords: ["thank you", "gratitude", "appreciation", "kindness"],
  },
  {
    date: "01-12",
    name: "National Hot Tea Day",
    country: "UK",
    category: "cultural",
    description: "A day to celebrate the beloved tradition of tea drinking",
    article: {
      origins:
        "Tea has been a central part of British culture for centuries, with the tradition of afternoon tea becoming a cultural institution. National Hot Tea Day celebrates this beloved beverage and its social significance.",
      modernCelebrations:
        "People enjoy tea ceremonies, visit tea rooms, share tea recipes, and learn about different tea varieties. Many host tea parties and gatherings.",
      educationalValue:
        "This day teaches about cultural traditions, the history of trade, and the social aspects of food and drink. It promotes appreciation for cultural heritage.",
    },
    colors: {
      primary: "#8B4513",
      secondary: "#FFD700",
      accent: "#98FB98",
    },
    emojis: ["☕", "🫖", "🍵", "🍰", "🫖"],
    keywords: ["hot tea", "british culture", "afternoon tea", "tradition"],
  },
  {
    date: "01-13",
    name: "International Skeptics Day",
    country: "Global",
    category: "international",
    description: "A day to promote critical thinking and skepticism",
    article: {
      origins:
        "International Skeptics Day was established to promote critical thinking, scientific skepticism, and evidence-based reasoning. It encourages people to question claims and seek evidence.",
      modernCelebrations:
        "Educational institutions hold critical thinking workshops, people discuss scientific topics, and organizations promote evidence-based decision making.",
      educationalValue:
        "This day teaches critical thinking skills, scientific literacy, and the importance of evidence-based reasoning. It promotes intellectual curiosity and skepticism.",
    },
    colors: {
      primary: "#2F4F4F",
      secondary: "#4169E1",
      accent: "#FFD700",
    },
    emojis: ["🤔", "🔍", "📚", "💭", "🔬"],
    keywords: ["skeptics day", "critical thinking", "science", "reasoning"],
  },
  {
    date: "01-14",
    name: "National Dress Up Your Pet Day",
    country: "USA",
    category: "cultural",
    description: "A fun day to dress up your pets and share photos",
    article: {
      origins:
        "National Dress Up Your Pet Day was created to celebrate the bond between humans and their pets. It encourages people to have fun with their pets and share the joy of pet ownership.",
      modernCelebrations:
        "Pet owners dress up their pets in costumes, share photos on social media, and participate in pet costume contests. Many animal shelters hold adoption events.",
      educationalValue:
        "This day teaches about responsible pet ownership, animal welfare, and the importance of the human-animal bond. It promotes compassion and care for animals.",
    },
    colors: {
      primary: "#FF69B4",
      secondary: "#FFD700",
      accent: "#87CEEB",
    },
    emojis: ["🐕", "🐱", "🎭", "📸", "💝"],
    keywords: ["pet day", "dress up", "pets", "animals"],
  },
  {
    date: "01-15",
    name: "National Hat Day",
    country: "USA",
    category: "cultural",
    description: "A day to celebrate the art and fashion of hat wearing",
    article: {
      origins:
        "National Hat Day celebrates the history and fashion of hats throughout different cultures and time periods. Hats have served both practical and symbolic purposes in human society.",
      modernCelebrations:
        "People wear their favorite hats, learn about hat history, and participate in hat-themed events. Many fashion enthusiasts showcase vintage and modern hat styles.",
      educationalValue:
        "This day teaches about fashion history, cultural traditions, and the evolution of clothing accessories. It promotes appreciation for craftsmanship and design.",
    },
    colors: {
      primary: "#8B4513",
      secondary: "#FFD700",
      accent: "#FF69B4",
    },
    emojis: ["🎩", "👒", "🧢", "🎪", "🎭"],
    keywords: ["hat day", "fashion", "style", "accessories"],
  },
  {
    date: "01-16",
    name: "National Nothing Day",
    country: "USA",
    category: "cultural",
    description: "A day to do nothing and enjoy the simple pleasures of life",
    article: {
      origins:
        "National Nothing Day was created by columnist Harold Pullman Coffin in 1973 to encourage people to take a break from the constant busyness of modern life and simply enjoy doing nothing.",
      modernCelebrations:
        "People take time to relax, meditate, or simply enjoy quiet moments. Many use this day to practice mindfulness and appreciate the value of rest and reflection.",
      educationalValue:
        "This day teaches the importance of rest, mindfulness, and work-life balance. It promotes mental health awareness and the value of taking breaks.",
    },
    colors: {
      primary: "#87CEEB",
      secondary: "#98FB98",
      accent: "#DDA0DD",
    },
    emojis: ["😌", "🧘", "☁️", "🌙", "✨"],
    keywords: ["nothing day", "relaxation", "mindfulness", "rest"],
  },
  {
    date: "01-17",
    name: "International Mentoring Day",
    country: "Global",
    category: "international",
    description: "A day to celebrate the power of mentoring and guidance",
    article: {
      origins:
        "International Mentoring Day was established to recognize the importance of mentoring in personal and professional development. It celebrates the relationships that help people grow and succeed.",
      modernCelebrations:
        "Organizations hold mentoring events, people share mentoring stories, and communities establish new mentoring programs. Many celebrate their mentors and mentees.",
      educationalValue:
        "This day teaches about leadership, personal development, and the importance of giving back to others. It promotes the value of knowledge sharing and community support.",
    },
    colors: {
      primary: "#4169E1",
      secondary: "#FFD700",
      accent: "#98FB98",
    },
    emojis: ["🤝", "📚", "💡", "🌟", "👥"],
    keywords: ["mentoring day", "leadership", "guidance", "development"],
  },
  {
    date: "01-18",
    name: "National Winnie the Pooh Day",
    country: "UK",
    category: "cultural",
    description: "A day to celebrate the beloved bear and his friends",
    article: {
      origins:
        "National Winnie the Pooh Day commemorates the birthday of A.A. Milne, the creator of Winnie the Pooh. The character has brought joy to children and adults worldwide for generations.",
      modernCelebrations:
        "People read Winnie the Pooh stories, watch the films, and celebrate the themes of friendship and imagination. Many schools hold themed activities for children.",
      educationalValue:
        "This day teaches about literature, creativity, and the importance of friendship and imagination. It promotes reading and storytelling for children.",
    },
    colors: {
      primary: "#FFA500",
      secondary: "#FFD700",
      accent: "#98FB98",
    },
    emojis: ["🐻", "🍯", "📚", "🎭", "💛"],
    keywords: ["winnie the pooh", "literature", "children", "friendship"],
  },
  {
    date: "01-19",
    name: "National Popcorn Day",
    country: "USA",
    category: "cultural",
    description: "A day to celebrate the beloved snack of popcorn",
    article: {
      origins:
        "Popcorn has been enjoyed for thousands of years, with evidence of its consumption dating back to ancient civilizations. National Popcorn Day celebrates this versatile and beloved snack.",
      modernCelebrations:
        "People enjoy popcorn in various flavors, attend popcorn festivals, and learn about popcorn history. Many movie theaters offer special popcorn deals.",
      educationalValue:
        "This day teaches about food history, agricultural traditions, and the evolution of snack foods. It promotes appreciation for simple pleasures and food culture.",
    },
    colors: {
      primary: "#FFD700",
      secondary: "#FFA500",
      accent: "#8B4513",
    },
    emojis: ["🍿", "🎬", "🎪", "🍿", "🎭"],
    keywords: ["popcorn day", "snacks", "movies", "food"],
  },
  {
    date: "01-20",
    name: "National Cheese Lover's Day",
    country: "USA",
    category: "cultural",
    description: "A day to celebrate the diverse world of cheese",
    article: {
      origins:
        "Cheese has been a staple food in many cultures for thousands of years, with each region developing unique varieties. National Cheese Lover's Day celebrates this beloved dairy product.",
      modernCelebrations:
        "People try different cheese varieties, attend cheese tastings, and learn about cheese-making traditions. Many restaurants offer special cheese-themed menus.",
      educationalValue:
        "This day teaches about food culture, agricultural traditions, and the diversity of culinary practices around the world. It promotes appreciation for traditional food crafts.",
    },
    colors: {
      primary: "#FFD700",
      secondary: "#FFA500",
      accent: "#8B4513",
    },
    emojis: ["🧀", "🍕", "🍷", "🧀", "🍽️"],
    keywords: ["cheese day", "dairy", "food", "culinary"],
  },
  {
    date: "01-21",
    name: "National Hugging Day",
    country: "USA",
    category: "cultural",
    description: "A day to share hugs and spread warmth and love",
    article: {
      origins:
        "National Hugging Day was created by Reverend Kevin Zaborney in 1986 to encourage people to show affection through hugging. It promotes the positive effects of physical touch and human connection.",
      modernCelebrations:
        "People share hugs with family, friends, and even strangers. Many organizations hold hugging events to promote kindness and human connection.",
      educationalValue:
        "This day teaches about emotional health, human connection, and the importance of physical touch. It promotes empathy and compassion in society.",
    },
    colors: {
      primary: "#FF69B4",
      secondary: "#FFD700",
      accent: "#98FB98",
    },
    emojis: ["🤗", "💕", "💝", "💖", "✨"],
    keywords: ["hugging day", "love", "affection", "kindness"],
  },
  {
    date: "01-22",
    name: "National Answer Your Cat's Questions Day",
    country: "USA",
    category: "cultural",
    description: "A whimsical day to interact with your feline friends",
    article: {
      origins:
        "This humorous holiday was created to encourage people to pay more attention to their cats and engage with them. It promotes the human-animal bond and responsible pet ownership.",
      modernCelebrations:
        "Cat owners spend extra time with their cats, play with them, and share photos of their feline friends on social media. Many animal shelters hold cat adoption events.",
      educationalValue:
        "This day teaches about pet care, animal behavior, and the importance of spending quality time with pets. It promotes responsible pet ownership and animal welfare.",
    },
    colors: {
      primary: "#FFA500",
      secondary: "#FFD700",
      accent: "#FF69B4",
    },
    emojis: ["🐱", "❓", "💭", "🐾", "😸"],
    keywords: ["cat day", "pets", "animals", "companionship"],
  },
  {
    date: "01-23",
    name: "National Handwriting Day",
    country: "USA",
    category: "cultural",
    description: "A day to celebrate the art of handwriting",
    article: {
      origins:
        "National Handwriting Day was established by the Writing Instrument Manufacturers Association to promote the importance of handwriting in education and personal expression.",
      modernCelebrations:
        "Schools hold handwriting contests, people practice calligraphy, and organizations promote the benefits of handwritten communication in the digital age.",
      educationalValue:
        "This day teaches about the importance of handwriting skills, personal expression, and the history of written communication. It promotes literacy and fine motor skills.",
    },
    colors: {
      primary: "#2F4F4F",
      secondary: "#FFD700",
      accent: "#4169E1",
    },
    emojis: ["✍️", "📝", "✒️", "📖", "🎨"],
    keywords: ["handwriting day", "writing", "calligraphy", "literacy"],
  },
  {
    date: "01-24",
    name: "International Day of Education",
    country: "Global",
    category: "international",
    description: "A day to celebrate the power of education",
    article: {
      origins:
        "International Day of Education was proclaimed by the United Nations to celebrate the role of education in peace and development. It recognizes education as a fundamental human right.",
      modernCelebrations:
        "Educational institutions hold special events, communities discuss educational challenges, and organizations promote access to quality education worldwide.",
      educationalValue:
        "This day highlights the importance of education in personal development, social progress, and global peace. It promotes educational equity and lifelong learning.",
    },
    colors: {
      primary: "#4169E1",
      secondary: "#FFD700",
      accent: "#98FB98",
    },
    emojis: ["📚", "🎓", "✏️", "🌍", "💡"],
    keywords: ["education day", "learning", "knowledge", "development"],
  },
  {
    date: "01-25",
    name: "National Opposite Day",
    country: "USA",
    category: "cultural",
    description: "A fun day to do and say the opposite of what you mean",
    article: {
      origins:
        "National Opposite Day is a playful holiday that encourages people to have fun by doing and saying the opposite of what they normally would. It's a day for humor and creativity.",
      modernCelebrations:
        "People playfully reverse their words and actions, schools hold opposite-themed activities, and families enjoy the humor of this lighthearted day.",
      educationalValue:
        "This day teaches about language, humor, and creative thinking. It promotes playfulness and helps people think about perspective and communication.",
    },
    colors: {
      primary: "#FF69B4",
      secondary: "#00CED1",
      accent: "#FFD700",
    },
    emojis: ["🔄", "😄", "🎭", "🤪", "✨"],
    keywords: ["opposite day", "humor", "creativity", "fun"],
  },
  {
    date: "01-26",
    name: "Australia Day",
    country: "Australia",
    category: "national",
    description:
      "National day of Australia celebrating the arrival of the First Fleet",
    article: {
      origins:
        "Australia Day commemorates the arrival of the First Fleet at Sydney Cove in 1788, marking the beginning of European settlement in Australia. It has evolved to celebrate Australian identity and culture.",
      modernCelebrations:
        "Australians celebrate with barbecues, beach activities, citizenship ceremonies, and community events. Many reflect on Australia's history and diverse cultural heritage.",
      educationalValue:
        "This day teaches about Australian history, cultural diversity, and national identity. It promotes understanding of colonial history and indigenous perspectives.",
    },
    colors: {
      primary: "#FF0000",
      secondary: "#0000FF",
      accent: "#FFFFFF",
    },
    emojis: ["🇦🇺", "🦘", "🏖️", "🌊", "🌞"],
    keywords: ["australia day", "national day", "first fleet", "celebration"],
  },
  {
    date: "01-27",
    name: "International Holocaust Remembrance Day",
    country: "Global",
    category: "international",
    description: "A day to remember the victims of the Holocaust",
    article: {
      origins:
        "International Holocaust Remembrance Day was established by the United Nations to commemorate the liberation of Auschwitz-Birkenau and to honor the victims of the Holocaust.",
      modernCelebrations:
        "Memorial services are held worldwide, educational programs teach about the Holocaust, and communities reflect on the importance of tolerance and human rights.",
      educationalValue:
        "This day teaches about history, human rights, and the importance of remembering past atrocities to prevent future ones. It promotes tolerance and understanding.",
    },
    colors: {
      primary: "#2F4F4F",
      secondary: "#FFFFFF",
      accent: "#FFD700",
    },
    emojis: ["🕯️", "🕊️", "🌍", "🤝", "📚"],
    keywords: ["holocaust remembrance", "history", "human rights", "tolerance"],
  },
  {
    date: "01-28",
    name: "National Data Privacy Day",
    country: "Global",
    category: "international",
    description: "A day to raise awareness about data privacy and protection",
    article: {
      origins:
        "National Data Privacy Day was established to raise awareness about the importance of protecting personal information in the digital age. It promotes responsible data practices.",
      modernCelebrations:
        "Organizations hold privacy workshops, people learn about data protection, and communities discuss digital rights and online safety.",
      educationalValue:
        "This day teaches about digital literacy, online safety, and the importance of protecting personal information. It promotes responsible technology use.",
    },
    colors: {
      primary: "#2F4F4F",
      secondary: "#4169E1",
      accent: "#FFD700",
    },
    emojis: ["🔒", "💻", "🛡️", "📱", "🔐"],
    keywords: [
      "data privacy",
      "digital security",
      "online safety",
      "protection",
    ],
  },
  {
    date: "01-29",
    name: "National Puzzle Day",
    country: "USA",
    category: "cultural",
    description: "A day to celebrate the joy of puzzles and brain teasers",
    article: {
      origins:
        "National Puzzle Day celebrates the joy and benefits of solving puzzles. Puzzles have been used for entertainment and education throughout human history.",
      modernCelebrations:
        "People solve various types of puzzles, schools hold puzzle competitions, and families enjoy puzzle games together. Many share puzzle challenges on social media.",
      educationalValue:
        "This day teaches problem-solving skills, critical thinking, and the importance of mental exercise. It promotes cognitive development and family bonding.",
    },
    colors: {
      primary: "#4169E1",
      secondary: "#FFD700",
      accent: "#FF69B4",
    },
    emojis: ["🧩", "🎯", "🧠", "💡", "🎪"],
    keywords: ["puzzle day", "brain games", "problem solving", "logic"],
  },
  {
    date: "01-30",
    name: "National Croissant Day",
    country: "France",
    category: "cultural",
    description: "A day to celebrate the beloved French pastry",
    article: {
      origins:
        "The croissant originated in Austria but became a symbol of French culinary excellence. National Croissant Day celebrates this flaky, buttery pastry and French baking traditions.",
      modernCelebrations:
        "Bakeries offer special croissant varieties, people learn about croissant-making, and communities celebrate French culinary heritage.",
      educationalValue:
        "This day teaches about culinary history, French culture, and the art of pastry making. It promotes appreciation for international cuisine and baking traditions.",
    },
    colors: {
      primary: "#FFD700",
      secondary: "#8B4513",
      accent: "#FFA500",
    },
    emojis: ["🥐", "🍞", "🥖", "☕", "🇫🇷"],
    keywords: ["croissant day", "french pastry", "baking", "culinary"],
  },
  {
    date: "01-31",
    name: "National Backward Day",
    country: "USA",
    category: "cultural",
    description: "A fun day to do things backward and upside down",
    article: {
      origins:
        "National Backward Day was created to encourage people to think differently and have fun by doing things in reverse. It promotes creativity and unconventional thinking.",
      modernCelebrations:
        "People wear clothes backward, write backward, and engage in backward activities. Schools and families enjoy the playful nature of this day.",
      educationalValue:
        "This day teaches about perspective, creativity, and thinking outside the box. It promotes playfulness and helps people see things from different angles.",
    },
    colors: {
      primary: "#FF69B4",
      secondary: "#00CED1",
      accent: "#FFD700",
    },
    emojis: ["🔄", "😄", "🎭", "🤪", "✨"],
    keywords: ["backward day", "creativity", "fun", "perspective"],
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
    date: "02-01",
    name: "National Freedom Day",
    country: "USA",
    category: "national",
    description: "A day to celebrate freedom and the end of slavery",
    article: {
      origins:
        "National Freedom Day commemorates the signing of the 13th Amendment, which abolished slavery in the United States. It was established to celebrate freedom and equality.",
      modernCelebrations:
        "Communities hold educational events, people reflect on civil rights history, and organizations promote equality and justice. Many participate in freedom-themed activities.",
      educationalValue:
        "This day teaches about American history, civil rights, and the ongoing struggle for equality. It promotes understanding of freedom and human rights.",
    },
    colors: {
      primary: "#FF0000",
      secondary: "#0000FF",
      accent: "#FFFFFF",
    },
    emojis: ["🗽", "🕊️", "📜", "🤝", "✨"],
    keywords: ["freedom day", "civil rights", "equality", "history"],
  },
  {
    date: "02-02",
    name: "Groundhog Day",
    country: "USA",
    category: "cultural",
    description: "A traditional holiday where a groundhog predicts the weather",
    article: {
      origins:
        "Groundhog Day has its roots in ancient European weather lore and was brought to America by German immigrants. The tradition involves a groundhog predicting the arrival of spring.",
      modernCelebrations:
        "People gather to watch groundhog predictions, communities hold weather-themed events, and families enjoy the playful tradition of weather forecasting.",
      educationalValue:
        "This day teaches about weather patterns, cultural traditions, and the history of folklore. It promotes appreciation for nature and seasonal changes.",
    },
    colors: {
      primary: "#8B4513",
      secondary: "#228B22",
      accent: "#FFD700",
    },
    emojis: ["🦫", "🌤️", "🌨️", "🌱", "🌞"],
    keywords: ["groundhog day", "weather prediction", "spring", "winter"],
  },
  {
    date: "02-03",
    name: "National Carrot Cake Day",
    country: "USA",
    category: "cultural",
    description: "A day to celebrate the delicious carrot cake",
    article: {
      origins:
        "Carrot cake has medieval origins when carrots were used as sweeteners. National Carrot Cake Day celebrates this beloved dessert and its unique combination of vegetables and sweetness.",
      modernCelebrations:
        "Bakeries offer special carrot cake varieties, people bake carrot cakes at home, and communities share recipes and baking tips.",
      educationalValue:
        "This day teaches about culinary history, creative cooking, and the evolution of dessert recipes. It promotes appreciation for traditional baking methods.",
    },
    colors: {
      primary: "#FFA500",
      secondary: "#FFD700",
      accent: "#8B4513",
    },
    emojis: ["🥕", "🍰", "🎂", "🥕", "🍰"],
    keywords: ["carrot cake day", "dessert", "baking", "carrots"],
  },
  {
    date: "02-04",
    name: "World Cancer Day",
    country: "Global",
    category: "international",
    description:
      "A day to raise awareness about cancer prevention and treatment",
    article: {
      origins:
        "World Cancer Day was established by the Union for International Cancer Control to raise global awareness about cancer and encourage its prevention, detection, and treatment.",
      modernCelebrations:
        "Organizations hold awareness campaigns, people wear cancer awareness ribbons, and communities support cancer research and patient care.",
      educationalValue:
        "This day teaches about health awareness, medical research, and the importance of early detection. It promotes public health education and support for cancer patients.",
    },
    colors: {
      primary: "#FF69B4",
      secondary: "#FFFFFF",
      accent: "#4169E1",
    },
    emojis: ["🎗️", "💝", "🏥", "🔬", "🤝"],
    keywords: ["cancer day", "health", "awareness", "research"],
  },
  {
    date: "02-05",
    name: "National Weatherperson's Day",
    country: "USA",
    category: "cultural",
    description: "A day to honor weather forecasters and meteorologists",
    article: {
      origins:
        "National Weatherperson's Day commemorates the birthday of John Jeffries, one of America's first weather observers. It recognizes the important work of weather professionals.",
      modernCelebrations:
        "Meteorologists share weather knowledge, schools hold weather education programs, and communities learn about weather science and forecasting.",
      educationalValue:
        "This day teaches about meteorology, weather science, and the importance of accurate weather forecasting. It promotes scientific literacy and environmental awareness.",
    },
    colors: {
      primary: "#87CEEB",
      secondary: "#4169E1",
      accent: "#FFD700",
    },
    emojis: ["🌤️", "🌦️", "🌧️", "🌪️", "🌈"],
    keywords: ["weather day", "meteorology", "forecasting", "science"],
  },
  {
    date: "02-06",
    name: "International Day of Zero Tolerance for Female Genital Mutilation",
    country: "Global",
    category: "international",
    description:
      "A day to raise awareness about ending female genital mutilation",
    article: {
      origins:
        "This day was established by the United Nations to raise awareness about the harmful practice of female genital mutilation and to promote its elimination worldwide.",
      modernCelebrations:
        "Organizations hold educational campaigns, communities discuss women's rights, and activists work to end harmful traditional practices.",
      educationalValue:
        "This day teaches about women's rights, human rights, and the importance of ending harmful traditional practices. It promotes gender equality and health education.",
    },
    colors: {
      primary: "#FF69B4",
      secondary: "#FFFFFF",
      accent: "#4169E1",
    },
    emojis: ["🌍", "🤝", "💪", "📚", "✨"],
    keywords: ["zero tolerance", "women's rights", "health", "equality"],
  },
  {
    date: "02-07",
    name: "National Send a Card to a Friend Day",
    country: "USA",
    category: "cultural",
    description: "A day to reach out to friends with a thoughtful card",
    article: {
      origins:
        "National Send a Card to a Friend Day was created to encourage people to maintain friendships through thoughtful communication. It promotes the value of personal connections.",
      modernCelebrations:
        "People send cards to friends, create handmade cards, and use social media to reach out to friends they haven't contacted recently.",
      educationalValue:
        "This day teaches about friendship, communication, and the importance of maintaining relationships. It promotes social skills and emotional intelligence.",
    },
    colors: {
      primary: "#FF69B4",
      secondary: "#FFD700",
      accent: "#98FB98",
    },
    emojis: ["💌", "💝", "💕", "📮", "✨"],
    keywords: ["card day", "friendship", "communication", "kindness"],
  },
  {
    date: "02-08",
    name: "National Boy Scouts Day",
    country: "USA",
    category: "cultural",
    description: "A day to celebrate the Boy Scouts of America",
    article: {
      origins:
        "National Boy Scouts Day commemorates the founding of the Boy Scouts of America in 1910. The organization has helped millions of young people develop character and leadership skills.",
      modernCelebrations:
        "Scout troops hold special events, communities recognize scout contributions, and people learn about scouting values and achievements.",
      educationalValue:
        "This day teaches about leadership, character development, and community service. It promotes values like honesty, kindness, and preparedness.",
    },
    colors: {
      primary: "#228B22",
      secondary: "#FFD700",
      accent: "#8B4513",
    },
    emojis: ["🏕️", "🔥", "🏃", "🎖️", "🤝"],
    keywords: ["boy scouts", "leadership", "character", "service"],
  },
  {
    date: "02-09",
    name: "National Pizza Day",
    country: "USA",
    category: "cultural",
    description: "A day to celebrate the beloved Italian dish",
    article: {
      origins:
        "Pizza originated in Naples, Italy, and has become one of the world's most popular foods. National Pizza Day celebrates this versatile and beloved dish.",
      modernCelebrations:
        "Pizzerias offer special deals, people make homemade pizza, and communities celebrate the diversity of pizza styles and toppings.",
      educationalValue:
        "This day teaches about Italian culture, culinary traditions, and the globalization of food. It promotes appreciation for international cuisine.",
    },
    colors: {
      primary: "#FF0000",
      secondary: "#FFD700",
      accent: "#228B22",
    },
    emojis: ["🍕", "🧀", "🍅", "🇮🇹", "🍕"],
    keywords: ["pizza day", "italian food", "cuisine", "dining"],
  },
  {
    date: "02-10",
    name: "National Umbrella Day",
    country: "USA",
    category: "cultural",
    description: "A day to celebrate the practical and fashionable umbrella",
    article: {
      origins:
        "Umbrellas have been used for thousands of years, originally for sun protection. National Umbrella Day celebrates this practical invention and its cultural significance.",
      modernCelebrations:
        "People use decorative umbrellas, learn about umbrella history, and appreciate the protection umbrellas provide from rain and sun.",
      educationalValue:
        "This day teaches about invention history, practical design, and cultural adaptations. It promotes appreciation for everyday objects and their evolution.",
    },
    colors: {
      primary: "#87CEEB",
      secondary: "#4169E1",
      accent: "#FFD700",
    },
    emojis: ["☔", "🌂", "🌧️", "☀️", "🎭"],
    keywords: ["umbrella day", "rain", "protection", "fashion"],
  },
  {
    date: "02-11",
    name: "International Day of Women and Girls in Science",
    country: "Global",
    category: "international",
    description: "A day to promote women's participation in science",
    article: {
      origins:
        "This day was established by the United Nations to recognize the critical role women and girls play in science and technology, and to promote full and equal access to science education.",
      modernCelebrations:
        "Schools hold science workshops for girls, organizations highlight women scientists, and communities promote STEM education for women and girls.",
      educationalValue:
        "This day teaches about gender equality in science, the importance of diversity in STEM fields, and encourages girls to pursue scientific careers.",
    },
    colors: {
      primary: "#FF69B4",
      secondary: "#4169E1",
      accent: "#FFD700",
    },
    emojis: ["👩‍🔬", "🔬", "🧪", "💡", "🚀"],
    keywords: ["women in science", "STEM", "gender equality", "education"],
  },
  {
    date: "02-12",
    name: "Darwin Day",
    country: "Global",
    category: "international",
    description: "A day to celebrate Charles Darwin and science",
    article: {
      origins:
        "Darwin Day commemorates the birthday of Charles Darwin and celebrates the importance of science and scientific thinking. It promotes understanding of evolution and scientific inquiry.",
      modernCelebrations:
        "Educational institutions hold science events, people learn about evolution, and communities celebrate scientific discovery and critical thinking.",
      educationalValue:
        "This day teaches about scientific method, evolution, and the importance of evidence-based thinking. It promotes scientific literacy and curiosity.",
    },
    colors: {
      primary: "#228B22",
      secondary: "#4169E1",
      accent: "#FFD700",
    },
    emojis: ["🧬", "🔬", "📚", "🌿", "🦕"],
    keywords: ["darwin day", "evolution", "science", "biology"],
  },
  {
    date: "02-13",
    name: "World Radio Day",
    country: "Global",
    category: "international",
    description: "A day to celebrate radio as a medium of communication",
    article: {
      origins:
        "World Radio Day was proclaimed by UNESCO to celebrate radio as a medium of information, entertainment, and education. It recognizes radio's role in promoting freedom of expression.",
      modernCelebrations:
        "Radio stations hold special programs, people learn about radio history, and communities celebrate the power of radio communication.",
      educationalValue:
        "This day teaches about media history, communication technology, and the importance of free expression. It promotes media literacy and understanding.",
    },
    colors: {
      primary: "#4169E1",
      secondary: "#FFD700",
      accent: "#FF69B4",
    },
    emojis: ["📻", "🎙️", "🎵", "📡", "🌍"],
    keywords: ["radio day", "communication", "media", "broadcasting"],
  },
  {
    date: "02-14",
    name: "Valentine's Day",
    country: "Global",
    category: "cultural",
    description: "A day to celebrate love and affection",
    article: {
      origins:
        "Valentine's Day has both Christian and Roman origins, commemorating Saint Valentine and celebrating romantic love. It has evolved into a global celebration of love and affection.",
      modernCelebrations:
        "People exchange cards, gifts, and flowers with loved ones. Restaurants offer special menus, and communities celebrate love in various forms.",
      educationalValue:
        "This day teaches about cultural traditions, expressions of love, and the importance of relationships. It promotes emotional intelligence and social connections.",
    },
    colors: {
      primary: "#FF69B4",
      secondary: "#FF1493",
      accent: "#FFD700",
    },
    emojis: ["💕", "💖", "💝", "🌹", "💌"],
    keywords: ["valentine", "love", "romance", "hearts"],
  },
  {
    date: "02-15",
    name: "National Gumdrop Day",
    country: "USA",
    category: "cultural",
    description: "A day to celebrate the colorful and chewy gumdrop candy",
    article: {
      origins:
        "Gumdrops have been enjoyed for over a century, with their colorful appearance and chewy texture making them a favorite candy. National Gumdrop Day celebrates this classic confection.",
      modernCelebrations:
        "People enjoy gumdrops, learn about candy making, and share gumdrop recipes. Many bakeries and candy shops offer special gumdrop varieties.",
      educationalValue:
        "This day teaches about candy history, food manufacturing, and the evolution of confectionery. It promotes appreciation for traditional candy making.",
    },
    colors: {
      primary: "#FF69B4",
      secondary: "#FFD700",
      accent: "#00CED1",
    },
    emojis: ["🍬", "🎨", "🍭", "🍬", "🎪"],
    keywords: ["gumdrop day", "candy", "sweets", "confectionery"],
  },
  {
    date: "02-16",
    name: "National Almond Day",
    country: "USA",
    category: "cultural",
    description: "A day to celebrate the nutritious and versatile almond",
    article: {
      origins:
        "Almonds have been cultivated for thousands of years and are one of the world's most popular nuts. National Almond Day celebrates their nutritional value and culinary versatility.",
      modernCelebrations:
        "People enjoy almonds in various forms, learn about almond farming, and discover almond-based recipes. Many health organizations promote almond benefits.",
      educationalValue:
        "This day teaches about nutrition, agriculture, and healthy eating habits. It promotes understanding of food sources and dietary choices.",
    },
    colors: {
      primary: "#8B4513",
      secondary: "#FFD700",
      accent: "#FFA500",
    },
    emojis: ["🥜", "🌰", "🥛", "🍪", "🥜"],
    keywords: ["almond day", "nuts", "nutrition", "health"],
  },
  {
    date: "02-17",
    name: "National Random Acts of Kindness Day",
    country: "USA",
    category: "cultural",
    description: "A day to perform random acts of kindness",
    article: {
      origins:
        "National Random Acts of Kindness Day was created to encourage people to spread kindness and make the world a better place through simple, thoughtful actions.",
      modernCelebrations:
        "People perform kind acts for strangers, communities organize kindness events, and social media shares stories of kindness and generosity.",
      educationalValue:
        "This day teaches about empathy, compassion, and the positive impact of kindness. It promotes social responsibility and community building.",
    },
    colors: {
      primary: "#FF69B4",
      secondary: "#98FB98",
      accent: "#FFD700",
    },
    emojis: ["💝", "🤝", "💕", "✨", "💖"],
    keywords: ["kindness day", "compassion", "generosity", "community"],
  },
  {
    date: "02-18",
    name: "National Battery Day",
    country: "USA",
    category: "cultural",
    description: "A day to celebrate the invention and importance of batteries",
    article: {
      origins:
        "National Battery Day commemorates the birthday of Alessandro Volta, who invented the first battery. It celebrates the importance of batteries in modern technology.",
      modernCelebrations:
        "People learn about battery technology, schools hold science demonstrations, and communities discuss battery recycling and environmental impact.",
      educationalValue:
        "This day teaches about electricity, technology history, and environmental responsibility. It promotes scientific literacy and sustainability awareness.",
    },
    colors: {
      primary: "#4169E1",
      secondary: "#FFD700",
      accent: "#00CED1",
    },
    emojis: ["🔋", "⚡", "💡", "🔌", "🔋"],
    keywords: ["battery day", "electricity", "technology", "science"],
  },
  {
    date: "02-19",
    name: "National Chocolate Mint Day",
    country: "USA",
    category: "cultural",
    description:
      "A day to celebrate the refreshing combination of chocolate and mint",
    article: {
      origins:
        "The combination of chocolate and mint has been enjoyed for centuries, with its refreshing taste and smooth texture. National Chocolate Mint Day celebrates this beloved flavor pairing.",
      modernCelebrations:
        "People enjoy chocolate mint treats, bakeries offer special desserts, and communities share chocolate mint recipes and traditions.",
      educationalValue:
        "This day teaches about flavor combinations, culinary creativity, and the history of confectionery. It promotes appreciation for food pairing and taste exploration.",
    },
    colors: {
      primary: "#228B22",
      secondary: "#8B4513",
      accent: "#98FB98",
    },
    emojis: ["🍫", "🌿", "🍪", "🍬", "🍫"],
    keywords: ["chocolate mint day", "dessert", "flavors", "candy"],
  },
  {
    date: "02-20",
    name: "World Day of Social Justice",
    country: "Global",
    category: "international",
    description: "A day to promote social justice and equality",
    article: {
      origins:
        "World Day of Social Justice was established by the United Nations to promote efforts to tackle issues such as poverty, exclusion, and unemployment. It recognizes the need for social justice.",
      modernCelebrations:
        "Organizations hold events promoting social justice, communities discuss equality issues, and people learn about social justice movements and advocacy.",
      educationalValue:
        "This day teaches about human rights, equality, and social responsibility. It promotes understanding of social issues and encourages civic engagement.",
    },
    colors: {
      primary: "#4169E1",
      secondary: "#FFD700",
      accent: "#98FB98",
    },
    emojis: ["🤝", "⚖️", "🌍", "💪", "📚"],
    keywords: ["social justice", "equality", "human rights", "advocacy"],
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
