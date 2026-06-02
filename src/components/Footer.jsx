import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-[#1A335E] pt-20 pb-12 border-t border-[#D6B97B]/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-4 group cursor-pointer">
              <div className="w-20 h-20 overflow-hidden rounded-lg bg-white p-1 shadow-md shrink-0">
                <img src={logo} alt="HSquare Promoters Logo" className="w-full h-full object-contain border-none" />
              </div>
              <span className="font-serif font-bold text-white text-base md:text-lg tracking-wider group-hover:text-[#D6B97B] transition-colors uppercase leading-tight">
                HSquare <br /> Promoters
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed font-medium">
              HSquare Promoters helps you discover premium properties and make secure, verified real estate investments.
            </p>
          </div>

          {/* Quick Links / Site Map */}
          <div className="space-y-6 md:pl-8">
            <h4 className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-xs">Site Map</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
                { name: 'Gallery', href: '/gallery' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-[#D6B97B] transition-colors flex items-center justify-between group font-medium text-sm max-w-[150px]">
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-xs">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <MapPin className="text-[#D6B97B] shrink-0 mt-1" size={18} />
                <span className="text-white/80 text-sm leading-relaxed font-semibold">
                  xxxxxxxx, xxxxxxxx, xxxxxxxx - xxxxxx.
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-[#D6B97B] shrink-0" size={18} />
                <span className="text-white/80 text-sm leading-relaxed font-semibold font-sans">
                  xxxxxxxxxx, xxxxxxxxxx
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-[#D6B97B] shrink-0" size={18} />
                <span className="text-white/80 text-sm leading-relaxed font-semibold">
                  xxxxxxxxxx@xxxxxxxx.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
            © 2026 HSquare Promoters. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
