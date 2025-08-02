"use client";

import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // 检查是否已经同意过
    const hasConsented = localStorage.getItem("cookie-consent");
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);

    // 启用Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowConsent(false);

    // 禁用Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    }
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🍪</div>
              <div>
                <h3 className="font-semibold mb-2">We use cookies</h3>
                <p className="text-sm text-gray-300">
                  We use cookies and similar technologies to improve your
                  experience, analyze site traffic, and personalize content. By
                  clicking "Accept", you consent to our use of cookies. You can
                  learn more in our{" "}
                  <a href="/cookies" className="text-blue-400 hover:underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm border border-gray-600 rounded hover:bg-gray-800 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 text-sm bg-blue-600 rounded hover:bg-blue-700 transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={() => setShowConsent(false)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
