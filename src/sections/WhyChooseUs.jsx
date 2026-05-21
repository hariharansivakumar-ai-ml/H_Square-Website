import { useEffect, useRef } from 'react';
import { ShieldCheck, Globe, Users, Activity, Lock, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whyChooseUsContent } from '../data/content';

import property5 from '../assets/property5.webp';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardIcons = [Users, Globe, ShieldCheck, Activity, Lock];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Removed potentially failing animation to ensure visibility
      gsap.set(".feature-item", { opacity: 1, y: 0 });


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square max-w-md mx-auto lg:mr-0 lg:ml-auto w-full rounded-3xl overflow-hidden shadow-2xl group lg:order-first">
            <img 
              src={property5} 
              alt="Luxury Property" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="space-y-8 lg:order-last">
            <div className="space-y-4">
              <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">The Lands N Deeds Advantage</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900">
                {whyChooseUsContent.headline}
              </h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-lg font-medium">
              {whyChooseUsContent.text}
            </p>

            <p className="text-gray-500 italic pt-6 border-t border-gray-200">
              At Landsndeeds, we prioritise quality and transparency. Your real estate journey will be seamless, secure, and stress-free.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {whyChooseUsContent.bullets.map((bullet, i) => {
            const Icon = cardIcons[i] || Sparkles;
            return (
              <div key={i} className="feature-item opacity-100 relative bg-white p-5 rounded-2xl shadow-md border border-gray-200 space-y-3 overflow-hidden group hover:border-[#D6B97B]/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                {/* Premium Top Glow Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D6B97B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#D6B97B] group-hover:scale-110 group-hover:bg-[#D6B97B] group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                  <Icon size={18} />
                </div>
                
                <h3 className="text-[#1A335E] font-serif font-bold text-[13px] leading-snug group-hover:text-[#D6B97B] transition-colors duration-300 relative z-10">
                  {bullet}
                </h3>
                
                {/* Subtle background glow on hover */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#D6B97B] opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-500 rounded-full z-0" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
