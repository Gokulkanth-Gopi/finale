"use client";

import { motion } from 'motion/react';
import { FileText, Mail } from 'lucide-react';

export default function TermsOfServiceClient() {
  return (
    <div className="min-h-screen bg-[#f4f8fa] dark:bg-[#15191c] text-[#0b132a] dark:text-white transition-colors duration-300">
      {/* Hero Banner */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#00bba7]/20 via-[#3fbfb8]/10 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00bba7]/10 border border-[#00bba7]/25 text-xs font-black uppercase tracking-widest text-[#009b8a] dark:text-[#3fbfb8] mb-6"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>LEGAL</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4"
          >
            Terms of <span className="text-[#00bba7]">Service</span>
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
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">1. Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By accessing and using the ZyncWeb Solutions website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">2. Services</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                ZyncWeb Solutions provides web development, app development, UI/UX design, branding, digital marketing, and related digital services. The specific scope, deliverables, and timelines for each project will be outlined in a separate project agreement or proposal.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">3. Client Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                <li>Provide accurate and complete information required for the project</li>
                <li>Respond to communications and review requests in a timely manner</li>
                <li>Ensure that all content provided does not infringe upon any third-party rights</li>
                <li>Make payments according to the agreed-upon schedule</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">4. Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Upon full payment, the client receives ownership rights to the final deliverables as specified in the project agreement. ZyncWeb Solutions retains the right to showcase completed work in its portfolio unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">5. Payment Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Payment terms, including amounts, milestones, and due dates, will be specified in the project proposal or agreement. Late payments may result in project delays or suspension of services. All prices are quoted in the currency specified in the proposal.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">6. Project Revisions</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The number of revisions included in each project will be specified in the project agreement. Additional revisions beyond the agreed scope may incur extra charges, which will be communicated before any additional work begins.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">7. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                ZyncWeb Solutions shall not be liable for any indirect, incidental, or consequential damages arising out of or in connection with our services. Our total liability shall not exceed the amount paid by the client for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">8. Termination</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Either party may terminate a project agreement with written notice. In case of termination, the client shall pay for all work completed up to the date of termination. Non-refundable deposits or advance payments will be retained as per the project agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">9. Governing Law</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Salem, Tamil Nadu.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-white/10">
              <h2 className="text-xl font-black mb-3 text-[#0b132a] dark:text-white">10. Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
