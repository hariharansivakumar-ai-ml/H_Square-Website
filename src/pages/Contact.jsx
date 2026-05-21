import ContactHero from '../sections/ContactHero';
import ContactIntro from '../sections/ContactIntro';
import ContactFeatures from '../sections/ContactFeatures';
import ContactFormSection from '../sections/ContactFormSection';

const Contact = () => {
  return (
    <div className="pt-24 bg-white overflow-hidden">
      <ContactHero />
      <ContactIntro />
      <ContactFeatures />
      <ContactFormSection />
    </div>
  );
};

export default Contact;
