import BlogsHero from '../sections/BlogsHero';
import BlogsGrid from '../sections/BlogsGrid';

const Blogs = () => {
  return (
    <div className="pt-24 bg-white overflow-hidden min-h-screen">
      <BlogsHero />
      <BlogsGrid />
    </div>
  );
};

export default Blogs;
