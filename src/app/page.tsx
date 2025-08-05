"use client";

import { SEOHead } from "@/components/seo/SEOHead";
import { seoConfig } from "@/lib/seo/seoConfig";
import { getTodayHolidays } from "@/lib/game/holidayThemes";
import { HolidayCalendar } from "@/components/ui/calendar";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [todayHolidays, setTodayHolidays] = useState(getTodayHolidays());
  const [currentDate, setCurrentDate] = useState(new Date());

  // 每天更新节日数据
  useEffect(() => {
    const updateHolidays = () => {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      // 如果日期发生变化，更新节日数据
      if (currentDate.getTime() !== today.getTime()) {
        setCurrentDate(today);
        setTodayHolidays(getTodayHolidays());
      }
    };

    // 立即检查一次
    updateHolidays();

    // 设置定时器，每小时检查一次
    const interval = setInterval(updateHolidays, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [currentDate]);

  return (
    <>
      <SEOHead {...seoConfig.home} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">
              <span className="text-red-500">🎮 20</span>
              <span className="text-teal-500">48</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The most addictive puzzle game with daily holiday themes!
              Challenge your brain, merge tiles, and reach 2048. Play for FREE -
              no download required!
            </p>
            <div className="mt-6">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <span className="mr-2">✅</span>
                Free to Play • No Download • No Registration
              </div>
            </div>
          </header>

          {/* 今日节日提示 */}
          {todayHolidays.length > 0 && (
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg shadow-md p-6 text-center mb-8 max-w-6xl mx-auto border border-orange-200">
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                🎉 Today&apos;s Special Holidays Available!
              </h2>
              <p className="text-orange-700 mb-4">
                Check out today&apos;s special holiday games in the navigation
                bar above!
              </p>
              <div className="flex justify-center gap-2">
                {todayHolidays.slice(0, 3).map((holiday) => (
                  <Link
                    key={holiday.name}
                    href={`/holiday/${holiday.date}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-sm font-medium text-orange-700 border border-orange-200 hover:bg-orange-50 hover:border-orange-300 transition-colors"
                  >
                    <span className="text-lg">{holiday.emojis[0]}</span>
                    {holiday.name}
                  </Link>
                ))}
                {todayHolidays.length > 3 && (
                  <Link
                    href={`/holiday/${todayHolidays[0].date}`}
                    className="inline-flex items-center px-3 py-1 bg-white rounded-full text-sm font-medium text-orange-700 border border-orange-200 hover:bg-orange-50 hover:border-orange-300 transition-colors"
                  >
                    +{todayHolidays.length - 3} more
                  </Link>
                )}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/game/cupcakes" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🧁</div>
                <h2 className="text-2xl font-bold mb-2">Cupcakes</h2>
                <p className="text-gray-600 mb-2">
                  The most delicious version of 2048
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  ✨ New Feature: Personalized Color Themes
                </div>
              </div>
            </Link>

            <Link href="/game/christmas" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎄</div>
                <h2 className="text-2xl font-bold mb-2">Christmas</h2>
                <p className="text-gray-600">Holiday-themed puzzle fun</p>
              </div>
            </Link>

            <Link href="/game/halloween" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎃</div>
                <h2 className="text-2xl font-bold mb-2">Halloween</h2>
                <p className="text-gray-600">Spooky puzzle adventure</p>
              </div>
            </Link>

            <Link href="/unblocked" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🌐</div>
                <h2 className="text-2xl font-bold mb-2">Unblocked</h2>
                <p className="text-gray-600">Play anywhere, anytime</p>
              </div>
            </Link>

            <Link href="/monkey-type" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🐒</div>
                <h2 className="text-2xl font-bold mb-2">Monkey Type</h2>
                <p className="text-gray-600">Typing speed challenge</p>
              </div>
            </Link>

            <Link href="/roman-numerals" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏛️</div>
                <h2 className="text-2xl font-bold mb-2">Roman Numerals</h2>
                <p className="text-gray-600">Ancient number learning</p>
              </div>
            </Link>
          </div>

          {/* 节日日历 */}
          <HolidayCalendar />

          {/* New Feature Introduction */}
          <div className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg shadow-md p-8 max-w-6xl mx-auto border border-pink-200">
            <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              🎨 New Feature: Personalized Color Themes
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Choose Your Favorite Color
                </h3>
                <p className="text-gray-700 mb-4">
                  Now you can choose your favorite color theme for the game! The
                  game area and icon introduction area will use your selected
                  color, creating a unique visual experience through different
                  transparencies and shades.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24 beautiful colors available
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Game area changes color in real-time
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Icon background intelligent gradient
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Smooth transition animation effects
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/game/cupcakes">
                    <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Experience Now 🎨
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-6 gap-2">
                  {[
                    "#FF6B6B",
                    "#4ECDC4",
                    "#45B7D1",
                    "#96CEB4",
                    "#FFEAA7",
                    "#DDA0DD",
                    "#FFB347",
                    "#98D8C8",
                    "#F7DC6F",
                    "#BB8FCE",
                    "#85C1E9",
                    "#F8C471",
                  ].map((color, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full shadow-md"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 节日知识介绍 */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">
              🌍 Holiday Knowledge
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🎭</div>
                <h3 className="text-lg font-semibold mb-2">
                  Cultural Heritage
                </h3>
                <p className="text-gray-600">
                  Discover the rich cultural traditions and historical
                  significance behind each holiday celebration
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📚</div>
                <h3 className="text-lg font-semibold mb-2">
                  Educational Value
                </h3>
                <p className="text-gray-600">
                  Learn about different countries, religions, and cultural
                  practices through interactive gameplay
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🌟</div>
                <h3 className="text-lg font-semibold mb-2">Global Unity</h3>
                <p className="text-gray-600">
                  Celebrate diversity and promote understanding of international
                  traditions and customs
                </p>
              </div>
            </div>
          </div>

          {/* 学习资源链接 */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">
              📚 Learn & Improve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/how-to-play" className="group">
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">📖</div>
                  <h3 className="text-lg font-semibold mb-2">How to Play</h3>
                  <p className="text-gray-600 text-sm">
                    Complete game tutorial
                  </p>
                </div>
              </Link>
              <Link href="/strategy" className="group">
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="text-lg font-semibold mb-2">Strategy Guide</h3>
                  <p className="text-gray-600 text-sm">Master the game</p>
                </div>
              </Link>
              <Link href="/tips-and-tricks" className="group">
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">💡</div>
                  <h3 className="text-lg font-semibold mb-2">Tips & Tricks</h3>
                  <p className="text-gray-600 text-sm">Advanced techniques</p>
                </div>
              </Link>
              <Link href="/faq" className="group">
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">❓</div>
                  <h3 className="text-lg font-semibold mb-2">FAQ</h3>
                  <p className="text-gray-600 text-sm">Get help & answers</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/game/cupcakes"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              🧁 Start Playing Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
