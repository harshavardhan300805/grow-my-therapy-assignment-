import { Brain, ShieldCheck, Flame } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Anxiety & Stress Therapy',
    description:
      'Cognitive-behavioral therapy (CBT) and mindfulness-based practices to help you understand both the emotional and physiological sides of anxiety. Learn to quiet constant worry, release tension held in your body, and feel more regulated in your daily life — not just during sessions.',
    image: 'https://images.pexels.com/photos/4909322/pexels-photo-4909322.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    alt: 'A woman meditating outdoors, embracing peace and mindfulness',
  },
  {
    icon: ShieldCheck,
    title: 'Trauma & EMDR Therapy',
    description:
      'Trauma-informed therapy paced carefully with an emphasis on safety and stabilization. EMDR and body-oriented techniques help you process single-incident trauma as well as complex, long-standing patterns — so earlier experiences no longer control your relationships, confidence, or sense of safety.',
    image: 'https://images.pexels.com/photos/29194061/pexels-photo-29194061.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    alt: 'A woman in a thoughtful, relaxed pose by a window',
  },
  {
    icon: Flame,
    title: 'Burnout & Perfectionism Therapy',
    description:
      'For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and develop more sustainable ways of living and working — moving beyond symptom relief toward genuine resilience and self-understanding.',
    image: 'https://images.pexels.com/photos/20193053/pexels-photo-20193053.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
    alt: 'A woman sitting by a window, lost in thought in soft light',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-clay-500 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Specialized Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-sage-800 leading-tight mb-4 text-balance">
            Therapy that meets you where you are
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed text-pretty">
            Three areas of focused expertise, grounded in evidence-based methods and tailored to your unique experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <article
                key={i}
                className="group bg-sage-50 rounded-2xl overflow-hidden border border-sage-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-sage-100 text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl text-sage-800 font-semibold">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sage-600 text-sm leading-relaxed text-pretty">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
