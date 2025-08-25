import { useState, useEffect, useRef } from 'react';
import { Code2, Database, Cloud, Users, Award, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const PremiumAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: "15+ Years Experience",
      description: "Enterprise development with Java and SAP technologies"
    },
    {
      icon: Database,
      title: "System Architecture",
      description: "Designing scalable, high-performance enterprise systems"
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Successfully migrated 20+ applications to cloud platforms"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams of 10+ developers"
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "Multiple SAP and Java certifications"
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Implementing cutting-edge solutions for business transformation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden" ref={sectionRef}>
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-accent/5 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary/5 rounded-full animate-float blur-2xl" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming businesses through innovative technology solutions and enterprise-grade applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Image and Stats */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/src/assets/profile-photo.jpg" 
                    alt="Professional Working" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
                
                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-xl border border-accent/20 animate-float">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">100+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-card rounded-xl p-4 shadow-xl border border-secondary/20 animate-float" style={{animationDelay: '1s'}}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">15+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Passionate <span className="text-accent">IT Professional</span> & 
                  <span className="text-secondary"> SAP Expert</span>
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 15 years of experience in enterprise software development, I specialize in creating 
                  robust, scalable applications using <span className="text-accent font-medium">SAP technologies</span> and 
                  <span className="text-accent font-medium"> Java ecosystem</span>. My expertise spans from system 
                  architecture to full-stack development, always focusing on delivering high-quality solutions 
                  that drive business value.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm passionate about leveraging cutting-edge technologies like cloud computing, microservices, 
                  and modern development practices to solve complex business challenges. My goal is to bridge 
                  the gap between technical excellence and business requirements.
                </p>

                {/* Key Skills Pills */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {['SAP Development', 'Java', 'Spring Boot', 'Microservices', 'Cloud Architecture', 'DevOps'].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-accent/10 to-secondary/10 text-accent border border-accent/20 rounded-full text-sm font-medium animate-fade-in"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="mt-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index}
                  className={`p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-accent/10 hover:border-accent/30 bg-card/80 backdrop-blur-sm animate-fade-in-up ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{animationDelay: `${0.8 + index * 0.1}s`}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumAbout;