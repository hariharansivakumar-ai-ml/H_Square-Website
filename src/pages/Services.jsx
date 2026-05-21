import ServicesHero from '../sections/ServicesHero';
import ServicesGrid from '../sections/ServicesGrid';
import ServicesCTA from '../sections/ServicesCTA';
import ServicesWhyChooseUs from '../sections/ServicesWhyChooseUs';
import ServicesCategorisation from '../sections/ServicesCategorisation';
import ServicesSummary from '../sections/ServicesSummary';

const Services = () => {
  return (
    <div className="pt-24 bg-white overflow-hidden">
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
      <ServicesWhyChooseUs />
      <ServicesCategorisation />
      <ServicesSummary />
    </div>
  );
};

export default Services;
