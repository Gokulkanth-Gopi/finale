"use client";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Globe,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Rocket,
  MessageSquare,
  Settings,
  Smartphone,
  Palette,
  BarChart3,
  Tag,
  Layers,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
  </svg>
);

const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 192 192" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M141.5 89C140.7 88.6 139.9 88.2 139 87.8C137.5 60.5 122.6 44.9 97.6 44.7H97.2C82.2 44.7 69.8 51.1 62.1 62.8L75.9 72.2C81.6 63.5 90.6 61.7 97.2 61.7C105.7 61.7 111.9 64.1 116 68.8C118.9 72.2 120.9 76.9 121.8 82.9C114.5 81.6 106.6 81.2 98.1 81.7C74.3 83.1 59 97 60 116.3C60.6 126.1 65.4 134.5 73.8 140C80.8 144.7 89.9 146.9 99.3 146.4C111.8 145.7 121.6 141 128.4 132.3C133.6 125.7 136.8 116.9 137.7 107.2C138.9 107.4 140.1 107.6 141.4 107.7C149.7 108.7 156.4 102.7 157.3 94.4C158.3 86.1 152.3 78.8 144 77.9L141.5 89ZM98.4 129.5C91.2 129.9 84.4 127.9 82.5 124.3C80.6 120.7 85.9 114.6 94.5 114.1C102.6 113.7 110.2 115.4 116.9 118.9C114.1 124.8 107.4 129 98.4 129.5Z" />
  </svg>
);

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/zyncwebsolutions', icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/zyncwebsolutions/', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1CT5qCd7rS/', icon: Facebook },
  { label: 'Pinterest', href: 'https://in.pinterest.com/Zyncweb/', icon: PinterestIcon },
  { label: 'Threads', href: 'https://www.threads.com/@zyncwebsolutions', icon: ThreadsIcon },
].filter((link) => Boolean(link.href));

export default function FooterNew() {


  return (
    <footer className="relative bg-[#f0f7f9] dark:bg-[#121619] text-[#0b132a] dark:text-white transition-colors duration-300">
      {/* 2. MAIN FOOTER BODY */}
      <div className="pt-10 pb-8 px-6 bg-gradient-to-b from-[#f0f7f9] via-[#e4f1f5] to-[#d8ecf2] dark:from-[#121619] dark:via-[#0e1215] dark:to-[#0a0d0f] relative overflow-hidden">
        {/* Background Subtle Watermark Logo & Swoosh */}
        <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10 flex items-center justify-center">
          <div className="relative w-[600px] h-[400px]">
            <Image src="/assets/MainlogoDP.png" alt="Watermark" fill className="object-contain" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-8 text-center md:text-left">
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-4 space-y-3 flex flex-col items-center md:items-start">
              <Link href="/" className="flex items-center justify-center md:justify-start gap-3">
                <div className="relative w-10 h-10">
                  <Image src="/assets/MainlogoDP.png" alt="ZyncWeb Logo" fill className="object-contain" />
                </div>
                <span className="font-black text-2xl tracking-tight text-[#0b132a] dark:text-white">
                  ZyncWeb
                </span>
              </Link>

              <p className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug">
                Crafting bold brands and immersive digital experiences that help modern businesses grow.
              </p>

              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
                Your business partner in creating innovative digital solutions that drive real results.
              </p>

              {/* Social Icons Row */}
              <div className="flex items-center justify-center md:justify-start gap-2 pt-1 w-full">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-full bg-white dark:bg-white/10 text-gray-700 dark:text-gray-200 shadow-sm border border-gray-200/80 dark:border-white/10 flex items-center justify-center hover:bg-[#00bba7] hover:text-white hover:border-[#00bba7] dark:hover:bg-[#00bba7] dark:hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="lg:col-span-2 flex flex-col items-center md:items-start">
              <h3 className="text-sm font-black text-[#0b132a] dark:text-white mb-1 uppercase tracking-wider">Quick Links</h3>
              <div className="w-8 h-0.5 bg-[#00bba7] rounded-full mb-4 mx-auto md:mx-0" />

              <ul className="space-y-2.5 text-sm font-bold">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About', href: '/about' },
                  { name: 'Services', href: '/services' },
                  { name: 'Work', href: '/work' },
                  { name: 'Contact', href: '/contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-300 hover:text-[#00bba7] dark:hover:text-[#00bba7] transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-[#00bba7] transition-transform group-hover:translate-x-1" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Our Services */}
            <div className="lg:col-span-3 flex flex-col items-center md:items-start">
              <h3 className="text-sm font-black text-[#0b132a] dark:text-white mb-1 uppercase tracking-wider">Our Services</h3>
              <div className="w-8 h-0.5 bg-[#00bba7] rounded-full mb-4 mx-auto md:mx-0" />

              <ul className="space-y-2.5 text-sm font-bold text-gray-600 dark:text-gray-300">
                {[
                  { name: 'Web Development', icon: Globe },
                  { name: 'App Development', icon: Smartphone },
                  { name: 'UI/UX Design', icon: Palette },
                  { name: 'Digital Marketing', icon: BarChart3 },
                  { name: 'Branding', icon: Tag },
                  { name: 'Custom Solutions', icon: Layers },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name} className="flex items-center justify-center md:justify-start gap-3 hover:text-[#00bba7] transition-colors cursor-pointer w-full">
                      <Icon className="w-4 h-4 text-[#00bba7] shrink-0" />
                      <span>{item.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Col 4: Get In Touch */}
            <div className="lg:col-span-3 space-y-3 flex flex-col items-center md:items-start w-full">
              <h3 className="text-sm font-black text-[#0b132a] dark:text-white mb-1 uppercase tracking-wider">Get In Touch</h3>
              <div className="w-8 h-0.5 bg-[#00bba7] rounded-full mb-3 mx-auto md:mx-0" />

              {/* Email Card */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 p-2.5 rounded-xl bg-white dark:bg-white/10 shadow-sm border border-gray-100 dark:border-white/10 hover:border-[#00bba7]/30 transition-colors w-full text-center md:text-left">
                <div className="w-8 h-8 rounded-lg bg-[#00bba7]/15 flex items-center justify-center text-[#00bba7] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <a href="mailto:info@zyncweb.dev" className="font-bold text-sm text-[#0b132a] dark:text-white hover:text-[#00bba7] transition-colors block">
                    info@zyncweb.dev
                  </a>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">We reply within 24 hours</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 p-2.5 rounded-xl bg-white dark:bg-white/10 shadow-sm border border-gray-100 dark:border-white/10 hover:border-[#00bba7]/30 transition-colors w-full text-center md:text-left">
                <div className="w-8 h-8 rounded-lg bg-[#00bba7]/15 flex items-center justify-center text-[#00bba7] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <a href="tel:+918667212177" className="font-bold text-sm text-[#0b132a] dark:text-white hover:text-[#00bba7] transition-colors block">
                    +91 8667212177
                  </a>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Mon - Sat, 10AM - 6PM</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 p-2.5 rounded-xl bg-white dark:bg-white/10 shadow-sm border border-gray-100 dark:border-white/10 hover:border-[#00bba7]/30 transition-colors w-full text-center md:text-left">
                <div className="w-8 h-8 rounded-lg bg-[#00bba7]/15 flex items-center justify-center text-[#00bba7] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#0b132a] dark:text-white">Salem, Tamil Nadu, India</p>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Our Office</p>
                </div>
              </div>


            </div>
          </div>

          {/* 3. BOTTOM COPYRIGHT & BACK-TO-TOP BAR */}
          <div className="pt-6 border-t border-gray-300/70 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              © 2026 ZyncWeb Solutions. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-8 text-xs font-bold text-gray-600 dark:text-gray-400">
              <Link href="/privacy-policy" className="hover:text-[#00bba7] transition-colors">Privacy Policy</Link>
              <span className="text-gray-300 dark:text-white/20 hidden md:inline">|</span>
              <Link href="/terms-of-service" className="hover:text-[#00bba7] transition-colors">Terms of Service</Link>
              <span className="text-gray-300 dark:text-white/20 hidden md:inline">|</span>
              <Link href="/cookie-policy" className="hover:text-[#00bba7] transition-colors">Cookie Policy</Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
