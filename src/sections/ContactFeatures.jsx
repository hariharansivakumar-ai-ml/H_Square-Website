import { motion } from 'framer-motion';
import { Award, ShieldCheck, Headphones } from 'lucide-react';

const ContactFeatures = () => {
  const features = [
    {
      title: "High Quality",
      desc: "Find out how much your place is worth in less than a minute. Get monthly updates for your properties control.",
      icon: <Award className="w-10 h-10 text-[#D6B97B]" />
    },
    {
      title: "Housing Security",
      desc: "View recent sales and market trends for similar properties in your area. View recent top sales and top market trends.",
      icon: <ShieldCheck className="w-10 h-10 text-[#D6B97B]" />
    },
    {
      title: "Full Support",
      desc: "Receive updates when better home loan rates may be available. Get monthly updates for your new properties.",
      icon: <Headphones className="w-10 h-10 text-[#D6B97B]" />
    }
  ];

  return (
    <section className="py-12 pb-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-black/5 hover:border-[#D6B97B]/30 hover:shadow-2xl transition-all duration-500 group text-center"
            >
              <div className="mb-8 p-5 bg-gray-50 rounded-full w-fit mx-auto group-hover:bg-[#D6B97B]/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFeatures;
