import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Expand, ArrowRight, ShieldCheck, X, FileText, CheckCircle2 } from 'lucide-react';
import { staticProperties } from '../data/staticData';

const PropertiesGrid = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [inquiryProperty, setInquiryProperty] = useState(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const [propertyList, setPropertyList] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load static properties and extract categories
    const extractedCategories = new Set(['All']);
    staticProperties.forEach(prop => {
      if (prop.category) {
        extractedCategories.add(prop.category);
      }
    });

    setCategories(Array.from(extractedCategories));
    setPropertyList(staticProperties);
    setIsLoading(false);
  }, []);

  const filteredProperties = selectedFilter === 'All'
    ? propertyList
    : propertyList.filter(prop => prop.category === selectedFilter);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryProperty(null);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2500);
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-[#FAFAFA] min-h-[60vh]">
        <div className="container mx-auto px-6">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 relative overflow-hidden border ${
                  selectedFilter === category
                    ? 'bg-[#1A335E] text-white border-[#1A335E] shadow-lg shadow-blue-900/10'
                    : 'text-gray-600 border-gray-200 bg-white hover:border-[#D6B97B] hover:text-[#D6B97B]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D6B97B]"></div>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              <AnimatePresence mode="popLayout">
                {filteredProperties.map((property) => (
                  <motion.div
                    layout
                    key={property._id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col justify-between hover:shadow-2xl hover:border-[#D6B97B]/30 transition-all duration-500 hover:-translate-y-2 relative"
                  >
                      {/* Status & Category Badges */}
                      <div className="px-6 pt-6 flex gap-2">
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white ${
                          property.status === 'Verified' ? 'bg-[#1A335E]' : 
                          property.status === 'Sold' ? 'bg-red-600' : 'bg-amber-600'
                        }`}>
                          {property.status || 'Available'}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                          {property.category || 'Property'}
                        </span>
                      </div>


                      {/* Metadata Content */}
                      <div className="p-6 space-y-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-gray-400">
                            <MapPin size={12} className="text-[#D6B97B]" />
                            <span className="text-xs uppercase tracking-wider font-semibold line-clamp-1">{property.location}</span>
                          </div>
                          <h3 className="!text-[#1A335E] group-hover:!text-[#D6B97B] font-serif font-bold text-xl leading-tight transition-colors line-clamp-2">
                            {property.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 min-h-[60px]">
                          {property.desc}
                        </p>

                        {/* Specs Row */}
                        <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-gray-700">
                          <div className="flex items-center gap-1.5">
                            <Expand size={14} className="text-gray-400" />
                            <span className="text-xs font-bold">{property.area || 'N/A'}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ShieldCheck size={14} className="text-emerald-500" />
                            <span className="text-xs font-semibold text-emerald-600">Secure Title</span>
                          </div>
                        </div>
                      </div>

                    {/* Pricing / CTA row */}
                    <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-between items-center mt-auto">
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Investment</p>
                        <h4 className="!text-[#1A335E] font-bold text-lg font-sans">{property.price || 'On Request'}</h4>
                      </div>
                      
                      <button 
                        onClick={() => setInquiryProperty(property)}
                        className="px-6 py-2.5 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-gray-900 rounded-full font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 shadow-md"
                      >
                        Inquire
                        <ArrowRight size={12} />
                      </button>
                    </div>

                    {/* Decorative gold line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D6B97B] group-hover:w-full transition-all duration-500" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Empty State */}
          {!isLoading && filteredProperties.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 mt-10">
              <p className="text-gray-400 text-lg">No properties found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Inquiry Form Modal */}
      <AnimatePresence>
        {inquiryProperty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setInquiryProperty(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative p-8 md:p-10 border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-all border border-gray-200 cursor-pointer"
                onClick={() => setInquiryProperty(null)}
              >
                <X size={16} />
              </button>

              <AnimatePresence mode="wait">
                {!inquirySubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <span className="text-[#D6B97B] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                        <FileText size={12} />
                        Property Inquiry
                      </span>
                      <h3 className="!text-[#1A335E] font-serif font-bold text-2xl line-clamp-1">
                        {inquiryProperty.title}
                      </h3>
                      <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold line-clamp-1">
                        {inquiryProperty.location}
                      </p>
                    </div>

                    <form onSubmit={handleInquirySubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Full Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none text-gray-900 focus:border-[#D6B97B] focus:bg-white transition-all placeholder:text-gray-300 font-medium"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Phone Number</label>
                          <input 
                            required
                            type="tel" 
                            placeholder="Your Phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none text-gray-900 focus:border-[#D6B97B] focus:bg-white transition-all placeholder:text-gray-300 font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none text-gray-900 focus:border-[#D6B97B] focus:bg-white transition-all placeholder:text-gray-300 font-medium"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Your Message</label>
                        <textarea 
                          rows="3"
                          placeholder="I am interested in this property. Please share full layout verification details..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none text-gray-900 focus:border-[#D6B97B] focus:bg-white transition-all placeholder:text-gray-300 font-medium resize-none"
                        />
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-4 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-gray-900 font-bold uppercase tracking-widest text-xs rounded-xl shadow-xl transition-all duration-300 hover:scale-[1.02]"
                      >
                        Submit Request
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-10 space-y-6"
                  >
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100 shadow-lg shadow-emerald-500/10">
                      <CheckCircle2 size={40} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="!text-[#1A335E] font-serif font-bold text-2xl">Request Submitted!</h3>
                      <p className="text-gray-600 text-sm max-w-sm">
                        Thank you, <span className="font-bold text-gray-800">{formData.name}</span>. Our legal experts and property advisors will contact you shortly at <span className="font-semibold text-gray-800">{formData.email}</span>.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PropertiesGrid;
