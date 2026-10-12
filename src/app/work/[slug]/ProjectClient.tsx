"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import type { Project } from '../../../lib/projects-data';
import CtaBanner from '../../../components/CtaBanner';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 100 }
  }
};

export default function ProjectClient({ project }: { project: Project }) {
  return (
    <>
      <article className="relative w-full max-w-full min-h-[50vh] pt-20 md:pt-32 pb-12 md:pb-20 bg-white dark:bg-[#0b132a] text-[#0b132a] dark:text-white transition-colors duration-300 overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00bba7]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Back Button */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#00bba7] dark:hover:text-[#00bba7] transition-colors mb-8 md:mb-12 font-bold text-xs md:text-sm uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Work
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header 
            className="mb-10 md:mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block px-4 py-1.5 rounded-full bg-[#00bba7]/10 text-[#00bba7] text-xs font-black uppercase tracking-widest mb-4 md:mb-6 border border-[#00bba7]/20"
            >
              {project.category}
            </motion.div>
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 tracking-tighter break-words"
            >
              {project.title}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl"
            >
              {project.description}
            </motion.p>
          </motion.header>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 mb-12 md:mb-24"
        >
          <motion.div 
            className="relative w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10"
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1920}
              height={1080}
              className="w-full h-auto object-contain md:object-cover"
              priority
            />
            {/* Glossy Overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-12 md:mb-20">
            {/* Project Meta Sidebar */}
            <motion.div variants={itemVariants} className="md:col-span-4 space-y-10">
              <div className="bg-[#f4f8fa] dark:bg-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-3xl border border-gray-100 dark:border-white/5 relative overflow-hidden group">
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#00bba7]/0 to-[#00bba7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="mb-6 md:mb-8 relative z-10">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#00bba7] mb-2">Client</h3>
                  <p className="text-xl font-bold text-[#0b132a] dark:text-white">{project.client}</p>
                </div>
                <div className="mb-8 relative z-10">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#00bba7] mb-2">Date</h3>
                  <p className="text-xl font-bold text-[#0b132a] dark:text-white">{project.date}</p>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#00bba7] mb-4">Technologies & Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <motion.span 
                        key={tag} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -2, backgroundColor: "#00bba7", color: "white" }}
                        className="px-4 py-1.5 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 text-sm font-bold text-gray-700 dark:text-gray-300 shadow-sm cursor-default transition-colors duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Details */}
            <div className="md:col-span-8 space-y-10 md:space-y-16">
              <motion.section variants={itemVariants}>
                <h2 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 flex items-center gap-3 md:gap-4 text-[#0b132a] dark:text-white group">
                  <motion.span 
                    whileInView={{ width: 48 }} 
                    initial={{ width: 0 }} 
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-1 bg-[#00bba7] rounded-full inline-block"
                  ></motion.span>
                  The Challenge
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  {project.challenge}
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 flex items-center gap-3 md:gap-4 text-[#0b132a] dark:text-white">
                  <motion.span 
                    whileInView={{ width: 48 }} 
                    initial={{ width: 0 }} 
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-1 bg-[#00bba7] rounded-full inline-block"
                  ></motion.span>
                  Our Solution
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  {project.solution}
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 flex items-center gap-3 md:gap-4 text-[#0b132a] dark:text-white">
                  <motion.span 
                    whileInView={{ width: 48 }} 
                    initial={{ width: 0 }} 
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="h-1 bg-[#00bba7] rounded-full inline-block"
                  ></motion.span>
                  Results & Impact
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {project.results.map((result, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02, x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-center gap-4 bg-[#f4f8fa] dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm group"
                    >
                      <div className="bg-[#00bba7]/10 p-2 rounded-full text-[#00bba7] group-hover:bg-[#00bba7] group-hover:text-white transition-colors duration-300">
                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <span className="text-base md:text-lg text-[#0b132a] dark:text-white font-bold">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>
          </div>
        </motion.div>
      </article>

      <CtaBanner />
    </>
  );
}
