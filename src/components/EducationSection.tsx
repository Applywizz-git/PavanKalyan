import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2008 - 2010",
      gpa: "3.9/4.0",
      description: "Specialized in Software Engineering and Distributed Systems. Thesis on scalable microservices architecture.",
      courses: ["Advanced Algorithms", "Distributed Systems", "Software Engineering", "Database Systems"]
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2004 - 2008",
      gpa: "3.8/4.0",
      description: "Graduated Magna Cum Laude. Focus on computer systems and programming languages.",
      courses: ["Data Structures", "Computer Networks", "Operating Systems", "Software Design"]
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Consistently maintained high academic performance throughout university",
      icon: Award
    },
    {
      title: "Research Assistant",
      description: "Contributed to distributed systems research projects",
      icon: BookOpen
    },
    {
      title: "IEEE Student Member",
      description: "Active participation in professional computer science community",
      icon: GraduationCap
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-accent">Education</span> & Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strong academic foundation in computer science with continuous learning mindset.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Academic Background</h3>
              
              {education.map((edu, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-card-foreground mb-2">
                        {edu.degree}
                      </h4>
                      
                      <div className="text-accent font-semibold mb-1">{edu.school}</div>
                      <div className="text-muted-foreground text-sm mb-2">
                        {edu.location} • {edu.period} • GPA: {edu.gpa}
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      
                      <div>
                        <h5 className="font-semibold text-card-foreground mb-2">Relevant Coursework:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements & Recognition */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Achievements & Recognition</h3>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <achievement.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-card-foreground mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-accent/5 to-secondary/5 p-6 rounded-lg border border-accent/20">
                <h4 className="font-bold text-foreground mb-3">Continuous Learning</h4>
                <p className="text-muted-foreground mb-4">
                  I believe in lifelong learning and stay current with technology trends through:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Online courses and certifications</li>
                  <li>• Technical conferences and workshops</li>
                  <li>• Open source contributions</li>
                  <li>• Technology meetups and communities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;