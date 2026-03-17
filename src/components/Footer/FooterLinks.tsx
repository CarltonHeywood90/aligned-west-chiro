import Link from 'next/link';

const LINKS = [
  { 
    section: 'Services', 
    items: [
      { name: 'Chiropractic', href: '/services/chiropractic' },
      { name: 'NAET', href: '/services/naet' },
      { name: 'Soul Alignment', href: '/services/soul-alignment' }
    ] 
  },
  {
    section: 'Legal',
    items: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Accessibility', href: '/accessibility-statement' },
    ]
  }
];

export default function FooterLinks() {
  return (
    /* We use justify-center on the outer flex and text-center for the internal alignment */
    <div className="flex justify-center w-full px-4">
      <div className="grid grid-cols-2 gap-12 md:gap-24 text-center">
        {LINKS.map((group) => (
          <div key={group.section} className="flex flex-col items-center">
            <h4 className="font-serif text-lg text-clinic-gold mb-4 tracking-wide">
              {group.section}
            </h4>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}