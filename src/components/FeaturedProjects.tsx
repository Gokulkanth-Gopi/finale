"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { projects as allProjects } from '../lib/projects-data';

const projects = allProjects.slice(0, 3);

export default function FeaturedProjects() {
  return (
    <section className="py-32 px-6 bg-[#eaeff3] dark:bg-[#231f20] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-6">
              Selected <br />
              <span className="text-[#3fbfb8]">Projects.</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">
              Explore our portfolio of successful digital transformations and high-impact custom applications.
            </p>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white border-b-2 border-[#3fbfb8] pb-1 hover:text-[#3fbfb8] transition-colors"
          >
            <span>View All Work</span>
            <ArrowUpRight className="w-5 h-5 text-[#3fbfb8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={project.slug} href={`/work/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/3] cursor-pointer shadow-xl border border-gray-200 dark:border-white/10 block"
              >
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-8">
                  <span className="text-[#3fbfb8] text-xs md:text-sm font-black uppercase tracking-wider mb-1 md:mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-2xl font-black text-white flex items-center justify-between leading-tight">
                    <span className="pr-2">{project.title}</span>
                    <div className="bg-[#3fbfb8] text-[#082b2b] p-2 md:p-3 rounded-full shadow-lg group-hover:bg-[#5bd6ce] transition-colors duration-300 shrink-0">
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
