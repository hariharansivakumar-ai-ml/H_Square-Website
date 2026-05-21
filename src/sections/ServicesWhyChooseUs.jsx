import { motion } from 'framer-motion';
import { ShieldCheck, LayoutDashboard, BadgeCheck } from 'lucide-react';

const ServicesWhyChooseUs = () => {
  const coreValues = [
    { title: "Quality", value: 100 },
    { title: "Trust", value: 100 },
    { title: "Excellence", value: 100 }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">Why Choose Us?</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Unparalleled Service and <span className="gold-gradient italic">Accurate Guidance</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We deliver exceptional land verification services for all your property needs, covering both lands and buildings. Our expertise ensures seamless processes for buying, selling, and leasing, supported by strong property management practices.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-6 text-center">
              {coreValues.map((stat, i) => (
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
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-gray-500">{stat.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Asset Verification",
                desc: "Reliable verification services to ensure property authenticity and legal compliance. Trust us to secure your real estate transactions.",
                icon: <ShieldCheck className="text-[#D6B97B]" size={32} />
              },
              {
                title: "Asset Management",
                desc: "We offer comprehensive property management services to meet your needs. Our solutions include maintenance and tenant support for seamless operations.",
                icon: <LayoutDashboard className="text-[#D6B97B]" size={32} />
              },
              {
                title: "Buy, Sell, and Leasing Services",
                desc: "We provide hassle-free solutions for buying, leasing, and renting properties. Our tailored services ensure a smooth and efficient experience.",
                icon: <BadgeCheck className="text-[#D6B97B]" size={32} />
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-8 group"
              >
                <div className="shrink-0">{item.icon}</div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#D6B97B] transition-colors">{item.title}</h4>
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
