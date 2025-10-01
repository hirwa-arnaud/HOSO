
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiClock } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#0B1730] text-gray-300 pt-16 pb-8 px-6 md:px-20">
      {/* Logo */}
      <div className="flex justify-center mb-10">
        <img src="/logo.png" alt="HOSO Logo" className="h-14" />
      </div>

      {/* Main Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">QUICK LINKS</h4>
          <ul className="space-y-2">
            <li><a href="#gallery" className="hover:text-cyan-400">Gallery</a></li>
            <li><a href="#news" className="hover:text-cyan-400">News</a></li>
            <li><a href="#membership" className="hover:text-cyan-400">Membership</a></li>
            <li><a href="#services" className="hover:text-cyan-400">Services</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-4 text-white">LEGAL</h4>
          <ul className="space-y-2">
            <li><a href="#terms" className="hover:text-cyan-400">Conditions & Terms</a></li>
            <li><a href="#privacy" className="hover:text-cyan-400">Privacy & Policy</a></li>
            <li><a href="#faqs" className="hover:text-cyan-400">FAQ’s</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-white">CONTACT</h4>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FiPhone className="text-cyan-400" /> 0788798247 / 078450920
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaWhatsapp className="text-cyan-400" /> Whatsapp
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FiMail className="text-cyan-400" /> hoso@rw.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FiClock className="text-cyan-400" /> 09:00 - 20:00 hours
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Social + Info */}
      <div className="flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-cyan-400"><FaTwitter /></a>
          <a href="#" className="hover:text-cyan-400"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-cyan-400"><FaFacebookF /></a>
        </div>

        {/* Bottom Info */}
        <div className="text-center text-sm text-gray-400 max-w-4xl">
          <p>© 2025 CDA TECH. Rwanda, Kigali, Kicukiro, Busanza ST 27</p>
          <p>Inscripción en el Registro Mercantil de Barcelona. Tomo 46806, Folio 37, Hoja 525271.</p>
          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>
        </div>

        <p className="mt-6 text-gray-500 text-xs">
          Lift no cobra comisiones de ningún tipo
        </p>
      </div>
    </footer>
  );
}
