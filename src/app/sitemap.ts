import { MetadataRoute } from "next";
import { globalHolidays } from "@/lib/game/holidayThemes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://playing2048.com";

  // 静态页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/game/cupcakes`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/game/christmas`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/game/halloween`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/strategy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // 动态生成节日页面
  const holidayPages = globalHolidays.map((holiday) => ({
    url: `${baseUrl}/game/holiday-${holiday.date}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...holidayPages];
}
