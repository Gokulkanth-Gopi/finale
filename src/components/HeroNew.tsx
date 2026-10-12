"use client";

import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Palette,
  Code,
  PenTool,
  Smartphone,
  BarChart3,
  Users,
  Layers,
  ShieldCheck,
  Rocket,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroNew() {
  return (
    <section className="relative min-h-0 md:min-h-[100dvh] pt-20 md:pt-40 pb-8 md:pb-24 overflow-hidden bg-[#f4f8fa] dark:bg-[#15191c] text-[#0b132a] dark:text-white transition-colors duration-300">
      {/* Background Curved Swoosh Shapes & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Large sweeping cyan right swoosh */}
        <div className="absolute -top-32 -right-32 w-[900px] h-[900px] bg-gradient-to-br from-[#00bba7]/25 via-[#3fbfb8]/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-1/2 h-[750px] bg-gradient-to-bl from-[#00bba7]/20 via-[#00bba7]/5 to-transparent rounded-l-full pointer-events-none" />

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00bba70d_1px,transparent_1px),linear-gradient(to_bottom,#00bba70d_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_60%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[300px] md:min-h-[400px] lg:min-h-[580px]">
          {/* Left Column: Text & Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start pt-4">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00bba7]/10 border border-[#00bba7]/25 text-xs font-black uppercase tracking-widest text-[#009b8a] dark:text-[#3fbfb8] mb-8 shadow-sm backdrop-blur-md"
            >
              <Zap className="w-3.5 h-3.5 fill-[#009b8a] dark:fill-[#3fbfb8] text-[#009b8a] dark:text-[#3fbfb8]" />
              <span>DIGITAL GROWTH PARTNER</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.2rem] font-black tracking-tighter text-[#0b132a] dark:text-white leading-[1.02] mb-8"
            >
              Build Your<br />
              <span className="text-[#00bba7]">Digital Presence.</span><br />
              Grow Your Brand.
            </motion.h1>

            {/* Subtext Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-10 font-medium leading-relaxed"
            >
              ZyncWeb Solutions is a creative technology and digital agency helping businesses build a strong online presence through web development, UI/UX design, app development, branding, and growth marketing.
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 md:gap-5 mb-8 w-full"
            >
              {/* Primary Get Started Button */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 md:gap-4 rounded-full bg-[#00bba7] hover:bg-[#00a392] py-2 pl-6 pr-1.5 md:py-2.5 md:pl-8 md:pr-2 text-base md:text-lg font-bold text-white shadow-xl shadow-[#00bba7]/25 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00bba7]"
              >
                <span>Get Started</span>
                <span className="flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-[#082226] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                </span>
              </Link>

              {/* Secondary View Our Services Button */}
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 md:gap-3 rounded-full border border-gray-300/80 dark:border-white/20 bg-white/90 dark:bg-white/5 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-[#0b132a] dark:text-white shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00bba7] hover:shadow-lg"
              >
                <span>View Our Services</span>
                <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-gray-500 dark:text-gray-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#00bba7]" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Mascot & Floating Glass Tech Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] md:min-h-[520px]">
            {/* Background Soft Glow Disc */}
            <div className="absolute w-[420px] h-[420px] bg-gradient-to-tr from-[#00bba7]/30 to-[#3fbfb8]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Central Mascot Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
              transition={{
                scale: { duration: 0.8 },
                y: { repeat: Infinity, duration: 4.2, ease: 'easeInOut' },
              }}
              className="relative z-10 w-full max-w-[460px] aspect-[4/3] drop-shadow-2xl"
            >
              <Image
                src="/assets/mascot-hero.png"
                alt="ZyncWeb Mascot Laptop Hero"
                fill
                className="object-contain filter drop-shadow-[0_25px_35px_rgba(0,187,167,0.35)]"
                priority
              />
            </motion.div>

            {/* Floating Glass Pill 1: Web Development (Top Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -top-4 left-0 md:-left-6 z-20 bg-white/95 dark:bg-[#1c2228]/95 backdrop-blur-md px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 dark:border-white/15 flex items-center gap-2 md:gap-3 font-bold text-[clamp(11px,2.5vw,14px)] md:text-sm text-[#0b132a] dark:text-white"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-[#00bba7]/15 flex items-center justify-center text-[#00bba7]">
                <Globe className="w-3 h-3 md:w-4 md:h-4" />
              </div>
              <span>Web Development</span>
            </motion.div>

            {/* Floating Glass Pill 2: UI/UX Design (Top Right) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.3 }}
              className="absolute top-4 -right-2 md:-right-6 z-20 bg-white/95 dark:bg-[#1c2228]/95 backdrop-blur-md px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 dark:border-white/15 flex items-center gap-2 md:gap-3 font-bold text-[clamp(11px,2.5vw,14px)] md:text-sm text-[#0b132a] dark:text-white"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-[#00bba7]/15 flex items-center justify-center text-[#00bba7]">
                <Palette className="w-3 h-3 md:w-4 md:h-4" />
              </div>
              <span>UI/UX Design</span>
            </motion.div>

            {/* Floating Dark Card: Code Badge < /> (Middle Left) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 0.6 }}
              className="absolute top-36 -left-4 md:-left-10 z-20 bg-[#0c1622] text-[#00bba7] p-2.5 md:p-3.5 rounded-xl md:rounded-2xl shadow-2xl border border-white/10 font-mono text-[clamp(14px,3vw,18px)] font-black flex items-center justify-center"
            >
              <Code className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5]" />
            </motion.div>

            {/* Floating Glass Pill 3: Branding (Middle Right) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut', delay: 0.8 }}
              className="absolute top-36 -right-4 md:-right-10 z-20 bg-white/95 dark:bg-[#1c2228]/95 backdrop-blur-md px-3 py-2 md:px-4 md:py-2.5 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 dark:border-white/15 flex items-center gap-2 md:gap-2.5 font-bold text-[clamp(11px,2.5vw,14px)] md:text-sm text-[#0b132a] dark:text-white"
            >
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-[#00bba7]/15 flex items-center justify-center text-[#00bba7]">
                <PenTool className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </div>
              <span>Branding</span>
            </motion.div>

            {/* Floating Glass Pill 4: App Development (Bottom Left) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.1, ease: 'easeInOut', delay: 0.2 }}
              className="absolute bottom-16 -left-2 md:-left-8 z-20 bg-white/95 dark:bg-[#1c2228]/95 backdrop-blur-md px-3 py-2 md:px-4 md:py-2.5 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 dark:border-white/15 flex items-center gap-2 md:gap-2.5 font-bold text-[clamp(11px,2.5vw,14px)] md:text-sm text-[#0b132a] dark:text-white"
            >
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-[#00bba7]/15 flex items-center justify-center text-[#00bba7]">
                <Smartphone className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </div>
              <span>App Development</span>
            </motion.div>

            {/* Floating Glass Pill 5: Growth Marketing (Bottom Right) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.7, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-16 -right-2 md:-right-8 z-20 bg-white/95 dark:bg-[#1c2228]/95 backdrop-blur-md px-3 py-2 md:px-4 md:py-2.5 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 dark:border-white/15 flex items-center gap-2 md:gap-2.5 font-bold text-[clamp(11px,2.5vw,14px)] md:text-sm text-[#0b132a] dark:text-white"
            >
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-[#00bba7]/15 flex items-center justify-center text-[#00bba7]">
                <BarChart3 className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </div>
              <span>Growth Marketing</span>
            </motion.div>
          </div>
        </div>

        {/* Bottom Floating Glass Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-20 bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-8 shadow-2xl max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 divide-x-0 md:divide-x divide-gray-200 dark:divide-white/10"
        >
          {/* Stat 1 */}
          <div className="flex items-center gap-3 md:gap-4 px-1 md:px-6">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#00bba7]/10 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 md:w-7 md:h-7 text-[#00bba7]" />
            </div>
            <div>
              <div className="text-[clamp(20px,4vw,36px)] font-black text-[#0b132a] dark:text-white tracking-tight leading-none mb-0.5 md:mb-1">10+</div>
              <div className="text-[clamp(11px,2vw,14px)] md:text-sm font-semibold text-gray-500 dark:text-gray-400 leading-tight">Happy Clients</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3 md:gap-4 px-1 md:px-6">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#00bba7]/10 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5 md:w-7 md:h-7 text-[#00bba7]" />
            </div>
            <div>
              <div className="text-[clamp(20px,4vw,36px)] font-black text-[#0b132a] dark:text-white tracking-tight leading-none mb-0.5 md:mb-1">15+</div>
              <div className="text-[clamp(11px,2vw,14px)] md:text-sm font-semibold text-gray-500 dark:text-gray-400 leading-tight">Projects Delivered</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3 md:gap-4 px-1 md:px-6">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#00bba7]/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 md:w-7 md:h-7 text-[#00bba7]" />
            </div>
            <div>
              <div className="text-[clamp(20px,4vw,36px)] font-black text-[#0b132a] dark:text-white tracking-tight leading-none mb-0.5 md:mb-1">98%</div>
              <div className="text-[clamp(11px,2vw,14px)] md:text-sm font-semibold text-gray-500 dark:text-gray-400 leading-tight">Client Satisfaction</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3 md:gap-4 px-1 md:px-6">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#00bba7]/10 flex items-center justify-center shrink-0">
              <Rocket className="w-5 h-5 md:w-7 md:h-7 text-[#00bba7]" />
            </div>
            <div>
              <div className="text-[clamp(20px,4vw,36px)] font-black text-[#0b132a] dark:text-white tracking-tight leading-none mb-0.5 md:mb-1">2+</div>
              <div className="text-[clamp(11px,2vw,14px)] md:text-sm font-semibold text-gray-500 dark:text-gray-400 leading-tight">Years of Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
