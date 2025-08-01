// 重新导出新的模块化节日数据
// 这个文件现在作为向后兼容的接口，实际数据已经迁移到 src/lib/game/holidays/ 目录

export * from "./holidays";

// 为了向后兼容，保留原有的接口名称
export { globalHolidays as globalHolidays } from "./holidays";
export type { Holiday } from "./holidays";
export {
  getHolidaysForDate,
  getTodayHolidays,
  getHolidayByTheme,
  generateHolidayTheme,
  getAllHolidayDates,
  getHolidayByDate,
} from "./holidays";
