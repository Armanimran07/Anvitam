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

  // If in admin, render simple layout
  if (location.pathname.startsWith('/admin')) {
    return <>{children}</>;
  }

  const navLinks = [
    { name: 'What', path: '/projects' }, // Projects
    { name: 'Who', path: '/team' },     // Team
    { name: 'Why', path: '/why' },      // Philosophy (Why)
    { name: 'Journal', path: '/blog' }, // Blog
    { name: 'Contact', path: '/contact' },
  ];

  return (
    // Updated container to include backdrop blur for "glass" effect over the animated body background
    <div className="flex flex-col min-h-screen font-sans bg-anvitam-cream/80 backdrop-blur-3xl text-anvitam-charcoal transition-all duration-1000 relative z-10">
      {/* Header - Transparent/Minimal */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-anvitam-cream/60 backdrop-blur-md transition-all duration-300 py-3 border-b border-anvitam-green/10">
        <div className="max-w-[90%] mx-auto flex items-center justify-between">
          <Link to="/" className="z-50 hover:opacity-80 transition-opacity">
            {/* JITTER VIDEO LOGO */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="h-16 w-auto mix-blend-multiply" 
              src="https://jitter.video/v/1739023402773.mp4"
            >
              Anvitam
            </video>
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
            className="md:hidden z-50 p-2 text-anvitam-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Nav Overlay */}
          <div className={`fixed inset-0 bg-anvitam-cream z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-3xl font-serif text-anvitam-charcoal hover:text-anvitam-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer / CTA Section */}
      <footer className="bg-anvitam-charcoal text-anvitam-cream pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <p className="font-serif italic text-2xl md:text-3xl mb-4 text-anvitam-blue">Beautiful</p>
          <h2 className="text-4xl md:text-7xl font-serif font-medium mb-4">
            let’s build something
          </h2>
          <h2 className="text-4xl md:text-7xl font-serif font-medium mb-12 italic text-anvitam-stone">
            together
          </h2>
          
          <p className="max-w-lg mx-auto text-anvitam-cream/70 mb-12 leading-relaxed">
            We’re always open to collaborations that inspire. Whether you’re a client, creator, or curious soul — reach out. Let’s imagine and create something beautiful.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
             <Link to="/contact" className="text-sm font-bold uppercase tracking-widest border-b border-anvitam-cream pb-1 hover:text-anvitam-blue hover:border-anvitam-blue transition-colors">
               Start a Project
             </Link>
             <a href="mailto:hello@anvitam.com" className="text-sm font-bold uppercase tracking-widest border-b border-anvitam-cream pb-1 hover:text-anvitam-blue hover:border-anvitam-blue transition-colors">
               hello@anvitam.com
             </a>
          </div>
        </div>

        <div className="max-w-[90%] mx-auto border-t border-anvitam-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-anvitam-cream/50 uppercase tracking-widest">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/projects" className="hover:text-white">What</Link>
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