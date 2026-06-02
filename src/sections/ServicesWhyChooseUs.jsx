import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, BadgeCheck } from 'lucide-react';

const ServicesWhyChooseUs = () => {
  const stats = [
    { title: "Client Satisfaction",     value: 100 },
    { title: "Verified Opportunities",  value: 100 },
    { title: "Professional Support",    value: 100 },
  ];

  const pillars = [
    {
      title: "Property Development",
      desc: "Creating modern residential and commercial spaces that deliver long-term value and sustainable growth.",
      icon: <TrendingUp className="text-[#D6B97B]" size={32} />,
    },
    {
      title: "Investment Solutions",
      desc: "Helping clients identify high-potential opportunities through market research and strategic planning.",
      icon: <ShieldCheck className="text-[#D6B97B]" size={32} />,
    },
    {
      title: "Property Sales & Leasing",
      desc: "Providing seamless solutions for buying, selling, and leasing residential and commercial properties.",
      icon: <BadgeCheck className="text-[#D6B97B]" size={32} />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Left: Heading + Stats */}
          <div className="space-y-8">
            <span className="text-emerald-700 font-bold tracking-[0.3em] uppercase text-xs">
              Why Choose HSquare Promoters?
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Building Confidence Through <span className="gold-gradient italic">Excellence</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our commitment to quality, transparency, and customer satisfaction makes us a trusted partner for real estate investments and property development.
            </p>

            {/* Circular Progress Stats */}
            <div className="grid grid-cols-3 gap-8 pt-6 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-4">
                  <div className="relative w-20 h-20 mx-auto">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="3" />
                      <motion.circle
                        cx="50" cy="50" r="45" fill="none" stroke="#D6B97B" strokeWidth="4"
                        strokeDasharray="283"
                        initial={{ strokeDashoffset: 283 }}
                        whileInView={{ strokeDashoffset: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-900 text-sm">
                      {stat.value}%
                    </div>
                  </div>
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 leading-snug">
                    {stat.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3 Feature Pillars */}
          <div className="space-y-12">
            {pillars.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <div className="shrink-0">{item.icon}</div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#D6B97B] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWhyChooseUs;
