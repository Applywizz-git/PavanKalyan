import { Badge, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-PSA-123456",
      description: "Advanced certification covering complex AWS architectures, security, and optimization strategies.",
      skills: ["AWS", "Cloud Architecture", "Security", "Cost Optimization"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Oracle Certified Professional - Java SE Developer",
      issuer: "Oracle Corporation",
      date: "2022",
      credentialId: "OCP-JAVA-789012",
      description: "Professional-level Java certification demonstrating advanced programming skills and best practices.",
      skills: ["Java", "OOP", "Collections", "Concurrency"],
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      credentialId: "CKA-K8S-345678",
      description: "Hands-on certification for Kubernetes cluster administration and troubleshooting.",
      skills: ["Kubernetes", "Container Orchestration", "DevOps", "Troubleshooting"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      date: "2021",
      credentialId: "PSM-I-901234",
      description: "Certification in Scrum framework and agile project management principles.",
      skills: ["Scrum", "Agile", "Team Leadership", "Project Management"],
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Spring Professional Certification",
      issuer: "VMware/Pivotal",
      date: "2022",
      credentialId: "SPRING-PRO-567890",
      description: "Comprehensive certification covering Spring Framework, Spring Boot, and ecosystem.",
      skills: ["Spring Framework", "Spring Boot", "Dependency Injection", "AOP"],
      color: "from-green-600 to-teal-500"
    },
    {
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB Inc.",
      date: "2021",
      credentialId: "MDB-DEV-123789",
      description: "Certification in MongoDB database design, development, and optimization.",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation"],
      color: "from-green-500 to-green-700"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional <span className="text-accent">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-recognized certifications demonstrating expertise in modern technologies and methodologies.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                {/* Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                
                <div className="p-6">
                  {/* Certification Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`bg-gradient-to-r ${cert.color} p-3 rounded-lg`}>
                      <Badge className="w-6 h-6 text-white" />
                    </div>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink size={16} />
                    </Button>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Issuer and Date */}
                  <div className="text-accent font-semibold mb-1">{cert.issuer}</div>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    Earned {cert.date}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div className="text-xs text-muted-foreground border-t border-border pt-3">
                    Credential ID: {cert.credentialId}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 text-center">
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">6+</div>
                <div className="text-muted-foreground">Professional Certifications</div>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">4</div>
                <div className="text-muted-foreground">Technology Domains</div>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">2023</div>
                <div className="text-muted-foreground">Latest Certification</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;