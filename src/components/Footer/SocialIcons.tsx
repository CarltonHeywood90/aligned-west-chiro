export default function SocialIcons() {
  return (
    /* Added justify-center for mobile, justify-start for desktop */
    <div className="flex justify-center md:justify-start gap-3">
      <a href="https://facebook.com/@alignedwest" aria-label="Facebook" className="text-white hover:text-clinic-gold">FB</a>
      <a href="https://instagram.com/dr.weston.sorenson" aria-label="Instagram" className="text-white hover:text-clinic-gold">IG</a>
    </div>
  );
}