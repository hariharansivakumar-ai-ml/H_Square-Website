import { motion } from 'framer-motion';
import { Home, Gem, Building2, Store, BarChart3, Landmark } from 'lucide-react';

const categories = [
  {
    icon: <Home size={28} className="text-white" />,
    name: "Residential Properties",
    desc: "Premium plots, villas, gated communities, and residential developments designed for modern living.",
    bg: "bg-[#1A335E]",
  },
  {
    icon: <Gem size={28} className="text-white" />,
    name: "Luxury Villas",
    desc: "Elegant homes featuring contemporary architecture, premium amenities, and excellent connectivity.",
    bg: "bg-[#D6B97B]",
  },
  {
    icon: <Landmark size={28} className="text-white" />,
    name: "Apartments & Housing Projects",
    desc: "Modern residential communities built to offer comfort, convenience, and long-term value.",
    bg: "bg-emerald-600",
  },
  {
    icon: <Building2 size={28} className="text-white" />,
    name: "Commercial Properties",
    desc: "Strategically located office spaces, retail outlets, and commercial developments for growing businesses.",
    bg: "bg-indigo-700",
  },
  {
    icon: <Store size={28} className="text-white" />,
    name: "Retail & Business Spaces",
    desc: "Prime commercial locations designed to maximise visibility and business success.",
    bg: "bg-rose-600",
  },
  {
    icon: <BarChart3 size={28} className="text-white" />,
    name: "Investment Assets",
    desc: "High-growth properties selected for their appreciation potential and strong investment returns.",
    bg: "bg-amber-600",
  },
];

const ServicesCategorisation = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-emerald-700 font-bold tracking-[0.3em] uppercase text-xs">
            Property Categories
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900">
            Explore <span className="gold-gradient">Investment Opportunities</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
            >
              {/* Coloured icon bar */}
              <div className={`${cat.bg} px-8 pt-8 pb-6`}>
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-serif font-bold !text-white leading-snug">{cat.name}</h3>
              </div>

              {/* Description */}
              <div className="px-8 py-6">
                <p className="text-gray-600 leading-relaxed text-sm">{cat.desc}</p>
                {/* Bottom hover bar */}
                <div className={`mt-5 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-full ${cat.bg}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCategorisation;
