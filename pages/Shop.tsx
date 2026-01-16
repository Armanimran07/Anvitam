import React from 'react';
import { useContent } from '../context/ContentContext';
import ScrollReveal from '../components/ScrollReveal';
import { ExternalLink, ShoppingBag } from 'lucide-react';

const Shop: React.FC = () => {
  const { digitalProducts } = useContent();

  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <ScrollReveal>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-serif text-anvitam-charcoal mb-6">Digital Shop</h1>
            <p className="text-xl text-gray-500 font-serif italic">
              Curated resources and mentorship sessions for aspiring architects and designers.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {digitalProducts.map((product) => (
            <ScrollReveal key={product.id}>
              <div className="group border border-gray-100 hover:border-anvitam-green/30 hover:shadow-xl transition-all duration-500 bg-white flex flex-col h-full">
                
                {/* Product Image */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-anvitam-charcoal">
                    {product.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider bg-gray-50 text-gray-500 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-serif text-anvitam-charcoal mb-4 leading-tight group-hover:text-anvitam-green transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {product.description}
                  </p>

                  <a 
                    href={product.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-anvitam-charcoal text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-anvitam-green transition-colors"
                  >
                    <ShoppingBag size={16} />
                    <span>Purchase on Topmate</span>
                    <ExternalLink size={14} className="ml-1 opacity-50" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Shop;