import ContactInfo from './ContactInfo';
import FooterLinks from './FooterLinks';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-clinic-dark text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <ContactInfo />
        <FooterLinks />

        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-xl text-clinic-gold">Connect</h4>
          <SocialIcons />
          <a href="/contact" className="bg-clinic-gold text-white text-center py-3 px-6 hover:bg-opacity-90 transition">
            Book Appointment
          </a>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-white/10 text-sm text-gray-400">
        © {new Date().getFullYear()} AlignedWest Chiropractic. All Rights Reserved.
      </div>
    </footer>
  );
}