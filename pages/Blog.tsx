import React from 'react';
import { useContent } from '../context/ContentContext';
import { Calendar, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Blog: React.FC = () => {
  const { blogs } = useContent();
  const navigate = useNavigate();

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center">Journal</h1>
        </ScrollReveal>

        <div className="space-y-16">
          {blogs.map((blog, index) => (
            <ScrollReveal key={blog.id} delay={index * 100}>
              <article className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-16 last:border-0">
                <div 
                  className="w-full md:w-1/3 aspect-square bg-gray-100 overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/blog/${blog.id}`)}
                >
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center space-x-4 text-xs text-gray-400 uppercase tracking-wider mb-4">
                    <span className="flex items-center"><Calendar size={12} className="mr-1"/> {blog.date}</span>
                    <span className="flex items-center"><User size={12} className="mr-1"/> {blog.author}</span>
                  </div>
                  <h2 
                    onClick={() => navigate(`/blog/${blog.id}`)}
                    className="text-2xl font-serif mb-4 hover:text-anvitam-green cursor-pointer transition-colors"
                  >
                    {blog.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>
                  <button 
                    onClick={() => navigate(`/blog/${blog.id}`)}
                    className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-anvitam-green hover:border-anvitam-green transition-all"
                  >
                    Read Article
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;