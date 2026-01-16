import React from 'react';

const LOGOS = [
    { name: 'Mahadev Construction', src: '/assets/clients/mahadev.jpg' },
    { name: 'SAC', src: '/assets/clients/sac.jpg' },
    { name: 'Shalimar', src: '/assets/clients/shalimar.jpg' },
    { name: 'Saraya', src: '/assets/clients/saraya.jpg' },
    { name: 'USS', src: '/assets/clients/uss.jpg' },
];

const LogoCarousel: React.FC = () => {
    return (
        <section className="py-12 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Trusted By Industry Leaders</p>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for Fade Out Effect */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrolling Track */}
                <div className="flex w-max animation-scroll hover:animation-pause">
                    {/* First Set of Logos */}
                    <div className="flex space-x-16 md:space-x-32 px-12">
                        {LOGOS.map((logo, idx) => (
                            <div key={`logo-1-${idx}`} className="flex items-center justify-center min-w-[200px] h-32 transition-transform hover:scale-110 duration-300">
                                <img src={logo.src} alt={logo.name} className="max-h-24 w-auto object-contain" />
                            </div>
                        ))}
                    </div>

                    {/* Duplicate Set for Infinite Loop */}
                    <div className="flex space-x-16 md:space-x-32 px-12" aria-hidden="true">
                        {LOGOS.map((logo, idx) => (
                            <div key={`logo-2-${idx}`} className="flex items-center justify-center min-w-[200px] h-32 transition-transform hover:scale-110 duration-300">
                                <img src={logo.src} alt={logo.name} className="max-h-24 w-auto object-contain" />
                            </div>
                        ))}
                    </div>

                    {/* Triplicate Set */}
                    <div className="flex space-x-16 md:space-x-32 px-12" aria-hidden="true">
                        {LOGOS.map((logo, idx) => (
                            <div key={`logo-3-${idx}`} className="flex items-center justify-center min-w-[200px] h-32 transition-transform hover:scale-110 duration-300">
                                <img src={logo.src} alt={logo.name} className="max-h-24 w-auto object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Move by 1/3 since we have 3 sets */
        }
        .animation-scroll {
          animation: scroll 40s linear infinite;
        }
        .animation-pause {
          animation-play-state: paused;
        }
        /* Mobile adjustment */
        @media (max-width: 768px) {
          .animation-scroll {
            animation-duration: 20s;
          }
        }
      `}</style>
        </section>
    );
};

export default LogoCarousel;
