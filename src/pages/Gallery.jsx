import GalleryHero from '../sections/GalleryHero';
import GalleryGrid from '../sections/GalleryGrid';

const Gallery = () => {
  return (
    <div className="pt-24 bg-white overflow-hidden min-h-screen">
      <GalleryHero />
      <GalleryGrid />
    </div>
  );
};

export default Gallery;
