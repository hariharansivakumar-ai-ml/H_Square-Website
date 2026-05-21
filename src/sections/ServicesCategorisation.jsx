import { Map, Building } from 'lucide-react';

const ServicesCategorisation = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="space-y-20">
          <div className="text-center space-y-4">
            <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">Categorisation</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900">Our Property <span className="gold-gradient">Categorisation</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Lands Column */}
            <div className="space-y-10 p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#1A335E] rounded-2xl flex items-center justify-center text-white">
                  <Map size={32} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-900">Lands</h3>
              </div>
              <p className="text-gray-600 text-lg">We offer diverse land solutions to meet your specific requirements:</p>
              <div className="space-y-8">
                {[
                  { name: "Agricultural Land", desc: "Agricultural land is specifically designed for farming and agri-business ventures. These lands are suitable for crops, livestock, and other agricultural activities." },
                  { name: "Commercial Land", desc: "Commercial land is tailored for retail spaces, offices, and enterprises. It offers strategic locations to support business growth and visibility." },
                  { name: "Industrial Land", desc: "Ideal for factories, warehouses, and industrial projects. Perfect for large-scale production." },
                  { name: "Residential Land", desc: "Premium plots for homes and residential developments in sought-after locations." }
                ].map((land, i) => (
                  <div key={i} className="space-y-2 border-l-2 border-[#D6B97B]/30 pl-6 hover:border-[#D6B97B] transition-all">
                    <h4 className="font-bold text-gray-900 text-lg uppercase tracking-wider">{land.name}</h4>
                    <p className="text-gray-600 leading-relaxed">{land.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Buildings Column */}
            <div className="space-y-10 p-12 bg-white rounded-[3rem] border-2 border-gray-100 shadow-2xl shadow-black/5">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#D6B97B] rounded-2xl flex items-center justify-center text-white">
                  <Building size={32} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-900">Buildings</h3>
              </div>
              <p className="text-gray-600 text-lg">Our building services encompass a wide range of options:</p>
              <div className="space-y-10">
                {[
                  { name: "Commercial Buildings", desc: "Commercial buildings are ideal for office spaces, malls, and retail outlets. They offer versatile solutions for business needs." },
                  { name: "Industrial Buildings", desc: "Industrial buildings are specifically designed for factories, storage units, and manufacturing hubs. They cater to large-scale operations and logistical needs." },
                  { name: "Residential Buildings", desc: "Residential buildings provide a range of housing options, including homes, apartments, and luxury villas. Designed to cater to diverse lifestyles." }
                ].map((building, i) => (
                  <div key={i} className="space-y-3 bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-500">
                    <h4 className="font-bold text-gray-900 text-xl uppercase tracking-wider">{building.name}</h4>
                    <p className="text-gray-600 leading-relaxed">{building.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCategorisation;
