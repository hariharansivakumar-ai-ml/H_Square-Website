import { useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  FileText, 
  Headphones, 
  Map, 
  Coins, 
  Zap, 
  Sparkles 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whyChooseUsContent } from '../data/content';

import serviceHomeImage from '../assets/service home.jpeg';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  
  // Custom relevant icons for each of the 8 bullet points
  const cardIcons = [
    ShieldCheck, // Verified and Legally Compliant Properties
    Users,       // Experienced Real Estate Professionals
    TrendingUp,  // Strategic Investment Guidance
    FileText,    // Transparent Documentation Process
    Headphones,  // Personalized Client Support
    Map,         // Strong Network Across Tamil Nadu
    Coins,       // Competitive Pricing and Market Insights
    Zap          // Hassle-Free Property Transactions
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".feature-item", { opacity: 1, y: 0 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative max-w-md mx-auto lg:mr-0 lg:ml-auto w-full rounded-3xl overflow-hidden ring-4 ring-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] lg:order-first">
            <img 
              src={serviceHomeImage} 
              alt="HSquare Service" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8 lg:order-last">
            <div className="space-y-4">
              <span className="text-emerald-700 font-bold tracking-[0.3em] uppercase text-xs">The HSquare Promoters Advantage</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                {whyChooseUsContent.headline.split(' ').slice(0, -1).join(' ')} <span className="gold-gradient">{whyChooseUsContent.headline.split(' ').slice(-1)[0]}</span>
              </h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-lg font-medium">
              {whyChooseUsContent.text}
            </p>

            <p className="text-gray-500 italic pt-6 border-t border-gray-200">
              At HSquare Promoters, we prioritise quality and transparency. Your real estate journey will be seamless, secure, and stress-free.
            </p>
          </div>
        </div>

        {/* Premium Symmetrical Feature Cards Grid (4 columns = 2 rows of 4 cards) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsContent.bullets.map((bullet, i) => {
            const Icon = cardIcons[i] || Sparkles;
            return (
              <div 
                key={i} 
                className="feature-item opacity-100 relative bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-emerald-500/20 hover:-translate-y-1.5 transition-all duration-500 ease-out group overflow-hidden flex flex-col justify-between min-h-[160px]"
              >
                {/* Glowing Corner Background Accent */}
                <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-500" />
                
                {/* Premium Interactive Top Border Glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="space-y-5 relative z-10">
                  {/* Icon Container with smooth gradient & hover state */}
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50/60 flex items-center justify-center text-emerald-600 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:text-white transition-all duration-500 shadow-inner">
                    <Icon size={20} className="group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="text-gray-900 font-serif font-bold text-sm leading-snug group-hover:text-emerald-700 transition-colors duration-300">
                    {bullet}
                  </h3>
                </div>

                {/* Decorative Bottom Glow Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
