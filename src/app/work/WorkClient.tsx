"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import CtaBanner from '../../components/CtaBanner';

import { projects } from '../../lib/projects-data';

export default function WorkClient() {
  return (
    <>
      <div className="min-h-[50vh] pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 bg-[#f4f8fa] dark:bg-[#15191c] text-[#0b132a] dark:text-white transition-colors duration-300 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00bba7]/10 border border-[#00bba7]/25 text-xs font-black uppercase tracking-widest text-[#00bba7] mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Our Portfolio</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.1]"
            >
              Selected <span className="text-[#00bba7] italic">Work</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed"
            >
              Explore our portfolio of successful digital transformations, cutting-edge applications, and high-impact branding projects.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col bg-white dark:bg-[#1c2226] rounded-[2.5rem] border border-gray-200 dark:border-white/5 shadow-xl hover:shadow-2xl hover:border-[#00bba7]/30 dark:hover:border-[#00bba7]/30 transition-all duration-300 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Pill */}
                  <div className="absolute top-6 left-6 z-10 bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-[#00bba7] shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black mb-3 text-[#0b132a] dark:text-white line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Read More Link */}
                  <Link 
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center justify-between w-full mt-auto pt-6 border-t border-gray-100 dark:border-white/5 group/link"
                  >
                    <span className="font-bold text-[#0b132a] dark:text-white group-hover/link:text-[#00bba7] transition-colors">
                      View Case Study
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#f4f8fa] dark:bg-white/5 flex items-center justify-center text-[#0b132a] dark:text-white group-hover/link:bg-[#00bba7] group-hover/link:text-white transition-all duration-300 group-hover/link:translate-x-1">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <CtaBanner />
    </>
  );
}
