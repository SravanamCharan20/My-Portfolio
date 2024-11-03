import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layout className="w-6 h-6" />,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'WebGL']
  },
  {
    title: 'Backend Development',
    icon: <Server className="w-6 h-6" />,
    skills: ['Node.js', 'Python', 'GraphQL', 'REST APIs', 'Microservices']
  },
  {
    title: 'Mobile & Cross-platform',
    icon: <Smartphone className="w-6 h-6" />,
    skills: ['React Native', 'Flutter', 'Progressive Web Apps', 'Native APIs']
  },
  {
    title: 'Developer Tools',
    icon: <Terminal className="w-6 h-6" />,
    skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Linux']
  },
  {
    title: 'Languages',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Rust', 'SQL']
  },
  {
    title: 'Databases',
    icon: <Database className="w-6 h-6" />,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-32 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading"
        >
          Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 h-full border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-medium">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-white rounded-md dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;