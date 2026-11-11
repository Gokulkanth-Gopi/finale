"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, Send, Clock, CheckCircle2, AlertCircle, Loader2, RotateCcw } from 'lucide-react';
import Image from 'next/image';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.201-.351.226-.652.075s-1.272-.469-2.424-1.496c-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.238-.244-.589-.493-.509-.678-.519l-.578-.01c-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.229 3.111c.15.201 2.122 3.24 5.141 4.542.718.31 1.279.495 1.716.634.721.23 1.377.197 1.896.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351zm-5.468 7.551a9.9 9.9 0 0 1-5.045-1.385l-.362-.215-3.748.883.899-3.654-.236-.376A9.896 9.896 0 0 1 2.071 12c0-5.488 4.456-9.944 9.933-9.944 5.477 0 9.933 4.456 9.933 9.944 0 5.488-4.456 9.933-9.933 9.933zm0-21.933C5.373 0 .004 5.373.004 12c0 2.115.55 4.103 1.516 5.836L.004 24l6.326-1.49A11.96 11.96 0 0 0 12.004 24c6.627 0 11.996-5.373 11.996-12S18.631 0 12.004 0z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: 'Web Development',
    message: ''
  });

  // Honeypot field for bot spam prevention
  const [honeypot, setHoneypot] = useState('');

  // Submission & validation state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmittedWhatsappUrl, setLastSubmittedWhatsappUrl] = useState('');
  const [submittedCustomerName, setSubmittedCustomerName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Reset error banner when user begins correcting fields
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (isSubmitting) return;

    // Client-side validation
    const trimmedFirstName = formData.firstName.trim();
    const trimmedLastName = formData.lastName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedFirstName) {
      setStatus('error');
      setErrorMessage('Please enter your first name.');
      return;
    }

    if (!trimmedLastName) {
      setStatus('error');
      setErrorMessage('Please enter your last name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!trimmedMessage || trimmedMessage.length < 5) {
      setStatus('error');
      setErrorMessage('Please enter a message of at least 5 characters describing your project.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    // Prepare WhatsApp message URL according to existing format
    const text = `Hello ZyncWeb,\n\nMy name is ${trimmedFirstName} ${trimmedLastName}.\nEmail: ${trimmedEmail}\nProject Type: ${formData.projectType}\n\nMessage:\n${trimmedMessage}`;
    const whatsappUrl = `https://wa.me/918667212177?text=${encodeURIComponent(text)}`;
    setLastSubmittedWhatsappUrl(whatsappUrl);
    setSubmittedCustomerName(`${trimmedFirstName} ${trimmedLastName}`);

    try {
      // 1. Submit to server API route for direct email notification + Make webhook
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: trimmedFirstName,
          lastName: trimmedLastName,
          email: trimmedEmail,
          projectType: formData.projectType,
          message: trimmedMessage,
          honeypot,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        const errorMsg =
          data?.error ||
          'Failed to send direct email notification. Please check your details or contact us directly on WhatsApp.';
        setStatus('error');
        setErrorMessage(errorMsg);
        setIsSubmitting(false);
        // Do NOT clear form so user can retry or adjust input
        return;
      }

      // 2. Submission accepted by backend!
      setStatus('success');
      setIsSubmitting(false);

      // 3. Open WhatsApp in a new tab (preserving existing redirect behavior)
      // Make failures never block this because backend returns success: true
      try {
        window.open(whatsappUrl, '_blank');
      } catch (waErr) {
        console.warn('Automatic WhatsApp opening restricted by browser; link displayed.', waErr);
      }

      // 4. Reset form ONLY after backend accepts submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        projectType: 'Web Development',
        message: '',
      });
      setHoneypot('');
    } catch (err: unknown) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage(
        'A network connection error occurred while sending your message. Please try again or reach us via WhatsApp.'
      );
      setIsSubmitting(false);
    }
  };

  const handleResetSuccess = () => {
    setStatus('idle');
    setErrorMessage('');
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
                    <a href="mailto:info@zyncweb.dev" className="text-gray-600 dark:text-gray-300 hover:text-[#3fbfb8] font-medium transition-colors block text-lg">
                      info@zyncweb.dev
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

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-xl relative"
          >
            <h3 className="text-3xl font-black mb-8 text-gray-900 dark:text-white tracking-tight">Send Us a Message</h3>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* SUCCESS STATE VIEW */
                <motion.div
                  key="success-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6 py-6"
                >
                  <div className="p-8 rounded-3xl bg-gradient-to-b from-[#e6fbf9] to-[#f0fdfc] dark:from-[#0d2a28] dark:to-[#081f1e] border border-[#3fbfb8]/40 text-center shadow-lg">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#3fbfb8]/20 flex items-center justify-center text-[#00bba7] dark:text-[#3fbfb8]">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                      Inquiry Received!
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed mb-6">
                      Thank you{submittedCustomerName ? `, ${submittedCustomerName}` : ''}! Your message has been safely received and direct email notification has been sent to our team at{' '}
                      <span className="font-bold text-[#00bba7] dark:text-[#3fbfb8]">info@zyncweb.dev</span>. We will get back to you within 24 hours.
                    </p>

                    {/* Preserved WhatsApp CTA Button */}
                    <div className="space-y-3 pt-2">
                      <a
                        href={lastSubmittedWhatsappUrl || 'https://wa.me/918667212177'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-base shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                      >
                        <WhatsAppIcon className="w-6 h-6 shrink-0" />
                        <span>Chat on WhatsApp (+91 8667212177)</span>
                      </a>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        A WhatsApp chat tab was also opened automatically with your message pre-filled.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetSuccess}
                    className="w-full py-3.5 px-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#3fbfb8] text-gray-700 dark:text-gray-200 font-bold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-all cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3fbfb8]"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Send Another Message</span>
                  </button>
                </motion.div>
              ) : (
                /* CONTACT FORM VIEW */
                <form key="contact-form" className="space-y-6" onSubmit={handleSubmit} noValidate>
                  {/* ERROR BANNER */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 flex items-start gap-4 shadow-sm"
                      role="alert"
                    >
                      <AlertCircle className="w-6 h-6 shrink-0 text-red-600 dark:text-red-400 mt-0.5" />
                      <div className="text-sm font-medium leading-relaxed">
                        <p className="font-bold mb-1">Submission Failed</p>
                        <p>{errorMessage}</p>
                        <p className="mt-2 text-xs text-red-700 dark:text-red-300">
                          Direct assistance:{' '}
                          <a
                            href="https://wa.me/918667212177"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-bold hover:text-red-900 dark:hover:text-white"
                          >
                            Chat on WhatsApp (+91 8667212177)
                          </a>{' '}
                          or email{' '}
                          <a href="mailto:info@zyncweb.dev" className="underline font-bold hover:text-red-900 dark:hover:text-white">
                            info@zyncweb.dev
                          </a>
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Honeypot Field for Spam Bot Protection (Hidden from legitimate users) */}
                  <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                    <label htmlFor="hp_company">Please leave this field empty</label>
                    <input
                      type="text"
                      id="hp_company"
                      name="hp_company"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#3fbfb8] dark:focus:border-[#3fbfb8] focus-visible:ring-2 focus-visible:ring-[#3fbfb8]/30 transition-colors font-medium disabled:opacity-60"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#3fbfb8] dark:focus:border-[#3fbfb8] focus-visible:ring-2 focus-visible:ring-[#3fbfb8]/30 transition-colors font-medium disabled:opacity-60"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#3fbfb8] dark:focus:border-[#3fbfb8] focus-visible:ring-2 focus-visible:ring-[#3fbfb8]/30 transition-colors font-medium disabled:opacity-60"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#3fbfb8] dark:focus:border-[#3fbfb8] focus-visible:ring-2 focus-visible:ring-[#3fbfb8]/30 transition-colors font-medium text-gray-800 dark:text-gray-200 cursor-pointer disabled:opacity-60"
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
                    <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#3fbfb8] dark:focus:border-[#3fbfb8] focus-visible:ring-2 focus-visible:ring-[#3fbfb8]/30 transition-colors font-medium disabled:opacity-60"
                      placeholder="Tell us about your project goals and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full bg-[#3fbfb8] hover:bg-[#5bd6ce] text-[#082b2b] font-black text-lg py-4 rounded-2xl shadow-xl shadow-[#3fbfb8]/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3fbfb8]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
