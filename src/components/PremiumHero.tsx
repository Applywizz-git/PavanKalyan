import { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, Coffee, Database, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PremiumHero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "SAP Developer",
    "Full Stack Java Developer", 
    "IT Professional",
    "System Architect"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent/30 rounded-full animate-particle-float"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-secondary/40 rounded-full animate-particle-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-accent/50 rounded-full animate-particle-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-secondary/30 rounded-full animate-particle-float" style={{animationDelay: '3s'}}></div>
        
        {/* 3D Geometric Shapes */}
        <div className="absolute top-1/4 left-1/5 w-20 h-20 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg rotate-45 animate-float-3d"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Technology Icons Background */}
        <div className="absolute top-20 right-10 text-6xl text-accent/5 animate-float">
          <Coffee />
        </div>
        <div className="absolute bottom-20 left-20 text-5xl text-secondary/5 animate-float" style={{animationDelay: '1s'}}>
          <Database />
        </div>
        <div className="absolute top-1/2 left-10 text-4xl text-accent/5 animate-float" style={{animationDelay: '3s'}}>
          <Cloud />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Welcome Text */}
              <div className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <p className="text-accent font-medium text-xl mb-4 flex items-center">
                  <span className="w-12 h-0.5 bg-accent mr-4"></span>
                  Hello, I'm
                </p>
              </div>

              {/* Name */}
              <div className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-foreground via-accent to-secondary bg-clip-text text-transparent">
                    Alex Johnson
                  </span>
                </h1>
              </div>

              {/* Dynamic Role */}
              <div className={`transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="h-20 flex items-center">
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-muted-foreground">
                    <span className="inline-block">I'm a </span>
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent animate-typewriter">
                        {roles[currentRole]}
                      </span>
                      <span className="absolute -right-2 top-0 animate-blink text-accent">|</span>
                    </span>
                  </h2>
                </div>
              </div>

              {/* Description */}
              <div className={`transform transition-all duration-1000 delay-900 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Passionate about building enterprise-level applications with{' '}
                  <span className="text-accent font-medium">SAP technologies</span> and{' '}
                  <span className="text-accent font-medium">Java ecosystem</span>. 
                  Specialized in creating scalable, high-performance solutions that drive business transformation.
                </p>
              </div>

              {/* Action Buttons */}
              <div className={`transform transition-all duration-1000 delay-1100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={() => scrollToSection('projects')}
                    className="bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white px-8 py-4 text-lg font-medium shadow-xl hover:shadow-2xl transform hover:scale-105 hover:animate-card-hover transition-all duration-300"
                  >
                    View My Work
                    <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download CV
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className={`transform transition-all duration-1000 delay-1300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="flex space-x-6">
                  {[
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Mail, href: "#", label: "Email" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-card border border-accent/20 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transform hover:scale-110 hover:-translate-y-1 hover:animate-morph-3d transition-all duration-300 shadow-lg hover:shadow-xl"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Profile Image */}
            <div className={`relative flex justify-center lg:justify-end transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="relative">
                {/* Main Profile Image */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="w-full h-full rounded-3xl overflow-hidden border-4 border-accent/30 shadow-3d animate-morph-3d">
                    <img 
                      src="/src/assets/profile-photo.jpg" 
                      alt="Professional Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Glowing Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent/20 to-secondary/20 animate-glow-pulse"></div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-8 right-8 w-8 h-8 bg-green-500 rounded-full border-4 border-background animate-bounce-subtle shadow-lg">
                    <div className="absolute inset-2 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center animate-float-3d backdrop-blur-sm border border-accent/20">
                  <Coffee className="w-8 h-8 text-accent" />
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl flex items-center justify-center animate-float backdrop-blur-sm border border-secondary/20" style={{animationDelay: '2s'}}>
                  <Database className="w-6 h-6 text-secondary" />
                </div>
                
                <div className="absolute top-16 -right-12 w-14 h-14 bg-gradient-to-br from-accent/15 to-secondary/15 rounded-2xl flex items-center justify-center animate-float-3d backdrop-blur-sm border border-accent/15" style={{animationDelay: '4s'}}>
                  <Cloud className="w-7 h-7 text-accent" />
                </div>

                {/* Background Decorations */}
                <div className="absolute -z-10 -top-16 -left-16 w-32 h-32 bg-accent/5 rounded-full animate-float-3d blur-xl"></div>
                <div className="absolute -z-10 -bottom-12 -right-12 w-24 h-24 bg-secondary/5 rounded-full animate-float blur-xl" style={{animationDelay: '3s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-accent mx-auto" />
        </button>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent"></div>
    </section>
  );
};

export default PremiumHero;