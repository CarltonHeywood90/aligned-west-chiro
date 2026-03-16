import Image from 'next/image';
import Link from 'next/link';
import { Users, BookOpen, Award, CheckCircle } from 'lucide-react';

export default function ApprenticeshipPage() {
  // Application deadline logic
  const applicationDeadline = "May 15, 2026";

  return (
    <main className="bg-clinic-off-white min-h-screen">
      {/* 1. Hero Banner Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/assets/images/Wade Prone.png"
          alt="Apprenticeship Program Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-clinic-navy/10"></div>
      </div>

      {/* 2. Page Header & Intro */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-clinic-dark mb-6">
            Massage Therapy Apprenticeship
          </h1>
          <div className="h-1 w-20 bg-clinic-gold mx-auto mb-10"></div>
          
          <div className="inline-block bg-white border border-clinic-gold/30 px-8 py-4 rounded-sm shadow-sm mb-8">
            <p className="text-clinic-gray text-xs uppercase tracking-[0.2em] font-bold mb-1">
              Next Application Deadline
            </p>
            <p className="text-2xl font-serif text-clinic-dark">
              {applicationDeadline}
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-clinic-gray text-lg leading-relaxed italic mb-4">
              Thank you for your interest in the Massage Therapy Apprenticeship offered through AlignedWest Chiropractic.
            </p>
            <p className="text-clinic-gray text-lg leading-relaxed">
              Below you will find a clear overview of the program, expectations, and opportunities available to you as a student apprentice.
            </p>
          </div>

          <Link 
            href="https://form.jotform.com/253270906369059"
            target="_blank"
            className="inline-block bg-clinic-navy text-white px-12 py-4 text-sm uppercase tracking-widest font-bold hover:bg-clinic-gold transition-all duration-300 shadow-md"
          >
            Apply Now
          </Link>
        </div>

        {/* 3. Program Value Propositions */}
        <section className="border-t border-slate-200 pt-16 mb-20">
          <h2 className="text-3xl font-serif text-clinic-dark mb-8 text-center">Why Choose Our Program?</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-clinic-gray leading-relaxed">
              Our blended learning approach combines the best of in-person instruction with flexible online coursework.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-clinic-off-white flex items-center justify-center rounded-full mb-6">
                <Users className="text-clinic-gold" size={24} />
              </div>
              <h3 className="text-xl font-serif text-clinic-dark mb-4">Small Cohort Learning</h3>
              <p className="text-clinic-gray text-sm leading-relaxed">
                Personalized attention with a maximum of 4 students per instructor, ensuring quality education and mentorship.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-clinic-off-white flex items-center justify-center rounded-full mb-6">
                <BookOpen className="text-clinic-gold" size={24} />
              </div>
              <h3 className="text-xl font-serif text-clinic-dark mb-4">Comprehensive Curriculum</h3>
              <p className="text-clinic-gray text-sm leading-relaxed">
                1,000+ hours of total learning covering 15 massage modalities and all required subjects.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-clinic-off-white flex items-center justify-center rounded-full mb-6">
                <Award className="text-clinic-gold" size={24} />
              </div>
              <h3 className="text-xl font-serif text-clinic-dark mb-4">MBLEx Preparation</h3>
              <p className="text-clinic-gray text-sm leading-relaxed">
                Focused exam prep with weekly quizzes and 3 full practice exams to ensure you&apos;re ready to pass.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Educational Model Section */}
        <section className="border-t border-slate-200 pt-16 mb-20">
          <h2 className="text-3xl font-serif text-clinic-dark mb-8 text-center">52 Week Blended Learning Program</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-clinic-gray leading-relaxed">
              This apprenticeship follows a blended educational model designed for comprehensive skill mastery:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm">
              <h3 className="text-xl font-serif text-clinic-dark mb-4 text-center">Structured Coursework</h3>
              <ul className="text-clinic-gray text-sm space-y-3">
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> 52 weeks of comprehensive curriculum</li>
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> 10-15 hours of learning per week</li>
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> Digital and downloadable materials</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm">
              <h3 className="text-xl font-serif text-clinic-dark mb-4 text-center">Hands-On Training</h3>
              <ul className="text-clinic-gray text-sm space-y-3">
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> 2 days per week (Tue & Fri)</li>
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> 6-8 hours of in-person instruction</li>
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> Bi-monthly supervised clinics</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm">
              <h3 className="text-xl font-serif text-clinic-dark mb-4 text-center">Exam Preparation</h3>
              <ul className="text-clinic-gray text-sm space-y-3">
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> Weekly 5-10 min knowledge checks</li>
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> Focused MBLEx readiness training</li>
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> 3 full MBLEx practice exams</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Modalities List */}
        <section className="border-t border-slate-200 pt-16 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif text-clinic-dark mb-6">
              Master Multiple Massage Techniques
            </h2>
            <p className="text-clinic-gray leading-relaxed">
              Gain expertise in a diverse range of massage modalities to serve your future clients&apos; unique needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 max-w-3xl mx-auto bg-white p-10 shadow-sm border border-slate-200/60">
            {[
              "Swedish Massage", "Deep Tissue", "Prenatal Massage",
              "Trigger Point Therapy", "Thai Massage (Intro)", "Cupping Techniques",
              "Athlete Massage", "Craniosacral Therapy", "Acupressure",
              "Reflexology", "Foot Zoning (Intro)", "Chair Massage",
              "Hot Stone Massage", "Aromatherapy", "Lymphatic Massage (Intro)"
            ].map((modality) => (
              <div key={modality} className="flex items-center text-sm text-clinic-gray">
                <span className="w-1.5 h-1.5 bg-clinic-gold rounded-full mr-3 flex-shrink-0"></span>
                {modality}
              </div>
            ))}
          </div>
        </section>

        {/* 6. State Requirements vs Program Comparison */}
        <section className="border-t border-slate-200 pt-16 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-clinic-dark mb-6">
              What to Expect from the Program
            </h2>
            <div className="h-1 w-16 bg-clinic-gold mx-auto mb-6"></div>
            <p className="text-clinic-gray leading-relaxed">
              Our apprenticeship is structured to provide a balance of academic rigor and hands-on clinical practice. We exceed state requirements to ensure total career readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Anatomy & Physiology", desc: <><p>State: 125 hours</p><p className="font-bold text-clinic-dark">Program: 150 hours</p></> },
              { title: "Pathology", desc: <><p>State: 40 hours</p><p className="font-bold text-clinic-dark">Program: 40 hours</p></> },
              { title: "Massage Theory", desc: <><p>State: 125 hours</p><p className="font-bold text-clinic-dark">Program: 165 hours</p></> },
              { title: "Sanitation & Safety", desc: "Comprehensive training in universal precautions and hygiene standards." },
              { title: "Clinical Practice", desc: "Extensive hands-on experience with real clients in supervised settings." },
              { title: "Business & Ethics", desc: "Professional practices, client communication, and business fundamentals." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm hover:border-clinic-gold/50 transition-colors duration-300">
                <h4 className="text-lg font-serif text-clinic-dark mb-3">{item.title}</h4>
                <div className="text-clinic-gray text-sm leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Final CTA Section */}
        <section className="border-t border-slate-200 pt-16 text-center">
          <h2 className="text-3xl font-serif text-clinic-dark mb-8">Begin Your Journey</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div>
              <p className="text-clinic-gold font-bold mb-2">All Materials Included</p>
              <p className="text-sm text-clinic-gray">Study materials, exam prep, and digital resources</p>
            </div>
            <div>
              <p className="text-clinic-gold font-bold mb-2">Flexible Schedule</p>
              <p className="text-sm text-clinic-gray">Balance learning with existing commitments</p>
            </div>
            <div>
              <p className="text-clinic-gold font-bold mb-2">Expert Instructors</p>
              <p className="text-sm text-clinic-gray">Learn from experienced, licensed therapists</p>
            </div>
          </div>
          
          <div className="bg-clinic-navy text-white p-12 rounded-sm shadow-lg">
            <h3 className="text-2xl font-serif mb-4">Ready to Start Your Journey?</h3>
            <p className="opacity-90 mb-8 max-w-xl mx-auto">
              Join our next cohort and begin your career as a certified massage therapist. Application deadline is {applicationDeadline}.
            </p>
            <Link 
              href="https://form.jotform.com/253270906369059"
              target="_blank"
              className="inline-block bg-white text-clinic-dark px-12 py-4 text-sm uppercase tracking-widest font-bold hover:bg-clinic-gold hover:text-white transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}