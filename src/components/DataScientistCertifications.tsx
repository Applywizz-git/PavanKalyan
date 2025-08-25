// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Award, ExternalLink, Calendar } from 'lucide-react';

// const DataScientistCertifications = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const certifications = [
//     {
//       id: 1,
//       title: 'Google Cloud Professional ML Engineer',
//       issuer: 'Google Cloud',
//       year: '2023',
//       icon: '🏆',
//       credentialUrl: '#',
//       skills: ['MLOps', 'TensorFlow', 'Google Cloud AI']
//     },
//     {
//       id: 2,
//       title: 'AWS Certified Machine Learning - Specialty',
//       issuer: 'Amazon Web Services',
//       year: '2022',
//       icon: '☁️',
//       credentialUrl: '#',
//       skills: ['AWS SageMaker', 'ML Deployment', 'Data Engineering']
//     },
//     {
//       id: 3,
//       title: 'Deep Learning Specialization',
//       issuer: 'Coursera (Andrew Ng)',
//       year: '2021',
//       icon: '🧠',
//       credentialUrl: '#',
//       skills: ['Neural Networks', 'CNN', 'RNN']
//     },
//     {
//       id: 4,
//       title: 'Certified Analytics Professional (CAP)',
//       issuer: 'INFORMS',
//       year: '2021',
//       icon: '📊',
//       credentialUrl: '#',
//       skills: ['Analytics', 'Statistical Modeling', 'Business Intelligence']
//     },
//     {
//       id: 5,
//       title: 'TensorFlow Developer Certificate',
//       issuer: 'Google',
//       year: '2020',
//       icon: '🔧',
//       credentialUrl: '#',
//       skills: ['TensorFlow', 'Keras', 'Deep Learning']
//     },
//     {
//       id: 6,
//       title: 'Microsoft Azure AI Engineer',
//       issuer: 'Microsoft',
//       year: '2022',
//       icon: '⚡',
//       credentialUrl: '#',
//       skills: ['Azure ML', 'Cognitive Services', 'MLOps']
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20, scale: 0.9 },
//     visible: { opacity: 1, y: 0, scale: 1 },
//   };

//   return (
//     <section id="certifications" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="max-w-6xl mx-auto"
//         >
//           {/* Section Header */}
//           <motion.div variants={cardVariants} className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               <span className="text-primary">Certifications</span> & Credentials
//             </h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
//               Continuous learning and professional development in cutting-edge technologies
//             </p>
//           </motion.div>

//           {/* Certifications Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {certifications.map((cert, index) => (
//               <motion.div
//                 key={cert.id}
//                 variants={cardVariants}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass p-6 hover:shadow-hover transition-all duration-300 relative overflow-hidden"
//               >
//                 {/* Background Glow Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
//                 {/* Certificate Icon */}
//                 <motion.div
//                   initial={{ scale: 0, rotate: -180 }}
//                   animate={isInView ? { scale: 1, rotate: 0 } : {}}
//                   transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
//                   className="text-4xl mb-4 relative z-10"
//                 >
//                   {cert.icon}
//                 </motion.div>

//                 {/* Certificate Info */}
//                 <div className="relative z-10">
//                   <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
//                     {cert.title}
//                   </h3>
                  
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="text-primary font-semibold text-sm">
//                       {cert.issuer}
//                     </span>
//                     <div className="flex items-center text-muted-foreground text-sm">
//                       <Calendar className="w-4 h-4 mr-1" />
//                       {cert.year}
//                     </div>
//                   </div>

//                   {/* Skills Tags */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {cert.skills.map((skill, idx) => (
//                       <span 
//                         key={idx}
//                         className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>

//                   {/* View Credential Button */}
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex items-center justify-center w-full py-2 px-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-colors group/btn"
//                   >
//                     <Award className="w-4 h-4 mr-2" />
//                     View Credential
//                     <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
//                   </motion.button>
//                 </div>

//                 {/* Floating Verification Badge */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0, rotate: 45 }}
//                   animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
//                   transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
//                   className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center"
//                 >
//                   <Award className="w-4 h-4 text-primary" />
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Bottom Stats */}
//           <motion.div
//             variants={cardVariants}
//             className="mt-16 text-center"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
//               >
//                 <div className="text-3xl font-bold text-primary mb-2">6+</div>
//                 <div className="text-muted-foreground">Professional Certifications</div>
//               </motion.div>
              
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
//               >
//                 <div className="text-3xl font-bold text-primary mb-2">50+</div>
//                 <div className="text-muted-foreground">Hours of Training</div>
//               </motion.div>
              
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
//               >
//                 <div className="text-3xl font-bold text-primary mb-2">3</div>
//                 <div className="text-muted-foreground">Cloud Platforms</div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistCertifications;

// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Award, ExternalLink, Calendar } from 'lucide-react';

// const DataScientistCertifications = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const certifications = [
//     {
//       id: 1,
//       title: 'Lean Six Sigma Green Belt',
//       issuer: 'Certified by Recognized Authority',
//       year: '2023',
//       icon: '🏆',
//       credentialUrl: '#',
//       skills: ['Process Optimization', 'Quality Improvement', 'Statistical Analysis']
//     },
//     {
//       id: 2,
//       title: 'AWS Certified Solutions Architect – Associate',
//       issuer: 'Amazon Web Services',
//       year: '2022',
//       icon: '☁️',
//       credentialUrl: '#',
//       skills: ['AWS Architecture', 'Cloud Design', 'Scalability']
//     },
//     {
//       id: 3,
//       title: 'Microsoft Certified: Azure Data Scientist Associate',
//       issuer: 'Microsoft',
//       year: '2022',
//       icon: '⚡',
//       credentialUrl: '#',
//       skills: ['Azure ML', 'MLOps', 'Cognitive Services']
//     },
//     {
//       id: 4,
//       title: 'Google Data Analytics Professional Certificate',
//       issuer: 'Google / Coursera',
//       year: '2021',
//       icon: '📊',
//       credentialUrl: '#',
//       skills: ['Data Cleaning', 'SQL', 'Business Intelligence']
//     },
//     {
//       id: 5,
//       title: 'Tableau Desktop Specialist',
//       issuer: 'Tableau',
//       year: '2020',
//       icon: '📈',
//       credentialUrl: '#',
//       skills: ['Data Visualization', 'Dashboards', 'Analytics']
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20, scale: 0.9 },
//     visible: { opacity: 1, y: 0, scale: 1 },
//   };

//   return (
//     <section id="certifications" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="max-w-6xl mx-auto"
//         >
//           {/* Section Header */}
//           <motion.div variants={cardVariants} className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               <span className="text-primary">Certifications</span> & Credentials
//             </h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
//               Continuous learning and professional development in cutting-edge technologies
//             </p>
//           </motion.div>

//           {/* Certifications Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {certifications.map((cert, index) => (
//               <motion.div
//                 key={cert.id}
//                 variants={cardVariants}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass p-6 hover:shadow-hover transition-all duration-300 relative overflow-hidden"
//               >
//                 {/* Background Glow Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
//                 {/* Certificate Icon */}
//                 <motion.div
//                   initial={{ scale: 0, rotate: -180 }}
//                   animate={isInView ? { scale: 1, rotate: 0 } : {}}
//                   transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
//                   className="text-4xl mb-4 relative z-10"
//                 >
//                   {cert.icon}
//                 </motion.div>

//                 {/* Certificate Info */}
//                 <div className="relative z-10">
//                   <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
//                     {cert.title}
//                   </h3>
                  
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="text-primary font-semibold text-sm">
//                       {cert.issuer}
//                     </span>
//                     <div className="flex items-center text-muted-foreground text-sm">
//                       <Calendar className="w-4 h-4 mr-1" />
//                       {cert.year}
//                     </div>
//                   </div>

//                   {/* Skills Tags */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {cert.skills.map((skill, idx) => (
//                       <span 
//                         key={idx}
//                         className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>

//                   {/* View Credential Button */}
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex items-center justify-center w-full py-2 px-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-colors group/btn"
//                   >
//                     <Award className="w-4 h-4 mr-2" />
//                     View Credential
//                     <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
//                   </motion.button>
//                 </div>

//                 {/* Floating Verification Badge */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0, rotate: 45 }}
//                   animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
//                   transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
//                   className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center"
//                 >
//                   <Award className="w-4 h-4 text-primary" />
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Bottom Stats */}
//           <motion.div
//             variants={cardVariants}
//             className="mt-16 text-center"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
//               >
//                 <div className="text-3xl font-bold text-primary mb-2">5+</div>
//                 <div className="text-muted-foreground">Professional Certifications</div>
//               </motion.div>
              
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
//               >
//                 <div className="text-3xl font-bold text-primary mb-2">100+</div>
//                 <div className="text-muted-foreground">Hours of Training</div>
//               </motion.div>
              
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
//               >
//                 <div className="text-3xl font-bold text-primary mb-2">3</div>
//                 <div className="text-muted-foreground">Cloud Platforms</div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistCertifications;

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const DataScientistCertifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: '☁️',
      credentialUrl: '#',
      skills: ['AWS Cloud', 'Cloud Fundamentals', 'Security & Compliance']
    },
    {
      id: 2,
      title: 'Advanced Certificate in Data Science',
      issuer: 'upGrad',
      year: '2022',
      icon: '📊',
      credentialUrl: '#',
      skills: ['Machine Learning', 'Statistics', 'Python']
    },
    {
      id: 3,
      title: 'Introduction to Programming Using Python',
      issuer: 'upGrad',
      year: '2021',
      icon: '🐍',
      credentialUrl: '#',
      skills: ['Python', 'Data Structures', 'Problem Solving']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary">Certifications</span> & Credentials
            </h2>
            {/* <div className="w-24 h-1 bg-primary mx-auto rounded-full" /> */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#9615DB] to-[#FFB347] mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Continuous learning and professional development in cutting-edge technologies
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass p-6 hover:shadow-hover transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Certificate Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  className="text-4xl mb-4 relative z-10"
                >
                  {cert.icon}
                </motion.div>

                {/* Certificate Info */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center text-[#FFB347] text-sm">
                      {cert.issuer}
                    </span>
                    {/* <div className="flex items-center text-muted-foreground text-sm"> */}
                    {/* <div className="flex items-center text-[#FFB347] text-sm">

                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.year}
                    </div> */}
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        // className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                        className="px-3 py-1 bg-[#FFB347]/10 text-[#FFB347] text-xs font-medium rounded-full border border-[#FFB347]/20"

                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Credential Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-full py-2 px-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-colors group/btn"
                  >
                    {/* <Award className="w-4 h-4 mr-2" />
                    View Credential
                    <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" /> */}
                  </motion.button>
                </div>

                {/* Floating Verification Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: 45 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center"
                >
                  <Award className="w-4 h-4 text-primary" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats */}
          <motion.div
            variants={cardVariants}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
              >
                <div className="text-3xl font-bold text-[#FFB347] mb-2">3</div>
                <div className="text-muted-foreground">Professional Certifications</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
              >
                <div className="text-3xl font-bold text-[#FFB347] mb-2">50+</div>
                <div className="text-muted-foreground">Hours of Training</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
              >
                <div className="text-3xl font-bold text-[#FFB347] mb-2">2</div>
                <div className="text-muted-foreground">Learning Platforms</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataScientistCertifications;

