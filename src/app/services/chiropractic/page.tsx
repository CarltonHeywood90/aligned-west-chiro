import Link from 'next/link'; // Use next/link for navigation
import Image from 'next/image';

export default function ChiropracticPage() {
  // We'll use the specific Turncloud URL for this service
  const bookingUrl = "https://portal.turncloud.com/?at=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjM3NDg4IiwibmJmIjoxNzcwMTYyOTMxLCJleHAiOjE3NzAxNjY1MzEsImlhdCI6MTc3MDE2MjkzMX0.3ZcI3tZsdybz50JXl4_agQuW8DchBanHsXTy5pYGXDw";

  return (
    <article className="bg-clinic-off-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-slate-200/50 rounded-sm overflow-hidden">
        
        {/* HERO IMAGE */}
        <div className="relative w-full h-[400px]">
          <Image 
            src="/assets/images/img_massageBack.jpg" 
            fill 
            className="object-cover" 
            alt="Chiropractic Care" 
            priority
          />
        </div>

        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-serif text-clinic-dark mb-6">Chiropractic Adjustments</h1>
          <div className="h-1 w-20 bg-clinic-gold mb-8"></div>

          <section className="prose prose-slate max-w-none text-clinic-gray leading-relaxed space-y-6">
            <p className="text-lg text-clinic-dark font-medium">
              Restore alignment and alleviate discomfort with personalized chiropractic adjustments.
            </p>
            <p>
              At AlignedWest, we view the spine as the central highway of your nervous system. When misalignments (subluxations) occur, they can interrupt the flow of energy and communication between your brain and your body, leading to pain, decreased mobility, and a general sense of fatigue.
            </p>
            <p>
              Using precise, gentle techniques—including manual adjustments, Activator Methods, and Sacral Occipital Technique (SOT)—we target these misalignments to support your body's natural healing processes.
            </p>
            
            <h3 className="text-2xl font-serif text-clinic-dark mt-8">What to Expect</h3>
            <p>
              Your 15-minute session is focused and intentional. We begin by assessing your current mobility and identifying areas of tension. The adjustment itself is tailored to your specific needs, aiming to release pressure and restore the structural integrity of your system.
            </p>

            {/* Adjusted Booking Button */}
            <div className="pt-8">
              <Link 
                href={bookingUrl}
                target="_blank"
                className="inline-block bg-clinic-yellow text-clinic-dark px-12 py-4 text-sm uppercase tracking-widest font-bold hover:bg-clinic-navy transition-all duration-300 shadow-md"
              >
                Book Your Adjustment
              </Link>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}