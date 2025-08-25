// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Progress } from '@/components/ui/progress';

// const DataScientistSkills = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const skillDomains = [
//     { name: 'Machine Learning', level: 95, color: 'bg-primary' },
//     { name: 'Deep Learning & NLP', level: 90, color: 'bg-primary' },
//     { name: 'MLOps & Deployment', level: 85, color: 'bg-primary' },
//     { name: 'Statistical Analysis', level: 92, color: 'bg-primary' },
//     { name: 'Data Engineering', level: 80, color: 'bg-primary' },
//     { name: 'Business Intelligence', level: 88, color: 'bg-primary' },
//   ];

//   const tools = [
//     { name: 'Python', level: 95 },
//     { name: 'SQL', level: 90 },
//     { name: 'R', level: 85 },
//     { name: 'TensorFlow', level: 88 },
//     { name: 'PyTorch', level: 85 },
//     { name: 'Scikit-learn', level: 92 },
//     { name: 'AWS/GCP', level: 80 },
//     { name: 'Docker', level: 75 },
//   ];

//   const CircularProgress = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
//     const circumference = 2 * Math.PI * 40;
//     const strokeDasharray = circumference;
//     const strokeDashoffset = circumference - (level / 100) * circumference;

//     return (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={isInView ? { opacity: 1, scale: 1 } : {}}
//         transition={{ delay, duration: 0.6 }}
//         className="flex flex-col items-center p-4 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20 hover:shadow-glass transition-all duration-300"
//       >
//         <div className="relative w-24 h-24 mb-3">
//           <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
//             <circle
//               cx="50"
//               cy="50"
//               r="40"
//               stroke="currentColor"
//               strokeWidth="8"
//               fill="transparent"
//               className="text-muted/20"
//             />
//             <motion.circle
//               cx="50"
//               cy="50"
//               r="40"
//               stroke="hsl(var(--primary))"
//               strokeWidth="8"
//               fill="transparent"
//               strokeDasharray={strokeDasharray}
//               initial={{ strokeDashoffset: circumference }}
//               animate={isInView ? { strokeDashoffset } : {}}
//               transition={{ delay: delay + 0.5, duration: 1.5, ease: "easeOut" }}
//               className="drop-shadow-sm"
//             />
//           </svg>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="text-lg font-bold text-primary">{level}%</span>
//           </div>
//         </div>
//         <h4 className="text-sm font-semibold text-center text-foreground">{name}</h4>
//       </motion.div>
//     );
//   };

//   return (
//     <section id="skills" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           className="max-w-6xl mx-auto"
//         >
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Technical <span className="text-primary">Skills</span>
//             </h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
//               A comprehensive toolkit for transforming data into insights and building intelligent systems
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Skill Domains - Progress Bars */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.2 }}
//             >
//               <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
//                 Core Domains
//               </h3>
//               <div className="space-y-6">
//                 {skillDomains.map((skill, index) => (
//                   <motion.div
//                     key={skill.name}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.3 + index * 0.1 }}
//                     className="space-y-3"
//                   >
//                     <div className="flex justify-between items-center">
//                       <span className="font-semibold text-foreground">{skill.name}</span>
//                       <span className="text-primary font-bold">{skill.level}%</span>
//                     </div>
//                     <div className="relative">
//                       <Progress
//                         value={isInView ? skill.level : 0}
//                         className="h-3 bg-muted/30"
//                       />
//                       <motion.div
//                         initial={{ width: 0 }}
//                         animate={isInView ? { width: `${skill.level}%` } : {}}
//                         transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
//                         className="absolute top-0 left-0 h-3 bg-primary rounded-full shadow-glow"
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Tools & Technologies - Circular Progress */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.4 }}
//             >
//               <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
//                 Tools & Technologies
//               </h3>
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                 {tools.map((tool, index) => (
//                   <CircularProgress
//                     key={tool.name}
//                     name={tool.name}
//                     level={tool.level}
//                     delay={0.5 + index * 0.1}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistSkills;

// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Progress } from '@/components/ui/progress';

// const DataScientistSkills = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   // Core domains taken & adjusted based on resume highlights
//   const skillDomains = [
//     { name: 'Data Analysis & Visualization', level: 95 },
//     { name: 'Machine Learning & Predictive Modeling', level: 92 },
//     { name: 'Deep Learning & NLP', level: 88 },
//     { name: 'Statistical Analysis', level: 90 },
//     { name: 'Cloud & Big Data (AWS/GCP/Snowflake)', level: 85 },
//     { name: 'Business Intelligence (Power BI/Tableau)', level: 90 },
//   ];

//   // Tools & Technologies (resume-aligned)
//   const tools = [
//     { name: 'Python', level: 95 },
//     { name: 'SQL', level: 92 },
//     { name: 'R', level: 85 },
//     { name: 'TensorFlow', level: 88 },
//     { name: 'PyTorch', level: 85 },
//     { name: 'Scikit-learn', level: 92 },
//     { name: 'Power BI', level: 90 },
//     { name: 'Docker', level: 80 },
//   ];

//   const CircularProgress = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
//     const circumference = 2 * Math.PI * 40;
//     const strokeDasharray = circumference;
//     const strokeDashoffset = circumference - (level / 100) * circumference;

//     return (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={isInView ? { opacity: 1, scale: 1 } : {}}
//         transition={{ delay, duration: 0.6 }}
//         className="flex flex-col items-center p-4 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20 hover:shadow-glass transition-all duration-300"
//       >
//         <div className="relative w-24 h-24 mb-3">
//           <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
//             <circle
//               cx="50"
//               cy="50"
//               r="40"
//               stroke="currentColor"
//               strokeWidth="8"
//               fill="transparent"
//               className="text-muted/20"
//             />
//             <motion.circle
//               cx="50"
//               cy="50"
//               r="40"
//               stroke="#FFB347"   // Light Orange for luxury accent
//               strokeWidth="8"
//               fill="transparent"
//               strokeDasharray={strokeDasharray}
//               initial={{ strokeDashoffset: circumference }}
//               animate={isInView ? { strokeDashoffset } : {}}
//               transition={{ delay: delay + 0.5, duration: 1.5, ease: "easeOut" }}
//               className="drop-shadow-sm"
//             />
//           </svg>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="text-lg font-bold text-[#FFB347]">{level}%</span>
//           </div>
//         </div>
//         <h4 className="text-sm font-semibold text-center text-foreground">{name}</h4>
//       </motion.div>
//     );
//   };

//   return (
//     <section id="skills" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           className="max-w-6xl mx-auto"
//         >
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Technical <span className="text-[#FFB347]">Skills</span>
//             </h2>
//             <div className="w-24 h-1 bg-[#FFB347] mx-auto rounded-full" />
//             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
//               A comprehensive toolkit for transforming data into insights and building intelligent systems
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Skill Domains - Progress Bars */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.2 }}
//             >
//               <h3 className="text-2xl font-bold mb-8 text-center lg:text-left text-[#FFB347]">
//                 Core Domains
//               </h3>
//               <div className="space-y-6">
//                 {skillDomains.map((skill, index) => (
//                   <motion.div
//                     key={skill.name}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.3 + index * 0.1 }}
//                     className="space-y-3"
//                   >
//                     <div className="flex justify-between items-center">
//                       <span className="font-semibold text-foreground">{skill.name}</span>
//                       <span className="text-[#FFB347] font-bold">{skill.level}%</span>
//                     </div>
//                     <div className="relative">
//                       <Progress
//                         value={isInView ? skill.level : 0}
//                         className="h-3 bg-muted/30"
//                       />
//                       <motion.div
//                         initial={{ width: 0 }}
//                         animate={isInView ? { width: `${skill.level}%` } : {}}
//                         transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
//                         className="absolute top-0 left-0 h-3 bg-[#FFB347] rounded-full shadow-[0_0_12px_rgba(255,179,71,0.6)]"
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Tools & Technologies - Circular Progress */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.4 }}
//             >
//               <h3 className="text-2xl font-bold mb-8 text-center lg:text-left text-[#FFB347]">
//                 Tools & Technologies
//               </h3>
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                 {tools.map((tool, index) => (
//                   <CircularProgress
//                     key={tool.name}
//                     name={tool.name}
//                     level={tool.level}
//                     delay={0.5 + index * 0.1}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistSkills;

// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Progress } from '@/components/ui/progress';

// const DataScientistSkills = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const skillDomains = [
//     { name: 'Data Analysis & Visualization', level: 95 },
//     { name: 'Machine Learning & Predictive Modeling', level: 92 },
//     { name: 'Deep Learning & NLP', level: 88 },
//     { name: 'Statistical Analysis', level: 90 },
//     { name: 'Cloud & Big Data (AWS/GCP/Snowflake)', level: 85 },
//     { name: 'Business Intelligence (Power BI/Tableau)', level: 90 },
//   ];

//   const tools = [
//     { name: 'Python', level: 95 },
//     { name: 'SQL', level: 92 },
//     { name: 'R', level: 85 },
//     { name: 'TensorFlow', level: 88 },
//     { name: 'PyTorch', level: 85 },
//     { name: 'Scikit-learn', level: 92 },
//     { name: 'Power BI', level: 90 },
//     { name: 'Docker', level: 80 },
//   ];

//   const CircularProgress = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
//     const circumference = 2 * Math.PI * 40;
//     const strokeDasharray = circumference;
//     const strokeDashoffset = circumference - (level / 100) * circumference;

//     return (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={isInView ? { opacity: 1, scale: 1 } : {}}
//         transition={{ delay, duration: 0.6 }}
//         className="flex flex-col items-center p-4 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20 hover:shadow-glass transition-all duration-300"
//       >
//         <div className="relative w-24 h-24 mb-3">
//           <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
//             <circle
//               cx="50"
//               cy="50"
//               r="40"
//               stroke="currentColor"
//               strokeWidth="8"
//               fill="transparent"
//               className="text-muted/20"
//             />
//             <motion.circle
//               cx="50"
//               cy="50"
//               r="40"
//               stroke="#FFB347"
//               strokeWidth="8"
//               fill="transparent"
//               strokeDasharray={strokeDasharray}
//               initial={{ strokeDashoffset: circumference }}
//               animate={isInView ? { strokeDashoffset } : {}}
//               transition={{ delay: delay + 0.5, duration: 1.5, ease: "easeOut" }}
//               className="drop-shadow-sm"
//             />
//           </svg>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="text-lg font-bold text-[#FFB347]">{level}%</span>
//           </div>
//         </div>
//         {/* Tool Name in Orange instead of plain white */}
//         <h4 className="text-sm font-semibold text-center text-[#FFB347]">{name}</h4>
//       </motion.div>
//     );
//   };

//   return (
//     <section id="skills" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           className="max-w-6xl mx-auto"
//         >
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Technical <span className="text-[#FFB347]">Skills</span>
//             </h2>
//             <div className="w-24 h-1 bg-[#FFB347] mx-auto rounded-full" />
//             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
//               A comprehensive toolkit for transforming data into insights and building intelligent systems
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Skill Domains */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.2 }}
//             >
//               <h3 className="text-2xl font-bold mb-8 text-center lg:text-left text-[#FFB347]">
//                 Core Domains
//               </h3>
//               <div className="space-y-6">
//                 {skillDomains.map((skill, index) => (
//                   <motion.div
//                     key={skill.name}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.3 + index * 0.1 }}
//                     className="space-y-3"
//                   >
//                     <div className="flex justify-between items-center">
//                       <span className="font-semibold text-[#FFB347]">{skill.name}</span>
//                       <span className="text-[#FFB347] font-bold">{skill.level}%</span>
//                     </div>
//                     <div className="relative">
//                       <Progress
//                         value={isInView ? skill.level : 0}
//                         className="h-3 bg-muted/30"
//                       />
//                       <motion.div
//                         initial={{ width: 0 }}
//                         animate={isInView ? { width: `${skill.level}%` } : {}}
//                         transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
//                         className="absolute top-0 left-0 h-3 bg-[#FFB347] rounded-full shadow-[0_0_12px_rgba(255,179,71,0.6)]"
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Tools & Technologies */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.4 }}
//             >
//               <h3 className="text-2xl font-bold mb-8 text-center lg:text-left text-[#FFB347]">
//                 Tools & Technologies
//               </h3>
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                 {tools.map((tool, index) => (
//                   <CircularProgress
//                     key={tool.name}
//                     name={tool.name}
//                     level={tool.level}
//                     delay={0.5 + index * 0.1}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistSkills;

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const DataScientistSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillDomains = [
    { name: 'Machine Learning', level: 95 },
    { name: 'Deep Learning & NLP', level: 90 },
    { name: 'MLOps & Deployment', level: 85 },
    { name: 'Statistical Analysis', level: 92 },
    { name: 'Data Engineering', level: 80 },
    { name: 'Business Intelligence', level: 88 },
  ];

  const tools = [
    { name: 'Python', level: 95 },
    { name: 'SQL', level: 90 },
    { name: 'R', level: 85 },
    { name: 'TensorFlow', level: 88 },
    { name: 'PyTorch', level: 85 },
    { name: 'Scikit-learn', level: 92 },
    { name: 'AWS/GCP', level: 80 },
    { name: 'Docker', level: 75 },
  ];

  const CircularProgress = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
    const circumference = 2 * Math.PI * 40;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (level / 100) * circumference;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay, duration: 0.6 }}
        className="flex flex-col items-center p-4 bg-card/30 backdrop-blur-sm rounded-2xl border border-subtle/20 hover:shadow-glass transition-all duration-300"
      >
        <div className="relative w-24 h-24 mb-3">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-muted/20"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="#9615DB"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              initial={{ strokeDashoffset: circumference }}
              animate={isInView ? { strokeDashoffset } : {}}
              transition={{ delay: delay + 0.5, duration: 1.5, ease: "easeOut" }}
              className="drop-shadow-sm"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Changed from text-primary to light orange */}
            <span className="text-lg font-bold text-[#FFB347]">{level}%</span>
          </div>
        </div>
        {/* Tool name in light orange */}
        <h4 className="text-sm font-semibold text-center text-[#9615DB]">{name}</h4>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="text-[#9615DB]">Skills</span>
            </h2>
            {/* <div className="w-24 h-1 bg-[#FFB347] mx-auto rounded-full" /> */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#9615DB] to-[#FFB347] mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit for transforming data into insights and building intelligent systems
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skill Domains - Progress Bars */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center lg:text-left text-[#9615DB]">
                Core Domains
              </h3>
              <div className="space-y-6">
                {skillDomains.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      {/* Skill name + percentage in light orange */}
                      <span className="font-semibold text-[#FFB347]">{skill.name}</span>
                      <span className="text-[#FFB347] font-bold">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress
                        value={isInView ? skill.level : 0}
                        className="h-3 bg-muted/30"
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-3 bg-[#9615DB] rounded-full shadow-[0_0_12px_rgba(255,179,71,0.6)]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Technologies - Circular Progress */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center lg:text-left text-[Tools & Technologies]">
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <CircularProgress
                    key={tool.name}
                    name={tool.name}
                    level={tool.level}
                    delay={0.5 + index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataScientistSkills;

