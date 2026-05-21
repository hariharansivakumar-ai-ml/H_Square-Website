import { motion } from 'framer-motion';
import { Factory, Building2, Leaf, Home, Settings, FileText } from 'lucide-react';

const ServicesGrid = () => {
  const primaryServices = [
    {
      title: "Industrial Property Services",
      desc: "Access industrial properties, including factories, warehouses, and land suitable for large-scale operations.",
      icon: <Factory className="w-10 h-10 text-[#D6B97B]" />
    },
    {
      title: "Commercial Property Solutions",
      desc: "Unlock ideal commercial spaces, including land and buildings tailored for retail, offices, and enterprises.",
      icon: <Building2 className="w-10 h-10 text-[#D6B97B]" />
    },
    {
      title: "Agricultural Land Services",
      desc: "Explore premium agricultural lands designed for farming, plantations, and sustainable agri-business ventures.",
      icon: <Leaf className="w-10 h-10 text-[#D6B97B]" />
    },
    {
      title: "Residential Property Solutions",
      desc: "Discover residential plots and buildings, from luxurious villas to apartments and ready-to-move homes.",
      icon: <Home className="w-10 h-10 text-[#D6B97B]" />
    },
    {
      title: "Property Management",
      desc: "Ensure seamless property upkeep with tenant services, lease management, and maintenance solutions.",
      icon: <Settings className="w-10 h-10 text-[#D6B97B]" />
    },
    {
      title: "Legal and Documentation Support",
      desc: "Simplify property transaction processes with assistance in registration, contracts, deeds, and legal compliance.",
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
