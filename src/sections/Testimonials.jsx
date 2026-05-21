import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/content';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-gray-100 font-serif text-[20vw] select-none pointer-events-none">
        VOICES
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-primary">
            Trusted by <span className="gold-gradient italic">Connoisseurs</span>
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="testimonial-swiper pb-16"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="glass p-12 rounded-3xl h-full flex flex-col justify-between relative overflow-hidden group border border-gray-100">
                <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <Quote size={80} />
                </div>
                
                <div className="space-y-8 relative z-10">
                  <p className="text-xl md:text-2xl font-serif italic text-text-primary leading-relaxed">
                    "{t.text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-text-primary font-bold">{t.name}</h4>
                      <p className="text-primary text-xs uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
