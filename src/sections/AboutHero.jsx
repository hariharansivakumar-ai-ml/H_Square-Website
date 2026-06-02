import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="py-20 luxury-gradient-bg relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-xs"
          >
            About Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif font-bold gold-gradient pb-2 leading-tight"
          >
            We Are a Powerful Modern Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-200 text-xl max-w-2xl mx-auto"
          >
            Specializing in Land Development and Property Management.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
