import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Frontend Development',
    items: ['React', 'TypeScript', 'Next.js', 'Redux','Vanilla JS', 'CSS', 'Tailwindcss'],
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Backend Development',
    items: ['Node.js', 'Python', 'Express', 'REST APIs','MongoDB Server'],
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Data & Algorithms',
    items: ['DSA', 'System Design', 'SQL', 'MongoDB', 'JWT (JSON Web Tokens)', 'AWS'],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Tools & Practices',
    items: ['Git', 'Postman', 'Docker','Latex'],
  },
];

export function About() {
  return (
    <section id="about" className="py-20 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Passionate CS student with a strong foundation in algorithms, data structures, and full-stack development.
            Actively preparing for FAANG-level technical interviews and building scalable projects.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1 bg-slate-900/10 dark:bg-blue-600/10 text-black dark:text-gray-200 rounded-full text-sm">
              300+ LeetCode Problems
            </span>
            <span className="px-3 py-1 bg-slate-900/10 dark:bg-blue-600/10 text-black dark:text-gray-200 rounded-full text-sm">
              Full Stack Web Developer
            </span>
            <span className="px-3 py-1 bg-slate-900/10 dark:bg-blue-600/10 text-black dark:text-gray-200 rounded-full text-sm">
              Open Source Contributor
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800"
            >
              <div className="mb-4 text-slate-800 dark:text-gray-400">{skill.icon}</div>
              <h3 className="text-lg font-light tracking-tight mb-3">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <h3 className="text-2xl font-light tracking-tight mb-4">Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 border border-gray-200 hover:bg-gray-200 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg shadow-lg transition-transform duration-300">
              <div className="text-3xl font-bold text-slate-600 dark:text-gray-200 mb-2">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Technical Hackathons
              </div>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-200 hover:bg-gray-200 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg shadow-lg transition-transform duration-300">
              <div className="text-3xl font-bold text-slate-600 dark:text-gray-200 mb-2">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-200 hover:bg-gray-200 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg shadow-lg transition-transform duration-300">
              <div className="text-3xl font-bold text-slate-600 dark:text-gray-200 mb-2">9.00</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                GPA in Computer Science
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}