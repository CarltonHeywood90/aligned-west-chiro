import { Clock, MapPin, Phone, Info, Car } from 'lucide-react'; // Using lucide-react for subtle icons
import Image from 'next/image';

export default function ClinicInfoPage() {
  return (
    <section className="bg-clinic-off-white min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-clinic-dark mb-4">Clinic Information</h1>
          <div className="h-1 w-20 bg-clinic-gold mx-auto mb-6"></div>
          <p className="text-clinic-gray">Everything you need to know for your visit to AlignedWest.</p>
        </div>

        {/* Image */}
        <div className="relative w-1/2 h-1/2 md:h-[300px] mb-16 align-middle mx-auto">
          <Image 
            src="/assets/images/Troon_Park.jpg" 
            alt="AlignedWest Chiropractic Clinic Front" 
            fill 
            className="object-cover object-center rounded-sm shadow-sm border border-slate-200/50"
            priority
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Hours Card */}
          <div className="bg-white p-8 shadow-sm border border-slate-200/50 flex flex-col items-center text-center">
            <Clock className="text-clinic-gold mb-4" size={32} />
            <h3 className="text-xl font-serif text-clinic-dark mb-4">Hours of Operation</h3>
            <p className="text-clinic-dark font-medium">Monday 10:00 AM – 7:00 PM</p>
            <p className="text-clinic-dark font-medium">Tuesday 10:00 AM – 5:00 PM</p>
            <p className="text-clinic-dark font-medium">Wednesday 1:00 PM – 7:00 PM</p>
            <p className="text-clinic-dark font-medium">Thursday 11:00 AM – 6:00 PM</p>
            <p className="text-clinic-dark font-medium">Friday 8:00 AM – 4:00 PM</p>
            <p className="text-clinic-gray text-sm mt-2">Closed on weekends</p>
          </div>

          {/* Address Card */}
          <div className="bg-white p-8 shadow-sm border border-slate-200/50 flex flex-col items-center text-center">
            <MapPin className="text-clinic-gold mb-4" size={32} />
            <h3 className="text-xl font-serif text-clinic-dark mb-4">Location</h3>
            <p className="text-clinic-gray text-sm">Troon Park Building</p>
            <p className="text-clinic-dark font-medium">574 S State Street, Suite 232</p>
            <p className="text-clinic-dark font-medium">Orem, UT 84058</p>
          </div>

          {/* Contact Card */}
          <div className="bg-white p-8 shadow-sm border border-slate-200/50 flex flex-col items-center text-center">
            <Phone className="text-clinic-gold mb-4" size={32} />
            <h3 className="text-xl font-serif text-clinic-dark mb-4">Contact</h3>
            <p className="text-clinic-gray text-sm">Phone</p>
            <p className="text-clinic-dark font-medium">(801) 658-9185</p>
            <p className="text-clinic-gray text-sm mt-2">Email</p>
            <p className="text-clinic-dark font-medium">connect@alignedwest.com</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Important Info Card */}
          <div className="bg-clinic-navy text-white p-10 shadow-lg rounded-sm">
            <div className="flex items-center mb-6">
              <Info className="text-clinic-gold mr-3" size={28} />
              <h2 className="text-2xl font-serif">Important Info</h2>
            </div>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start">
                <span className="text-clinic-gold mr-2">•</span>
                15 min are added to new patient appointments
              </li>
              <li className="flex items-start">
                <span className="text-clinic-gold mr-2">•</span>
                Hydrate before and after to aid recovery
              </li>
              <li className="flex items-start">
                <span className="text-clinic-gold mr-2">•</span>
                Wear comfortable clothing
              </li>
              <li className="flex items-start">
                <span className="text-clinic-gold mr-2">•</span>
                Share any relevant health concerns beforehand
              </li>
            </ul>
          </div>

          {/* Parking Information Card */}
          <div className="bg-white p-10 shadow-sm border border-slate-200/50 rounded-sm">
            <div className="flex items-center mb-6">
              <Car className="text-clinic-gold mr-3" size={28} />
              <h2 className="text-2xl font-serif text-clinic-dark">Parking Information</h2>
            </div>
            <div className="space-y-4 text-clinic-gray text-sm leading-relaxed">
              <p className="font-medium text-clinic-dark">Free parking available</p>
              <p>Park on the northeast side of Troon Park Building</p>
              <p>Accessible parking spaces available near both entrances</p>
              
              {/* Map Placeholder */}
            <div className="mt-6 w-full h-48 bg-slate-100 border border-slate-200 overflow-hidden shadow-sm rounded-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.610111100506!2d-111.7018314!3d40.4174786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d830026e959d3%3A0xe5452d37c9569727!2s574%20S%20State%20St%20%23232%2C%20Orem%2C%20UT%2084058!5e0!3m2!1sen!2sus!4v1741000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="AlignedWest Chiropractic Location"
            ></iframe>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}