import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';

const ServicesSummary = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
        {/* Quote icon */}
        <div className="w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center mx-auto mb-10">
          <Quote className="text-[#D6B97B]" size={40} />
        </div>

        <h2 className="text-4xl font-serif font-bold text-gray-900">
          Your Trusted <span className="gold-gradient">Real Estate Partner</span>
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed italic max-w-3xl mx-auto">
          "At HSquare Promoters, we combine industry expertise, market knowledge, and customer-focused service to help clients build wealth through smart real estate investments. Our mission is to create lasting value through quality developments and trusted partnerships."
        </p>

        <div className="pt-8 flex justify-center gap-6">
          <Link
            to="/about"
            className="group flex items-center gap-4 text-[#1A335E] font-bold tracking-[0.3em] uppercase text-[10px] hover:text-[#D6B97B] transition-colors"
          >
            About Our Team
            <div className="w-12 h-[2px] bg-[#D6B97B] group-hover:w-20 transition-all duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;
