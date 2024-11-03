import { useState } from 'react';
import { Github, Linkedin} from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
// import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import { About } from './components/About';
import { Experience } from './components/Exp';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navigation 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
        />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Projects />
          <About />
          <Experience/>
          {/* <Skills /> */}
          <Contact />
        </main>

        <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/SravanamCharan20" className="hover:text-blue-500 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sravanam-charan-67773b2a7/" className="hover:text-blue-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Sravanam Charan.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;