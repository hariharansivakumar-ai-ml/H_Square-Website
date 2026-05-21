import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { client, urlFor } from '../sanity/client';

// Custom components to style PortableText elements to match the luxury theme
const components = {
  types: {
    image: ({ value }) => {
      if (!value || !value.asset) return null;
      
      const alignmentClass = value.alignment === 'left' ? 'mr-auto' : value.alignment === 'right' ? 'ml-auto' : 'mx-auto';
      const sizeClass = value.size === 'small' ? 'w-1/4' : value.size === 'medium' ? 'w-2/4' : value.size === 'large' ? 'w-3/4' : 'w-full';

      return (
        <div className={`my-10 flex flex-col ${alignmentClass} ${sizeClass}`}>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={urlFor(value).url()}
              alt={value.alt || 'Blog Image'}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          {value.caption && (
            <p className="text-center text-sm text-gray-500 mt-3 italic">{value.caption}</p>
          )}
        </div>
      );
    },
  },
  marks: {
    // Text decorations
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline underline-offset-2">{children}</span>,
    'strike-through': ({ children }) => <span className="line-through">{children}</span>,
    code: ({ children }) => (
      <code className="bg-gray-100 text-[#1A335E] font-mono text-sm px-1.5 py-0.5 rounded border border-gray-200">
        {children}
      </code>
    ),
    // Links
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} target={value.blank ? '_blank' : '_self'} className="text-[#D6B97B] hover:text-[#1A335E] font-medium underline underline-offset-2 transition-colors">
          {children}
        </a>
      );
    },
    // Custom color
    textColor: ({ children, value }) => (
      <span style={{ color: value.color?.hex }}>{children}</span>
    ),
    // Highlight
    highlight: ({ children, value }) => (
      <mark style={{ backgroundColor: value.color?.hex || '#FEF9C3' }} className="px-0.5 rounded">
        {children}
      </mark>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-serif font-bold text-[#1A335E] mt-12 mb-5 leading-tight">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-serif font-bold text-[#1A335E] mt-10 mb-4 leading-snug border-b border-gray-100 pb-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-serif font-bold text-[#1A335E] mt-8 mb-3 leading-snug">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-serif font-semibold text-[#1A335E] mt-7 mb-3">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-serif font-semibold text-[#1A335E] mt-6 mb-2">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-serif font-semibold text-gray-600 uppercase tracking-wider mt-5 mb-2">{children}</h6>,
    normal: ({ children }) => {
      // Render empty paragraphs as spacers
      if (!children || (Array.isArray(children) && children.every(c => c === '' || c == null))) {
        return <div className="h-4" />;
      }
      return <p className="text-gray-700 leading-relaxed mb-5 text-[1.05rem]">{children}</p>;
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#D6B97B] pl-6 my-8 py-3 text-lg italic text-gray-600 bg-amber-50/40 rounded-r-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-7 mb-6 text-gray-700 space-y-1.5 text-[1.05rem] leading-relaxed">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-7 mb-6 text-gray-700 space-y-1.5 text-[1.05rem] leading-relaxed">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
};

const BlogDetails = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "blog" && slug.current == $slug][0]{
          title,
          mainImage,
          publishedAt,
          body,
          "categoryName": blogCategory->title,
          tags
        }`;
        
        const result = await client.fetch(query, { slug });
        setPost(result);
      } catch (error) {
        console.error("Failed to fetch blog post:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
    window.scrollTo(0, 0); // Scroll to top when loading new post
  }, [slug]);

  useEffect(() => {
    if (post && post.title) {
      document.title = `${post.title} | LandsnDeeds`;
    }
    return () => {
      document.title = 'LandsnDeeds | Luxury Real Estate & Premium Properties';
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
              src={urlFor(post.mainImage).url()} 
              alt={post.title} 
              className="w-full h-auto block"
            />
          </div>
        )}

        {/* Rich Text Body */}
        <div className="prose prose-lg max-w-none">
          {post.body ? (
            <PortableText 
              value={post.body} 
              components={components} 
            />
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
