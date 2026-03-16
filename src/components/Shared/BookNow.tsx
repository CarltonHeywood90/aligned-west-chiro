import Link from 'next/link';

export default function BookNow() {
  return (
    <div className="flex justify-center my-12">
      <Link 
        href="https://portal.turncloud.com/?at=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." 
        target="_blank"
        className="bg-clinic-gold text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-clinic-navy transition-all duration-300"
      >
        Book Now
      </Link>
    </div>
  );
}