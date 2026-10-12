"use client";

import { motion } from 'motion/react';
import {
  ArrowRight,
  Layout,
  Smartphone,
  Palette,
  PenTool,
  Globe,
  Database,
  Code,
  Video,
  Monitor,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


const services = [
  {
    icon: Layout,
    title: 'Web Development',
    description: 'Modern, responsive, and SEO-friendly websites built to represent your brand professionally and convert visitors into customers.',
  },
  {
    icon: Monitor,
    title: 'UI/UX Design',
    description: 'Thoughtful interfaces designed around your users to simplify navigation and create memorable digital experiences.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'User-friendly mobile applications built for performance, scalability, and business growth.',
  },
  {
    icon: PenTool,
    title: 'Social Media Marketing',
    description: 'Strategy-led branding, content planning, and campaign creatives that help businesses build a stronger digital presence.',
  },
  {
    icon: Globe,
    title: 'Content Creation',
    description: 'Clear, engaging brand content for websites, marketing, social media, and campaigns that keeps your audience connected.',
  },
  {
    icon: Video,
    title: 'Video Production',
    description: 'Promotional and brand videos that turn ideas into powerful visual stories that build trust and attention.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Professional visuals and branding assets that make your business stand out across digital channels.',
  },
  {
    icon: Database,
    title: 'Hosting',
    description: 'Reliable hosting support to keep your website secure, accessible, and performing at its best.',
  },
  {
    icon: Code,
    title: 'Automation & Integration',
    description: 'Connected systems and smart workflows that reduce manual work and improve operational efficiency.',
  },
];

export default function ServicesNew() {
  return (
    <section className="bg-[#eaeff3] dark:bg-[#231f20] transition-colors duration-300 overflow-hidden pt-12">
      <div className="py-20 px-6 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-black uppercase tracking-widest text-[#3fbfb8] mb-8 shadow-sm">
              Tailored Digital Capabilities
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-gray-900 dark:text-white tracking-tighter leading-[0.9] mb-8">
              Our Core<br />
              <span className="text-[#3fbfb8]">Services.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
              We combine technology, design, content, and digital strategy to help businesses build a stronger online presence and create meaningful customer experiences.
            </p>
          </div>

          {/* Girl Mascot Host in Services */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              scale: { duration: 0.6 },
              y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
            }}
            className="w-64 md:w-80 relative aspect-[3/4] flex-shrink-0 drop-shadow-2xl"
          >
            <Image
              src="/assets/zyncweb-mascot-girl-cas.png"
              alt="ZyncWeb Girl Mascot Developer"
              fill
              className="object-contain filter drop-shadow-[0_20px_30px_rgba(63,191,184,0.35)]"
              priority
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
                className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between min-h-[260px] shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#eaeff3] dark:bg-white/10 rounded-2xl flex items-center justify-center mb-5 md:mb-6 shadow-md">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#3fbfb8]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{service.description}</p>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-gray-900 dark:text-white hover:text-[#3fbfb8] transition-colors mt-6 md:mt-8">
                  Start Project <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#3fbfb8]" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>


    </section>
  );
}
