import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { GameLayoutWrapper } from "@/components/layout/GameLayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Playing2048.com - Free 2048 Game",
  description:
    "Play 2048 online for free! Multiple themes including Cupcakes, Christmas, and Halloween. No download required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <GameLayoutWrapper>
          <div className="pt-16">{children}</div>
          <Footer />
        </GameLayoutWrapper>
        <CookieConsent />
        <ScrollToTop />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-24SXVL7J95"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());

          // 默认禁用跟踪，等待用户同意
          gtag("consent", "default", {
            analytics_storage: "denied",
            ad_storage: "denied",
          });
          
          gtag("config", "G-24SXVL7J95");
          `,
          }}
        />
      </body>
    </html>
  );
}
