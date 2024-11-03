import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Digital Experience Platform',
    description: 'Enterprise-level content management system',
    link: '#',
    tags: ['React', 'Redux', 'Firebase'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Real-time data visualization platform',
    link: '#',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    demo: '#',
  },
  {
    title: 'E-Commerce Solution',
    description: 'Modern headless commerce platform',
    link: '#',
    tags: ['React', 'D3.js', 'Weather API'],
    github: '#',
    demo: '#',
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading"
        >
          Selected Work
        </motion.h2>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group border-t border-neutral-200 dark:border-neutral-800 py-12"
            >
              <a href={project.link} className="block transition-opacity">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-light mb-4">{project.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="w-8 h-8 transform group-hover:translate-x-3 group-hover:-translate-y-1 transition-transform" />
                </div>
                <div className="flex gap-4 mt-4">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg transition hover:bg-gray-300 dark:hover:bg-gray-700"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black px-4 py-2 rounded-lg transition hover:bg-black dark:hover:bg-gray-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;