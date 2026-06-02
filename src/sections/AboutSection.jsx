import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutContent } from '../data/content';
import homeAboutImage from '../assets/Home About.jpeg';

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
            <span className="text-emerald-700 font-bold tracking-[0.3em] uppercase text-xs">Unparalleled Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              {aboutContent.headline.split(' ').slice(0, -1).join(' ')} <span className="gold-gradient">{aboutContent.headline.split(' ').slice(-1)[0]}</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-900 text-xl font-medium leading-relaxed border-l-4 border-emerald-600 pl-5">
              {aboutContent.mainText}
            </p>

            <p className="text-gray-600 leading-relaxed pl-6">
              {aboutContent.subText}
            </p>
          </div>

          <div className="pt-4">
            <Link to="/about" className="group inline-flex items-center gap-4 text-gray-900 font-bold tracking-[0.3em] uppercase text-[10px] hover:text-emerald-600 transition-colors">
              Read More
              <div className="w-12 h-[2px] bg-emerald-600 group-hover:w-20 transition-all duration-500" />
            </Link>
          </div>
        </div>

        {/* Image with Premium Glass Trust Badge */}
        <div className="about-image-container relative max-w-md mx-auto lg:ml-auto lg:mr-0 w-full rounded-3xl overflow-hidden ring-4 ring-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
          <img
            ref={imageRef}
            src={homeAboutImage}
            alt="HSquare Promoters Lands"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
