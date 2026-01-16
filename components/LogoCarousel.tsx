import React from 'react';

const LogoCarousel: React.FC = () => {
    const logos = [
        { name: 'MAHADEV', src: '/assets/clients/mahadev.png' },
        { name: 'SAC', src: '/assets/clients/sac.png' },
        { name: 'SARAYA', src: '/assets/clients/saraya.png' },
        { name: 'BEER BAR', src: '/assets/clients/beerbar.png' },
        { name: 'MOSSARIA', src: '/assets/clients/mossaria.png' },
    ];

    // Tripling the array for seamless infinite loop
    const displayLogos = [...logos, ...logos, ...logos];

    return (
        <div className="w-full py-20 bg-anvitam-cream/50 backdrop-blur-sm border-y border-anvitam-charcoal/5 relative z-20 overflow-hidden">

            {/* Section Header - Subtle & Elegant */}
            <div className="text-center mb-10 opacity-70">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-anvitam-charcoal">Trusted Partners</p>
            </div>

            <div className="relative w-full">
                {/* Left/Right Fade Gradients for "Glass" Effect */}
                <div className="absolute top-0 left-0 h-full w-24 md:w-64 bg-gradient-to-r from-anvitam-cream to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 h-full w-24 md:w-64 bg-gradient-to-l from-anvitam-cream to-transparent z-10 pointer-events-none" />

                {/* Scrolling Track */}
                <div className="flex w-max animate-scroll hover:animation-pause items-center">
                    {displayLogos.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="flex items-center justify-center px-12 md:px-20 mx-4 group transition-all duration-500"
                        >
                            {/* Logo Container - Modern Interaction */}
                            <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center filter grayscale opacity-60 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110">
                                <img
                                    src={logo.src}
                                    alt={`${logo.name} logo`}
                                    className="max-h-full max-w-full object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tailwind Animation Config (Add to tailwind.config.js if not present) */}
            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\\:animation-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default LogoCarousel;
