import Link from 'next/link';

export default function Services() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h4 className="font-serif text-lg text-clinic-gold mb-4 uppercase tracking-wider">
        Services
      </h4>
      <ul className="space-y-3 text-sm text-gray-300">
        <li>
          <Link href="/services/chiropractic" className="hover:text-white transition-colors">
            Chiropractic
          </Link>
        </li>
        <li>
          <Link href="/services/naet" className="hover:text-white transition-colors">
            NAET
          </Link>
        </li>
        <li>
          <Link href="/services/soul-alignment" className="hover:text-white transition-colors">
            Soul Alignment
          </Link>
        </li>
      </ul>
    </div>
  );
}