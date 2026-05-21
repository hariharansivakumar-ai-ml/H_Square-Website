import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Move, ArrowUpRight } from 'lucide-react';
import { properties } from '../data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import prop1 from '../assets/property1.webp';
import prop2 from '../assets/property2.webp';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProperties = () => {
  const containerRef = useRef(null);
  
  const propertyImages = {
    property1: prop1,
    property2: prop2
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".property-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="properties" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">Curated Selection</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1A335E]">
              Featured <span className="gold-gradient">Masterpieces</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm md:text-right hidden md:block">
            Explore our handpicked collection of the region's most exceptional investment opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="property-card group cursor-pointer relative overflow-hidden rounded-3xl shadow-2xl"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={propertyImages[property.image]} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>

              {/* Title Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h3 className="text-white text-2xl font-serif font-bold text-center px-6">
                  {property.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link to="/properties" className="px-10 py-4 border border-[#1A335E]/20 text-[#1A335E] rounded-full font-bold hover:bg-[#1A335E] hover:text-white transition-all duration-300 flex items-center gap-3">
            View All Properties
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
