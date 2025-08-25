import { useState, useEffect, useRef } from 'react';
import { Code2, Database, Cloud, Settings, Award, Zap, Coffee, Server, Monitor, Layers, Brain, Cpu, Globe, Shield, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills3DSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [skillProgress, setSkillProgress] = useState<{ [key: string]: boolean }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillsData = [
    {
      category: "SAP Ecosystem",
      skills: [
        { name: "SAP ABAP", level: 95, icon: "🔷", color: "from-blue-500 to-blue-600" },
        { name: "SAP HANA", level: 90, icon: "⚡", color: "from-cyan-500 to-cyan-600" },
        { name: "SAP Fiori", level: 88, icon: "🎨", color: "from-purple-500 to-purple-600" },
        { name: "SAP BTP", level: 85, icon: "☁️", color: "from-sky-500 to-sky-600" },
        { name: "SAP S/4HANA", level: 92, icon: "🏢", color: "from-indigo-500 to-indigo-600" }
      ]
    },
    {
      category: "Java Universe",
      skills: [
        { name: "Core Java", level: 98, icon: "☕", color: "from-orange-500 to-red-500" },
        { name: "Spring Boot", level: 95, icon: "🍃", color: "from-green-500 to-green-600" },
        { name: "Spring Security", level: 90, icon: "🔒", color: "from-red-500 to-red-600" },
        { name: "Hibernate/JPA", level: 88, icon: "🗄️", color: "from-yellow-500 to-orange-500" },
        { name: "Maven/Gradle", level: 85, icon: "⚙️", color: "from-gray-500 to-gray-600" }
      ]
    },
    {
      category: "Frontend Tech",
      skills: [
        { name: "React.js", level: 92, icon: "⚛️", color: "from-blue-400 to-blue-500" },
        { name: "TypeScript", level: 88, icon: "📘", color: "from-blue-600 to-blue-700" },
        { name: "Angular", level: 85, icon: "🅰️", color: "from-red-500 to-red-600" },
        { name: "Vue.js", level: 80, icon: "💚", color: "from-green-400 to-green-500" },
        { name: "JavaScript", level: 94, icon: "⚡", color: "from-yellow-400 to-yellow-500" }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 88, icon: "☁️", color: "from-orange-400 to-orange-500" },
        { name: "Azure", level: 85, icon: "🌐", color: "from-blue-500 to-blue-600" },
        { name: "Docker", level: 90, icon: "🐳", color: "from-blue-400 to-blue-500" },
        { name: "Kubernetes", level: 82, icon: "⚙️", color: "from-blue-600 to-purple-600" },
        { name: "Jenkins", level: 87, icon: "🔧", color: "from-gray-500 to-gray-600" }
      ]
    }
  ];

  const techStats = [
    { icon: Brain, label: "AI/ML Projects", value: "12+", color: "from-purple-500 to-pink-500" },
    { icon: Database, label: "Database Systems", value: "8+", color: "from-green-500 to-emerald-500" },
    { icon: Globe, label: "Web Applications", value: "50+", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, label: "Security Implementations", value: "25+", color: "from-red-500 to-orange-500" },
    { icon: Rocket, label: "Performance Optimizations", value: "100+", color: "from-yellow-500 to-orange-500" },
    { icon: Cpu, label: "System Integrations", value: "30+", color: "from-indigo-500 to-purple-500" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger skill progress animations with stagger
          skillsData.forEach((category, categoryIndex) => {
            setTimeout(() => {
              setSkillProgress(prev => ({ ...prev, [category.category]: true }));
            }, categoryIndex * 300);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden" ref={sectionRef}>
      
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent/5 rounded-full animate-morph-3d blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/5 rounded-full animate-float-3d blur-xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/3 rounded-full animate-rotate-3d blur-3xl"></div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-1/4 right-1/4 text-6xl text-accent/10 animate-float-3d">
          <Code2 />
        </div>
        <div className="absolute bottom-1/3 left-1/5 text-5xl text-secondary/10 animate-morph-3d">
          <Database />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Technical <span className="text-accent animate-glow-pulse">Mastery</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-8 animate-shimmer"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cutting-edge expertise across the entire technology spectrum with deep specialization in enterprise solutions.
            </p>
          </div>

          {/* 3D Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {skillsData.map((category, categoryIndex) => (
              <div
                key={category.category}
                className={`relative group transform transition-all duration-1000 ${
                  isVisible ? 'animate-skill-appear' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${categoryIndex * 200}ms`,
                  perspective: '1000px'
                }}
              >
                <Card className="p-8 backdrop-blur-sm bg-card/90 border-accent/20 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 hover:shadow-3d hover:border-accent/40 relative overflow-hidden">
                  
                  {/* Card Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Header */}
                  <div className="relative z-10 mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {category.category}
                    </h3>
                    <div className="h-1 w-24 bg-gradient-to-r from-accent to-secondary rounded-full group-hover:w-32 transition-all duration-500"></div>
                  </div>

                  {/* Skills List */}
                  <div className="relative z-10 space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="relative group/skill cursor-pointer"
                        onMouseEnter={() => setActiveSkill(`${category.category}-${skill.name}`)}
                        onMouseLeave={() => setActiveSkill(null)}
                      >
                        {/* Skill Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white font-bold transform group-hover/skill:scale-110 group-hover/skill:rotate-12 transition-all duration-300 shadow-lg`}>
                              {skill.icon}
                            </div>
                            <span className="text-foreground font-semibold text-lg group-hover/skill:text-accent transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                          <span className={`text-lg font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                            {skill.level}%
                          </span>
                        </div>

                        {/* 3D Progress Bar */}
                        <div className="relative">
                          {/* Main Progress Bar */}
                          <div className="w-full h-4 bg-muted/20 rounded-full overflow-hidden backdrop-blur-sm border border-muted/30">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
                              style={{
                                width: skillProgress[category.category] ? `${skill.level}%` : '0%',
                                transitionDelay: `${categoryIndex * 300 + skillIndex * 150}ms`,
                                boxShadow: activeSkill === `${category.category}-${skill.name}` 
                                  ? `0 0 20px hsl(var(--accent) / 0.8), 0 0 40px hsl(var(--accent) / 0.4)` 
                                  : '0 0 10px hsl(var(--accent) / 0.3)'
                              }}
                            >
                              {/* Animated Shimmer */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                              
                              {/* Glow Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glow-pulse"></div>
                            </div>
                          </div>
                          
                          {/* 3D Shadow/Depth */}
                          <div 
                            className={`absolute top-4 left-0 h-4 bg-gradient-to-r ${skill.color} rounded-full blur-md opacity-30 transition-all duration-2000 ease-out`}
                            style={{
                              width: skillProgress[category.category] ? `${skill.level}%` : '0%',
                              transitionDelay: `${categoryIndex * 300 + skillIndex * 150}ms`
                            }}
                          ></div>
                          
                          {/* Additional Glow Layer */}
                          <div 
                            className={`absolute top-1 left-0 h-4 bg-gradient-to-r ${skill.color} rounded-full blur-sm opacity-20 transition-all duration-2000 ease-out`}
                            style={{
                              width: skillProgress[category.category] ? `${skill.level}%` : '0%',
                              transitionDelay: `${categoryIndex * 300 + skillIndex * 150}ms`
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

          {/* 3D Tech Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStats.map((stat, index) => (
              <div
                key={index}
                className={`relative group transform transition-all duration-700 hover:scale-110 ${
                  isVisible ? 'animate-bounce-in' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${1000 + index * 150}ms`,
                  perspective: '1000px'
                }}
              >
                <Card className="p-6 text-center backdrop-blur-sm bg-card/95 border-accent/20 hover:shadow-3d hover:border-accent/40 transition-all duration-500 group-hover:animate-morph-3d relative overflow-hidden">
                  
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}></div>
                  
                  {/* Icon */}
                  <div className={`relative z-10 w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Value */}
                  <div className={`relative z-10 text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent animate-bounce-subtle`}>
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="relative z-10 text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills3DSection;