import { motion } from 'framer-motion';

const AboutIntro = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-600 text-lg leading-relaxed"
        >
          <p>
            At Lands N Deeds, we are a team of professionals focused on making land transactions easy, clear, and safe. 
            As land transaction experts with years of experience in property documents, legal guidance, and deed registration, 
            we ensure every part of your real estate process is handled carefully and correctly.
          </p>
          <p>
            Whether it’s conducting a revenue officer property verification or assisting with smooth document processing, 
            we work hard to provide the best solutions for your needs. As Tamil Nadu land specialists, we guide you at every step—from 
            verifying land records to completing secure transactions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntro;
