import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // If in admin, render simple layout
  if (location.pathname.startsWith('/admin')) {
    return <>{children}</>;
  }

  const navLinks = [
    { name: 'What', path: '/projects' }, // Projects
    { name: 'Who', path: '/team' },     // Team
    { name: 'Services', path: '/services' },
    { name: 'Shop', path: '/shop' },
    { name: 'Why', path: '/why' },      // Philosophy (Why)
    { name: 'Journal', path: '/blog' }, // Blog
    { name: 'Contact', path: '/contact' },
  ];

  return (
    // Updated container to include backdrop blur for "glass" effect over the animated body background
    <div className="flex flex-col min-h-screen font-sans bg-anvitam-cream/80 backdrop-blur-3xl text-anvitam-charcoal transition-all duration-1000 relative z-10">
      {/* Header - Transparent/Minimal */}
      <header className="fixed top-0 left-0 right-0 z-[60] bg-anvitam-cream/80 backdrop-blur-md transition-all duration-300 py-3 md:py-4 border-b border-anvitam-green/10">
        <div className="max-w-[90%] mx-auto flex items-center justify-between">
          <Link to="/" className="z-[60] hover:opacity-80 transition-opacity flex items-center gap-2 md:gap-3 group" onClick={() => setIsMenuOpen(false)}>
            
            {/* Custom SVG Logo Icon (Leaf Spiral) - Optimized for Mobile */}
            <div className="relative h-10 w-10 md:h-14 md:w-14 animate-float flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <g className="origin-center group-hover:rotate-12 transition-transform duration-1000 ease-out">
                  {/* Leaves arranged in a spiral - Added stroke for boldness */}
                  <path d="M50 50 Q60 20 50 10 Q40 20 50 50" fill="#4a6741" stroke="#4a6741" strokeWidth="2" className="opacity-90" transform="rotate(0 50 50)" />
                  <path d="M50 50 Q80 40 90 50 Q80 60 50 50" fill="#8FA860" stroke="#8FA860" strokeWidth="2" className="opacity-90" transform="rotate(72 50 50)" />
                  <path d="M50 50 Q60 80 50 90 Q40 80 50 50" fill="#4a6741" stroke="#4a6741" strokeWidth="2" className="opacity-90" transform="rotate(144 50 50)" />
                  <path d="M50 50 Q20 60 10 50 Q20 40 50 50" fill="#A0C878" stroke="#A0C878" strokeWidth="2" className="opacity-90" transform="rotate(216 50 50)" />
                  <path d="M50 50 Q30 20 30 10 Q40 30 50 50" fill="#DDEB9D" stroke="#DDEB9D" strokeWidth="2" className="opacity-90" transform="rotate(288 50 50)" />
                  
                  {/* Decorative dots between leaves */}
                  <circle cx="50" cy="25" r="2.5" fill="#2C241B" />
                  <circle cx="75" cy="50" r="2.5" fill="#2C241B" />
                  <circle cx="50" cy="75" r="2.5" fill="#2C241B" />
                  <circle cx="25" cy="50" r="2.5" fill="#2C241B" />
                </g>
              </svg>
            </div>

            {/* Hindi Text Logo - Bolder */}
            <span className="text-3xl md:text-5xl font-serif font-bold text-anvitam-charcoal pb-1 md:pb-2 leading-none">
              अन्वितम
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium uppercase tracking-widest text-anvitam-charcoal/70 hover:text-anvitam-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-anvitam-blue transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-[60] p-2 text-anvitam-charcoal focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Nav Overlay */}
          <div 
            className={`fixed inset-0 bg-anvitam-cream z-[50] flex flex-col items-center justify-center space-y-6 transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ height: '100dvh' }} // Use dynamic viewport height
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-serif text-anvitam-charcoal hover:text-anvitam-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Footer Info */}
            <div className="mt-8 text-center border-t border-anvitam-charcoal/10 pt-8 w-3/4">
              <p className="text-xs font-bold uppercase tracking-widest text-anvitam-stone mb-2">Get in Touch</p>
              <a href="mailto:anvitamarchitect@gmail.com" className="text-anvitam-charcoal hover:text-anvitam-blue block font-serif text-lg break-all">anvitamarchitect@gmail.com</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 md:pt-24 w-full overflow-x-hidden">
        {children}
      </main>

      {/* Footer / CTA Section */}
      <footer className="bg-anvitam-charcoal text-anvitam-cream pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20 text-center">
          <p className="font-serif italic text-xl md:text-3xl mb-4 text-anvitam-blue">Beautiful</p>
          <h2 className="text-3xl md:text-7xl font-serif font-medium mb-2 md:mb-4">
            let’s build something
          </h2>
          <h2 className="text-3xl md:text-7xl font-serif font-medium mb-8 md:mb-12 italic text-anvitam-stone">
            together
          </h2>
          
          <p className="max-w-lg mx-auto text-anvitam-cream/70 mb-8 md:mb-12 leading-relaxed text-sm md:text-base">
            We’re always open to collaborations that inspire. Whether you’re a client, creator, or curious soul — reach out. Let’s imagine and create something beautiful.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
             <Link to="/contact" className="text-sm font-bold uppercase tracking-widest border-b border-anvitam-cream pb-1 hover:text-anvitam-blue hover:border-anvitam-blue transition-colors">
               Start a Project
             </Link>
             <a href="mailto:anvitamarchitect@gmail.com" className="text-sm font-bold uppercase tracking-widest border-b border-anvitam-cream pb-1 hover:text-anvitam-blue hover:border-anvitam-blue transition-colors">
               anvitamarchitect@gmail.com
             </a>
          </div>
        </div>

        <div className="max-w-[90%] mx-auto border-t border-anvitam-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-anvitam-cream/50 uppercase tracking-widest gap-4">
          <div className="flex flex-wrap justify-center gap-4 md:space-x-6 mb-2 md:mb-0">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/projects" className="hover:text-white">What</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/shop" className="hover:text-white">Shop</Link>
            <Link to="/team" className="hover:text-white">Who</Link>
            <Link to="/blog" className="hover:text-white">Journal</Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/admin" className="hover:text-white">Staff Login</Link>
            <span>© {new Date().getFullYear()} Anvitam</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;