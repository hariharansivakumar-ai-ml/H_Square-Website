import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, ArrowRight } from 'lucide-react';
import { faqs } from '../data/content';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter FAQs based on search input
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative subtle background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D6B97B]/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Centered Premium Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">Help Center</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
            Frequently Asked <br />
            <span className="gold-gradient">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Have questions? Find quick answers about our property verification, title deeds, and legal services.
          </p>
        </div>

        {/* Premium Interactive Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 relative">
          <div className="relative group shadow-xl shadow-black/5 rounded-2xl overflow-hidden">
            <input 
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-100 py-5 pl-14 pr-6 outline-none text-gray-900 focus:border-[#D6B97B] transition-all placeholder:text-gray-300 font-medium text-sm rounded-2xl"
            />
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#D6B97B] transition-colors">
              <Search size={20} />
            </div>
          </div>
        </div>

        {/* Dynamic Accordion List */}
        <div className="max-w-3xl mx-auto space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  layout
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-[#D6B97B]/40 shadow-xl shadow-blue-900/5' 
                      : 'bg-white border-gray-100 hover:border-[#D6B97B]/30 hover:shadow-lg'
                  }`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full p-8 flex justify-between items-center text-left gap-6 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                        isOpen 
                          ? 'bg-[#1A335E]/10 border-[#1A335E]/20 text-[#1A335E]' 
                          : 'bg-gray-50 border-gray-100 text-[#D6B97B]'
                      }`}>
                        <HelpCircle size={16} />
                      </div>
                      <span className="text-lg font-serif font-bold text-gray-900 leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#D6B97B] text-white rotate-180' 
                        : 'bg-gray-100 border border-gray-200 text-gray-600'
                    }`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isOpen ? 'auto' : 0, 
                      opacity: isOpen ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 px-8 pl-20 text-gray-600 font-medium leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Empty Search State */}
          {filteredFaqs.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mx-auto">
                <Search size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="!text-gray-900 font-serif font-bold text-xl">No FAQ Matches Found</h4>
                <p className="text-gray-400 text-sm max-w-sm mx-auto">
                  We couldn't find any questions matching "{searchQuery}". Try using other real estate or legal keywords.
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Center CTA */}
        <div className="mt-20 text-center space-y-6">
          <p className="text-gray-500 font-medium">Still have unanswered questions?</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-gray-900 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-blue-900/10"
          >
            Get In Touch
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
