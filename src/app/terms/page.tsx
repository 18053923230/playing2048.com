import { SEOHead } from "@/components/seo/SEOHead";
import Link from "next/link";

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms of Service - Playing2048.com"
        description="Read our terms of service and user agreement for Playing2048.com. Understand your rights and responsibilities when using our games."
        keywords="terms of service, user agreement, 2048 game terms, website terms"
        canonical="https://playing2048.com/terms"
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-xl text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </header>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="prose max-w-none">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Playing2048.com (&quot;the
                  Website&quot;), you accept and agree to be bound by the terms
                  and provision of this agreement. If you do not agree to abide
                  by the above, please do not use this service.
                </p>

                <h2>2. Description of Service</h2>
                <p>
                  Playing2048.com provides free online puzzle games,
                  specifically various versions of the 2048 game. Our services
                  include:
                </p>
                <ul>
                  <li>Free access to 2048 games with different themes</li>
                  <li>Educational content and game strategies</li>
                  <li>Community features and leaderboards</li>
                  <li>Mobile-responsive gaming experience</li>
                </ul>

                <h2>3. User Conduct</h2>
                <p>
                  You agree to use the Website only for lawful purposes and in
                  accordance with these Terms. You agree not to:
                </p>
                <ul>
                  <li>
                    Use the Website in any way that violates any applicable
                    federal, state, local, or international law or regulation
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any portion of the
                    Website
                  </li>
                  <li>Interfere with or disrupt the Website or servers</li>
                  <li>Use any automated means to access the Website</li>
                  <li>
                    Engage in any other conduct that restricts or inhibits
                    anyone&apos;s use or enjoyment of the Website
                  </li>
                </ul>

                <h2>4. Intellectual Property Rights</h2>
                <p>
                  The Website and its entire contents, features, and
                  functionality (including but not limited to all information,
                  software, text, displays, images, video, and audio, and the
                  design, selection, and arrangement thereof) are owned by
                  Playing2048.com, its licensors, or other providers of such
                  material and are protected by United States and international
                  copyright, trademark, patent, trade secret, and other
                  intellectual property or proprietary rights laws.
                </p>
                <p>
                  <strong>Note:</strong> The original 2048 game concept was
                  created by Gabriele Cirulli. Our website is not affiliated
                  with the original creators and provides our own implementation
                  and variations.
                </p>

                <h2>5. User Content</h2>
                <p>
                  You retain ownership of any content you submit, post, or
                  display on or through the Website. By submitting content, you
                  grant us a worldwide, non-exclusive, royalty-free license to
                  use, reproduce, modify, adapt, publish, translate, and
                  distribute such content.
                </p>

                <h2>6. Privacy Policy</h2>
                <p>
                  Your privacy is important to us. Please review our{" "}
                  <Link
                    href="/privacy"
                    className="text-blue-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  , which also governs your use of the Website, to understand
                  our practices.
                </p>

                <h2>7. Advertising and Third-Party Services</h2>
                <p>
                  Our Website may display advertisements from Google AdSense and
                  other third-party advertising networks. These services may use
                  cookies and similar technologies to collect information about
                  your use of the Website and other websites.
                </p>
                <p>
                  We also use Google Analytics to analyze website traffic and
                  user behavior. By using our Website, you consent to the
                  collection and use of information by these third-party
                  services as described in our Privacy Policy.
                </p>

                <h2>8. Disclaimers</h2>
                <p>
                  THE WEBSITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
                  AVAILABLE&quot; BASIS. WE MAKE NO WARRANTIES, EXPRESS OR
                  IMPLIED, AND HEREBY DISCLAIM ALL WARRANTIES, INCLUDING WITHOUT
                  LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>

                <h2>9. Limitation of Liability</h2>
                <p>
                  IN NO EVENT SHALL PLAYING2048.COM BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                  INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE,
                  GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE
                  OF THE WEBSITE.
                </p>

                <h2>10. Indemnification</h2>
                <p>
                  You agree to defend, indemnify, and hold harmless
                  Playing2048.com from and against any claims, liabilities,
                  damages, judgments, awards, losses, costs, expenses, or fees
                  arising out of or relating to your violation of these Terms or
                  your use of the Website.
                </p>

                <h2>11. Termination</h2>
                <p>
                  We may terminate or suspend your access immediately, without
                  prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the Terms.
                </p>

                <h2>12. Governing Law</h2>
                <p>
                  These Terms shall be interpreted and governed by the laws of
                  the jurisdiction in which Playing2048.com operates, without
                  regard to its conflict of law provisions.
                </p>

                <h2>13. Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any
                  time. If a revision is material, we will try to provide at
                  least 30 days notice prior to any new terms taking effect.
                </p>

                <h2>14. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please
                  contact us at:{" "}
                  <a
                    href="mailto:260316514@qq.com"
                    className="text-blue-600 hover:underline"
                  >
                    260316514@qq.com
                  </a>
                </p>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Important Notice</h3>
                  <p className="text-sm text-gray-600">
                    By using our Website, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms of Service.
                    If you do not agree to these terms, please do not use our
                    Website.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/"
                className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
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
