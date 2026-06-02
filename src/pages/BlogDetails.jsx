import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { staticBlogs } from '../data/staticData';

// Custom lightweight body renderer for local static blog blocks
const renderBodyBlock = (block, idx) => {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={idx} className="text-gray-700 leading-relaxed mb-5 text-[1.05rem]">
          {block.content}
        </p>
      );
    case 'heading':
      if (block.level === 1) {
        return (
          <h1 key={idx} className="text-4xl font-serif font-bold text-[#1A335E] mt-12 mb-5 leading-tight">
            {block.content}
          </h1>
        );
      } else if (block.level === 2) {
        return (
          <h2 key={idx} className="text-3xl font-serif font-bold text-[#1A335E] mt-10 mb-4 leading-snug border-b border-gray-100 pb-2">
            {block.content}
          </h2>
        );
      } else {
        return (
          <h3 key={idx} className="text-2xl font-serif font-bold text-[#1A335E] mt-8 mb-3 leading-snug">
            {block.content}
          </h3>
        );
      }
    case 'blockquote':
      return (
        <blockquote key={idx} className="border-l-4 border-[#D6B97B] pl-6 my-8 py-3 text-lg italic text-gray-600 bg-amber-50/40 rounded-r-xl">
          {block.content}
        </blockquote>
      );
    case 'list':
      if (block.style === 'bullet') {
        return (
          <ul key={idx} className="list-disc pl-7 mb-6 text-gray-700 space-y-1.5 text-[1.05rem] leading-relaxed">
            {block.items.map((item, itemIdx) => (
              <li key={itemIdx} className="pl-1">{item}</li>
            ))}
          </ul>
        );
      } else {
        return (
          <ol key={idx} className="list-decimal pl-7 mb-6 text-gray-700 space-y-1.5 text-[1.05rem] leading-relaxed">
            {block.items.map((item, itemIdx) => (
              <li key={itemIdx} className="pl-1">{item}</li>
            ))}
          </ol>
        );
      }
    case 'image':
      return (
        <div key={idx} className="my-10 flex flex-col mx-auto w-full">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={block.asset}
              alt={block.alt || 'Blog Image'}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          {block.caption && (
            <p className="text-center text-sm text-gray-500 mt-3 italic">{block.caption}</p>
          )}
        </div>
      );
    default:
      return null;
  }
};

const BlogDetails = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = () => {
      try {
        const result = staticBlogs.find((blog) => blog.slug?.current === slug);
        setPost(result || null);
      } catch (error) {
        console.error("Failed to find blog post:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
    window.scrollTo(0, 0); // Scroll to top when loading new post
  }, [slug]);

  useEffect(() => {
    if (post && post.title) {
      document.title = `${post.title} | HSquare Promoters`;
    }
    return () => {
      document.title = 'HSquare Promoters | Premium Real Estate Solutions for Modern Investors';
    };
  }, [post]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex justify-center items-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D6B97B]"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-40 pb-20 bg-white flex flex-col items-center">
        <h1 className="text-4xl font-serif font-bold text-[#1A335E] mb-6">Post Not Found</h1>
        <p className="text-gray-600 mb-8">The article you are looking for does not exist or has been removed.</p>
        <Link to="/blogs" className="px-8 py-3 bg-[#D6B97B] text-gray-900 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#1A335E] hover:text-white transition-all">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Back Button */}
        <Link to="/blogs" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#D6B97B] transition-colors mb-10 font-bold uppercase tracking-widest text-[10px]">
          <ArrowLeft size={14} />
          Back to all blogs
        </Link>

        {/* Header Section */}
        <header className="space-y-6 mb-12">
          {post.categoryName && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1A335E] font-bold uppercase tracking-widest text-[10px] border border-blue-100">
              {post.categoryName}
            </span>
          )}
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#1A335E] leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 py-6 border-b border-gray-100">
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar size={14} className="text-[#D6B97B]" />
              <span className="text-[10px] uppercase tracking-widest font-bold">
                {formatDate(post.publishedAt)}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="w-full rounded-3xl overflow-hidden mb-16 shadow-2xl">
            <img 
              src={post.mainImage} 
              alt={post.title} 
              className="w-full h-auto block"
            />
          </div>
        )}

        {/* Rich Text Body */}
        <div className="prose prose-lg max-w-none">
          {post.body && post.body.length > 0 ? (
            post.body.map((block, idx) => renderBodyBlock(block, idx))
          ) : (
            <p className="text-gray-500 italic text-center py-10">This post has no content yet.</p>
          )}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2 mr-2">Tags:</span>
            {post.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-gray-50 rounded-full text-gray-600 text-[10px] font-bold uppercase tracking-wider border border-gray-100">
                {tag}
              </span>
            ))}
          </div>
        )}

      </div>
    </article>
  );
};

export default BlogDetails;
