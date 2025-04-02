import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, ExternalLink, Github, X, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Ecobites',
    description: 'A platform connecting surplus food and non-food items from businesses and individuals to charities and those in need, reducing waste through a real-time marketplace.',
    tags: ['React+Vite', 'Tailwind css', 'Node.js', 'Express', 'MongoDB', 'MVC Architecture', 'FramerMotion', 'Nodemon' , 'MapsAPI' , 'RESTAPIs'],
    github: 'https://github.com/SravanamCharan20/EcoBites2',
    demo: 'https://ecobites2.onrender.com',
    featured: true,
  },
  {
    title: 'CodeCast - Real-time Code Collaboration',
    description: 'CodeCast is a real-time code collaboration app built with the MERN stack and Socket.IO. It allows multiple users to collaborate on code in the same virtual room.',
    tags: ['Express.js', 'React', 'Node.js', 'Socket.IO', 'uuid', 'CodeMirror'],
    github: 'https://github.com/SravanamCharan20/CodeCast',
    demo: 'https://codecast-1-trw9.onrender.com/',
    featured: true,
  },
  {
    title: 'Google Search - Clone',
    description: 'Build a Google search clone with Next.js, Tailwind CSS, and Google Search Engine API for live search functionality.',
    tags: ['Next.js', 'Tailwind CSS', 'Google Search Engine API'],
    github: 'https://github.com/SravanamCharan20/GoogleClone',
    demo: 'https://google-searchclone.vercel.app/',
    featured: false,
  },
  {
    title: 'CineVerse',
    description: 'CineVerse is an online database for movies, TV shows, and celebrities, offering ratings, reviews, and extensive information.',
    tags: ['React', 'Node.js', 'Imdb API', 'Tailwind CSS'],
    github: 'https://github.com/SravanamCharan20/imbd',
    demo: 'https://imbd-chi.vercel.app/',
    featured: false,
  },
  {
    title: 'BrainWave - (UI/UX Design)',
    description: 'Brainstorm is an eye-catching UI/UX designed platform that offers a sleek, responsive interface with dynamic data handling. Its innovative design ensures rapid development and efficient state management for a seamless user experience.',
    tags: ['React', 'Vite', 'FramerMotion', 'Tailwind CSS'],
    github: 'https://github.com/SravanamCharan20/BrainStrom',
    demo: 'https://brain-strom-bay.vercel.app/',
    featured: false,
  },
];

const ProjectModal = ({ project, onClose }: { project: typeof projects[0], onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl font-light">{project.title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg transition hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            <Github className="w-5 h-5" />
            <span>View Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black px-6 py-3 rounded-lg transition hover:bg-black dark:hover:bg-gray-300"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.featured
  );

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Selected Work</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A collection of my recent projects showcasing my skills in web development and design.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeFilter === 'all'
                ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter('featured')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeFilter === 'featured'
                ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Featured
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-light">{project.title}</h3>
                  <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-xs"
                    >
                      +{project.tags.length - 3} more
                    </button>
                  )}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black px-4 py-2 rounded-lg transition hover:bg-black dark:hover:bg-gray-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;