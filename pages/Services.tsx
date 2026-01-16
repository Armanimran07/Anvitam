import React from 'react';
import { useContent } from '../context/ContentContext';
import ScrollReveal from '../components/ScrollReveal';
import { PenTool, Layout, Sprout, FlaskConical, CheckCircle2, Box, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const { services } = useContent();
  const navigate = useNavigate();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PenTool': return <PenTool size={32} />;
      case 'Layout': return <Layout size={32} />;
      case 'Sprout': return <Sprout size={32} />;
      case 'FlaskConical': return <FlaskConical size={32} />;
      default: return <Box size={32} />;
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif text-anvitam-charcoal mb-6">Our Expertise</h1>
            <p className="text-xl text-gray-500 font-serif italic">
              Comprehensive design solutions tailored to create value, beauty, and sustainability.
            </p>
          </div>
        </ScrollReveal>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <ScrollReveal key={service.id}>
              <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-start`}>
                
                {/* Visual Side (Icon/Abstract) */}
                <div 
                  className="w-full md:w-1/3 cursor-pointer group"
                  onClick={() => navigate(`/services/${service.id}`)}
                >
                  <div className="bg-anvitam-cream aspect-square flex items-center justify-center rounded-sm relative overflow-hidden">
                     <div className="text-anvitam-green transform scale-150 group-hover:scale-125 transition-transform duration-700">
                        {getIcon(service.icon)}
                     </div>
                     <div className="absolute inset-0 border border-anvitam-green/20 m-4 group-hover:border-anvitam-green transition-colors duration-500"></div>
                     <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <ArrowRight className="text-anvitam-charcoal" />
                     </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-2/3 pt-4">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-anvitam-green">0{index + 1}</span>
                    <h2 
                      className="text-3xl md:text-4xl font-serif text-anvitam-charcoal hover:text-anvitam-green cursor-pointer transition-colors"
                      onClick={() => navigate(`/services/${service.id}`)}
                    >
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-xl text-gray-600 font-serif leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="bg-gray-50 p-8 border-l-2 border-anvitam-green mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-6">What You Get (Client Value)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.valueProps.map((prop, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <CheckCircle2 size={18} className="text-anvitam-blue mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600 leading-relaxed">{prop}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-anvitam-charcoal border-b border-anvitam-charcoal pb-1 hover:text-anvitam-green hover:border-anvitam-green transition-colors"
                  >
                    <span>Read More & Book</span>
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={200}>
          <div className="mt-32 text-center bg-anvitam-charcoal text-anvitam-cream p-12 md:p-24 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif mb-6">Ready to maximize value?</h2>
              <p className="text-lg text-anvitam-cream/70 mb-10 max-w-2xl mx-auto">
                Whether it's a home, a landscape, or a research project, we ensure your investment yields sustainable, long-term returns.
              </p>
              <Link to="/contact" className="inline-block bg-anvitam-green text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-anvitam-green transition-colors">
                Contact Us Today
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Services;