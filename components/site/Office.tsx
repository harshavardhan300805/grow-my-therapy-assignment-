import { MapPin, Video, ShieldCheck, Sun } from 'lucide-react';

const officeImages = [
  {
    url: '/maya/office-1.jpg',
    alt: "Dr. Reynolds' Santa Monica therapy office — sitting area with exposed brick and natural light",
    span: '',
  },
  {
    url: '/maya/office-2.jpg',
    alt: "Dr. Reynolds' Santa Monica therapy office — quiet seating area with bookshelf",
    span: '',
  },
];

const features = [
  {
    icon: MapPin,
    title: 'Santa Monica, CA',
    text: '123th Street 45 W, Santa Monica, CA 90401',
  },
  {
    icon: Video,
    title: 'In-Person & Telehealth',
    text: 'Secure telehealth sessions available for clients across California.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy & Safety',
    text: 'A quiet, private space designed to feel calm, safe, and grounding.',
  },
  {
    icon: Sun,
    title: 'Natural Light & Calm',
    text: 'An uncluttered, comfortable environment that helps you feel at ease.',
  },
];

export default function Office() {
  return (
    <section id="office" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-clay-500 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Our Office
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-sage-800 leading-tight mb-5 text-balance">
            A calm space for healing in Santa Monica
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed text-pretty">
            Every detail of the space — the natural light, the quiet, the uncluttered layout — is chosen with one goal: helping you exhale a little before we&apos;ve even started talking.
          </p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 auto-rows-[260px] md:auto-rows-[320px]">
          {officeImages.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden group ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent" />
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-sage-50 rounded-xl p-6 border border-sage-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sage-100 text-sage-600 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-sage-800 font-semibold mb-2">
                  {f.title}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {f.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
