import Image from 'next/image';

export default function SoulAlignmentPage() {
  return (
    <article className="bg-clinic-off-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-slate-200/50 rounded-sm overflow-hidden">
        
        {/* HERO IMAGE PLACEHOLDER */}
        <div className="relative w-full h-[400px] bg-slate-200 flex items-center justify-center text-slate-400 italic">
          
          {<Image src="/assets/images/imgServicesSoul.jpg" fill className="object-cover" alt="Soul Alignment" />}
        </div>

        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-serif text-clinic-dark mb-6">Soul Alignment Session</h1>
          <div className="h-1 w-20 bg-clinic-gold mb-8"></div>

          <section className="prose prose-slate max-w-none text-clinic-gray leading-relaxed space-y-6">
            <p className="text-lg text-clinic-dark font-medium">
              A transformative journey to release stress and reconnect with your inner wisdom.
            </p>
            <p>
              The Soul Alignment session is our most integrative offering, designed for those seeking deep transformation beyond physical symptom relief. It honors the sacred connection between the mind, the body, and the spirit.
            </p>
            <p>
              During this 60-minute experience, we blend intuitive healing, muscle testing, energy clearing, and breathwork with gentle chiropractic alignment. This multi-layered approach helps identify and release emotional or energetic blockages that may be manifesting as physical tension or spiritual stagnation.
            </p>
            <h3 className="text-2xl font-serif text-clinic-dark mt-8">What to Expect</h3>
            <p>
              This hour-long session is collaborative and deeply personal. We create a safe, intentional space where you can let go of the outside world. Through a combination of dialogue, energetic assessment, and physical bodywork, we help your system realign with its highest potential.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}