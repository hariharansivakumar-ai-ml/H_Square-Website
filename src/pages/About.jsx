import AboutHero from '../sections/AboutHero';
import AboutIntro from '../sections/AboutIntro';
import AboutVision from '../sections/AboutVision';
import AboutTeam from '../sections/AboutTeam';

const About = () => {
  return (
    <div className="pt-24 bg-white overflow-hidden">
      <AboutHero />
      <AboutIntro />
      <AboutVision />
      <AboutTeam />
    </div>
  );
};

export default About;
