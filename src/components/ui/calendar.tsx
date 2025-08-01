"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { globalHolidays } from "@/lib/game/holidayThemes";
import Link from "next/link";

interface CalendarProps {
  currentMonth?: number; // 0-11
}

export const HolidayCalendar: React.FC<CalendarProps> = ({
  currentMonth = new Date().getMonth(),
}) => {
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const currentYear = new Date().getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getHolidaysForMonth = (month: number) => {
    const monthStr = String(month + 1).padStart(2, "0");
    return globalHolidays.filter((holiday) =>
      holiday.date.startsWith(monthStr)
    );
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedMonth, currentYear);
    const firstDay = getFirstDayOfMonth(selectedMonth, currentYear);
    const holidays = getHolidaysForMonth(selectedMonth);

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2 text-gray-300"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${String(selectedMonth + 1).padStart(
        2,
        "0"
      )}-${String(day).padStart(2, "0")}`;
      const dayHolidays = holidays.filter((h) => h.date === dateString);
      const isToday =
        new Date().getMonth() === selectedMonth && new Date().getDate() === day;

      days.push(
        <div
          key={day}
          className={`p-2 border border-gray-200 min-h-[80px] relative ${
            isToday ? "bg-blue-50 border-blue-300" : ""
          }`}
        >
          <div className="text-sm font-semibold mb-1">{day}</div>
          {dayHolidays.map((holiday, index) => (
            <Link
              key={holiday.name}
              href={`/holiday/${dateString}`}
              className="block text-xs p-1 mb-1 bg-purple-100 text-purple-800 rounded hover:bg-purple-200 transition-colors"
            >
              <div className="flex items-center gap-1">
                <span>{holiday.emojis[0]}</span>
                <span className="truncate">{holiday.name}</span>
              </div>
            </Link>
          ))}
        </div>
      );
    }

    return days;
  };

  return (
    <Card className="mt-8 max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Holiday Calendar</CardTitle>
        <div className="flex justify-between items-center">
          <button
            onClick={() =>
              setSelectedMonth((prev) => (prev === 0 ? 11 : prev - 1))
            }
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
          >
            ←
          </button>
          <h3 className="text-lg font-semibold">
            {months[selectedMonth]} {currentYear}
          </h3>
          <button
            onClick={() =>
              setSelectedMonth((prev) => (prev === 11 ? 0 : prev + 1))
            }
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
          >
            →
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1">
          {/* Day headers */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="p-2 text-center font-semibold text-gray-600 text-sm"
            >
              {day}
            </div>
          ))}
          {/* Calendar days */}
          {renderCalendar()}
        </div>
      </CardContent>
    </Card>
  );
};
