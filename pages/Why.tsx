import React from 'react';

const Why: React.FC = () => {
  return (
    <div className="animate-fade-in bg-anvitam-cream min-h-screen pt-24 pb-24">
      
      {/* Header Quote */}
      <div className="max-w-5xl mx-auto px-6 mb-32 text-center">
        <h1 className="text-6xl md:text-8xl font-serif text-anvitam-charcoal mb-12">why we design</h1>
        <div className="relative inline-block">
          <span className="absolute -top-8 -left-8 text-6xl text-anvitam-green opacity-20 font-serif">"</span>
          <p className="text-2xl md:text-4xl font-serif text-anvitam-charcoal/80 leading-tight italic relative z-10">
            Anvitam is contextual architecture and interior design practicing sustainable, eco-friendly biophilic designs that blends seamlessly with nature.
          </p>
          <span className="absolute -bottom-12 -right-8 text-6xl text-anvitam-green opacity-20 font-serif">"</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-32">
        
        {/* 01. Belief */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-anvitam-green block mb-4">01. Belief</span>
             <h2 className="text-4xl md:text-5xl font-serif mb-8 text-anvitam-charcoal leading-tight">Artisanal. Experimental. Collaborative.</h2>
             <div className="space-y-6 text-lg leading-relaxed text-gray-600 font-serif">
                <p>We care equally for fine details and the broader vision, thoughtfully crafting spaces that are both responsive and rooted. We believe design can transform the way we live, and must be approached with sensitivity, purpose, and responsibility.</p>
                <p>Sustainability is not just a goal, but a mindset that shapes every decision. We often use locally available materials, reinterpreting them to create contemporary expressions that are both relevant and timeless.</p>
                <p>Architecture, to us, is a fluid relationship between the physical, psychological, social, and cultural. Through biophilic design, we create spaces that blur the lines between built form and natural context.</p>
             </div>
          </div>
          <div className="order-1 md:order-2 relative group">
             <div className="aspect-[3/4] overflow-hidden bg-gray-200 relative z-10 shadow-xl">
                {/* Updated Image: Focus on Texture/Material */}
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop" 
                  alt="Artisanal texture and form" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-8 -left-8 w-full h-full border-2 border-anvitam-green/30 z-0 hidden md:block"></div>
          </div>
        </div>

        {/* 02. Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="relative group">
             <div className="aspect-square md:aspect-[4/5] overflow-hidden bg-gray-200 relative z-10 shadow-xl">
                {/* Updated Image: Focus on Light and Space */}
                <img 
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop" 
                  alt="Meaningful, light-filled spaces" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
             </div>
             <div className="absolute -top-8 -right-8 w-full h-full bg-anvitam-stone/30 z-0 hidden md:block"></div>
           </div>
           <div>
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-anvitam-blue block mb-4">02. Philosophy</span>
             <h2 className="text-4xl md:text-5xl font-serif mb-8 text-anvitam-charcoal leading-tight">Shaping Meaningful Spaces</h2>
             <div className="space-y-6 text-lg leading-relaxed text-gray-600 font-serif">
                <p>We are a young, reflective practice — playful yet deeply grounded in the responsibility of shaping meaningful spaces. Our philosophy is to blend design, materials, and technology into seamless everyday experiences.</p>
                <p>Every project is a story of its own, shaped by its site, climate, material, labor, and budget. Context is central — it helps prevent problems and reveals opportunities.</p>
                <p>Our work is never formulaic. Each design evolves from listening — to the people, the land, and the pulse of the project. We treat every project as an individual expression, with care for both conceptual depth and real-world function.</p>
             </div>
           </div>
        </div>

        {/* 03. Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-anvitam-stone block mb-4">03. Approach</span>
             <h2 className="text-4xl md:text-5xl font-serif mb-8 text-anvitam-charcoal leading-tight">Care for the Earth & Craft</h2>
             <div className="space-y-6 text-lg leading-relaxed text-gray-600 font-serif">
                <p>Our approach begins with care — for the earth, for people, and for the craft of architecture. We focus on ecological practices and sustainable thinking, considering the health and environmental impact of design choices.</p>
                <p>We believe in reconnecting people to nature through thoughtful, biophilic spaces. Our buildings aim to integrate, not isolate — offering comfort, awareness, and beauty.</p>
                <p>We find joy in the design process — a mix of curiosity, creativity, and playful exploration. Design doesn’t always have to be serious; it can be light, meaningful, and fun.</p>
             </div>
          </div>
          <div className="order-1 md:order-2 relative group">
             <div className="aspect-[4/3] overflow-hidden bg-gray-200 relative z-10 shadow-xl">
                {/* Updated Image: Focus on Nature/Biophilia */}
                <img 
                  src="https://images.unsplash.com/photo-1527359443443-152a3069e113?q=80&w=1200&auto=format&fit=crop" 
                  alt="Nature integrated with design" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
             </div>
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-anvitam-green/20 rounded-full blur-2xl z-20"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Why;