import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { NAV_LINKS } from './navLinks';

export default function Navigation() {
  return (
    <nav className="bg-clinic-navy sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LOGO REPLACEMENT */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/assets/logo-contrast.svg" // Path relative to the public folder
            alt="AlignedWest Chiropractic Logo"
            width={180}  // Adjust these dimensions to fit your nav height
            height={50} 
            priority     // Tells Next.js to load this immediately (LCP)
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-wider ${
                link.text === 'Book Now'
                  ? 'bg-clinic-dark text-white px-5 py-2 hover:bg-clinic-gold transition'
                  : 'text-clinic-gray hover:text-clinic-gold'
              }`}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}