import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading"
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl leading-relaxed mb-8">
              Let's work together to create something exceptional. 
              Get in touch to start the conversation.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:sravanamcharan20@gmail.com"
                className="block group"
              >
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Email</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">sravanamcharan20@gmail.com</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sravanam-charan-67773b2a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">LinkedIn</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">linkedin.com/in/Sravanamcharan</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            action={`mailto:sravanamcharan20@gmail.com`}
            method="post"
            encType="text/plain"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <label htmlFor="name" className="block text-sm mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-0 py-4 bg-transparent border-b border-neutral-200 dark:border-neutral-600 focus:border-neutral-900 dark:focus:border-neutral-100 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-0 py-4 bg-transparent border-b border-neutral-200 dark:border-neutral-600 focus:border-neutral-900 dark:focus:border-neutral-100 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-0 py-4 bg-transparent border-b border-neutral-200 dark:border-neutral-600 focus:border-neutral-900 dark:focus:border-neutral-100 outline-none transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="magnetic-button px-8 py-4 border border-neutral-900 dark:border-neutral-100 hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-black transition-colors duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;