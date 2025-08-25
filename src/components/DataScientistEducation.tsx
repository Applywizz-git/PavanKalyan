// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

// const DataScientistEducation = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const education = [
//     {
//       id: 1,
//       degree: "Master of Science in Data Science",
//       institution: "Stanford University",
//       location: "Stanford, CA",
//       period: "2017 - 2019",
//       gpa: "3.9/4.0",
//       focus: [
//         "Machine Learning & Deep Learning",
//         "Statistical Computing",
//         "Big Data Analytics",
//         "Computational Statistics"
//       ],
//       achievements: [
//         "Summa Cum Laude",
//         "Research Assistant - AI Lab",
//         "Published 2 papers in ML conferences",
//         "Teaching Assistant for ML courses"
//       ],
//       thesis: "Deep Learning Approaches for Time Series Forecasting in Financial Markets",
//       icon: "🎓"
//     },
//     {
//       id: 2,
//       degree: "Bachelor of Science in Computer Science",
//       institution: "University of California, Berkeley",
//       location: "Berkeley, CA", 
//       period: "2013 - 2017",
//       gpa: "3.8/4.0",
//       focus: [
//         "Algorithms & Data Structures",
//         "Database Systems",
//         "Software Engineering",
//         "Mathematics & Statistics"
//       ],
//       achievements: [
//         "Magna Cum Laude",
//         "Dean's List (6 semesters)",
//         "President - Computer Science Society",
//         "Hackathon Winner (3x)"
//       ],
//       thesis: "Optimization Algorithms for Large-Scale Distributed Systems",
//       icon: "💻"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.9 },
//     visible: { opacity: 1, y: 0, scale: 1 },
//   };

//   return (
//     <section id="education" className="py-20 relative">
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
//               <span className="text-primary">Education</span> & Academic Background
//             </h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
//               Strong academic foundation in computer science and data science
//             </p>
//           </motion.div>

//           {/* Education Cards */}
//           <div className="space-y-8">
//             {education.map((edu, index) => (
//               <motion.div
//                 key={edu.id}
//                 variants={cardVariants}
//                 transition={{ delay: index * 0.2 }}
//                 whileHover={{ y: -5, scale: 1.01 }}
//                 className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass p-8 hover:shadow-hover transition-all duration-300 relative overflow-hidden"
//               >
//                 {/* Background Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
//                 <div className="relative z-10">
//                   {/* Header */}
//                   <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
//                     <div className="flex items-start space-x-4">
//                       {/* Icon */}
//                       <motion.div
//                         initial={{ scale: 0, rotate: -180 }}
//                         animate={isInView ? { scale: 1, rotate: 0 } : {}}
//                         transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
//                         className="text-4xl"
//                       >
//                         {edu.icon}
//                       </motion.div>
                      
//                       <div>
//                         <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
//                           {edu.degree}
//                         </h3>
//                         <h4 className="text-xl text-primary font-semibold mb-1">
//                           {edu.institution}
//                         </h4>
//                         <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted-foreground text-sm">
//                           <div className="flex items-center">
//                             <MapPin className="w-4 h-4 mr-2" />
//                             {edu.location}
//                           </div>
//                           <div className="flex items-center">
//                             <Calendar className="w-4 h-4 mr-2" />
//                             {edu.period}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* GPA Badge */}
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0 }}
//                       animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                       transition={{ delay: 0.7 + index * 0.2 }}
//                       className="mt-4 lg:mt-0 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold border border-primary/20"
//                     >
//                       GPA: {edu.gpa}
//                     </motion.div>
//                   </div>

//                   <div className="grid lg:grid-cols-2 gap-8">
//                     {/* Left Column - Focus Areas & Achievements */}
//                     <div className="space-y-6">
//                       {/* Focus Areas */}
//                       <div>
//                         <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center">
//                           <BookOpen className="w-5 h-5 mr-2 text-primary" />
//                           Focus Areas
//                         </h5>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                           {edu.focus.map((area, idx) => (
//                             <motion.div
//                               key={idx}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={isInView ? { opacity: 1, x: 0 } : {}}
//                               transition={{ delay: 0.8 + index * 0.2 + idx * 0.1 }}
//                               className="flex items-center text-muted-foreground text-sm"
//                             >
//                               <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
//                               {area}
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Achievements */}
//                       <div>
//                         <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center">
//                           <GraduationCap className="w-5 h-5 mr-2 text-primary" />
//                           Achievements
//                         </h5>
//                         <div className="space-y-2">
//                           {edu.achievements.map((achievement, idx) => (
//                             <motion.div
//                               key={idx}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={isInView ? { opacity: 1, x: 0 } : {}}
//                               transition={{ delay: 1 + index * 0.2 + idx * 0.1 }}
//                               className="flex items-center text-muted-foreground text-sm"
//                             >
//                               <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
//                               {achievement}
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Right Column - Thesis */}
//                     <div>
//                       <h5 className="text-lg font-semibold text-foreground mb-3">
//                         {edu.id === 1 ? 'Master\'s Thesis' : 'Senior Capstone Project'}
//                       </h5>
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={isInView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ delay: 1.2 + index * 0.2 }}
//                         className="p-4 bg-muted/10 rounded-xl border border-subtle/20"
//                       >
//                         <p className="text-muted-foreground italic leading-relaxed">
//                           "{edu.thesis}"
//                         </p>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Graduation Cap */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0, rotate: 45 }}
//                   animate={isInView ? { opacity: 0.1, scale: 1, rotate: 0 } : {}}
//                   transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
//                   className="absolute top-8 right-8 text-6xl text-primary/20 group-hover:text-primary/30 transition-colors"
//                 >
//                   🎓
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Education Summary */}
//           <motion.div
//             variants={cardVariants}
//             className="mt-16 text-center"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
//               >
//                 <div className="text-3xl font-bold text-primary mb-2">7+</div>
//                 <div className="text-muted-foreground">Years of Study</div>
//               </motion.div>
              
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
//               >
//                 <div className="text-3xl font-bold text-primary mb-2">3.85</div>
//                 <div className="text-muted-foreground">Overall GPA</div>
//               </motion.div>
              
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
//               >
//                 <div className="text-3xl font-bold text-primary mb-2">2</div>
//                 <div className="text-muted-foreground">Research Publications</div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistEducation;

// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

// const DataScientistEducation = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const education = [
//     {
//       id: 1,
//       degree: "Bachelor of Technology in Information Technology",
//       institution: "Kakatiya Institute of Technology and Science",
//       location: "Warangal, India",
//       period: "2018 - 2022",
//       gpa: "8.2/10",
//       focus: [
//         "Data Structures & Algorithms",
//         "Database Management Systems",
//         "Operating Systems",
//         "Software Engineering"
//       ],
//       achievements: [
//         "Dean's List – 3 years",
//         "Class Representative",
//         "Top 5% in graduating class"
//       ],
//       thesis: "Predictive Analytics for Student Performance using Machine Learning",
//       icon: "🎓"
//     },
//     {
//       id: 2,
//       degree: "Intermediate in MPC (Maths, Physics, Chemistry)",
//       institution: "SR Junior College",
//       location: "Warangal, India",
//       period: "2016 - 2018",
//       gpa: "95%",
//       focus: [
//         "Mathematics",
//         "Physics",
//         "Chemistry"
//       ],
//       achievements: [
//         "Ranked in Top 1% in State Board Exams",
//         "Math Olympiad Participant"
//       ],
//       thesis: "Academic Excellence in Core Sciences",
//       icon: "📘"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.9 },
//     visible: { opacity: 1, y: 0, scale: 1 },
//   };

//   return (
//     <section id="education" className="py-20 relative">
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
//               <span className="text-[#FFB347]">Education</span> & Academic Background
//             </h2>
//             <div className="w-24 h-1 bg-[#FFB347] mx-auto rounded-full" />
//             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
//               Strong academic foundation in computer science and data science
//             </p>
//           </motion.div>

//           {/* Education Cards */}
//           <div className="space-y-8">
//             {education.map((edu, index) => (
//               <motion.div
//                 key={edu.id}
//                 variants={cardVariants}
//                 transition={{ delay: index * 0.2 }}
//                 whileHover={{ y: -5, scale: 1.01 }}
//                 className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass p-8 hover:shadow-hover transition-all duration-300 relative overflow-hidden"
//               >
//                 {/* Background Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#FFB347]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
//                 <div className="relative z-10">
//                   {/* Header */}
//                   <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
//                     <div className="flex items-start space-x-4">
//                       {/* Icon */}
//                       <motion.div
//                         initial={{ scale: 0, rotate: -180 }}
//                         animate={isInView ? { scale: 1, rotate: 0 } : {}}
//                         transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
//                         className="text-4xl"
//                       >
//                         {edu.icon}
//                       </motion.div>
                      
//                       <div>
//                         <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-[#FFB347] transition-colors">
//                           {edu.degree}
//                         </h3>
//                         <h4 className="text-xl text-[#FFB347] font-semibold mb-1">
//                           {edu.institution}
//                         </h4>
//                         <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted-foreground text-sm">
//                           <div className="flex items-center">
//                             <MapPin className="w-4 h-4 mr-2 text-[#FFB347]" />
//                             {edu.location}
//                           </div>
//                           <div className="flex items-center">
//                             <Calendar className="w-4 h-4 mr-2 text-[#FFB347]" />
//                             {edu.period}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* GPA Badge */}
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0 }}
//                       animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                       transition={{ delay: 0.7 + index * 0.2 }}
//                       className="mt-4 lg:mt-0 px-4 py-2 bg-[#FFB347]/10 text-[#FFB347] rounded-full text-sm font-bold border border-[#FFB347]/20"
//                     >
//                       GPA: {edu.gpa}
//                     </motion.div>
//                   </div>

//                   <div className="grid lg:grid-cols-2 gap-8">
//                     {/* Left Column - Focus Areas & Achievements */}
//                     <div className="space-y-6">
//                       {/* Focus Areas */}
//                       <div>
//                         <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center">
//                           <BookOpen className="w-5 h-5 mr-2 text-[#FFB347]" />
//                           Focus Areas
//                         </h5>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                           {edu.focus.map((area, idx) => (
//                             <motion.div
//                               key={idx}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={isInView ? { opacity: 1, x: 0 } : {}}
//                               transition={{ delay: 0.8 + index * 0.2 + idx * 0.1 }}
//                               className="flex items-center text-muted-foreground text-sm"
//                             >
//                               <div className="w-2 h-2 bg-[#FFB347] rounded-full mr-3 flex-shrink-0" />
//                               {area}
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Achievements */}
//                       <div>
//                         <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center">
//                           <GraduationCap className="w-5 h-5 mr-2 text-[#FFB347]" />
//                           Achievements
//                         </h5>
//                         <div className="space-y-2">
//                           {edu.achievements.map((achievement, idx) => (
//                             <motion.div
//                               key={idx}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={isInView ? { opacity: 1, x: 0 } : {}}
//                               transition={{ delay: 1 + index * 0.2 + idx * 0.1 }}
//                               className="flex items-center text-muted-foreground text-sm"
//                             >
//                               <div className="w-2 h-2 bg-[#FFB347] rounded-full mr-3 flex-shrink-0" />
//                               {achievement}
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Right Column - Thesis */}
//                     <div>
//                       <h5 className="text-lg font-semibold text-foreground mb-3">
//                         {edu.id === 1 ? "Bachelor's Thesis" : "Capstone Project"}
//                       </h5>
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={isInView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ delay: 1.2 + index * 0.2 }}
//                         className="p-4 bg-muted/10 rounded-xl border border-subtle/20"
//                       >
//                         <p className="text-muted-foreground italic leading-relaxed">
//                           "{edu.thesis}"
//                         </p>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Graduation Cap */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0, rotate: 45 }}
//                   animate={isInView ? { opacity: 0.1, scale: 1, rotate: 0 } : {}}
//                   transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
//                   className="absolute top-8 right-8 text-6xl text-[#FFB347]/30 group-hover:text-[#FFB347]/50 transition-colors"
//                 >
//                   🎓
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistEducation;


import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const DataScientistEducation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      id: 1,
      degree: "Master’s in Data Analytics and Visualization ",
      institution: "Yeshiva University",
      location: "New York ",
      period: "Aug 2023 - Jan 2025 ",
      // gpa: "8.2/10",
      focus: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Software Engineering"
      ],
      // achievements: [
      //   "Dean's List – 3 years",
      //   "Class Representative",
      //   "Top 5% in graduating class"
      // ],
      // thesis: "Predictive Analytics for Student Performance using Machine Learning",
      icon: "🎓"
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Engineering ",
      institution: "Jawaharlal Nehru Technological University",
      location: "Hyderabad , India",
      period: "Aug 2016 - Nov 2020 ",
      // gpa: "95%",
      focus: [
        "Mathematics",
        "Physics",
        "computer science"
      ],
      // achievements: [
      //   "Ranked in Top 1% in State Board Exams",
      //   "Math Olympiad Participant"
      // ],
      // thesis: "Academic Excellence in Core Sciences",
      icon: "📘"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="education" className="py-20 relative">
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
              <span className="text-primary">Education</span> & Academic Background
            </h2>
            {/* <div className="w-24 h-1 bg-primary mx-auto rounded-full" /> */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#9615DB] to-[#FFB347] mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Strong academic foundation in computer science and data science
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={cardVariants}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass p-8 hover:shadow-hover transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                        className="text-4xl"
                      >
                        {edu.icon}
                      </motion.div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <h4 className="text-xl text-[#FFB347] font-semibold mb-1">
                          {edu.institution}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted-foreground text-sm">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {edu.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {edu.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* GPA Badge */}
                    {/* <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.2 }}
                      className="mt-4 lg:mt-0 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold border border-primary/20"
                    >
                      GPA: {edu.gpa}
                    </motion.div> */}
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Focus Areas & Achievements */}
                    <div className="space-y-6">
                      {/* Focus Areas */}
                      <div>
                        <h5 className="text-lg font-semibold text-[#FFB347] mb-3 flex items-center">
                          <BookOpen className="w-5 h-5 mr-2 text-primary" />
                          Focus Areas
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {edu.focus.map((area, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.8 + index * 0.2 + idx * 0.1 }}
                              className="flex items-center text-muted-foreground text-sm"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                              {area}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      {/* <div>
                        <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                          Achievements
                        </h5>
                        <div className="space-y-2"> */}
                          {/* {edu.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 1 + index * 0.2 + idx * 0.1 }}
                              className="flex items-center text-muted-foreground text-sm"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                              {achievement}
                            </motion.div>
                          ))} */}
                        {/* </div> */}
                      {/* </div> */}
                    </div>

                    {/* Right Column - Thesis */}
                    {/* <div>
                      <h5 className="text-lg font-semibold text-foreground mb-3">
                        {edu.id === 1 ? "Bachelor's Project" : "Academic Excellence"}
                      </h5>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.2 + index * 0.2 }}
                        className="p-4 bg-muted/10 rounded-xl border border-subtle/20"
                      >
                        <p className="text-muted-foreground italic leading-relaxed">
                          "{edu.thesis}"
                        </p>
                      </motion.div>
                    </div> */}
                  </div>
                </div>

                {/* Floating Graduation Cap */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: 45 }}
                  animate={isInView ? { opacity: 0.1, scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
                  className="absolute top-8 right-8 text-6xl text-primary/20 group-hover:text-primary/30 transition-colors"
                >
                  🎓
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Education Summary */}
          <motion.div
            variants={cardVariants}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
              >
                <div className="text-3xl font-bold text-[#FFB347] mb-2">6+</div>
                <div className=" text-primary">Years of Study</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
              >
                <div className="text-3xl font-bold text-[#FFB347] mb-2">8.2</div>
                <div className=" text-primary">Overall GPA (B.Tech)</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20"
              >
                <div className="text-3xl font-bold text-[#FFB347] mb-2">2</div>
                <div className=" text-primary">Academic Honors</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataScientistEducation;

