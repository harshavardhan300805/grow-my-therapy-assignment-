const tags = [
  'Anxiety',
  'Panic Attacks',
  'Trauma & PTSD',
  'EMDR Therapy',
  'CBT',
  'Mindfulness-Based Therapy',
  'Burnout',
  'Perfectionism',
  'Body-Oriented Therapy',
  'Stress Management',
  'Emotional Regulation',
  'High-Achievers & Entrepreneurs',
  'Self-Discovery',
  'Santa Monica Therapist',
];

export default function ExpertiseTags() {
  return (
    <section className="bg-sage-700 py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <p className="text-sage-200 text-sm tracking-[0.2em] uppercase mb-6 font-medium">
          Our Areas of Expertise
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm sm:text-base font-medium text-white bg-white/10 border border-white/20 rounded-full px-5 py-2.5 hover:bg-white/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sage-200 mt-6 text-sm">&hellip;and more.</p>
      </div>
    </section>
  );
}
