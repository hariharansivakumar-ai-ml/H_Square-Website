import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { client, urlFor } from '../sanity/client';

const GalleryGrid = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const query = `*[_type == "gallery" && type == "image"]{
          title,
          images
        }`;
        
        const results = await client.fetch(query);
        
        // Flatten the bulk image arrays into individual items
        let flatItems = [];
        
        results.forEach((collection) => {
          if (collection.images && collection.images.length > 0) {
            collection.images.forEach((img, idx) => {
              flatItems.push({
                id: `${collection.title || 'gallery'}-${idx}-${Math.random()}`,
                title: img.caption || collection.title || "Gallery Image",
                image: urlFor(img).url(),
                desc: img.alt || "Gallery Image"
              });
            });
          }
        });
        
        setGalleryItems(flatItems);
      } catch (error) {
        console.error("Failed to fetch gallery items:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-white min-h-[60vh]">
        <div className="container mx-auto px-6">
          
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D6B97B]"></div>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {galleryItems.map((item, idx) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group relative cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-[#FAFAFA] shadow-xl hover:shadow-2xl transition-all duration-500"
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    {/* Image Container */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6">
                        <div className="flex justify-end items-start">
                          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                            <Maximize2 size={14} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="!text-white text-lg font-serif font-bold">{item.title}</h4>
                          <p className="text-gray-300 text-xs line-clamp-2 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Static Card Info */}
                    <div className="p-6 bg-white border-t border-gray-50">
                      <h3 className="!text-[#1A335E] group-hover:!text-[#D6B97B] font-serif font-bold text-lg transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Empty State */}
          {!isLoading && galleryItems.length === 0 && (
            <div className="text-center py-20 border border-gray-100 rounded-3xl mt-8">
              <p className="text-gray-400 text-lg">No gallery items found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 z-[210] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/20 cursor-pointer"
              onClick={() => setActiveImageIndex(null)}
            >
              <X size={20} />
            </button>

            {/* Prev Button */}
            <button 
              className="absolute left-4 md:left-8 z-[210] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/20 cursor-pointer"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button 
              className="absolute right-4 md:right-8 z-[210] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/20 cursor-pointer"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox content container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="max-w-5xl w-full bg-gray-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh] md:max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Side */}
              <div className="flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[400px]">
                <img 
                  src={galleryItems[activeImageIndex].image} 
                  alt={galleryItems[activeImageIndex].title} 
                  className="w-full h-full object-contain max-h-[50vh] md:max-h-[80vh]"
                />
              </div>

              {/* Info Side */}
              <div className="w-full md:w-[350px] p-8 md:p-12 flex flex-col justify-center space-y-6 text-white bg-gray-950 border-t md:border-t-0 md:border-l border-white/5">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight !text-white line-clamp-2">
                    {galleryItems[activeImageIndex].title}
                  </h2>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed max-h-[200px] overflow-y-auto custom-scrollbar">
                  {galleryItems[activeImageIndex].desc}
                </p>

                <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs text-gray-500 font-bold uppercase tracking-widest">
                  <span>Image</span>
                  <span>{activeImageIndex + 1} of {galleryItems.length}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;
