"use client";

import { motion } from 'motion/react';
import { Cookie, Mail } from 'lucide-react';

export default function CookiePolicyClient() {
  return (
    <div className="min-h-screen bg-[#f4f8fa] dark:bg-[#15191c] text-[#0b132a] dark:text-white transition-colors duration-300">
      {/* Hero Banner */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#00bba7]/20 via-[#3fbfb8]/10 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00bba7]/10 border border-[#00bba7]/25 text-xs font-black uppercase tracking-widest text-[#009b8a] dark:text-[#3fbfb8] mb-6"
          >
            <Cookie className="w-3.5 h-3.5" />
            <span>TRANSPARENCY</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4"
          >
            Cookie <span className="text-[#00bba7]">Policy</span>
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
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">1. What Are Cookies?</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, understanding how you use our site, and improving our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">2. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#f4f8fa] dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <h3 className="font-bold text-[#00bba7] mb-1">Essential Cookies</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">These cookies are necessary for the website to function properly. They enable core features such as page navigation and access to secure areas. The website cannot function properly without these cookies.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f4f8fa] dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <h3 className="font-bold text-[#00bba7] mb-1">Analytics Cookies</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve the website structure and content.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f4f8fa] dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <h3 className="font-bold text-[#00bba7] mb-1">Functional Cookies</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">These cookies allow us to remember choices you make (such as your preferred language or dark mode setting) and provide enhanced, more personalized features.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f4f8fa] dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <h3 className="font-bold text-[#00bba7] mb-1">Marketing Cookies</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">These cookies may be set through our site by advertising partners. They may be used to build a profile of your interests and show you relevant advertisements on other sites.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">3. How to Manage Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or alert you before a cookie is placed. Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">4. Third-Party Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We may use third-party services such as Google Analytics that place cookies on your device. These third parties have their own privacy policies, and we recommend reviewing them. We do not have control over third-party cookies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">5. Cookie Retention</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you manually delete them. The retention period for each type of cookie varies based on its purpose.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">6. Updates to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any updates will be posted on this page with an updated effective date.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-white/10">
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">7. Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us:
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
