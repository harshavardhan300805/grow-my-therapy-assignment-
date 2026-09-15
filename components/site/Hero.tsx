import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-sage-50 pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div className="animate-fade-up">
            <p className="text-clay-500 text-sm tracking-[0.2em] uppercase mb-5 font-medium">
              In-Person &amp; Telehealth Therapy in Santa Monica, CA
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-sage-800 leading-[1.15] text-balance mb-6">
              Rebuild your footing and finally begin to{' '}
              <span className="italic text-sage-600">thrive</span>.
            </h1>
            <p className="text-sage-700 text-lg sm:text-xl leading-relaxed mb-8 text-pretty max-w-xl">
              Specialized therapy for adults carrying anxiety, trauma, or burnout — so you can move from just getting through the day to actually living it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-clay-500 text-white px-7 py-3.5 rounded-full font-medium hover:bg-clay-600 transition-all shadow-lg hover:shadow-xl group"
              >
                Book an Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-white border border-sage-200 text-sage-800 px-7 py-3.5 rounded-full font-medium hover:bg-sage-100 transition-all"
              >
                Meet Dr. Reynolds
              </a>
            </div>
          </div>

          {/* Image collage side */}
          <div className="relative h-[420px] sm:h-[480px] lg:h-[560px]">
            <div className="absolute top-0 right-0 w-[78%] h-[80%] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/maya/office-1.jpg"
                alt="Dr. Reynolds' Santa Monica therapy office, a calm and inviting sitting area"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-xl border-4 border-sage-50">
              <img
                src="/maya/maya-headshot.jpg"
                alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-clay-400/20 -z-0 hidden sm:block" />
            <div className="absolute -bottom-6 right-10 w-16 h-16 rounded-full bg-sage-300/30 -z-0 hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
