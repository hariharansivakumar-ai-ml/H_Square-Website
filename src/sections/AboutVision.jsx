import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Target, Shield, Users, ArrowRight } from 'lucide-react';

const AboutVision = () => {
  const stats = [
    { label: "Development", value: 90, icon: <Zap className="text-blue-500" /> },
    { label: "Sustainability", value: 85, icon: <Target className="text-green-500" /> },
    { label: "Trust", value: 100, icon: <Shield className="text-amber-500" /> },
    { label: "Efficiency", value: 98, icon: <Users className="text-purple-500" /> },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-serif font-bold text-gray-900">
            Quality Establishment, <br />
            <span className="gold-gradient">Honest Service</span>, Great Value!
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Landsndeeds, we specialize in providing high-quality property development and management services. 
            Our commitment to honest service and great value ensures that every project delivers lasting results for our clients.
          </p>
          <Link to="/services" className="group inline-flex items-center gap-4 bg-[#1A335E] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#D6B97B] transition-all duration-500 shadow-xl shadow-blue-900/10">
            Explore More
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6 text-center group"
            >
              <div className="relative w-20 h-20 mx-auto">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="4" />
                  <motion.circle 
                    cx="50" cy="50" r="45" fill="none" stroke="#D6B97B" strokeWidth="4" 
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    whileInView={{ strokeDashoffset: 283 - (283 * stat.value) / 100 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-gray-900">
                  {stat.value}%
                </div>
              </div>
              <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs">{stat.label}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
