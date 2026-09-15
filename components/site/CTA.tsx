import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="bg-sage-700 py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sage-600/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-clay-500/15 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <p className="text-sage-200 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
          Get in Touch
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5 text-balance">
          Ready to take the first step?
        </h2>
        <p className="text-sage-100/90 text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
          Reach out today to schedule a session with Dr. Maya Reynolds. Whether you prefer in-person therapy in Santa Monica or secure telehealth across California, you&apos;ll find a warm, grounded space to begin your work.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:contact@drmayareynolds.com"
            className="inline-flex items-center justify-center gap-2 bg-clay-500 text-white px-7 py-3.5 rounded-full font-medium hover:bg-clay-600 transition-all shadow-lg group"
          >
            Book an Appointment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:+13105550100"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-7 py-3.5 rounded-full font-medium hover:bg-white/20 transition-all"
          >
            <Phone className="w-4 h-4" />
            (310) 555-0100
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3 text-sage-100">
            <MapPin className="w-5 h-5 text-sage-300 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white mb-1">Office</p>
              <p className="text-sm text-sage-200">123th Street 45 W<br />Santa Monica, CA 90401</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sage-100">
            <Mail className="w-5 h-5 text-sage-300 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white mb-1">Email</p>
              <p className="text-sm text-sage-200">contact@drmayareynolds.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sage-100">
            <Phone className="w-5 h-5 text-sage-300 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white mb-1">Phone</p>
              <p className="text-sm text-sage-200">(310) 555-0100</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
