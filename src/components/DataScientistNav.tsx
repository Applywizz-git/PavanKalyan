import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const DataScientistNav = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-subtle/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
  whileHover={{
    scale: 1.05,
    boxShadow: "0 0 20px rgba(168, 85, 247, 0.8)" // purple glow
  }}
  className="text-2xl font-bold text-primary cursor-pointer rounded-sm"
  onClick={() => scrollToSection('hero')}
>
  <img
    src="src/assets/PK_logo.png"
    alt="Pavan Kalyan Logo"
    className="h-10 w-auto"
  />
</motion.div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-3 py-5 text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              <div className="space-y-1">
                <motion.div
                  animate={{ rotate: isMobileOpen ? 45 : 0, y: isMobileOpen ? 8 : 0 }}
                  className="w-6 h-0.5 bg-foreground"
                />
                <motion.div
                  animate={{ opacity: isMobileOpen ? 0 : 1 }}
                  className="w-6 h-0.5 bg-foreground"
                />
                <motion.div
                  animate={{ rotate: isMobileOpen ? -45 : 0, y: isMobileOpen ? -8 : 0 }}
                  className="w-6 h-0.5 bg-foreground"
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileOpen ? 1 : 0, 
            height: isMobileOpen ? 'auto' : 0 
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {section.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default DataScientistNav;
