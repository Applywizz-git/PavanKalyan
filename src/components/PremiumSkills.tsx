import { useState, useEffect, useRef } from 'react';
import { Code2, Database, Cloud, Settings, Award, Zap, Coffee, Server, Monitor, Layers } from 'lucide-react';
import { Card } from '@/components/ui/card';

const PremiumSkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [skillProgress, setSkillProgress] = useState<{ [key: string]: boolean }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      id: 'sap',
      title: "SAP Technologies",
      icon: Database,
      color: "from-blue-500 to-blue-700",
      skills: [
        { name: "SAP ABAP", level: 95, icon: "🔷" },
        { name: "SAP HANA", level: 90, icon: "⚡" },
        { name: "SAP Fiori", level: 88, icon: "🎨" },
        { name: "SAP BTP", level: 85, icon: "☁️" },
        { name: "SAP S/4HANA", level: 92, icon: "🏢" }
      ]
    },
    {
      id: 'backend',
      title: "Backend Development",
      icon: Server,
      color: "from-green-500 to-green-700",
      skills: [
        { name: "Java", level: 98, icon: "☕" },
        { name: "Spring Boot", level: 95, icon: "🍃" },
        { name: "Spring Security", level: 90, icon: "🔒" },
        { name: "Hibernate/JPA", level: 88, icon: "🗄️" },
        { name: "RESTful APIs", level: 95, icon: "🔗" }
      ]
    },
    {
      id: 'frontend',
      title: "Frontend Technologies",
      icon: Monitor,
      color: "from-purple-500 to-purple-700",
      skills: [
        { name: "React.js", level: 92, icon: "⚛️" },
        { name: "TypeScript", level: 88, icon: "📘" },
        { name: "Angular", level: 85, icon: "🅰️" },
        { name: "HTML5/CSS3", level: 95, icon: "🎨" },
        { name: "JavaScript", level: 94, icon: "⚡" }
      ]
    },
    {
      id: 'cloud',
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-orange-700",
      skills: [
        { name: "AWS", level: 88, icon: "☁️" },
        { name: "Azure", level: 85, icon: "🌐" },
        { name: "Docker", level: 90, icon: "🐳" },
        { name: "Kubernetes", level: 82, icon: "⚙️" },
        { name: "Jenkins", level: 87, icon: "🔧" }
      ]
    },
    {
      id: 'database',
      title: "Databases & Tools",
      icon: Database,
      color: "from-red-500 to-red-700",
      skills: [
        { name: "PostgreSQL", level: 90, icon: "🐘" },
        { name: "MySQL", level: 88, icon: "🗃️" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "Redis", level: 80, icon: "🔴" },
        { name: "Oracle DB", level: 92, icon: "🔶" }
      ]
    },
    {
      id: 'architecture',
      title: "Architecture & Design",
      icon: Layers,
      color: "from-teal-500 to-teal-700",
      skills: [
        { name: "Microservices", level: 93, icon: "🏗️" },
        { name: "System Design", level: 95, icon: "📐" },
        { name: "API Design", level: 90, icon: "🔌" },
        { name: "Event Driven", level: 88, icon: "📡" },
        { name: "Clean Architecture", level: 92, icon: "✨" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger skill progress animations with stagger
          skillCategories.forEach((category, categoryIndex) => {
            setTimeout(() => {
              setSkillProgress(prev => ({ ...prev, [category.id]: true }));
            }, categoryIndex * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden" ref={sectionRef}>
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full animate-float-3d blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full animate-float-3d blur-xl" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/5 rounded-full animate-float-3d blur-xl" style={{animationDelay: '6s'}}></div>
        
        {/* Tech Icons Background */}
        <div className="absolute top-1/4 right-1/4 text-8xl text-accent/3 animate-rotate-3d">
          <Coffee />
        </div>
        <div className="absolute bottom-1/4 left-1/5 text-6xl text-secondary/3 animate-float">
          <Code2 />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical <span className="text-accent">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive skills across the entire technology stack with deep specialization in enterprise solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.id}
                className={`relative group transform transition-all duration-700 ${
                  isVisible ? 'animate-skill-appear' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${categoryIndex * 200}ms`,
                  perspective: '1000px'
                }}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <Card className={`h-full p-6 backdrop-blur-sm bg-card/90 border-accent/20 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1 ${
                  hoveredCategory === category.id 
                    ? 'shadow-2xl shadow-accent/25 border-accent/40' 
                    : 'shadow-lg hover:shadow-xl'
                }`}>
                  
                  {/* Category Header */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <div className={`h-1 w-16 mx-auto bg-gradient-to-r ${category.color} rounded-full`}></div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="relative group/skill"
                      >
                        {/* Skill Header */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl group-hover/skill:animate-bounce">
                              {skill.icon}
                            </span>
                            <span className="text-foreground font-medium">
                              {skill.name}
                            </span>
                          </div>
                          <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                            {skill.level}%
                          </span>
                        </div>

                        {/* 3D Progress Bar */}
                        <div className="relative">
                          <div className="w-full h-3 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
                            <div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
                              style={{
                                width: skillProgress[category.id] ? `${skill.level}%` : '0%',
                                transitionDelay: `${categoryIndex * 200 + skillIndex * 150}ms`,
                                boxShadow: hoveredCategory === category.id 
                                  ? '0 0 20px rgba(var(--accent), 0.6)' 
                                  : '0 0 10px rgba(var(--accent), 0.3)'
                              }}
                            >
                              {/* Shimmer Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                            </div>
                          </div>
                          
                          {/* 3D Shadow */}
                          <div 
                            className={`absolute top-3 left-0 h-3 bg-gradient-to-r ${category.color} rounded-full blur-sm opacity-20 transition-all duration-1500 ease-out`}
                            style={{
                              width: skillProgress[category.id] ? `${skill.level}%` : '0%',
                              transitionDelay: `${categoryIndex * 200 + skillIndex * 150}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Professional Stats */}
          <div className="mt-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Years Experience", icon: Award, delay: "0ms" },
                { number: "100+", label: "Projects Completed", icon: Zap, delay: "200ms" },
                { number: "25+", label: "Technologies Mastered", icon: Settings, delay: "400ms" },
                { number: "50+", label: "Enterprise Clients", icon: Database, delay: "600ms" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`relative group transform transition-all duration-700 hover:scale-110 ${
                    isVisible ? 'animate-bounce-in' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: stat.delay,
                    perspective: '1000px'
                  }}
                >
                  <Card className="p-8 text-center backdrop-blur-sm bg-card/95 border-accent/20 hover:shadow-2xl hover:border-accent/40 transition-all duration-500 group-hover:animate-glow-pulse">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2 animate-bounce-subtle">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSkills;