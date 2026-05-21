import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutContent } from '../data/content';
import founderImage from '../assets/Rathna_Sabapathy.webp';
import property1 from '../assets/property1.webp';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content > *", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(".about-image-container", {
        scrollTrigger: {
          trigger: ".about-image-container",
          start: "top 70%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Content */}
        <div className="about-content space-y-10">
          <div className="space-y-4">
            <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">Unparalleled Expertise</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
              {aboutContent.headline}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-900 text-xl font-medium leading-relaxed">
              {aboutContent.mainText}
            </p>

            <p className="text-gray-600 leading-relaxed">
              {aboutContent.subText}
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-[#D6B97B]/20 shrink-0 shadow-lg shadow-black/20">
              <img src={founderImage} alt={aboutContent.founder} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-1">{aboutContent.founder}</h4>
              <p className="text-[#D6B97B] text-[10px] uppercase tracking-widest font-bold">
                {aboutContent.founderTitle}
              </p>
            </div>
          </div>

          <div className="pt-4">
            <Link to="/about" className="group inline-flex items-center gap-4 text-gray-900 font-bold tracking-[0.3em] uppercase text-[10px] hover:text-[#D6B97B] transition-colors">
              Read More
              <div className="w-12 h-[2px] bg-[#D6B97B] group-hover:w-20 transition-all duration-500" />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="about-image-container relative aspect-square max-w-md mx-auto lg:ml-auto lg:mr-0 w-full rounded-3xl overflow-hidden shadow-2xl">
          <img
            ref={imageRef}
            src={property1}
            alt="Luxury Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
