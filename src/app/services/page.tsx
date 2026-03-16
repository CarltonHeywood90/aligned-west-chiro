import Link from 'next/link';

const SERVICES = [
  {
    title: 'Chiropractic Adjustments',
    duration: '15 min session',
    description: 'Restore alignment and alleviate discomfort with personalized chiropractic adjustments. Using precise techniques, we target misalignments to improve mobility, reduce pain, and support your body&apos;s natural healing processes.',
    href: '/services/chiropractic',
    bookingUrl: "https://portal.turncloud.com/?at=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjM3NDg4IiwibmJmIjoxNzcwMTYyOTMxLCJleHAiOjE3NzAxNjY1MzEsImlhdCI6MTc3MDE2MjkzMX0.3ZcI3tZsdybz50JXl4_agQuW8DchBanHsXTy5pYGXDw"
  },
  {
    title: 'NAET Treatments',
    duration: '30 min session',
    description: 'Address allergies and sensitivities with Nambudripad&apos;s Allergy Elimination Techniques (NAET). This holistic approach combines chiropractic principles, acupuncture/acupressure, and nutrition to desensitize and balance your body&apos;s reaction to allergens.',
    href: '/services/naet',
    bookingUrl: "https://portal.turncloud.com/?at=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjM3NDg4IiwibmJmIjoxNzcwMTYyOTMxLCJleHAiOjE3NzAxNjY1MzEsImlhdCI6MTc3MDE2MjkzMX0.3ZcI3tZsdybz50JXl4_agQuW8DchBanHsXTy5pYGXDw"
  },
  {
    title: 'Soul Alignment Session',
    duration: '60 min session',
    description: 'A transformative session blending intuitive healing, muscle testing, energy clearing, breathwork, and gentle chiropractic alignment. Designed to release stress, rebalance your energy, and reconnect you with your body&apos;s inner wisdom.',
    href: '/services/soul-alignment',
    bookingUrl: "https://portal.turncloud.com/?at=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjM3NDg4IiwibmJmIjoxNzcwMTYyOTMxLCJleHAiOjE3NzAxNjY1MzEsImlhdCI6MTc3MDE2MjkzMX0.3ZcI3tZsdybz50JXl4_agQuW8DchBanHsXTy5pYGXDw"
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-clinic-off-white py-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-clinic-dark mb-4">Our Services</h1>
          <div className="h-1 w-20 bg-clinic-gold mx-auto mb-6"></div>
          <p className="text-clinic-gray max-w-2xl mx-auto">
            Experience tailored care designed to optimize your health and well-being through integrative, holistic techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-white border border-slate-200 flex flex-col h-full">
              {/* Top Content Area */}
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-serif text-clinic-dark mb-2">{service.title}</h3>
                <p className="text-clinic-gold text-sm font-bold uppercase tracking-wider mb-4">{service.duration}</p>
                <p className="text-clinic-gray leading-relaxed">{service.description}</p>
              </div>
              
              {/* Bottom Action Area */}
              <div className="px-8 pb-8 space-y-3">
                <Link 
                  href={service.bookingUrl}
                  target="_blank"
                  className="block text-center bg-clinic-yellow text-clinic-dark py-3 text-xs uppercase tracking-widest font-bold hover:bg-clinic-navy transition-colors shadow-sm"
                >
                  Book Now
                </Link>
                <Link 
                  href={service.href} 
                  className="block text-center bg-clinic-navy text-white py-3 text-xs uppercase tracking-widest font-bold hover:bg-clinic-navy hover:text-white transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}