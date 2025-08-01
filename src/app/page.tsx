import { SEOHead } from "@/components/seo/SEOHead";
import { seoConfig } from "@/lib/seo/seoConfig";
import { getTodayHolidays } from "@/lib/game/holidayThemes";
import { HolidayCalendar } from "@/components/ui/calendar";
import Link from "next/link";

export default function HomePage() {
  const todayHolidays = getTodayHolidays();
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const todayDateString = `${month}-${day}`;

  return (
    <>
      <SEOHead {...seoConfig.home} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">
              <span className="text-red-500">20</span>
              <span className="text-teal-500">48</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join numbers and get to the winning tile! Customize your base
              number and difficulty for endless fun.
            </p>
          </header>

          {/* 今日节日 */}
          {todayHolidays.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6 text-center mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Today&apos;s Special Holidays! 🎉
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {todayHolidays.map((holiday) => (
                  <Link
                    key={holiday.name}
                    href={`/holiday/${todayDateString}`}
                    className="block bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-colors"
                  >
                    Play {holiday.name} {holiday.emojis[0] || ""}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/game/cupcakes" className="group">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🧁</div>
                <h2 className="text-2xl font-bold mb-2">Cupcakes</h2>
                <p className="text-gray-600">
                  The most delicious version of 2048
                </p>
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
          </div>

          {/* 节日日历 */}
          <HolidayCalendar />

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

          <div className="text-center mt-12">
            <Link
              href="/strategy"
              className="inline-block bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Learn How to Play
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
