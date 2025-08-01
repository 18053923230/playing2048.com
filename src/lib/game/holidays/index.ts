import { Holiday } from "./types";

// 导入各月份节日数据
import { januaryHolidays } from "./january";
import { februaryHolidays } from "./february";
import { marchHolidays } from "./march";
import { aprilHolidays } from "./april";
import { mayHolidays } from "./may";
import { juneHolidays } from "./june";
import { julyHolidays } from "./july";
import { augustHolidays } from "./august";
import { septemberHolidays } from "./september";
import { octoberHolidays } from "./october";
import { novemberHolidays } from "./november";
import { decemberHolidays } from "./december";

// 导入主题节日
import { themeHolidays } from "./themes";

// 合并所有节日数据
export const globalHolidays: Holiday[] = [
  ...themeHolidays,
  ...januaryHolidays,
  ...februaryHolidays,
  ...marchHolidays,
  ...aprilHolidays,
  ...mayHolidays,
  ...juneHolidays,
  ...julyHolidays,
  ...augustHolidays,
  ...septemberHolidays,
  ...octoberHolidays,
  ...novemberHolidays,
  ...decemberHolidays,
];

// 重新导出所有函数
export {
  getHolidaysForDate,
  getTodayHolidays,
  getHolidayByTheme,
  generateHolidayTheme,
  getAllHolidayDates,
  getHolidayByDate,
} from "./utils";

// 重新导出类型
export type { Holiday } from "./types";
