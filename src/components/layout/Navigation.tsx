"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getTodayHolidays } from "@/lib/game/holidayThemes";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHolidayDropdownOpen, setIsHolidayDropdownOpen] = useState(false);
  const todayHolidays = getTodayHolidays();
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const todayDateString = `${month}-${day}`;

  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/game/cupcakes", label: "Cupcakes", icon: "🧁" },
    { href: "/game/christmas", label: "Christmas", icon: "🎄" },
    { href: "/game/halloween", label: "Halloween", icon: "🎃" },
    { href: "/strategy", label: "Strategy", icon: "📚" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isHolidayDropdownOpen) {
        setIsHolidayDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isHolidayDropdownOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/90 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-red-500 to-teal-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            🎮 2048
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:shadow-sm"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            ))}

            {/* 今日节日下拉菜单 */}
            {todayHolidays.length > 0 && (
              <div className="relative">
                <button
                  onClick={() =>
                    setIsHolidayDropdownOpen(!isHolidayDropdownOpen)
                  }
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:shadow-lg transition-all duration-200"
                >
                  <span className="text-lg">🎉</span>
                  Today&apos;s Holiday
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isHolidayDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isHolidayDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-700">
                        Today&apos;s Special Holidays
                      </h3>
                    </div>
                    {todayHolidays.map((holiday) => (
                      <Link
                        key={holiday.name}
                        href={`/holiday/${todayDateString}`}
                        onClick={() => setIsHolidayDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-2xl">{holiday.emojis[0]}</span>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            {holiday.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {holiday.country} • {holiday.category}
                          </div>
                        </div>
                        <span className="text-blue-500 text-sm">Play →</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </Link>
              ))}

              {/* 移动端今日节日 */}
              {todayHolidays.length > 0 && (
                <div className="pt-2 border-t border-gray-200">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Today&apos;s Holiday
                  </div>
                  {todayHolidays.map((holiday) => (
                    <Link
                      key={holiday.name}
                      href={`/holiday/${todayDateString}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:shadow-md transition-all duration-200"
                    >
                      <span className="text-lg">{holiday.emojis[0]}</span>
                      <span className="flex-1">{holiday.name}</span>
                      <span className="text-xs">Play</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 点击外部关闭下拉菜单 */}
      {isHolidayDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsHolidayDropdownOpen(false)}
        />
      )}
    </nav>
  );
};
