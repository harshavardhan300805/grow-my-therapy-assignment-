import { Sparkles } from 'lucide-react';

export default function Hope() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage-100 text-sage-600 mb-6">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-sage-800 leading-tight mb-5 text-balance">
            You&apos;re holding onto hope that things can feel different than they do right now.
          </h2>
          <p className="text-sage-600 text-lg italic mb-6 font-serif">
            Dr. Maya Reynolds wants to help you get there.
          </p>
          <p className="text-sage-700 text-base sm:text-lg leading-relaxed text-pretty">
            Maybe you look like you have it together on paper — but underneath, you&apos;re running on empty, replaying conversations, or bracing for the next thing to go wrong. Whether it&apos;s anxiety, an experience that still lingers, or the exhaustion of always pushing through, you don&apos;t have to keep carrying it by yourself. Therapy can be the place where you finally slow down, make sense of what you&apos;ve been through, and build a steadier way forward.
          </p>
        </div>
      </div>
    </section>
  );
}
