import { SEOHead } from "@/components/seo/SEOHead";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Us - Playing2048.com"
        description="Get in touch with the Playing2048.com team. We'd love to hear your feedback, suggestions, or answer any questions you may have."
        keywords="contact us, feedback, support, 2048 game contact, gaming support"
        canonical="https://playing2048.com/contact"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-gray-600">
                We&apos;d love to hear from you! Get in touch with any
                questions, feedback, or suggestions.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* 联系信息 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">📧</span>
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:260316514@qq.com"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      260316514@qq.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Response Time</h3>
                    <p className="text-gray-600">
                      We aim to respond to all inquiries within 24 hours during
                      business days. For urgent matters, please include
                      &quot;URGENT&quot; in your subject line.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)
                      <br />
                      Weekend: Limited support available
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 常见问题 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">❓</span>
                    Quick Help
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Before Contacting Us</h3>
                    <p className="text-gray-600 mb-3">
                      You might find answers to your questions in our help
                      resources:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/faq"
                          className="text-blue-600 hover:underline"
                        >
                          📚 FAQ - Frequently Asked Questions
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/how-to-play"
                          className="text-blue-600 hover:underline"
                        >
                          📖 How to Play Guide
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/tips-and-tricks"
                          className="text-blue-600 hover:underline"
                        >
                          💡 Tips & Tricks
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/strategy"
                          className="text-blue-600 hover:underline"
                        >
                          🎯 Strategy Guide
                        </Link>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 联系表单 */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">✉️</span>
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select a subject</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="bug">Bug Report</option>
                      <option value="feature">Feature Request</option>
                      <option value="support">Technical Support</option>
                      <option value="business">Business Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Please describe your inquiry in detail..."
                    ></textarea>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> For the best support experience,
                      please include:
                    </p>
                    <ul className="text-sm text-blue-700 mt-2 space-y-1">
                      <li>• Your device type (desktop, mobile, tablet)</li>
                      <li>• Browser name and version</li>
                      <li>• Detailed description of the issue</li>
                      <li>• Steps to reproduce the problem (if applicable)</li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                      Send Message
                    </button>
                    <p className="text-sm text-gray-600 mt-2">
                      Or simply email us directly at{" "}
                      <a
                        href="mailto:260316514@qq.com"
                        className="text-blue-600 hover:underline"
                      >
                        260316514@qq.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 其他联系方式 */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold text-center mb-6">
                Other Ways to Connect
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">📱</div>
                  <h3 className="text-lg font-semibold mb-2">Mobile Support</h3>
                  <p className="text-gray-600">
                    Our games are optimized for mobile devices. If you&apos;re
                    experiencing issues on mobile, please let us know your
                    device model and operating system.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎮</div>
                  <h3 className="text-lg font-semibold mb-2">Game Feedback</h3>
                  <p className="text-gray-600">
                    We love hearing about your gaming experience! Share your
                    thoughts on new features, themes, or improvements you&apos;d
                    like to see.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🌐</div>
                  <h3 className="text-lg font-semibold mb-2">Website Issues</h3>
                  <p className="text-gray-600">
                    Found a bug or have suggestions for our website? We&apos;re
                    always working to improve the user experience and appreciate
                    your feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
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
