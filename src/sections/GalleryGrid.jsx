import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

// Local generated gallery images
import galleryLand1 from '../assets/gallery/gallery_land_1.png';
import galleryLand2 from '../assets/gallery/gallery_land_2.png';
import galleryLayoutRoad from '../assets/gallery/gallery_layout_road.png';
import galleryPlotCorner from '../assets/gallery/gallery_plot_corner.png';
import gallerySiteVisit from '../assets/gallery/gallery_site_visit.png';
import galleryLandAerial from '../assets/gallery/gallery_land_aerial.png';
import galleryDocumentSigning from '../assets/gallery/gallery_document_signing.png';
import galleryGardenPlot from '../assets/gallery/gallery_garden_plot.png';
import gallerySunsetLand from '../assets/gallery/gallery_sunset_land.png';

const galleryItems = [
  {
    id: 1,
    title: 'Lush Green Land Plots',
    desc: 'Premium residential plots surrounded by coconut palms and fertile red soil — ideal for building your dream home.',
    image: galleryLand1,
    tag: 'Land'
  },
  {
    id: 2,
    title: 'Open Farmland Layouts',
    desc: 'Clearly demarcated farmland plots with survey stones set against expansive green fields and bright blue skies.',
    image: galleryLand2,
    tag: 'Farmland'
  },
  {
    id: 3,
    title: 'Well-Planned Layout Roads',
    desc: 'Freshly laid asphalt roads running through our residential layouts, ensuring easy access to every plot.',
    image: galleryLayoutRoad,
    tag: 'Infrastructure'
  },
  {
    id: 4,
    title: 'Prime Corner Plots',
    desc: 'Sought-after corner plots with wide frontage, boundary walls, and unobstructed access from two roads.',
    image: galleryPlotCorner,
    tag: 'Plot'
  },
  {
    id: 5,
    title: 'Guided Site Visits',
    desc: 'Our team escorts every client on a personalised site visit so you can walk the land before you invest.',
    image: gallerySiteVisit,
    tag: 'Experience'
  },
  {
    id: 6,
    title: 'Aerial Layout View',
    desc: 'Drone panorama of one of our flagship residential layouts — symmetrical roads, greenery, and clear plot markings.',
    image: galleryLandAerial,
    tag: 'Aerial'
  },
  {
    id: 7,
    title: 'Transparent Documentation',
    desc: 'We celebrate every registration milestone with our clients — fully verified, hassle-free paperwork guaranteed.',
    image: galleryDocumentSigning,
    tag: 'Legal'
  },
  {
    id: 8,
    title: 'Serene Garden Plots',
    desc: 'Landscaped residential plots within gated communities, offering lush gardens and premium amenities.',
    image: galleryGardenPlot,
    tag: 'Premium'
  },
  {
    id: 9,
    title: 'Sunset Over Your Future',
    desc: 'Every plot we sell is a promise — a golden future waiting for you beneath the vast Tamil Nadu sky.',
    image: gallerySunsetLand,
    tag: 'Lifestyle'
  },
];

const tagColors = {
  Land: 'bg-emerald-100 text-emerald-700',
  Farmland: 'bg-lime-100 text-lime-700',
  Infrastructure: 'bg-sky-100 text-sky-700',
  Plot: 'bg-indigo-100 text-indigo-700',
  Experience: 'bg-amber-100 text-amber-700',
  Aerial: 'bg-violet-100 text-violet-700',
  Legal: 'bg-rose-100 text-rose-700',
  Premium: 'bg-teal-100 text-teal-700',
  Lifestyle: 'bg-orange-100 text-orange-700',
};

const GalleryGrid = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {galleryItems.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  onClick={() => setActiveImageIndex(idx)}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6">
                      <div className="flex justify-end">
                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30">
                          <Maximize2 size={15} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="!text-white text-lg font-serif font-bold leading-snug">{item.title}</h4>
                        <p className="text-gray-300 text-xs line-clamp-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Tag Badge */}
                    <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${tagColors[item.tag]} shadow-sm`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 flex items-center justify-between bg-white border-t border-gray-50">
                    <h3 className="!text-[#1A335E] group-hover:!text-emerald-700 font-serif font-bold text-base transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-emerald-500 group-hover:text-emerald-600 transition-all duration-300 shrink-0">
                      <Maximize2 size={13} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
            {/* Close */}
            <button
              className="absolute top-6 right-6 z-[210] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/20 cursor-pointer"
              onClick={() => setActiveImageIndex(null)}
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 z-[210] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/20 cursor-pointer"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 z-[210] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/20 cursor-pointer"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              className="max-w-5xl w-full bg-gray-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[400px]">
                <img
                  src={galleryItems[activeImageIndex].image}
                  alt={galleryItems[activeImageIndex].title}
                  className="w-full h-full object-contain max-h-[50vh] md:max-h-[80vh]"
                />
              </div>

              {/* Info Panel */}
              <div className="w-full md:w-[320px] p-8 md:p-10 flex flex-col justify-center space-y-6 text-white bg-gray-950 border-t md:border-t-0 md:border-l border-white/5">
                <span className={`self-start text-xs font-bold px-3 py-1 rounded-full ${tagColors[galleryItems[activeImageIndex].tag]}`}>
                  {galleryItems[activeImageIndex].tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight !text-white">
                  {galleryItems[activeImageIndex].title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {galleryItems[activeImageIndex].desc}
                </p>
                <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs text-gray-500 font-bold uppercase tracking-widest">
                  <span>Gallery</span>
                  <span>{activeImageIndex + 1} / {galleryItems.length}</span>
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
