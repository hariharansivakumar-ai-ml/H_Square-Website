import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Properties', href: '/properties' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[100] py-2 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-500"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-14 h-14 overflow-hidden rounded-lg shrink-0">
            <img src={logo} alt="HSquare Promoters Logo" className="w-full h-full object-contain border-none" />
          </div>
          <span className="font-serif font-bold text-[#1A335E] text-xs md:text-sm tracking-wider group-hover:text-[#D6B97B] transition-colors uppercase leading-tight">
            HSquare <br /> Promoters
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[10px] font-bold text-gray-900 hover:text-[#D6B97B] transition-colors relative group uppercase tracking-widest ${
                location.pathname === link.href ? 'text-[#D6B97B]' : ''
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#D6B97B] transition-all duration-300 ${
                location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact" className="px-5 py-2.5 bg-[#1A335E] text-white rounded-lg font-bold text-[11px] hover:bg-[#D6B97B] transition-all duration-300 uppercase tracking-widest">
            Get in touch
          </Link>
          <a href="https://soft.landsndeeds.com/login" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#D6B97B] text-white rounded-lg font-bold text-[11px] hover:bg-[#1A335E] transition-all duration-300 uppercase tracking-widest">
            Login
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-700 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-serif font-bold text-gray-900 hover:text-[#D6B97B] transition-colors uppercase tracking-widest"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <a href="https://soft.landsndeeds.com/login" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif font-bold text-gray-900 hover:text-[#D6B97B] transition-colors uppercase tracking-widest mt-2 animate-pulse">
            Login
          </a>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-6 px-12 py-4 bg-[#D6B97B] text-[#0F0F0F] rounded-full font-bold text-lg shadow-xl shadow-black/20 uppercase tracking-widest text-center">
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
