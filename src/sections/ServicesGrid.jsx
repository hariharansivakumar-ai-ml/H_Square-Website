import { motion } from 'framer-motion';
import { MapPin, Home, Building2, TrendingUp, Coins, FileText } from 'lucide-react';

const ServicesGrid = () => {
  const primaryServices = [
    {
      title: "Residential Plot Development",
      desc: "Explore carefully selected residential plots in high-growth locations with excellent infrastructure and future appreciation potential.",
      icon: <MapPin className="w-10 h-10 text-[#D6B97B]" />
    },
    {
      title: "Villa Communities",
      desc: "Discover thoughtfully designed villa projects that combine modern architecture, comfort, and lifestyle-focused living.",
      icon: <Home className="w-10 h-10 text-[#D6B97B]" />
    },
    {
      title: "Commercial Property Development",
      desc: "Find commercial spaces and business investment opportunities in prime locations that support sustainable growth.",
      icon: <Building2 className="w-10 h-10 text-[#D6B97B]" />
    },
    {
      title: "Property Sales & Marketing",
      desc: "We connect buyers and sellers through effective marketing strategies, professional guidance, and transparent transactions.",
      icon: <TrendingUp className="w-10 h-10 text-[#D6B97B]" />
    },
    {
      title: "Real Estate Investment Advisory",
      desc: "Receive expert insights on emerging market opportunities and investment strategies tailored to your goals.",
      icon: <Coins className="w-10 h-10 text-[#D6B97B]" />
    },
    {
      title: "Documentation & Transaction Support",
      desc: "Experience hassle-free property transactions with complete assistance for documentation, registration, and compliance processes.",
      icon: <FileText className="w-10 h-10 text-[#D6B97B]" />
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {primaryServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-black/5 hover:border-[#D6B97B]/30 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="mb-8 p-4 bg-gray-50 rounded-2xl w-fit group-hover:bg-[#D6B97B]/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
