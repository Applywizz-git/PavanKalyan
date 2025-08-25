import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Java Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2020 - Present",
      description: "Lead development of enterprise-grade applications using Java, Spring Boot, and React. Architected microservices solutions deployed on AWS, managing teams of 8+ developers.",
      achievements: [
        "Reduced system latency by 40% through microservices optimization",
        "Led migration of legacy monolith to cloud-native architecture",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Java Development Team Lead",
      company: "Enterprise Corp",
      location: "New York, NY",
      period: "2015 - 2020",
      description: "Managed full-stack development projects and mentored junior developers. Specialized in Spring ecosystem and database optimization.",
      achievements: [
        "Delivered 12+ mission-critical applications on time",
        "Improved database query performance by 50%",
        "Established coding standards and best practices"
      ]
    },
    {
      title: "Software Engineer",
      company: "StartupTech",
      location: "Austin, TX",
      period: "2010 - 2015",
      description: "Developed scalable web applications using Java and modern frontend frameworks. Contributed to system architecture and database design.",
      achievements: [
        "Built core platform serving 100k+ daily users",
        "Implemented real-time features using WebSocket technology",
        "Optimized application performance and scalability"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional <span className="text-accent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A timeline of my professional journey building enterprise software solutions.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'} md:w-1/2`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-auto md:right-4 w-8 h-8 bg-accent rounded-full border-4 border-background shadow-lg flex items-center justify-center transform md:translate-x-1/2">
                  <Building className="w-4 h-4 text-accent-foreground" />
                </div>

                {/* Experience Card */}
                <div className="ml-12 md:ml-0 bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-accent font-semibold">{exp.company}</div>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-muted-foreground text-sm">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;