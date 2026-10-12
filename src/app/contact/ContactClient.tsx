"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Clock, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: 'Web Development',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Hello ZyncWeb,\n\nMy name is ${formData.firstName} ${formData.lastName}.\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`;
    
    // WhatsApp Link
    const whatsappUrl = `https://wa.me/918667212177?text=${encodeURIComponent(text)}`;
    
    // Mailto Link
    const mailtoUrl = `mailto:info@zyncweb.dev?subject=New Project Inquiry: ${encodeURIComponent(formData.projectType)}&body=${encodeURIComponent(text)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Trigger email client in the current window (won't redirect page for mailto)
    window.location.href = mailtoUrl;
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      projectType: 'Web Development',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#eaeff3] dark:bg-[#231f20] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* ========================================================================= */}
        {/* TOP CONTACT BANNER (MATCHING ABOUT PAGE BANNER) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-b from-[#eaf6f8] to-[#f4f9fb] dark:from-[#181d22] dark:to-[#121619] border border-gray-200/80 dark:border-white/10 shadow-2xl p-4 sm:p-8 md:p-16 mb-12 md:mb-20 text-center min-h-[250px] md:min-h-[620px] flex flex-col items-center justify-center">
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

          {/* CENTER BANNER CONTENT */}
          <div className="relative z-10 max-w-2xl mx-auto text-center py-6">

            {/* Main Title with Cyan Underline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-[#0b132a] dark:text-white leading-[0.95] mb-6 relative inline-block text-center"
            >
              Get in{' '}
              <span className="bg-gradient-to-r from-[#00bba7] via-[#3fbfb8] to-[#5bd6ce] bg-clip-text text-transparent">
                Touch
              </span>
              <span className="text-[#0b132a] dark:text-white">.</span>
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
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed mb-10"
            >
              Have a project in mind, an idea to discuss, or looking for a digital growth partner? We&apos;d love to hear from you.
            </motion.p>
          </div>
        </section>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-lg">
              <h3 className="text-3xl font-black mb-8 text-gray-900 dark:text-white tracking-tight">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#3fbfb8]/10 flex items-center justify-center shrink-0 shadow-inner">
                    <Mail className="w-7 h-7 text-[#3fbfb8]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Email Us</h4>
                    <a href="mailto:Info@zyncweb.dev" className="text-gray-600 dark:text-gray-300 hover:text-[#3fbfb8] font-medium transition-colors block text-lg">
                      Info@zyncweb.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#3fbfb8]/10 flex items-center justify-center shrink-0 shadow-inner">
                    <Phone className="w-7 h-7 text-[#3fbfb8]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Call Us</h4>
                    <a href="tel:+918667212177" className="text-gray-600 dark:text-gray-300 hover:text-[#3fbfb8] font-medium transition-colors block text-lg">
                      +91 8667212177
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#3fbfb8]/10 flex items-center justify-center shrink-0 shadow-inner">
                    <MapPin className="w-7 h-7 text-[#3fbfb8]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
                      ZyncWeb Solutions, Salem, Tamil Nadu, India
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="rounded-[2.5rem] bg-[#231f20] text-white border border-white/10 p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#3fbfb8]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 text-[#3fbfb8] font-bold">
                  <Clock className="w-5 h-5" />
                  <span>Office Hours</span>
                </div>
                <h4 className="text-2xl font-black mb-2">Mon – Fri: 9:00 AM – 6:00 PM IST</h4>
                <p className="text-gray-300 font-medium">We respond to all project inquiries within 24 hours.</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-xl relative"
          >
            <h3 className="text-3xl font-black mb-8 text-gray-900 dark:text-white tracking-tight">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#3fbfb8] dark:focus:border-[#3fbfb8] transition-colors font-medium"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#3fbfb8] dark:focus:border-[#3fbfb8] transition-colors font-medium"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#3fbfb8] dark:focus:border-[#3fbfb8] transition-colors font-medium"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Project Type</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#3fbfb8] dark:focus:border-[#3fbfb8] transition-colors font-medium text-gray-800 dark:text-gray-200"
                >
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>App Development</option>
                  <option>Social Media Marketing</option>
                  <option>Content & Branding</option>
                  <option>Other Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#3fbfb8] dark:focus:border-[#3fbfb8] transition-colors font-medium"
                  placeholder="Tell us about your project goals and timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#3fbfb8] hover:bg-[#5bd6ce] text-[#082b2b] font-black text-lg py-4 rounded-2xl shadow-xl shadow-[#3fbfb8]/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
