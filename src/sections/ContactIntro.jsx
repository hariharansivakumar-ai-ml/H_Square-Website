import { motion } from 'framer-motion';

const ContactIntro = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg leading-relaxed"
        >
          <p>
            Whether you’re looking to buy, sell, rent, or manage properties, the HSquare Promoters team is ready to assist. Reach out to us for personalized solutions and expert guidance on all your real estate needs. Contact us today to start your journey toward finding the perfect property!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactIntro;
