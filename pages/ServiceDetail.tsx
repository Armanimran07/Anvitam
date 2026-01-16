import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowLeft, CheckCircle2, Calendar } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { services } = useContent();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <p className="text-xl font-serif mb-4">Service not found.</p>
        <Link to="/services" className="border-b border-black pb-1">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen animate-fade-in pt-24 pb-24">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Link to="/services" className="inline-flex items-center space-x-2 text-gray-500 hover:text-anvitam-green transition-colors mb-8">
          <ArrowLeft size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Expertise</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-serif text-anvitam-charcoal mb-8 leading-tight">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-serif max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </ScrollReveal>
      </div>

      {/* Hero Image */}
      {service.image && (
        <div className="w-full h-[60vh] bg-gray-100 mb-24 overflow-hidden relative">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-anvitam-charcoal/10"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
        
        {/* Main Content Column */}
        <div className="md:col-span-7">
          {/* Deep Dive Description */}
          <ScrollReveal>
            <h3 className="text-sm font-bold uppercase tracking-widest text-anvitam-green mb-6">The Deep Dive</h3>
            <div className="prose prose-lg prose-p:font-serif prose-p:text-gray-600 prose-p:leading-loose max-w-none mb-16">
              {service.fullDescription ? (
                  service.fullDescription.split('\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))
              ) : (
                <p>Detailed description coming soon...</p>
              )}
            </div>
          </ScrollReveal>

          {/* Benefits / Why This Matters */}
          {service.benefits && (
            <ScrollReveal delay={100}>
              <div className="bg-anvitam-cream/50 p-8 md:p-12 border-l-4 border-anvitam-green mb-16">
                <h3 className="text-2xl font-serif text-anvitam-charcoal mb-6">Why This Matters</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 size={24} className="text-anvitam-blue flex-shrink-0 mt-1" />
                      <span className="text-lg text-anvitam-charcoal/80 font-serif">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* Sidebar / Process Column */}
        <div className="md:col-span-5 md:pl-12">
          {/* Booking CTA - Sticky */}
          <div className="sticky top-32">
             <div className="bg-anvitam-charcoal text-white p-8 md:p-10 text-center mb-12 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-anvitam-green/20 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
                <h3 className="text-2xl font-serif mb-4 relative z-10">Transform Your Vision</h3>
                <p className="text-white/70 mb-8 text-sm relative z-10">
                  Ready to start? Book a 1:1 consultation call to discuss your specific needs and how we can help.
                </p>
                <a 
                  href={service.bookingLink || 'https://topmate.io/ar_archana_gavas'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 w-full bg-white text-anvitam-charcoal font-bold uppercase tracking-widest py-4 hover:bg-anvitam-green hover:text-white transition-colors relative z-10"
                >
                  <Calendar size={18} />
                  <span>Book Consultation</span>
                </a>
             </div>

             {/* Our Process */}
             {service.process && (
               <div className="border-t border-gray-200 pt-12">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Our Process</h3>
                 <div className="space-y-12">
                   {service.process.map((step, idx) => (
                     <div key={idx} className="relative pl-8 border-l border-gray-200">
                       <span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-anvitam-stone"></span>
                       <h4 className="font-serif text-lg font-bold text-anvitam-charcoal mb-2">{step.title}</h4>
                       <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                     </div>
                   ))}
                 </div>
               </div>
             )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;