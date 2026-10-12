"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { X, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-5 left-0 right-0 z-50 px-4 sm:px-6"
      >
        <div className="container">
          <motion.div
            animate={{
              backgroundColor: scrolled
                ? 'rgba(255,255,255,0.82)'
                : 'rgba(255,255,255,0.55)',
              borderColor: scrolled
                ? 'rgba(0,0,0,0.07)'
                : 'rgba(255,255,255,0.4)',
              boxShadow: scrolled
                ? '0 8px 40px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)'
                : '0 2px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)',
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative flex items-center justify-between rounded-[22px] px-4 py-2.5 border backdrop-blur-2xl"
            style={{ WebkitBackdropFilter: 'blur(24px)', backdropFilter: 'blur(24px)' }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="relative w-9 h-9"
              >
                <Image
                  src="/assets/MainlogoDP.png"
                  alt="ZyncWeb Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              <span className="hidden sm:block font-black text-[13px] tracking-tight text-gray-900 group-hover:text-[#3fbfb8] transition-colors duration-300">
                ZyncWeb
              </span>
            </Link>

            {/* Desktop Nav Links — centered pill */}
            <div className="hidden md:flex items-center gap-1 bg-black/[0.05] rounded-full px-1.5 py-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link key={item.path} href={item.path} className="relative">
                    <motion.span
                      className={`relative z-10 block px-4 py-1.5 text-[12px] font-semibold tracking-wide rounded-full transition-colors duration-200 ${isActive
                        ? 'text-white'
                        : 'text-gray-700 hover:text-gray-900'
                        }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full"
                          style={{ zIndex: -1, backgroundColor: '#3fbfb8' }}
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      {item.name}
                    </motion.span>
                  </Link>
                );
              })}
            </div>

            {/* Right — CTA + Mobile Toggle */}
            <div className="flex items-center gap-2">
              {/* Desktop CTA */}
              <Link href="/contact" className="hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative overflow-hidden bg-[#3fbfb8] hover:bg-[#5bd6ce] text-[#082b2b] text-[12px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full transition-colors"
                >
                  <span className="relative z-10">Start Project</span>
                  {/* Shimmer effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                </motion.button>
              </Link>

              {/* Mobile hamburger */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                className="flex md:hidden items-center justify-center w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <X size={16} className="text-gray-800" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu size={16} className="text-gray-800" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-2 rounded-[20px] border border-black/[0.06] overflow-hidden"
                style={{
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  background: 'rgba(255,255,255,0.88)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.06)',
                }}
              >
                <div className="p-3 flex flex-col gap-1">
                  {navItems.map((item, i) => {
                    const isActive = pathname === item.path;
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.2 }}
                      >
                        <Link
                          href={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-[14px] font-semibold transition-all duration-200 ${isActive
                            ? 'text-white'
                            : 'text-gray-700 hover:bg-black/5 hover:text-gray-900'
                            }`}
                          style={isActive ? { backgroundColor: '#3fbfb8' } : {}}
                        >
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3fbfb8] flex-shrink-0" />
                          )}
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05, duration: 0.2 }}
                    className="mt-2 pt-2 border-t border-black/[0.05]"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <button className="w-full bg-[#3fbfb8] hover:bg-[#5bd6ce] text-[#082b2b] text-[12px] font-bold tracking-widest uppercase px-6 py-3.5 rounded-[14px] transition-colors">
                        Start Project →
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
