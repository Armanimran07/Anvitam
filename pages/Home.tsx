import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { TESTIMONIALS, PROCESS_STEPS } from '../constants';
import { ArrowDown, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

import LeavesAnimation from '../components/LeavesAnimation';
import LogoCarousel from '../components/LogoCarousel';

const Home: React.FC = () => {
  const { projects } = useContent();
  const navigate = useNavigate();
  const showcaseProjects = projects.slice(0, 3);

  return (
    <div className="animate-fade-in w-full overflow-x-hidden">
      <LeavesAnimation />

      {/* HERO SECTION - SURREAL UPDATE */}
      <section className="relative min-h-[90vh] md:min-h-[95vh] flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden">

        {/* --- SURREAL BACKGROUND LAYERS --- */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          {/* 1. Large Faded Architectural Image (Abstract/Curved) */}
          <div className="absolute inset-0 opacity-10 md:opacity-15 mix-blend-multiply">
            <img
              src="https://images.unsplash.com/photo-1631510068837-183021f47c0b?q=80&w=2000&auto=format&fit=crop"
              alt="Abstract Architecture"
              className="w-full h-full object-cover animate-breathe scale-110"
            />
          </div>

          {/* 2. Soft Gradient Vignette (Fades edges to cream) */}
          <div className="absolute inset-0 bg-gradient-to-t from-anvitam-cream via-transparent to-anvitam-cream/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-anvitam-cream/80 via-transparent to-anvitam-cream/40"></div>

          {/* 3. Floating Surreal Orbs */}
          <div className="absolute top-[20%] -left-[10%] md:left-[10%] w-64 h-64 md:w-96 md:h-96 bg-anvitam-green/20 rounded-full blur-[80px] animate-float opacity-70 mix-blend-multiply"></div>
          <div className="absolute bottom-[20%] -right-[10%] md:right-[15%] w-80 h-80 md:w-[30rem] md:h-[30rem] bg-anvitam-stone/30 rounded-full blur-[100px] animate-float opacity-70 mix-blend-multiply" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* --- CONTENT (Z-10 to stay above background) --- */}
        <ScrollReveal className="z-10 relative">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-4 md:mb-6 text-anvitam-green drop-shadow-sm">we are</p>

            {/* Frame Animation for Title */}
            <div className="overflow-hidden mb-6 md:mb-8">
              <h1 className="text-5xl md:text-9xl font-serif font-medium text-anvitam-charcoal tracking-tight animate-slide-up drop-shadow-sm">
                ANVITAM
              </h1>
            </div>

            <div className="w-16 md:w-24 h-px bg-anvitam-charcoal/30 mx-auto mb-6 md:mb-8"></div>

            <p className="text-lg md:text-3xl font-serif text-anvitam-charcoal/90 leading-relaxed max-w-4xl mx-auto drop-shadow-sm">
              Architects in <span className="italic text-anvitam-green">Vadodara, Gujarat</span> blending <br className="hidden md:block" />
              <span className="text-anvitam-blue font-medium">Sustainability</span> with <span className="text-anvitam-green font-medium">Nature</span>
            </p>
          </div>
        </ScrollReveal>

        <div
          onClick={() => document.getElementById('what')?.scrollIntoView({ behavior: 'smooth' })}
          className="cursor-pointer absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-60 animate-bounce hover:opacity-100 transition-opacity z-10"
        >
          <span className="text-[10px] uppercase tracking-widest mb-2 text-anvitam-charcoal font-bold">Scroll</span>
          <ArrowDown size={16} className="text-anvitam-charcoal" />
        </div>
      </section>

      {/* WHAT SECTION (Projects) */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto" id="what">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6 text-anvitam-green">what</h2>
            </ScrollReveal>
          </div>
          <div className="md:col-span-9">
            <ScrollReveal delay={100}>
              <p className="text-lg md:text-2xl font-serif text-anvitam-charcoal/80 leading-relaxed mb-12 md:mb-20 max-w-3xl">
                Our work is a tapestry of ideas shaped into reality. Each project is a story—born from collaboration, rooted in context, and guided by sustainability and nature.
              </p>
            </ScrollReveal>

            <div className="space-y-20 md:space-y-32">
              {showcaseProjects.map((project, index) => (
                <ScrollReveal key={project.id}>
                  <div
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className={`group cursor-pointer flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-12 items-start`}
                  >
                    <div className="w-full md:w-3/5">
                      <div className="aspect-[4/3] bg-anvitam-stone overflow-hidden relative shadow-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-anvitam-green/0 group-hover:bg-anvitam-green/10 transition-colors duration-500"></div>
                      </div>
                    </div>
                    <div className="w-full md:w-2/5 flex flex-col justify-center pt-2 md:pt-4">
                      <h3 className="text-2xl md:text-4xl font-serif mb-2 group-hover:text-anvitam-green transition-colors">{project.title}</h3>
                      <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-anvitam-blue mb-4 md:mb-6">{project.location}</p>
                      <p className="text-sm md:text-base text-anvitam-charcoal/70 leading-relaxed mb-6 md:mb-8">
                        {project.description}
                      </p>
                      <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest border-b border-anvitam-charcoal pb-1 w-max group-hover:text-anvitam-green group-hover:border-anvitam-green transition-colors">
                        <span>View Project</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="mt-16 md:mt-24 text-center">
                <Link to="/projects" className="text-base md:text-lg font-serif italic border-b border-anvitam-charcoal pb-1 hover:text-anvitam-green hover:border-anvitam-green transition-colors">
                  View all projects
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHY SECTION (Philosophy) */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white/40 backdrop-blur-sm" id="why">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6 text-anvitam-green">why</h2>
            </ScrollReveal>
          </div>
          <div className="md:col-span-9">
            <ScrollReveal delay={100}>
              <p className="text-lg md:text-2xl font-serif text-anvitam-charcoal/80 leading-relaxed mb-12 md:mb-16 max-w-3xl">
                Design is our way of connecting people, place, and nature. Guided by principles of <span className="text-anvitam-blue italic">sustainability</span>, contextual sensitivity, and <span className="text-anvitam-green italic">biophilia</span>.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <ScrollReveal delay={200}>
                <div onClick={() => navigate('/why')} className="cursor-pointer group">
                  <h3 className="text-lg md:text-xl font-serif font-bold mb-2 md:mb-4 text-anvitam-charcoal group-hover:text-anvitam-green transition-colors">Sustainable</h3>
                  <p className="text-sm text-anvitam-charcoal/70 leading-relaxed">
                    We design with responsibility toward the environment. Passive strategies ensure natural light and ventilation, while local materials like mud and stone reduce our carbon footprint.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div onClick={() => navigate('/why')} className="cursor-pointer group">
                  <h3 className="text-lg md:text-xl font-serif font-bold mb-2 md:mb-4 text-anvitam-charcoal group-hover:text-anvitam-green transition-colors">Contextual</h3>
                  <p className="text-sm text-anvitam-charcoal/70 leading-relaxed">
                    Every project is rooted in its surroundings—climate, culture, and context. Our designs evolve from the lives of the people who inhabit them.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div onClick={() => navigate('/why')} className="cursor-pointer group">
                  <h3 className="text-lg md:text-xl font-serif font-bold mb-2 md:mb-4 text-anvitam-charcoal group-hover:text-anvitam-green transition-colors">Biophilic</h3>
                  <p className="text-sm text-anvitam-charcoal/70 leading-relaxed">
                    We nurture the innate human connection with nature. Greenery, water, and organic textures creates a sensory richness that brings balance and calm.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* HOW SECTION (Process) */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto" id="how">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <ScrollReveal><h2 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6 text-anvitam-green">how</h2></ScrollReveal>
          </div>
          <div className="md:col-span-9">
            <ScrollReveal delay={100}>
              <p className="text-lg md:text-2xl font-serif text-anvitam-charcoal/80 leading-relaxed mb-12 md:mb-16 max-w-3xl">
                Every project begins with understanding—listening to visions, sensing the site, and learning from climate.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-anvitam-green/10 pt-8 md:pt-12">
              {PROCESS_STEPS.map((step, idx) => (
                <ScrollReveal key={step.id} delay={100 * idx}>
                  <Link to={`/process/${step.id}`} className="space-y-4 group cursor-pointer block">
                    <span className="text-3xl md:text-4xl font-serif text-anvitam-green/20 group-hover:text-anvitam-green transition-colors">{step.number}</span>
                    <h3 className="text-base md:text-lg font-bold uppercase tracking-widest text-anvitam-charcoal group-hover:text-anvitam-blue transition-colors">{step.title}</h3>
                    <ul className="text-xs md:text-sm text-anvitam-charcoal/70 space-y-2 font-mono">
                      {step.items.map((item, i) => (
                        <li key={i}>[ {item} ]</li>
                      ))}
                    </ul>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS / LOGO CAROUSEL */}
      <LogoCarousel />

      {/* WHO SECTION (Updated Text & Image) */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-anvitam-charcoal text-anvitam-cream cursor-pointer group" id="who" onClick={() => navigate('/team')}>
        <ScrollReveal>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-3">
              <h2 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6 text-anvitam-green">who</h2>
            </div>
            <div className="md:col-span-5 order-2 md:order-1">
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4 text-anvitam-blue">Meet Us</h4>
              <h3 className="text-2xl md:text-3xl font-serif mb-6 leading-tight group-hover:text-anvitam-stone transition-colors">
                Fearless Originality
              </h3>
              <p className="text-lg md:text-xl font-serif italic mb-6 text-anvitam-cream/80">
                Rooted in Vadodara, Designing for the world.<br />
                Unafraid of the unknown.
              </p>

              <div className="mt-8 md:mt-12">
                <p className="text-base md:text-lg font-bold uppercase tracking-widest text-anvitam-green mb-1">Archana Gavas</p>
                <p className="text-xs md:text-sm text-anvitam-cream/60">Principal Architect, Founder</p>
              </div>
            </div>
            <div className="md:col-span-4 order-1 md:order-2">
              {/* Updated with new link from constants */}
              <img
                src="https://topmate.io/cdn-cgi/image/width=640,quality=90/https://static.topmate.io/da2bLpNHf3cETP6EKEtsXL.jpeg"
                alt="Archana Gavas"
                className="w-full grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-500 object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* VOICES (Testimonials) */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <ScrollReveal><h2 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6 text-anvitam-green">voices</h2></ScrollReveal>
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {TESTIMONIALS.map(item => (
                <ScrollReveal key={item.id}>
                  <div className="flex flex-col">
                    <div className="mb-4 md:mb-6">
                      <img
                        src={item.image}
                        alt={item.author}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-anvitam-green/20"
                      />
                    </div>
                    <p className="text-lg md:text-xl font-serif italic text-anvitam-charcoal/80 mb-4 md:mb-6">
                      "{item.text}"
                    </p>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-anvitam-green">{item.author}</p>
                      <p className="text-xs text-anvitam-charcoal/50">{item.role}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;