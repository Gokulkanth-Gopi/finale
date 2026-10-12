"use client";

import { motion } from 'motion/react';
import { Shield, Mail } from 'lucide-react';

export default function PrivacyPolicyClient() {
  return (
    <div className="min-h-screen bg-[#f4f8fa] dark:bg-[#15191c] text-[#0b132a] dark:text-white transition-colors duration-300">
      {/* Hero Banner */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#00bba7]/20 via-[#3fbfb8]/10 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00bba7]/10 border border-[#00bba7]/25 text-xs font-black uppercase tracking-widest text-[#009b8a] dark:text-[#3fbfb8] mb-6"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>YOUR PRIVACY MATTERS</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4"
          >
            Privacy <span className="text-[#00bba7]">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 font-medium"
          >
            Last updated: October 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white dark:bg-white/5 rounded-3xl border border-gray-200/80 dark:border-white/10 p-8 md:p-12 shadow-xl space-y-8"
          >
            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">1. Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us via email. This may include your name, email address, phone number, company name, and project details.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                <li>To respond to your inquiries and provide requested services</li>
                <li>To send project updates and relevant communications</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">3. Information Sharing</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">4. Data Security</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">5. Cookies & Tracking</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">6. Third-Party Links</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">7. Your Rights</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also opt out of receiving promotional communications from us at any time by contacting us directly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">8. Changes to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised &quot;Last updated&quot; date. Your continued use of our website constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-white/10">
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">9. Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <a
                href="mailto:info@zyncweb.dev"
                className="inline-flex items-center gap-2 text-[#00bba7] font-bold hover:underline"
              >
                <Mail className="w-4 h-4" />
                info@zyncweb.dev
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
