"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.201-.351.226-.652.075s-1.272-.469-2.424-1.496c-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.238-.244-.589-.493-.509-.678-.519l-.578-.01c-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.229 3.111c.15.201 2.122 3.24 5.141 4.542.718.31 1.279.495 1.716.634.721.23 1.377.197 1.896.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351zm-5.468 7.551a9.9 9.9 0 0 1-5.045-1.385l-.362-.215-3.748.883.899-3.654-.236-.376A9.896 9.896 0 0 1 2.071 12c0-5.488 4.456-9.944 9.933-9.944 5.477 0 9.933 4.456 9.933 9.944 0 5.488-4.456 9.933-9.933 9.933zm0-21.933C5.373 0 .004 5.373.004 12c0 2.115.55 4.103 1.516 5.836L.004 24l6.326-1.49A11.96 11.96 0 0 0 12.004 24c6.627 0 11.996-5.373 11.996-12S18.631 0 12.004 0z" />
  </svg>
);

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-center">


      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918667212177"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:shadow-emerald-500/30 transition-shadow"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </motion.a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#3fbfb8] text-[#082b2b] p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-[#5bd6ce] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3fbfb8]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
