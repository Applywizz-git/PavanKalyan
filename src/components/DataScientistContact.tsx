// import { useState, useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from 'lucide-react';

// const DataScientistContact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'alex@datasci.dev',
//       href: 'mailto:alex@datasci.dev'
//     },
//     {
//       icon: Phone,
//       label: 'Phone',
//       value: '+1 (555) 123-4567',
//       href: 'tel:+15551234567'
//     },
//     {
//       icon: MapPin,
//       label: 'Location',
//       value: 'San Francisco, CA',
//       href: '#'
//     },
//     {
//       icon: Linkedin,
//       label: 'LinkedIn',
//       value: 'linkedin.com/in/alexdatasci',
//       href: 'https://linkedin.com/in/alexdatasci'
//     },
//     {
//       icon: Github,
//       label: 'GitHub',
//       value: 'github.com/alexdatasci',
//       href: 'https://github.com/alexdatasci'
//     }
//   ];

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Here you would typically send the form data to your backend
//     alert('Thank you for your message! I\'ll get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section id="contact" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="max-w-6xl mx-auto"
//         >
//           {/* Section Header */}
//           <motion.div variants={itemVariants} className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Get In <span className="text-primary">Touch</span>
//             </h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
//               Ready to collaborate on your next data science project? Let's discuss how we can turn your data into actionable insights.
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Left Column - Contact Info */}
//             <motion.div variants={itemVariants} className="space-y-8">
//               <div>
//                 <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
//                   <MessageCircle className="w-6 h-6 mr-3 text-primary" />
//                   Let's Connect
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed mb-8">
//                   I'm always interested in discussing new opportunities, innovative projects, 
//                   or just chatting about the latest in data science and AI. Whether you're 
//                   looking for a consultant, collaborator, or full-time data scientist, 
//                   I'd love to hear from you.
//                 </p>
//               </div>

//               {/* Contact Information Cards */}
//               <div className="space-y-4">
//                 {contactInfo.map((contact, index) => (
//                   <motion.a
//                     key={contact.label}
//                     href={contact.href}
//                     variants={itemVariants}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ scale: 1.02, x: 10 }}
//                     className="flex items-center p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass hover:shadow-hover transition-all duration-300 group"
//                   >
//                     <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
//                       <contact.icon className="w-5 h-5 text-primary" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-muted-foreground">{contact.label}</div>
//                       <div className="text-foreground font-medium group-hover:text-primary transition-colors">
//                         {contact.value}
//                       </div>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>

//               {/* Availability Status */}
//               <motion.div
//                 variants={itemVariants}
//                 className="p-6 bg-primary/5 border border-primary/20 rounded-2xl"
//               >
//                 <div className="flex items-center mb-3">
//                   <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
//                   <span className="text-primary font-semibold">Available for New Projects</span>
//                 </div>
//                 <p className="text-muted-foreground text-sm">
//                   Currently accepting new consulting projects and exploring full-time opportunities. 
//                   Response time: 24-48 hours.
//                 </p>
//               </motion.div>
//             </motion.div>

//             {/* Right Column - Contact Form */}
//             <motion.div variants={itemVariants}>
//               <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass p-8">
//                 <h3 className="text-2xl font-bold text-foreground mb-6">
//                   Send a Message
//                 </h3>
                
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ delay: 0.3 }}
//                   >
//                     <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                       Full Name *
//                     </label>
//                     <Input
//                       id="name"
//                       name="name"
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       placeholder="John Doe"
//                       className="bg-background/50 border-subtle/30 focus:border-primary"
//                     />
//                   </motion.div>

//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ delay: 0.4 }}
//                   >
//                     <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                       Email Address *
//                     </label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       placeholder="john@example.com"
//                       className="bg-background/50 border-subtle/30 focus:border-primary"
//                     />
//                   </motion.div>

//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ delay: 0.5 }}
//                   >
//                     <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                       Message *
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       required
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       placeholder="Tell me about your project or how I can help..."
//                       rows={5}
//                       className="bg-background/50 border-subtle/30 focus:border-primary resize-none"
//                     />
//                   </motion.div>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.6 }}
//                   >
//                     <Button
//                       type="submit"
//                       size="lg"
//                       className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
//                     >
//                       <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
//                       Send Message
//                     </Button>
//                   </motion.div>
//                 </form>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistContact;


import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from 'lucide-react';

const DataScientistContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pavankalyanpadala349@gmail.com',
      href: 'mailto:pavankalyanpadala349@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (848) 203-0177',
      href: 'tel:+18482030177'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Daytona Beach, FL',
      href: '#'
    }
    // {
    //   icon: Linkedin,
    //   label: 'LinkedIn',
    //   value: 'linkedin.com/in/PavanKalyan',
    //   href: 'https://linkedin.com/in/PavanKalyan'
    // },
    // {
    //   icon: Github,
    //   label: 'GitHub',
    //   value: 'github.com/pavankalyan', // ⚠️ Resume didn’t have GitHub link, placeholder added
    //   // href: 'https://github.com/pavankalyan'
    // }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            {/* <div className="w-24 h-1 bg-primary mx-auto rounded-full" /> */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#9615DB] to-[#FFB347] mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Ready to collaborate on your next data science project? Let's discuss how we can turn your data into actionable insights.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-primary" />
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  or just chatting about the latest in data science and AI. Whether you're 
                  looking for a consultant, collaborator, or full-time data scientist, 
                  I'd love to hear from you.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass hover:shadow-hover transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-[#FFB347]">{contact.label}</div>
                      <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability Status */}
              <motion.div
                variants={itemVariants}
                className="p-6 bg-primary/5 border border-primary/20 rounded-2xl"
              >
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                  <span className="text-primary font-semibold">Available for New Projects</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Currently accepting new consulting projects and exploring full-time opportunities. 
                  Response time: 24-48 hours.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass p-8">
                {/* <h3 className="text-2xl font-bold text-foreground mb-6"> */}
                <h3 className="text-2xl font-bold text-[#FFB347] mb-6">

                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="bg-background/50 border-subtle/30 focus:border-primary"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="bg-background/50 border-subtle/30 focus:border-primary"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how I can help..."
                      rows={5}
                      className="bg-background/50 border-subtle/30 focus:border-primary resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
           
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-[#FFB347] group"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                   
                      Send Message
                    </Button>
                        
                  </motion.div> 
                 
            
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataScientistContact;
