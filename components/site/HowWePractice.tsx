import { CheckCircle2 } from 'lucide-react';

const points = [
  'Sessions tailored to you — never a one-size-fits-all script',
  'Trauma work paced carefully, with safety and stabilization first',
  'A mix of talk therapy and body-based tools, chosen for what you need',
  'Support for the whole picture: mind, body, and daily life',
];

export default function HowWePractice() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1 h-[320px] sm:h-[420px]">
            <img
              src="/maya/office-2.jpg"
              alt="A quiet corner of Dr. Reynolds' Santa Monica office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-clay-500 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
              How We Work Together
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-sage-800 leading-tight mb-6 text-balance">
              You&apos;re balancing so much already — here, you get to put yourself first
            </h2>
            <p className="text-sage-700 text-base sm:text-lg leading-relaxed mb-6 text-pretty">
              We&apos;ll spend real time understanding your story before jumping to solutions. Some sessions will gently challenge how you&apos;ve been seeing things; others will simply make room to feel what you feel. Either way, the aim isn&apos;t just fewer symptoms — it&apos;s a stronger, steadier relationship with yourself over time.
            </p>
            <div className="space-y-3">
              {points.map((p) => (
                <div key={p} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-sage-500 shrink-0 mt-0.5" />
                  <span className="text-sage-700 text-sm sm:text-base font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
