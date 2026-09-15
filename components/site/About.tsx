import { CheckCircle2 } from 'lucide-react';

const credentials = [
  'Licensed Clinical Psychologist (PsyD)',
  'Cognitive-Behavioral Therapy (CBT)',
  'EMDR & Trauma-Informed Care',
  'Mindfulness & Body-Oriented Techniques',
];

export default function About() {
  return (
    <section id="about" className="bg-sage-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/maya/maya-headshot-about.jpg"
                alt="Dr. Maya Reynolds, licensed clinical psychologist"
                className="w-full h-[520px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl bg-clay-400/20 -z-0 hidden sm:block" />
            <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-sage-300/30 -z-0 hidden sm:block" />
          </div>

          {/* Content side */}
          <div>
            <p className="text-clay-500 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
              About Dr. Maya Reynolds, PsyD
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-sage-800 leading-tight mb-6 text-balance">
              A warm, collaborative approach grounded in evidence-based care
            </h2>
            <p className="text-sage-700 text-base sm:text-lg leading-relaxed mb-5 text-pretty">
              I work with adults in Santa Monica who look like they have it together from the outside, but who are quietly running on empty — caught in overthinking, tension they can&apos;t shake, or a constant low hum of dread. Many are entrepreneurs, creatives, or professionals who&apos;ve spent years pushing through and are ready for something more sustainable.
            </p>
            <p className="text-sage-700 text-base sm:text-lg leading-relaxed mb-8 text-pretty">
              My style is warm and collaborative, with enough structure to feel supportive and enough room to actually breathe and reflect. Depending on what will help most, I bring in CBT, EMDR, mindfulness, and body-based work — because how you feel isn&apos;t just in your head, it&apos;s in your body too.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {credentials.map((c) => (
                <div key={c} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-sage-500 shrink-0" />
                  <span className="text-sage-700 text-sm font-medium">{c}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-sage-600 text-white px-7 py-3.5 rounded-full font-medium hover:bg-sage-700 transition-colors shadow-sm"
            >
              Schedule a Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
