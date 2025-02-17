import { motion } from 'framer-motion';
import { Award, Briefcase, GitBranch } from 'lucide-react';
import { Github, ExternalLink } from 'lucide-react'; // Ensure these icons are imported

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'KeshavSoft',
    period: 'May 2023 - June 2023',
    description: 'Engineered and deployed automated systems for laundry processes, resulting in a 30% improvement in operational efficiency. Collaborated with cross-functional teams to optimize workflows and integrate technology solutions, significantly enhancing productivity and resource management.',
    skills: ['Node.js', 'Postman', 'MongoDB', 'EJS', 'HTML', 'CSS'],
    github: 'https://github.com/SravanamCharan20/Laundry',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: 'Open Source Contributor',
    company: 'KeshavSoft',
    period: 'May 2023',
    description: 'Contributed to core UI, fixing bugs and implementing new features.',
    skills: ['EJS', 'HandleBars', 'Mustache'],
    github: 'https://github.com/SravanamCharan20/crudGenFrontEnd',
    icon: <GitBranch className="w-5 h-5" />,
  },
];

const achievements = [
  {
    title: 'Contest Runner',
    event: 'ITYUKTA 2K24',
    description: 'Ranked 5th out of 200 by solving 6 problems in a coding contest.',
    icon: <Award className="w-5 h-5" />,
  },
  {
    title: 'Top Contributor',
    event: 'Open Source',
    description: '50+ PRs merged in repositories',
    icon: <GitBranch className="w-5 h-5" />,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-neutral-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-heading">Experience</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Professional experience and technical achievements that shape my journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-primary/10 rounded-lg text-primary dark:bg-primary/20">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-light tracking-tight">{exp.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{exp.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-4">
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gray-200 dark:bg-gray-300 text-gray-800 dark:text-gray-900 px-4 py-2 rounded-lg transition hover:bg-gray-300 dark:hover:bg-gray-700"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                        {/* Add demo link if you have one */}
                        {/* <a 
                          href={project.demo} 
                          className="flex items-center gap-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black px-4 py-2 rounded-lg transition hover:bg-black dark:hover:bg-gray-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-light mb-8 text-center">Notable Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 h-full text-center">
                    <div className="mb-4 p-2 bg-primary/10 rounded-lg w-fit mx-auto text-primary dark:bg-primary/20">
                      {achievement.icon}
                    </div>
                    <h4 className="font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{achievement.event}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}