import Link from 'next/link';

const LINKS = [
  { 
    section: 'Services', 
    items: [
      { name: 'Chiropractic', href: '/services/chiropractic' },
      { name: 'NAET', href: '/services/naet' },
      { name: 'Soul Alignment Session', href: '/services/soul-alignment' }
    ] 
  },
]

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {LINKS.map((group) => (
        <div key={group.section}>
          <h4 className="font-serif text-xl text-clinic-gold mb-3">{group.section}</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {group.items.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className="hover:text-clinic-gold transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}