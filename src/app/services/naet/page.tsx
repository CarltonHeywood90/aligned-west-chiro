import Link from 'next/link'; // Fixed: Use next/link
import Image from 'next/image';

export default function NaetPage() {
  // Turncloud URL
  const bookingUrl = "https://portal.turncloud.com/?at=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjM3NDg4IiwibmJmIjoxNzcwMTYyOTMxLCJleHAiOjE3NzAxNjY1MzEsImlhdCI6MTc3MDE2MjkzMX0.3ZcI3tZsdybz50JXl4_agQuW8DchBanHsXTy5pYGXDw";

  return (
    <article className="bg-clinic-off-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-slate-200/50 rounded-sm overflow-hidden">
        
        {/* HERO IMAGE */}
        <div className="relative w-full h-[400px]">
          <Image 
            src="/assets/images/NAET-vial-kit-1.jpg" 
            fill 
            className="object-cover" 
            alt="NAET Therapy" 
            priority
          />
        </div>

        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-serif text-clinic-dark mb-6">NAET Treatments</h1>
          <div className="h-1 w-20 bg-clinic-gold mb-8"></div>

          <section className="prose prose-slate max-w-none text-clinic-gray leading-relaxed space-y-6">
            <p className="text-lg text-clinic-dark font-medium">
              Address allergies and sensitivities with Nambudripad&apos;s Allergy Elimination Techniques (NAET).
            </p>
            <p>
              NAET is a non-invasive, drug-free solution for those struggling with environmental, food, and chemical sensitivities. This holistic approach operates on the principle that allergies are essentially energy blockages in the body.
            </p>
            <p>
              By combining chiropractic principles, acupressure, and nutritional awareness, NAET works to &quot;reprogram&quot; the nervous system so it no longer views specific substances as threats. This balances the body&apos;s reaction, promoting a state of internal harmony.
            </p>
            
            <h3 className="text-2xl font-serif text-clinic-dark mt-8">What to Expect</h3>
            <p>
              A 30-minute NAET session involves muscle testing (kinesiology) to identify sensitivities, followed by a specific sequence of acupressure along the spine. After the treatment, there is a short 20-minute period of quiet relaxation in the clinic to allow the body to integrate the new energy pattern.
            </p>

            {/* Adjusted Booking Button */}
            <div className="pt-8">
              <Link 
                href={bookingUrl}
                target="_blank"
                className="inline-block bg-clinic-navy text-white px-12 py-4 text-sm uppercase tracking-widest font-bold hover:bg-clinic-navy transition-all duration-300 shadow-md"
              >
                Book NAET Treatment
              </Link>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}