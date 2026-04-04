import Link from 'next/link';

export default function BookNow() {
  return (
    <div className="flex justify-center my-12">
      <Link 
        href={process.env.NEXT_PUBLIC_BOOK_NOW_LINK || '#'}
        target="_blank"
        className="bg-clinic-navy text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-clinic-gold transition-all duration-300"
      >
        Book Now
      </Link>
    </div>
  );
}