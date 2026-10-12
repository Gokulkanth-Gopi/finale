import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locations | ZyncWeb Solutions',
  description: 'ZyncWeb Solutions headquarters and contact details in Salem, Tamil Nadu, India.',
};

export default function LocationsPage() {
  return (
    <main className="w-full pt-32 pb-24 px-6 bg-[#eaeff3] dark:bg-[#231f20] text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-center">
          Our <span className="text-[#3fbfb8]">Location.</span>
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 text-center max-w-2xl mx-auto mb-16 font-medium">
          Headquartered in Salem, Tamil Nadu — providing web development, design, and digital growth solutions across India and globally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-[2.5rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 shadow-xl">
            <h3 className="text-2xl font-black mb-3 text-[#3fbfb8]">ZyncWeb Solutions — HQ</h3>
            <p className="text-gray-700 dark:text-gray-200 text-lg font-medium leading-relaxed">
              Salem, Tamil Nadu, India
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 font-semibold">
              Open: Mon–Fri, 9:00 AM – 6:00 PM IST
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 shadow-xl">
            <h3 className="text-2xl font-black mb-3 text-[#3fbfb8]">Direct Contact</h3>
            <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
              Email:{' '}
              <a href="mailto:Info@zyncweb.dev" className="text-[#3fbfb8] hover:underline">
                Info@zyncweb.dev
              </a>
            </p>
            <p className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-2">
              Phone:{' '}
              <a href="tel:+918667212177" className="text-[#3fbfb8] hover:underline">
                +91 8667212177
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
