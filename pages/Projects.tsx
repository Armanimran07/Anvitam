import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import ProjectGrid from '../components/ProjectGrid';

const Projects: React.FC = () => {
  const { projects } = useContent();
  const [filter, setFilter] = useState<string>('All');
  
  // Custom categories list as requested
  const categories = ['All', 'Architecture', 'Commercial', 'Community', 'Hospitality', 'Interiors', 'Ongoing', 'Residential'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 pt-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-arch-black">Our Projects</h1>
          <p className="text-gray-500 max-w-4xl mb-12 text-lg font-serif italic leading-relaxed">
            We listen to what the land wants to become — guided by its contours, climate, and culture. Stories, seasons, and materials shape each space with care and intention. Rooted in a sustainable, contextual, and holistic approach, this philosophy continues to shape our work as architects in Mumbai and beyond.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-gray-100 pb-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm font-bold uppercase tracking-widest pb-2 transition-colors duration-300 ${
                  filter === cat 
                    ? 'text-anvitam-green border-b-2 border-anvitam-green -mb-4.5' // adjust negative margin to align with border
                    : 'text-gray-400 hover:text-anvitam-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <ProjectGrid projects={filteredProjects} />
        ) : (
          <div className="py-20 text-center text-gray-400 font-serif italic">
            No projects found in this category yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;