import { SEOHead } from "@/components/seo/SEOHead";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <>
      <SEOHead
        title="Cookie Policy - Playing2048.com"
        description="Learn about how we use cookies and similar technologies on Playing2048.com. Manage your cookie preferences and understand your choices."
        keywords="cookie policy, cookies, gdpr, data protection, 2048 game cookies"
        canonical="https://playing2048.com/cookies"
      />

      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
              <p className="text-xl text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </header>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="prose max-w-none">
                <h2>What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your device
                  when you visit a website. They help websites remember
                  information about your visit, such as your preferred language
                  and other settings, which can make your next visit easier and
                  the site more useful to you.
                </p>

                <h2>How We Use Cookies</h2>
                <p>We use cookies for several purposes:</p>
                <ul>
                  <li>
                    <strong>Essential Cookies:</strong> Required for the website
                    to function properly
                  </li>
                  <li>
                    <strong>Performance Cookies:</strong> Help us understand how
                    visitors interact with our website
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> Remember your
                    preferences and settings
                  </li>
                  <li>
                    <strong>Advertising Cookies:</strong> Used to display
                    relevant advertisements
                  </li>
                </ul>

                <h2>Types of Cookies We Use</h2>

                <h3>1. Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function and
                  cannot be switched off:
                </p>
                <ul>
                  <li>Game progress and settings storage</li>
                  <li>User session management</li>
                  <li>Security and authentication</li>
                </ul>

                <h3>2. Analytics Cookies</h3>
                <p>
                  We use Google Analytics to understand how visitors use our
                  website:
                </p>
                <ul>
                  <li>Page views and time spent on site</li>
                  <li>Traffic sources and user behavior</li>
                  <li>Device and browser information</li>
                  <li>Performance monitoring</li>
                </ul>

                <h3>3. Advertising Cookies</h3>
                <p>
                  Google AdSense may use cookies to display relevant
                  advertisements:
                </p>
                <ul>
                  <li>Personalized ad content</li>
                  <li>Ad performance measurement</li>
                  <li>Frequency capping</li>
                  <li>Cross-site tracking for ad relevance</li>
                </ul>

                <h3>4. Functional Cookies</h3>
                <p>These cookies enhance your experience:</p>
                <ul>
                  <li>Language preferences</li>
                  <li>Theme and color settings</li>
                  <li>Game difficulty preferences</li>
                  <li>Cookie consent status</li>
                </ul>

                <h2>Third-Party Cookies</h2>
                <p>We work with third-party services that may set cookies:</p>

                <h3>Google Analytics</h3>
                <p>
                  We use Google Analytics to analyze website traffic. Google
                  Analytics uses cookies to collect information about your use
                  of our website, including your IP address. This information is
                  transmitted to and stored by Google on servers in the United
                  States.
                </p>

                <h3>Google AdSense</h3>
                <p>
                  Google AdSense may display advertisements on our website.
                  AdSense uses cookies to serve ads based on your visits to our
                  site and other sites on the internet. You can opt out of
                  personalized advertising by visiting{" "}
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Google Ads Settings
                  </a>
                  .
                </p>

                <h2>Managing Your Cookie Preferences</h2>
                <p>You have several options for managing cookies:</p>

                <h3>Browser Settings</h3>
                <p>
                  Most web browsers allow you to control cookies through their
                  settings preferences. You can usually find these settings in
                  the &quot;Options&quot; or &quot;Preferences&quot; menu of
                  your browser.
                </p>

                <h3>Cookie Consent</h3>
                <p>
                  When you first visit our website, you&apos;ll see a cookie
                  consent banner. You can:
                </p>
                <ul>
                  <li>Accept all cookies</li>
                  <li>Decline non-essential cookies</li>
                  <li>Learn more about our cookie policy</li>
                </ul>

                <h3>Opt-Out Options</h3>
                <p>You can opt out of certain types of cookies:</p>
                <ul>
                  <li>
                    <strong>Google Analytics:</strong>{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Google Analytics Opt-out Browser Add-on
                    </a>
                  </li>
                  <li>
                    <strong>Google AdSense:</strong>{" "}
                    <a
                      href="https://www.google.com/settings/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Google Ads Settings
                    </a>
                  </li>
                </ul>

                <h2>Your Rights Under GDPR</h2>
                <p>
                  If you are in the European Union, you have the following
                  rights regarding cookies:
                </p>
                <ul>
                  <li>
                    <strong>Right to be informed:</strong> We provide clear
                    information about our use of cookies
                  </li>
                  <li>
                    <strong>Right of access:</strong> You can request
                    information about what data we collect
                  </li>
                  <li>
                    <strong>Right to withdraw consent:</strong> You can change
                    your cookie preferences at any time
                  </li>
                  <li>
                    <strong>Right to erasure:</strong> You can request deletion
                    of your data
                  </li>
                </ul>

                <h2>Cookie Retention</h2>
                <p>We retain cookies for the following periods:</p>
                <ul>
                  <li>
                    <strong>Session cookies:</strong> Deleted when you close
                    your browser
                  </li>
                  <li>
                    <strong>Persistent cookies:</strong> Stored for up to 2
                    years
                  </li>
                  <li>
                    <strong>Analytics cookies:</strong> Retained for up to 26
                    months
                  </li>
                  <li>
                    <strong>Advertising cookies:</strong> Retained for up to 13
                    months
                  </li>
                </ul>

                <h2>Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page and updating the &quot;Last updated&quot; date.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies, please
                  contact us at:{" "}
                  <a
                    href="mailto:260316514@qq.com"
                    className="text-blue-600 hover:underline"
                  >
                    260316514@qq.com
                  </a>
                </p>

                <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold mb-2">🍪 Cookie Consent</h3>
                  <p className="text-sm text-gray-600">
                    By continuing to use our website, you consent to our use of
                    cookies as described in this policy. You can manage your
                    cookie preferences using the controls provided on our
                    website or through your browser settings.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/"
                className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
