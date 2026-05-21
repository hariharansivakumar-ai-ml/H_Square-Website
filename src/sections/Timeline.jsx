import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timelineEvents } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        x: (i) => i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">Our Journey</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900">
            Company <span className="gold-gradient">Timeline</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Landsndeeds has consistently delivered excellence, reliability, and growth every step of the way.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
            {timelineEvents.map((event, i) => (
              <div key={event.id} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full timeline-card">
                  <div className={`p-10 rounded-3xl bg-white border border-gray-100 shadow-lg space-y-4 hover:border-[#D6B97B]/30 hover:shadow-xl transition-all ${i % 2 !== 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-center gap-4 mb-2 ${i % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                      <span className="text-4xl font-serif font-bold text-[#D6B97B]">{event.id}</span>
                      <div className="space-y-1">
                        <h3 className="text-xl font-serif font-bold text-gray-900">{event.title}</h3>
                        <p className="text-[10px] uppercase tracking-widest text-[#D6B97B] font-bold">{event.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-white border-4 border-[#D6B97B] shadow-lg flex items-center justify-center hidden md:flex">
                  <div className="w-2 h-2 rounded-full bg-[#D6B97B]" />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
