import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-bg-deep">
      <div className="container mx-auto">
        <div className="relative rounded-[40px] overflow-hidden group">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600607687940-47a0f9259017?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent" />
          </div>

          <div className="relative z-10 p-12 md:p-24 max-w-3xl space-y-8">
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-text-primary leading-tight">
              Ready to Own Your <br />
              <span className="gold-gradient">Masterpiece?</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl">
              Connect with our specialist advisors for a private consultation and 
              exclusive access to the world's most coveted properties.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <button className="px-10 py-5 bg-primary text-bg-deep rounded-full font-bold text-lg hover:bg-primary-light transition-all flex items-center gap-3">
                Schedule a Consultation
                <ArrowRight size={20} />
              </button>
              <button className="px-10 py-5 glass text-text-primary rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
          
          {/* Decorative Ring */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] border border-primary/20 rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
