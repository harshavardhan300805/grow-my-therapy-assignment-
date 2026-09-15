const groups = [
  {
    title: 'High-Achieving Professionals',
    image: 'https://images.pexels.com/photos/29376608/pexels-photo-29376608.jpeg?auto=compress&cs=tinysrgb&w=800&h=650',
    alt: 'A thoughtful professional pausing by a window',
    text: "You're capable, driven, and used to holding things together. Underneath that, therapy gives you a place to put the pressure down and reconnect with yourself.",
  },
  {
    title: 'Burnout & Overwhelm',
    image: 'https://images.pexels.com/photos/7792752/pexels-photo-7792752.jpeg?auto=compress&cs=tinysrgb&w=800&h=650',
    alt: 'An exhausted person resting at their desk after a long stretch of overwork',
    text: 'When pushing through has stopped working, we slow things down together — untangling the pressure, the perfectionism, and the constant sense of not doing enough.',
  },
  {
    title: 'Adults Healing from Trauma',
    image: 'https://images.pexels.com/photos/18325427/pexels-photo-18325427.jpeg?auto=compress&cs=tinysrgb&w=800&h=650',
    alt: 'A person sitting quietly in a green park, finding a moment of calm',
    text: "Whether it's a single event or something that stretches back further, trauma work here is paced carefully — the goal is safety and steadiness, not just re-living the past.",
  },
];

export default function WhoWeHelp() {
  return (
    <section id="who-i-help" className="bg-sage-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-clay-500 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Who I Help
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-sage-800 leading-tight mb-4 text-balance">
            You deserve a space where your story is actually heard
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed text-pretty">
            Nothing you bring in is too heavy, too small, or too complicated to work through together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div
              key={g.title}
              className="bg-white rounded-2xl overflow-hidden border border-sage-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={g.image} alt={g.alt} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-sage-800 font-semibold mb-2">{g.title}</h3>
                <p className="text-sage-600 text-sm leading-relaxed">{g.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
