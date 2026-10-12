"use client";

import { motion } from 'motion/react';
import { projects } from '../../lib/projects-data';
import Link from 'next/link';
import CtaBanner from '../../components/CtaBanner';

export default function ProjectsClient() {
  return (
    <>
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Featured Projects</h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">Selected case studies demonstrating our approach to product design and engineering.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <motion.article key={p.slug} className="bg-white/5 rounded-2xl p-6 border border-white/5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <img src={p.heroImage} alt={p.title} className="w-full h-44 object-cover rounded-xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-white/60 mb-4">{p.description}</p>
                <Link href={`/work/${p.slug}`} className="text-emerald-400 font-bold">View Case Study →</Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      <CtaBanner />
    </>
  );
}
