import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects } = useContent();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex(p => p.id === id);
  const project = projects[projectIndex];

  // Handle previous/next navigation
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl font-serif mb-4">Project not found.</p>
        <Link to="/projects" className="border-b border-black pb-1">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen animate-fade-in pt-12">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-200 pb-8 mb-8">
          <div>
             <h1 className="text-4xl md:text-6xl font-serif uppercase tracking-tight text-anvitam-charcoal mb-2">
              {project.title}
            </h1>
            <p className="text-xl font-serif text-gray-500 italic max-w-2xl mt-4">
              {project.description}
            </p>
          </div>
          <div className="mt-8 md:mt-0 text-right">
             <p className="text-xs font-bold uppercase tracking-widest text-anvitam-green mb-1">{project.location}</p>
             <p className="text-sm text-gray-400">{project.category} / {project.year}</p>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full h-[60vh] md:h-[80vh] bg-gray-100 overflow-hidden mb-24">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Content Body */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Main Text Content */}
          <div className="md:col-span-8 space-y-8">
             {project.fullDescription ? (
               project.fullDescription.split('\n').map((paragraph, idx) => (
                 <p key={idx} className="text-lg leading-relaxed text-gray-700 font-serif">
                   {paragraph}
                 </p>
               ))
             ) : (
               <p className="text-lg leading-relaxed text-gray-700 font-serif">{project.description}</p>
             )}
          </div>

          {/* Sidebar / Specs */}
          <div className="md:col-span-4 space-y-12">
             <div className="bg-anvitam-cream p-8">
               <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">Project Specs</h3>
               <ul className="space-y-4">
                 {project.specs ? project.specs.map((spec, idx) => (
                   <li key={idx} className="flex justify-between text-sm">
                     <span className="text-gray-500">{spec.label}</span>
                     <span className="font-medium text-anvitam-charcoal">{spec.value}</span>
                   </li>
                 )) : (
                   <>
                     <li className="flex justify-between text-sm">
                       <span className="text-gray-500">Location</span>
                       <span className="font-medium text-anvitam-charcoal">{project.location}</span>
                     </li>
                     <li className="flex justify-between text-sm">
                       <span className="text-gray-500">Year</span>
                       <span className="font-medium text-anvitam-charcoal">{project.year}</span>
                     </li>
                   </>
                 )}
               </ul>
             </div>
          </div>
        </div>
      </div>

      {/* Story / Process Section (Start to Finish) */}
      {project.story && project.story.length > 0 && (
        <section className="bg-gray-50 py-24 my-24 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-4xl font-serif mb-16 text-center">The Making Of</h2>
            </ScrollReveal>
            
            <div className="space-y-24">
              {project.story.map((section, idx) => (
                <ScrollReveal key={idx}>
                  <div className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                     {/* Text */}
                     <div className="w-full md:w-1/2">
                        <span className="text-anvitam-green font-bold text-6xl opacity-20 block -mb-6 ml-0 font-serif">0{idx+1}</span>
                        <h3 className="text-2xl font-serif font-bold text-anvitam-charcoal mb-6 relative z-10">{section.title}</h3>
                        <p className="text-lg leading-relaxed text-gray-600 font-serif">{section.content}</p>
                     </div>
                     {/* Image */}
                     {section.image && (
                       <div className="w-full md:w-1/2">
                         <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-700">
                           <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                         </div>
                       </div>
                     )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Grid */}
      {project.gallery && (
        <div className="max-w-7xl mx-auto px-6 mb-24">
           <h3 className="text-sm font-bold uppercase tracking-widest text-center mb-12 text-gray-400">Project Gallery</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((item, idx) => (
                <div key={idx} className={`relative group overflow-hidden ${idx % 3 === 0 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'}`}>
                  <img src={item.url} alt={item.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Hover Overlay with Caption */}
                  <div className="absolute inset-0 bg-anvitam-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-anvitam-charcoal text-sm uppercase tracking-widest font-bold">
                        {item.caption}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="border-t border-gray-200 bg-anvitam-cream">
        <div className="max-w-7xl mx-auto px-6 py-12 flex justify-between items-center">
          <div 
            onClick={() => navigate(`/projects/${prevProject.id}`)}
            className="group cursor-pointer text-left"
          >
             <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 group-hover:text-anvitam-green transition-colors">Previous</span>
             <div className="flex items-center space-x-4">
               <ArrowLeft size={20} className="text-gray-400 group-hover:text-anvitam-charcoal transition-colors" />
               <span className="text-xl font-serif text-anvitam-charcoal group-hover:italic">{prevProject.title}</span>
             </div>
          </div>

          <div 
            onClick={() => navigate(`/projects/${nextProject.id}`)}
            className="group cursor-pointer text-right"
          >
             <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 group-hover:text-anvitam-green transition-colors">Next</span>
             <div className="flex items-center space-x-4 justify-end">
               <span className="text-xl font-serif text-anvitam-charcoal group-hover:italic">{nextProject.title}</span>
               <ArrowRight size={20} className="text-gray-400 group-hover:text-anvitam-charcoal transition-colors" />
             </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectDetail;