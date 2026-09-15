import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage-800 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-sage-600 text-white">
              <Heart className="w-4 h-4" strokeWidth={2} fill="currentColor" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg font-semibold text-sage-100">
                Dr. Maya Reynolds, PsyD
              </span>
              <span className="text-[11px] tracking-widest uppercase text-sage-400">
                Licensed Clinical Psychologist
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#home" className="text-sm text-sage-300 hover:text-sage-100 transition-colors">Home</a>
            <a href="#who-i-help" className="text-sm text-sage-300 hover:text-sage-100 transition-colors">Who I Help</a>
            <a href="#services" className="text-sm text-sage-300 hover:text-sage-100 transition-colors">Services</a>
            <a href="#about" className="text-sm text-sage-300 hover:text-sage-100 transition-colors">About</a>
            <a href="#office" className="text-sm text-sage-300 hover:text-sage-100 transition-colors">Our Office</a>
            <a href="#faqs" className="text-sm text-sage-300 hover:text-sage-100 transition-colors">FAQs</a>
            <a href="#contact" className="text-sm text-sage-300 hover:text-sage-100 transition-colors">Contact</a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-sage-700 text-center">
          <p className="text-sm text-sage-400">
            &copy; {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
          </p>
          <p className="text-xs text-sage-500 mt-2">
            In-person therapy in Santa Monica, CA &middot; Telehealth across California
          </p>
        </div>
      </div>
    </footer>
  );
}
