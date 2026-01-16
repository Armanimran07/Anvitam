import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROCESS_STEPS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const Process: React.FC = () => {
  const { phase } = useParams<{ phase: string }>();
  const currentStep = PROCESS_STEPS.find(s => s.id === phase);

  if (!currentStep) {
     return (
       <div className="min-h-screen flex flex-col items-center justify-center bg-anvitam-cream">
        <p className="text-xl font-serif mb-4">Process phase not found.</p>
        <Link to="/" className="border-b border-black pb-1">Back Home</Link>
      </div>
     );
  }

  return (
    <div className="min-h-screen bg-anvitam-cream pt-24 pb-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation Breadcrumbs for Process */}
        <ScrollReveal>
          <div className="flex space-x-8 mb-16 border-b border-anvitam-green/20 pb-4 overflow-x-auto">
             {PROCESS_STEPS.map(step => (
               <Link 
                key={step.id} 
                to={`/process/${step.id}`}
                className={`text-sm font-bold uppercase tracking-widest transition-colors flex-shrink-0 ${step.id === phase ? 'text-anvitam-charcoal border-b-2 border-anvitam-green pb-4 -mb-4.5' : 'text-gray-400 hover:text-anvitam-green'}`}
               >
                 {step.number}. {step.title}
               </Link>
             ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
           
           {/* Left Column: Number, Title, Items */}
           <div className="md:col-span-5">
             <ScrollReveal>
               <span className="text-9xl font-serif text-anvitam-stone block -ml-2 mb-4 leading-none">{currentStep.number}</span>
               <h1 className="text-6xl font-serif text-anvitam-charcoal mb-8">{currentStep.title}</h1>
               
               <ul className="space-y-4 mb-12">
                 {currentStep.items.map((item, idx) => (
                   <li key={idx} className="flex items-center text-lg font-mono text-anvitam-blue">
                     <span className="mr-4 text-anvitam-green opacity-50">[</span>
                     {item}
                     <span className="ml-4 text-anvitam-green opacity-50">]</span>
                   </li>
                 ))}
               </ul>

               {/* Image for Mobile Only */}
               <div className="block md:hidden mb-8 aspect-[4/3] bg-gray-100 overflow-hidden rounded-sm shadow-lg">
                  <img src={currentStep.image} alt={currentStep.title} className="w-full h-full object-cover" />
               </div>
             </ScrollReveal>
           </div>

           {/* Right Column: Image (Desktop), Description, Approach */}
           <div className="md:col-span-7 space-y-8 md:pt-12">
             
             {/* Main Image - Desktop */}
             <ScrollReveal>
               <div className="hidden md:block aspect-[16/9] w-full bg-gray-100 overflow-hidden mb-12 shadow-xl rounded-sm">
                  <img 
                    src={currentStep.image} 
                    alt={currentStep.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]" 
                  />
               </div>
             </ScrollReveal>

             <ScrollReveal delay={100}>
               <p className="text-2xl font-serif leading-relaxed text-anvitam-charcoal/80">
                 {currentStep.description}
               </p>
               <p className="text-lg leading-relaxed text-gray-600 mt-6">
                 At Anvitam, we believe that <span className="italic text-anvitam-blue">{currentStep.title.toLowerCase()}ing</span> is not just a phase, but a continuous dialogue. By engaging deeply with this step, we ensure that the outcome is not just a building, but a living, breathing ecosystem that respects its inhabitants and its environment.
               </p>
             </ScrollReveal>

             {/* Approach Box */}
             <ScrollReveal delay={200}>
               <div className="bg-white p-8 border border-gray-100 shadow-sm mt-8 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-1 h-full bg-anvitam-green transform scale-y-100 transition-transform"></div>
                 <h3 className="font-bold uppercase tracking-widest text-xs mb-4 text-anvitam-green">Our Approach</h3>
                 <p className="text-gray-500 text-sm leading-loose">
                   We employ a rigorous methodology for the {currentStep.title} phase, ensuring no detail is overlooked. From initial sketches to advanced simulations, our process is designed to mitigate risk and maximize creativity.
                 </p>
               </div>
             </ScrollReveal>
           </div>

        </div>
      </div>
    </div>
  );
};

export default Process;