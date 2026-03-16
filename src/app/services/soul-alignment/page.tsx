import Link from 'next/link';
import Image from 'next/image';

export default function SoulAlignmentPage() {
  // Turncloud URL
  const bookingUrl = "https://portal.turncloud.com/?at=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjM3NDg4IiwibmJmIjoxNzcwMTYyOTMxLCJleHAiOjE3NzAxNjY1MzEsImlhdCI6MTc3MDE2MjkzMX0.3ZcI3tZsdybz50JXl4_agQuW8DchBanHsXTy5pYGXDw";

  return (
    <article className="bg-clinic-off-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-slate-200/50 rounded-sm overflow-hidden">
        
        {/* HERO IMAGE */}
        <div className="relative w-full h-[400px]">
          <Image 
            src="/assets/images/imgServicesSoul.jpg" // Ensure this matches your file name
            fill 
            className="object-cover" 
            alt="Soul Alignment Session" 
            priority
          />
        </div>

        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-serif text-clinic-dark mb-6">Soul Alignment Session</h1>
          <div className="h-1 w-20 bg-clinic-gold mb-8"></div>

          <section className="prose prose-slate max-w-none text-clinic-gray leading-relaxed space-y-6">
            <p className="text-lg text-clinic-dark font-medium">
              A transformative session blending intuitive healing, energy clearing, and physical alignment.
            </p>
            <p>
              Soul Alignment is our most comprehensive and integrative offering. It is designed for those seeking to move beyond physical symptoms and address the deeper energetic and emotional patterns that influence overall well-being.
            </p>
            <p>
              By combining muscle testing, breathwork, and gentle chiropractic care, we work to identify and release stored stress and stuck energy. This process helps to re-center your nervous system and reconnect you with your body&apos;s innate intelligence.
            </p>
            
            <h3 className="text-2xl font-serif text-clinic-dark mt-8">What to Expect</h3>
            <p>
              During this 60-minute intensive, we create a sacred space for healing. The session is highly intuitive and may include a variety of modalities depending on your needs at the moment. You will leave feeling lighter, more grounded, and more aligned with your authentic self.
            </p>

            {/* Booking Button Section */}
            <div className="pt-8">
              <Link 
                href={bookingUrl}
                target="_blank"
                className="inline-block bg-clinic-yellow text-clinic-dark px-12 py-4 text-sm uppercase tracking-widest font-bold hover:bg-clinic-navy transition-all duration-300 shadow-md"
              >
                Book Soul Alignment
              </Link>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}