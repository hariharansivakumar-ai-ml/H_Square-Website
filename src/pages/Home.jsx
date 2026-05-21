import Hero from '../sections/Hero';
import FeaturedProperties from '../sections/FeaturedProperties';
import AboutSection from '../sections/AboutSection';
import WhyChooseUs from '../sections/WhyChooseUs';
import Expertise from '../sections/Expertise';
import Timeline from '../sections/Timeline';
import FAQ from '../sections/FAQ';

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <Expertise />
      <Timeline />
      <FeaturedProperties />
      <FAQ />
    </main>
  );
};

export default Home;
