"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function CtaBanner() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 relative bg-white dark:bg-[#0b132a] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 sm:p-12 md:p-16 lg:p-20 shadow-2xl flex flex-col items-start justify-center min-h-[auto] md:min-h-[450px] overflow-hidden border border-gray-100 dark:border-white/10">
          
          {/* Background Layer with Overflow Hidden */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/assets/cta-bg.png" 
              alt="Background" 
              fill 
              className="object-cover object-right" 
              priority
            />
            {/* Soft gradient fade on the left to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent dark:from-[#0b132a]/90 dark:via-[#0b132a]/50 dark:to-transparent" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-2xl text-left">
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#eaf8f8] dark:bg-[#00bba7]/10 text-[10px] md:text-xs font-black uppercase tracking-widest text-[#00bba7] mb-4 md:mb-6 shadow-sm border border-[#00bba7]/10"
            >
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              <span>Let's Work Together</span>
            </motion.div>
            
            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-5xl lg:text-6xl font-black text-[#0b132a] dark:text-white tracking-tighter mb-3 md:mb-4 leading-[1.15]"
            >
              Ready to elevate your <br className="hidden sm:block" />
              <span className="text-[#00bba7] italic">digital presence?</span>
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium mb-6 md:mb-10 max-w-md leading-relaxed"
            >
              Get in touch with us to turn your idea into a powerful, meaningful digital experience that drives real impact.
            </motion.p>
            
            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 md:gap-4 bg-[#0a1a1f] dark:bg-white text-white dark:text-[#0a1a1f] pl-4 md:pl-6 pr-1.5 md:pr-2 py-1.5 md:py-2 rounded-full font-bold text-sm md:text-lg hover:bg-black dark:hover:bg-gray-100 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(0,187,167,0.6)] hover:shadow-[0_10px_50px_-5px_rgba(0,187,167,0.8)] hover:-translate-y-1 border border-white/10 dark:border-transparent"
              >
                <span>Get In Touch</span>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#00bba7] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 shadow-inner">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
