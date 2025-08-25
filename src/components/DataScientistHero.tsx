

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, BarChart3, Brain, Cpu } from 'lucide-react';

const DataScientistHero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Machine Learning',
    'Deep Learning',
    'Generative AI',
    'MLOps',
    'Data Visualization'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // const floatingIcons = [
  //   { Icon: BarChart3, delay: 0, x: 20, y: 30 },
  //   { Icon: Brain, delay: 0.5, x: -30, y: 10 },
  //   { Icon: Cpu, delay: 1, x: 10, y: -20 },
  // ];

  return (
    // <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <section 
  id="hero" 
  className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D3032] via-[#555759] to-[#9615DB]/30" />

      {/* Luxurious Light Orange Glow Layer */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FFB347]/20 via-transparent to-transparent" />

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-br from-[#FFB347] to-[#9615DB] rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{' '}
              <div>
                <span className="bg-gradient-to-r from-[#9615DB] via-[#FFB347] to-[#9615DB] bg-clip-text text-transparent animate-gradient">
                  Pavan Kalyan Padala
                </span>
              </div>

              <span className="text-2xl :text-3xl text-[#FFB347] font-normal">
                Data Scientist | Turning data into intelligent solutions
              </span>
            </motion.h1>

            <motion.div 
              className="text-xl lg:text-2xl text-[#FFB347] font-semibold h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]} •
              </motion.span>
            </motion.div>

            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Experienced Data Scientist with expertise in machine learning, deep learning, 
              NLP, and generative AI. Skilled in building predictive models, deploying AI 
              solutions on cloud platforms, and creating interactive visualizations to 
              drive data-informed business decisions.
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button 
              size="lg" 
              className="group px-8 py-6 text-lg bg-gradient-to-r from-[#9615DB] to-[#FFB347] text-white hover:shadow-lg hover:shadow-[#FFB347]/40 transition"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
           <Button
                // variant="outline"
                // size="lg"
                asChild
                size="lg" 
              className="group px-8 py-6 text-lg bg-gradient-to-r from-[#9615DB] to-[#FFB347] text-white hover:shadow-lg hover:shadow-[#FFB347]/40 transition"
              
              >
                <a href="src/assets/Pavan_kalyan_resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile with Floating Icons */}
        <motion.div 
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Glowing Orbit */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#FFB347]/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ width: '400px', height: '400px' }}
          />
          
          {/* Profile Image */}
          <motion.div 
            className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#9615DB]/50 shadow-[0_0_30px_rgba(255,179,71,0.5)]"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img 
              src="/profile.png" 
              alt="Data Scientist Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFB347]/20 to-transparent" />
          </motion.div>

          {/* Floating Analytics Icons */}
          {/* {floatingIcons.map(({ Icon, delay, x, y }, index) => (
            <motion.div
              key={index}
              className="absolute w-16 h-16 bg-[#2D3032]/80 backdrop-blur-sm rounded-2xl border border-[#FFB347]/40 flex items-center justify-center shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{ 
                opacity: { delay: delay + 1 },
                scale: { delay: delay + 1 },
                y: { duration: 3, repeat: Infinity, delay: delay }
              }}
              style={{ 
                top: `${50 + y}%`, 
                left: `${50 + x}%`, 
                transform: 'translate(-50%, -50%)' 
              }}
            >
              <Icon className="w-8 h-8 text-[#FFB347]" />
            </motion.div>
          ))} */}
        </motion.div>
      </div>
    </section>
  );
};

export default DataScientistHero;

