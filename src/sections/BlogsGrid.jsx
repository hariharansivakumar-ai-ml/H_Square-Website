import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { staticBlogs } from '../data/staticData';

const BlogsGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    // Sort static blogs by date descending
    const sortedBlogs = [...staticBlogs].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    setBlogs(sortedBlogs);
    setIsLoading(false);
  }, []);

  // Format date safely
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Extract plain text from local body blocks
  const getBodyExcerpt = (body) => {
    if (!body || !Array.isArray(body)) return null;
    const firstParagraph = body.find(block => block.type === 'paragraph');
    return firstParagraph ? firstParagraph.content : null;
  };

  // Pagination Calculations
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to top of blogs section
    const element = document.getElementById('blogs-grid-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show page 1
      pages.push(1);
      
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      if (currentPage <= 2) {
        end = 4;
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 3;
      }
      
      if (start > 2) {
        pages.push('ellipsis-start');
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (end < totalPages - 1) {
        pages.push('ellipsis-end');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <section id="blogs-grid-section" className="py-16 md:py-24 bg-[#FAFAFA] min-h-[60vh]">
      <div className="container mx-auto px-6">
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D6B97B]"></div>
          </div>
        ) : (
          <>
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              <AnimatePresence mode="popLayout">
                {currentBlogs.map((blog) => (
                  <motion.div
                    layout
                    key={blog._id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col justify-between hover:shadow-2xl hover:border-[#D6B97B]/30 transition-all duration-500 hover:-translate-y-2 relative"
                  >
                    <Link to={`/blogs/${blog.slug?.current}`} className="flex flex-col h-full">
                      <div>
                        {/* Image */}
                        <div className="aspect-[16/10] overflow-hidden relative">
                          {blog.mainImage ? (
                            <img 
                              src={blog.mainImage} 
                              alt={blog.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-400">No Image</span>
                            </div>
                          )}
                          {blog.categoryName && (
                            <div className="absolute top-4 left-4">
                              <span className="text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-[#1A335E] backdrop-blur-sm">
                                {blog.categoryName}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Metadata Content */}
                        <div className="p-6 space-y-4">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar size={12} className="text-[#D6B97B]" />
                            <span className="text-[10px] uppercase tracking-wider font-bold">{formatDate(blog.publishedAt)}</span>
                          </div>
                          
                          <h3 className="!text-[#1A335E] group-hover:!text-[#D6B97B] font-serif font-bold text-xl leading-tight transition-colors line-clamp-2">
                            {blog.title}
                          </h3>

                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 min-h-[40px]">
                            {getBodyExcerpt(blog.body) || blog.seoDescription || "Read more about this topic..."}
                          </p>
                        </div>
                      </div>

                      {/* Footer / CTA row */}
                      <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end items-center mt-auto">
                        <button 
                          className="px-6 py-2.5 bg-transparent border border-[#1A335E] text-[#1A335E] group-hover:bg-[#1A335E] group-hover:text-white rounded-full font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 cursor-pointer"
                        >
                          Read Post
                          <ArrowRight size={12} />
                        </button>
                      </div>

                      {/* Decorative gold line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D6B97B] group-hover:w-full transition-all duration-500" />
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-16 md:mt-24">
                {/* Prev Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-center p-3 rounded-full border transition-all duration-300 ${
                    currentPage === 1
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-white'
                      : 'border-gray-200 text-[#1A335E] hover:bg-[#1A335E] hover:text-white hover:border-[#1A335E] cursor-pointer bg-white shadow-sm hover:scale-105 active:scale-95'
                  }`}
                  aria-label="Previous page"
                >
                  <ChevronLeft size={16} />
                </button>

                {/* Page numbers */}
                <div className="flex items-center gap-1.5 md:gap-2">
                  {getPageNumbers().map((pageNum, idx) => {
                    if (pageNum === 'ellipsis-start' || pageNum === 'ellipsis-end') {
                      return (
                        <span key={`ellipsis-${idx}`} className="px-2 text-gray-400 font-bold select-none">
                          ...
                        </span>
                      );
                    }
                    
                    const isActive = pageNum === currentPage;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`min-w-[42px] h-[42px] px-3 flex items-center justify-center rounded-full font-bold text-xs tracking-wider transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 ${
                          isActive
                            ? 'bg-[#1A335E] text-white border-2 border-[#D6B97B] shadow-md shadow-[#1A335E]/10'
                            : 'bg-white text-[#1A335E] border border-gray-200 hover:bg-[#1A335E] hover:text-white hover:border-[#1A335E] shadow-sm'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center justify-center p-3 rounded-full border transition-all duration-300 ${
                    currentPage === totalPages
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-white'
                      : 'border-gray-200 text-[#1A335E] hover:bg-[#1A335E] hover:text-white hover:border-[#1A335E] cursor-pointer bg-white shadow-sm hover:scale-105 active:scale-95'
                  }`}
                  aria-label="Next page"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!isLoading && blogs.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 mt-10">
            <p className="text-gray-400 text-lg">No blog posts found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsGrid;
