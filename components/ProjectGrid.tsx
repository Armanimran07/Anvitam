import React from 'react';
import { Project } from '../types';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const navigate = useNavigate();

  return (
    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <AnimatePresence>
        {projects.map((project) => (
          <motion.div
            layout
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div onClick={() => navigate(`/projects/${project.id}`)} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-anvitam-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white border border-white px-6 py-2 text-sm tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm">
                    View Project
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-arch-black group-hover:text-anvitam-green transition-colors font-serif">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{project.location}</p>
                </div>
                <span className="text-xs font-bold text-anvitam-blue uppercase tracking-wider border border-anvitam-stone px-2 py-1">
                  {project.category}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectGrid;