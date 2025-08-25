import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@/components/ThemeProvider';
import DataScientistNav from '@/components/DataScientistNav';
import DataScientistHero from '@/components/DataScientistHero';
import DataScientistAbout from '@/components/DataScientistAbout';
import DataScientistSkills from '@/components/DataScientistSkills';
import DataScientistProjects from '@/components/DataScientistProjects';
import DataScientistExperience from '@/components/DataScientistExperience';
import DataScientistCertifications from '@/components/DataScientistCertifications';
import DataScientistEducation from '@/components/DataScientistEducation';
import DataScientistContact from '@/components/DataScientistContact';

const DataScientistIndex = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'certifications', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="data-scientist-theme">
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-gradient-to-br from-background via-surface-1/5 to-primary/5 pointer-events-none" />
        
        {/* Floating Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/10 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <DataScientistNav activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Main Content */}
        <main className="relative z-10">
          <DataScientistHero />
          <DataScientistAbout />
          <DataScientistSkills />
          <DataScientistExperience />
          <DataScientistCertifications />
          <DataScientistEducation />
          <DataScientistProjects />
          <DataScientistContact />
        </main>

        {/* Back to Top Button */}
        <motion.button
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-glow z-50 flex items-center justify-center"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
        </motion.button>
      </div>
    </ThemeProvider>
  );
};

export default DataScientistIndex;