import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { ArrowLeft, ArrowRight, Calendar, User, Share2 } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { blogs } = useContent();
  const navigate = useNavigate();

  const blogIndex = blogs.findIndex(b => b.id === id);
  const blog = blogs[blogIndex];

  // Handle previous/next navigation
  const prevBlog = blogIndex > 0 ? blogs[blogIndex - 1] : blogs[blogs.length - 1];
  const nextBlog = blogIndex < blogs.length - 1 ? blogs[blogIndex + 1] : blogs[0];

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl font-serif mb-4">Article not found.</p>
        <Link to="/blog" className="border-b border-black pb-1">Back to Journal</Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in bg-white min-h-screen pt-12">
      
      {/* Blog Header */}
      <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
        <div className="flex justify-center items-center space-x-6 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
          <span className="flex items-center"><Calendar size={14} className="mr-2"/> {blog.date}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="flex items-center"><User size={14} className="mr-2"/> {blog.author}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-anvitam-charcoal mb-8 leading-tight">
          {blog.title}
        </h1>
      </div>

      {/* Feature Image */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="aspect-[21/9] w-full overflow-hidden bg-gray-100">
           <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Sidebar / TOC */}
        <div className="hidden md:block md:col-span-3 sticky top-32 self-start">
           {blog.toc && (
             <div className="border-l border-gray-200 pl-6">
               <h4 className="text-xs font-bold uppercase tracking-widest text-anvitam-green mb-4">Table of Contents</h4>
               <ul className="space-y-3 text-sm text-gray-500 font-serif">
                 {blog.toc.map((item, idx) => (
                   <li key={idx} className="hover:text-anvitam-charcoal cursor-pointer transition-colors">
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
           )}
           <div className="mt-12 pl-6">
              <button className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-anvitam-blue transition-colors">
                <Share2 size={16} />
                <span>Share Article</span>
              </button>
           </div>
        </div>

        {/* Content */}
        <div className="md:col-span-8 md:col-start-4">
           {/* Render rich HTML content */}
           <div 
             className="prose prose-lg prose-headings:font-serif prose-headings:font-medium prose-headings:text-anvitam-charcoal prose-p:text-gray-600 prose-p:font-serif prose-p:leading-loose prose-a:text-anvitam-blue prose-img:rounded-sm max-w-none"
             dangerouslySetInnerHTML={{ __html: blog.content }}
           />
        </div>

      </div>

      {/* Navigation Footer */}
      <div className="mt-24 border-t border-gray-100 bg-anvitam-cream/50">
        <div className="max-w-7xl mx-auto px-6 py-16 flex justify-between items-center">
           <div 
             onClick={() => navigate(`/blog/${prevBlog.id}`)}
             className="group cursor-pointer text-left w-1/2 pr-8"
           >
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 group-hover:text-anvitam-green transition-colors">Previous Article</span>
              <div className="flex items-center space-x-4">
                <ArrowLeft size={20} className="text-gray-400 group-hover:text-anvitam-charcoal transition-colors flex-shrink-0" />
                <span className="text-xl font-serif text-anvitam-charcoal group-hover:italic line-clamp-1">{prevBlog.title}</span>
              </div>
           </div>

           <div className="h-12 w-px bg-gray-200 mx-4"></div>

           <div 
             onClick={() => navigate(`/blog/${nextBlog.id}`)}
             className="group cursor-pointer text-right w-1/2 pl-8"
           >
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 group-hover:text-anvitam-green transition-colors">Next Article</span>
              <div className="flex items-center space-x-4 justify-end">
                <span className="text-xl font-serif text-anvitam-charcoal group-hover:italic line-clamp-1">{nextBlog.title}</span>
                <ArrowRight size={20} className="text-gray-400 group-hover:text-anvitam-charcoal transition-colors flex-shrink-0" />
              </div>
           </div>
        </div>
      </div>

    </div>
  );
};

export default BlogDetail;