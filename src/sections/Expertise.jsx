import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { expertiseContent } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Basic reveal animation for the whole section content instead of individual items if they fail
    const ctx = gsap.context(() => {
      gsap.from(".expertise-content", {
        scrollTrigger: {
          trigger: ".expertise-content",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="expertise" className="py-6 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="expertise-content max-w-4xl mx-auto text-center space-y-3">
          <div className="space-y-1">
            <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">{expertiseContent.headline}</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              {expertiseContent.subtext}
            </h2>
          </div>
          
          <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            {expertiseContent.mainDesc}
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-2 relative z-10">
            {expertiseContent.stats.map((stat, i) => (
              <div key={i} className="expertise-item opacity-100 visible relative max-w-[260px] w-full mx-auto bg-white p-6 rounded-[2rem] shadow-lg border border-gray-100 space-y-4 overflow-hidden group hover:border-[#D6B97B]/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                {/* Premium Top Glow Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D6B97B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <svg className="w-full h-full -rotate-90 drop-shadow-[0_0_15px_rgba(214,185,123,0)] group-hover:drop-shadow-[0_0_15px_rgba(214,185,123,0.4)] transition-all duration-500" viewBox="0 0 160 160">
                    <circle
                      cx="80"
                      cy="80"
                      r="74"
                      fill="transparent"
                      stroke="#E5E7EB"
                      strokeWidth="2"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="74"
                      fill="transparent"
                      stroke="#D6B97B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="465"
                      strokeDashoffset={465 - (465 * parseInt(stat.value)) / 100}
                      className="transition-all duration-1500 delay-300 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-sans font-bold text-gray-900 group-hover:text-[#D6B97B] transition-colors duration-500">{stat.value}%</span>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D6B97B] group-hover:text-gray-700 transition-colors duration-500">{stat.label}</p>
                </div>

                {/* Subtle background glow on hover */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D6B97B] opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-700 rounded-full z-0" />
              </div>
            ))}
          </div>
          
          <div className="pt-2">
            <Link to="/services" className="inline-block px-10 py-4 bg-[#D6B97B] text-white rounded-full font-bold hover:bg-gray-900 transition-all uppercase tracking-widest text-xs shadow-lg shadow-[#D6B97B]/20">
              Find the Best Services for You!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
