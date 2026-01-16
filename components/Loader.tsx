import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-anvitam-cream z-[100] flex flex-col items-center justify-center">
      <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb--fr"></div>
            <div className="hamster__limb--fl"></div>
            <div className="hamster__limb--br"></div>
            <div className="hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
      <p className="mt-8 font-serif text-anvitam-charcoal uppercase tracking-[0.2em] text-sm animate-pulse">Loading Anvitam...</p>
    </div>
  );
};

export default Loader;