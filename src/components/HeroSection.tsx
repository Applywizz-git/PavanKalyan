import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,83,61,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(171,152,122,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in-left">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                  <span className="block">John Developer</span>
                  <span className="text-accent">IT Professional</span>
                </h1>
                
                {/* Subtitle */}
                <div className="text-xl md:text-2xl text-muted-foreground">
                  Full Stack Java Developer
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Passionate about building scalable, high-performance applications using
                <span className="text-accent font-semibold"> Java</span>,
                <span className="text-secondary font-semibold"> Spring Boot</span>, and
                <span className="text-accent font-semibold"> Cloud Technologies</span>.
                30+ years of experience in enterprise software development.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="hero" className="animate-bounce-subtle group">
                  <Mail className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Let's Connect
                </Button>
                <Button variant="portfolio" size="hero" className="group">
                  <Download className="mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                  Download CV
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6">
                <a href="#" className="text-muted-foreground hover:text-accent transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                  <Github size={28} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                  <Linkedin size={28} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                  <Mail size={28} />
                </a>
              </div>
            </div>

            {/* Right Profile Image */}
            <div className="flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative group">
                {/* 3D Background Elements */}
                <div className="absolute -inset-8 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-2xl animate-float-3d"></div>
                
                {/* Main Image Container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <img
                    src={profilePhoto}
                    alt="John Developer - IT Professional"
                    className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-accent/30 
                             transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3
                             group-hover:shadow-[0_35px_60px_-12px_rgba(255,83,61,0.4)]"
                    style={{
                      filter: 'drop-shadow(0 25px 50px rgba(255,83,61,0.3))'
                    }}
                  />
                  
                  {/* Animated Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-skill-glow"></div>
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float-3d border border-accent/20">
                    <span className="text-accent font-bold">Java</span>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float-3d border border-secondary/20" style={{animationDelay: '2s'}}>
                    <span className="text-secondary font-bold">AWS</span>
                  </div>
                  
                  <div className="absolute top-1/2 -left-8 w-14 h-14 bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float-3d border border-accent/20" style={{animationDelay: '4s'}}>
                    <span className="text-accent text-sm font-bold">React</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;