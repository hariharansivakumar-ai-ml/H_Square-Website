import { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Home as HomeIcon, DollarSign } from 'lucide-react';
import gsap from 'gsap';
import { heroContent } from '../data/content';

// Import video for background
import heroVideo from '../assets/Home_Hero.mp4';

const Hero = () => {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slides = [
    {
      tagline: "Building Trust. Creating Value.",
      headline: "Premium Real Estate",
      subtext: "At HSquare Promoters, we help individuals, families, and investors discover high-potential real estate opportunities with confidence."
    },
    {
      tagline: "Residential Opportunities",
      headline: "Premium Residential Plots",
      subtext: "Discover handpicked, verified plots across Tamil Nadu with strong future growth potential and clear legal documentation."
    },
    {
      tagline: "Luxury Villa Communities",
      headline: "Luxury Villa Communities",
      subtext: "Explore modern residential communities designed to deliver comfort, modern lifestyle, and value appreciation."
    },
    {
      tagline: "Commercial Property Solutions",
      headline: "Strategic Commercial Spaces",
      subtext: "Identify high-yield commercial developments and investment opportunities tailored to your business objectives."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // Slightly longer for reading text
    return () => clearInterval(interval);
  }, []);

  // Animation for each slide change
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(".reveal-tagline", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(".reveal-word", 
        { y: 60, skewY: 7, opacity: 0 },
        { y: 0, skewY: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power4.out" },
        "-=0.6"
      )
      .fromTo(".reveal-subtext", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(".reveal-btn", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        "-=0.6"
      );
    }, textContainerRef);

    return () => ctx.revert();
  }, [currentImageIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Background Zoom
      gsap.fromTo(".hero-bg", 
        { scale: 1.2 }, 
        { scale: 1, duration: 2.5, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentSlide = slides[currentImageIndex];

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex items-center bg-white pt-28 pb-12">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Brand Gradient Overlays for Readability */}
        <div className="absolute inset-0 luxury-gradient-bg opacity-70 mix-blend-multiply z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A335E]/80 via-transparent to-transparent z-[1]" />
      </div>

      <div ref={textContainerRef} className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="overflow-hidden mb-4">
            <span className="reveal-tagline block text-emerald-400 font-bold tracking-[0.3em] uppercase text-sm">
              {currentSlide.tagline}
            </span>
          </div>
          
          <div className="overflow-hidden mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              {currentSlide.headline.split(' ').map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
                  <span className={`reveal-word inline-block ${i > 0 ? 'gold-gradient' : ''}`}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>
          </div>
          
          <div className="overflow-hidden mb-12">
            <p className="reveal-subtext text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed font-medium">
              {currentSlide.subtext}
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <button className="reveal-btn px-10 py-4 bg-[#D6B97B] text-[#0F0F0F] rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 uppercase tracking-widest text-xs">
              Explore Properties
            </button>
            <button className="reveal-btn px-10 py-4 border border-white/60 text-white rounded-full font-bold hover:bg-white/20 transition-all uppercase tracking-widest text-xs backdrop-blur-sm">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
