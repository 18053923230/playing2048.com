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
];
