import { Link } from 'react-router-dom';

const ServicesCTA = () => {
  return (
    <section className="py-24 bg-[#1A335E] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6B97B] blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 blur-[150px] rounded-full" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            Find Exceptional <span className="gold-gradient">Property Opportunities</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Whether you're searching for your dream home, a profitable investment, or commercial property, HSquare Promoters offers trusted expertise and premium real estate solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <Link
              to="/contact"
              className="px-10 py-4 bg-[#D6B97B] text-[#0F0F0F] rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 uppercase tracking-widest text-xs"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
