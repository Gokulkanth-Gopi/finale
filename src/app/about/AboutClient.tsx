"use client";

import { motion } from 'motion/react';
import CtaBanner from '../../components/CtaBanner';
import {
  Zap,
  Search,
  FileText,
  Palette,
  Code,
  Rocket,
  ArrowRight,
  Users,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import Image from 'next/image';


const steps = [
  {
    num: '01',
    title: 'Discover',
    description: 'We understand your business, audience, goals, challenges, competitors, and requirements.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Plan',
    description: 'We create a clear strategy, project scope, content structure, design direction, and execution plan.',
    icon: FileText,
  },
  {
    num: '03',
    title: 'Design',
    description: 'We develop the visual direction and user experience around your brand and target audience.',
    icon: Palette,
  },
  {
    num: '04',
    title: 'Develop',
    description: 'Our team turns the approved concept into a functional, responsive, and optimised digital solution.',
    icon: Code,
  },
  {
    num: '05',
    title: 'Launch & Grow',
    description: 'We test, launch, and continue supporting your business with digital improvements and growth-focused work.',
    icon: Rocket,
  },
];

export default function About() {
  return (
    <>
      <div className="min-h-0 md:min-h-[100dvh] overflow-x-hidden pt-20 md:pt-28 pb-12 md:pb-20 px-4 md:px-6 bg-[#f4f8fa] dark:bg-[#15191c] text-[#0b132a] dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* ========================================================================= */}
          {/* TOP ABOUT BANNER (MATCHING USER MOCKUP EXACTLY) */}
          {/* ========================================================================= */}
          <section className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-b from-[#eaf6f8] to-[#f4f9fb] dark:from-[#181d22] dark:to-[#121619] border border-gray-200/80 dark:border-white/10 shadow-2xl p-4 sm:p-8 md:p-16 mb-12 md:mb-28 text-center min-h-[auto] md:min-h-[620px] flex flex-col items-center justify-center">
            {/* Background Layer: Futuristic Cyan Orbital Tech Frame */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <Image
                src="/assets/FuturisticCyanOrbitalTechFrame.png"
                alt="Futuristic Cyan Orbital Tech Frame Background"
                fill
                className="object-cover opacity-85 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen"
                priority
              />
            </div>

            {/* LEFT FOREGROUND MASCOT + CALLOUT ANNOTATION */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{
                x: { duration: 0.8 },
                y: { repeat: Infinity, duration: 4.2, ease: 'easeInOut' },
              }}
              className="hidden xl:block absolute left-4 xl:left-8 top-12 bottom-12 z-10 w-72 xl:w-80 pointer-events-none"
            >
              {/* Handwritten Style Annotation Doodle (Top Left) */}
              <div className="absolute top-2 left-16 z-20 text-center pointer-events-none">
                <span className="font-serif italic text-sm font-bold text-gray-700 dark:text-gray-300 tracking-wide block leading-tight">
                  Ideas<br />Design<br />Develop<br />Grow
                </span>
                <span className="text-[#00bba7] text-lg font-bold">⤵</span>
              </div>

              {/* Foreground Mascot Image */}
              <div className="relative w-full h-full drop-shadow-2xl z-10">
                <Image
                  src="/assets/zyncweb-mascot-girl-cas.png"
                  alt="ZyncWeb Girl Dragon Mascot"
                  fill
                  className="object-contain filter drop-shadow-[0_20px_35px_rgba(0,187,167,0.35)]"
                  priority
                />
              </div>
            </motion.div>

            {/* RIGHT FOREGROUND MASCOT + CALLOUT ANNOTATION */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
              transition={{
                x: { duration: 0.8 },
                y: { repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 0.5 },
              }}
              className="hidden xl:block absolute right-4 xl:right-8 top-12 bottom-12 z-10 w-72 xl:w-80 pointer-events-none"
            >
              {/* Handwritten Style Annotation Doodle (Bottom Right) */}
              <div className="absolute bottom-16 right-16 z-20 text-center pointer-events-none">
                <span className="text-[#00bba7] text-lg font-bold">⤵</span>
                <span className="font-serif italic text-sm font-bold text-gray-700 dark:text-gray-300 tracking-wide block leading-tight mt-1">
                  Your<br />Digital<br />Partner
                </span>
              </div>


              {/* Foreground Mascot Image */}
              <div className="relative w-full h-full drop-shadow-2xl z-10">
                <Image
                  src="/assets/mascot.png"
                  alt="ZyncWeb Sitting Dragon Mascot"
                  fill
                  className="object-contain filter drop-shadow-[0_20px_35px_rgba(0,187,167,0.35)]"
                  priority
                />
              </div>
            </motion.div>

            {/* CENTER BANNER CONTENT */}
            <div className="relative z-10 max-w-2xl mx-auto text-center py-2 md:py-6">



              {/* Main Title with Cyan Underline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-[#0b132a] dark:text-white leading-[0.95] mb-4 md:mb-6 relative inline-block"
              >
                About<br />
                <span className="bg-gradient-to-r from-[#00bba7] via-[#3fbfb8] to-[#5bd6ce] bg-clip-text text-transparent">
                  ZyncWeb
                </span>
                {/* Cyan Underline Curve */}
                <svg className="w-full h-4 text-[#00bba7] mt-1" viewBox="0 0 300 20" fill="none" preserveAspectRatio="none">
                  <path d="M5 15 Q 150 2 295 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
              </motion.h1>

              {/* Subtext Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed mb-6 md:mb-10"
              >
                ZyncWeb Solutions is a creative technology and digital solutions company focused on helping businesses establish, strengthen, and grow their digital presence.
              </motion.p>

              {/* Floating Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-gray-200/80 dark:border-white/15 rounded-3xl p-3 sm:p-6 shadow-xl flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-around gap-3 sm:gap-4"
              >
                <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-xl bg-[#00bba7]/15 flex items-center justify-center text-[#00bba7]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl sm:text-2xl font-black text-[#0b132a] dark:text-white leading-none">10+</div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Happy Clients</div>
                  </div>
                </div>

                <div className="w-full h-px sm:w-px sm:h-8 bg-gray-200 dark:bg-white/10 block" />

                <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-xl bg-[#00bba7]/15 flex items-center justify-center text-[#00bba7]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl sm:text-2xl font-black text-[#0b132a] dark:text-white leading-none">15+</div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Projects Delivered</div>
                  </div>
                </div>

                <div className="w-full h-px sm:w-px sm:h-8 bg-gray-200 dark:bg-white/10 block" />

                <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-xl bg-[#00bba7]/15 flex items-center justify-center text-[#00bba7]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl sm:text-2xl font-black text-[#0b132a] dark:text-white leading-none">98%</div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Client Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-28">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white dark:bg-[#15191c] p-6 sm:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-[#00bba7]/20 dark:border-[#00bba7]/15 shadow-lg overflow-hidden group min-h-[260px] md:min-h-[320px] flex items-center"
            >
              {/* Right Side Image */}
              <div className="absolute inset-y-0 right-0 w-[60%] z-0">
                <Image src="/assets/mission-mountain.jpg" alt="Mission Mountain" fill className="object-cover object-left" />
                {/* Fade gradient from left to right to blend with card bg */}
                <div className="absolute inset-0 bg-gradient-to-r from-white from-10% to-transparent to-60% dark:from-[#15191c] dark:to-transparent" />
                {/* Additional fade on bottom for smooth edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent dark:from-[#15191c]/30 dark:to-transparent" />
              </div>

              {/* Content (Left Side) */}
              <div className="relative z-10 w-[65%]">
                {/* Top Row: Icon + Number + Line */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#00bba7]/15 border border-[#00bba7]/25 flex items-center justify-center text-[#00bba7]">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <span className="text-2xl font-black text-[#00bba7]">01</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#00bba7]/40 to-transparent" />
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-[#0b132a] dark:text-white">
                  Our <span className="text-[#00bba7] italic">Mission</span>
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                  To help businesses build meaningful digital experiences through creative, reliable, and technology-driven solutions.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative bg-white dark:bg-[#15191c] p-6 sm:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-[#00bba7]/20 dark:border-[#00bba7]/15 shadow-lg overflow-hidden group min-h-[260px] md:min-h-[320px] flex items-center"
            >
              {/* Right Side Image */}
              <div className="absolute inset-y-0 right-0 w-[60%] z-0">
                <Image src="/assets/vision-globe.jpg" alt="Vision Globe" fill className="object-cover object-left" />
                {/* Fade gradient from left to right to blend with card bg */}
                <div className="absolute inset-0 bg-gradient-to-r from-white from-10% to-transparent to-60% dark:from-[#15191c] dark:to-transparent" />
                {/* Additional fade on bottom for smooth edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent dark:from-[#15191c]/30 dark:to-transparent" />
              </div>

              {/* Content (Left Side) */}
              <div className="relative z-10 w-[65%]">
                {/* Top Row: Icon + Number + Line */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#00bba7]/15 border border-[#00bba7]/25 flex items-center justify-center text-[#00bba7]">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </div>
                  <span className="text-2xl font-black text-[#00bba7]">02</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#00bba7]/40 to-transparent" />
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-[#0b132a] dark:text-white">
                  Our <span className="text-[#00bba7] italic">Vision</span>
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                  To become a trusted digital growth partner for businesses by making technology, creativity, and digital marketing work together seamlessly.
                </p>
              </div>
            </motion.div>
          </div>

          {/* What We Believe */}
          <div className="mb-16 md:mb-28 relative w-screen left-1/2 -ml-[50vw] py-8 md:py-12">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-80 dark:opacity-30">
              <Image src="/assets/e8b9b274-1052-4e88-89bb-ba83234d8064.png" alt="Core Belief Background" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#f4f8fa] via-transparent to-[#f4f8fa] dark:from-[#15191c] dark:via-transparent dark:to-[#15191c]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00bba7]/10 border border-[#00bba7]/25 text-xs font-black uppercase tracking-widest text-[#009b8a] dark:text-[#00bba7] mb-4 shadow-sm">
                  <Zap className="w-3.5 h-3.5 fill-[#009b8a] dark:fill-[#00bba7] text-[#009b8a] dark:text-[#00bba7]" />
                  <span>OUR CORE BELIEF</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-[#0b132a] dark:text-white mb-4">
                  What We <span className="text-[#00bba7] italic">Believe</span>
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
                  We create digital solutions with purpose, strategy, and real impact.
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Belief Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-gradient-to-br from-[#e8f7f5] via-[#f0fbfa] to-[#f4f8fa] dark:from-[#162220] dark:via-[#151b1d] dark:to-[#15191c] p-8 sm:p-10 rounded-[2.5rem] border border-[#00bba7]/20 dark:border-[#00bba7]/15 shadow-lg overflow-hidden"
                >
                  {/* Watermark Number */}
                  <span className="absolute top-6 right-8 text-7xl font-black text-[#00bba7]/10 dark:text-[#00bba7]/5 select-none pointer-events-none">03</span>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#00bba7]/15 border border-[#00bba7]/25 flex items-center justify-center text-[#00bba7] shrink-0">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-[#0b132a] dark:text-white">
                      Beyond Just<br />a <span className="text-[#00bba7] italic">Presence</span>
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed font-medium relative z-10 mb-6">
                    A website should do more than exist. A social media page should do more than post. A design should do more than look attractive.
                  </p>

                  {/* Arrow link */}
                  <div className="flex justify-end relative z-10">
                    <div className="w-10 h-10 rounded-full bg-[#00bba7]/15 text-[#00bba7] flex items-center justify-center hover:bg-[#00bba7] hover:text-white transition-all duration-300 cursor-pointer">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>

                {/* Belief Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="relative bg-gradient-to-br from-[#e8f7f5] via-[#f0fbfa] to-[#f4f8fa] dark:from-[#162220] dark:via-[#151b1d] dark:to-[#15191c] p-8 sm:p-10 rounded-[2.5rem] border border-[#00bba7]/20 dark:border-[#00bba7]/15 shadow-lg overflow-hidden"
                >
                  {/* Watermark Number */}
                  <span className="absolute top-6 right-8 text-7xl font-black text-[#00bba7]/10 dark:text-[#00bba7]/5 select-none pointer-events-none">04</span>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#00bba7]/15 border border-[#00bba7]/25 flex items-center justify-center text-[#00bba7] shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-[#0b132a] dark:text-white">
                      Purpose-Driven<br /><span className="text-[#00bba7] italic">Solutions</span>
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed font-medium relative z-10 mb-6">
                    A digital solution should have a clear purpose. That is why we focus on understanding the business strategy behind every project before crafting the solution.
                  </p>

                  {/* Arrow link */}
                  <div className="flex justify-end relative z-10">
                    <div className="w-10 h-10 rounded-full bg-[#00bba7]/15 text-[#00bba7] flex items-center justify-center hover:bg-[#00bba7] hover:text-white transition-all duration-300 cursor-pointer">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* OUR PROVEN PROCESS SECTION */}
          {/* ========================================================================= */}
          <div className="mb-20 md:mb-36 relative">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00bba7]/10 border border-[#00bba7]/25 text-xs font-black uppercase tracking-widest text-[#009b8a] dark:text-[#00bba7] mb-4 shadow-sm">
                <Zap className="w-3.5 h-3.5 fill-[#009b8a] dark:fill-[#00bba7] text-[#009b8a] dark:text-[#00bba7]" />
                <span>OUR WORKFLOW</span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#0b132a] dark:text-white leading-tight mb-4">
                Our <span className="text-[#00bba7]">Proven</span> Process
              </h2>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                A clear, collaborative, and result-driven process to turn your ideas into powerful digital solutions.
              </p>
            </div>

            {/* 2-Column Grid: Left Timeline Cards + Right Mascot Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center max-w-[1340px] mx-auto">
              {/* Left Process Cards Timeline */}
              <div className="lg:col-span-5 order-2 lg:order-1 relative z-20">
                {/* Vertical Connected Timeline Line */}
                <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-[#00bba7] via-[#00bba7]/40 to-[#00bba7]/10 z-0 hidden sm:block" />

                <div className="space-y-3 relative z-10">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.num}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className="group flex items-center gap-3 sm:gap-4"
                      >
                        {/* Timeline Number Circle */}
                        <div className="w-10 h-10 rounded-full bg-[#00bba7] text-white font-black text-xs flex items-center justify-center shadow-md shadow-[#00bba7]/25 shrink-0 z-10 border-2 border-[#f4f8fa] dark:border-[#15191c]">
                          {step.num}
                        </div>

                        {/* Process Card */}
                        <div className="flex-1 bg-white/95 dark:bg-[#181c20]/95 backdrop-blur-md border border-gray-200/80 dark:border-white/10 rounded-2xl p-3.5 sm:p-4 shadow-md flex items-center justify-between gap-3 hover:border-[#00bba7] dark:hover:border-[#00bba7] transition-all duration-300 group-hover:shadow-lg">
                          <div className="flex items-center gap-3.5">
                            {/* Left Icon Box */}
                            <div className="w-10 h-10 rounded-xl bg-[#00bba7]/12 flex items-center justify-center text-[#00bba7] shrink-0 group-hover:bg-[#00bba7] group-hover:text-white transition-colors">
                              <Icon className="w-5 h-5 stroke-[2.2]" />
                            </div>

                            {/* Content */}
                            <div>
                              <h3 className="text-base sm:text-lg font-black text-[#0b132a] dark:text-white mb-0.5 leading-tight">
                                {step.title}
                              </h3>
                              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-normal max-w-sm">
                                {step.description}
                              </p>
                            </div>
                          </div>

                          {/* Right Step Watermark & Action Arrow */}
                          <div className="flex items-center gap-3 shrink-0">
                            <span className="hidden sm:block text-2xl font-black text-gray-300/60 dark:text-white/10 select-none group-hover:text-[#00bba7]/20 transition-colors">
                              {step.num}
                            </span>
                            <div className="w-7 h-7 rounded-full bg-[#00bba7]/10 text-[#00bba7] flex items-center justify-center group-hover:bg-[#00bba7] group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5">
                              <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right Mascot Showcase */}
              <div className="lg:col-span-7 order-1 lg:order-2 relative flex items-center justify-start z-10">
                {/* Radial Cyan Ambient Glow */}
                <div className="absolute w-[600px] h-[600px] bg-[#00bba7]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 w-full max-w-[800px] aspect-[4/3] scale-105 lg:scale-115 lg:-ml-12 xl:-ml-20 drop-shadow-lg">
                  <Image
                    src="/assets/mascot.png"
                    alt="ZyncWeb Process Mascot"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner placed directly after the about content */}
      <CtaBanner />
    </>
  );
}
