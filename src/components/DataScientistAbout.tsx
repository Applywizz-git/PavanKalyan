// import { useEffect, useRef, useState } from 'react';
// import { motion, useInView } from 'framer-motion';

// const DataScientistAbout = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
  
//   const [counts, setCounts] = useState({ models: 0, tests: 0, data: 0 });
//   const targets = { models: 25, tests: 50, data: 100 };

//   useEffect(() => {
//     if (!isInView) return;

//     const duration = 2000;
//     const steps = 60;
//     const stepDuration = duration / steps;

//     const counters = Object.keys(targets).map(key => {
//       const target = targets[key as keyof typeof targets];
//       const increment = target / steps;
//       let current = 0;

//       return setInterval(() => {
//         current += increment;
//         if (current >= target) {
//           current = target;
//           clearInterval(counters.find(c => c === counters[Object.keys(targets).indexOf(key)]));
//         }
//         setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
//       }, stepDuration);
//     });

//     return () => counters.forEach(clearInterval);
//   }, [isInView]);

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
//     <section id="about" className="py-20 relative">
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
//               About <span className="text-primary">Me</span>
//             </h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <motion.div variants={itemVariants} className="space-y-6">
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 I'm a passionate Data Scientist with over 5 years of experience in transforming 
//                 complex datasets into actionable business insights. My expertise spans across 
//                 machine learning, statistical modeling, and advanced analytics.
//               </p>
              
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 I specialize in building end-to-end ML pipelines, from data preprocessing and 
//                 feature engineering to model deployment and monitoring. My work has directly 
//                 contributed to improving business outcomes through data-driven decision making.
//               </p>

//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 When I'm not diving deep into data, you'll find me exploring the latest research 
//                 in AI, contributing to open-source projects, or sharing knowledge through technical 
//                 writing and speaking at conferences.
//               </p>

//               <div className="flex flex-wrap gap-3 pt-4">
//                 {['Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'AWS', 'Docker'].map((skill) => (
//                   <motion.span
//                     key={skill}
//                     whileHover={{ scale: 1.05 }}
//                     className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Right Content - Stats Cards */}
//             <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
//               <motion.div
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass text-center"
//               >
//                 <motion.div
//                   className="text-4xl font-bold text-primary mb-2"
//                   animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                 >
//                   {counts.models}+
//                 </motion.div>
//                 <p className="text-muted-foreground font-medium">Models in Production</p>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass text-center"
//               >
//                 <motion.div
//                   className="text-4xl font-bold text-primary mb-2"
//                   animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
//                   transition={{ duration: 1, delay: 0.7 }}
//                 >
//                   {counts.tests}+
//                 </motion.div>
//                 <p className="text-muted-foreground font-medium">A/B Tests Conducted</p>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass text-center"
//               >
//                 <motion.div
//                   className="text-4xl font-bold text-primary mb-2"
//                   animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
//                   transition={{ duration: 1, delay: 0.9 }}
//                 >
//                   {counts.data}TB+
//                 </motion.div>
//                 <p className="text-muted-foreground font-medium">Data Processed</p>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistAbout;

// import { useEffect, useRef, useState } from 'react';
// import { motion, useInView } from 'framer-motion';

// const DataScientistAbout = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
  
//   const [counts, setCounts] = useState({ models: 0, projects: 0, data: 0 });
//   const targets = { models: 15, projects: 40, data: 120 }; // based on resume impact

//   useEffect(() => {
//     if (!isInView) return;

//     const duration = 2000;
//     const steps = 60;
//     const stepDuration = duration / steps;

//     const intervals: NodeJS.Timeout[] = [];

//     Object.keys(targets).forEach((key) => {
//       const target = targets[key as keyof typeof targets];
//       const increment = target / steps;
//       let current = 0;

//       const interval = setInterval(() => {
//         current += increment;
//         if (current >= target) {
//           current = target;
//           clearInterval(interval);
//         }
//         setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
//       }, stepDuration);

//       intervals.push(interval);
//     });

//     return () => intervals.forEach(clearInterval);
//   }, [isInView]);

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
//     <section id="about" className="py-20 relative bg-gradient-to-b from-[#2D3032] via-[#3A3C3E] to-[#1A1A1A]">
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

//   <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//                About <span className="text-primary">Me</span>           </h2>


//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-[#9615DB] to-[#FFB347] mx-auto rounded-full" />
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <motion.div variants={itemVariants} className="space-y-6">
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 I’m <span className="text-[#FFB347] font-semibold">Pavan Kalyan Padala</span>, a Data Scientist passionate about 
//                 building intelligent AI-driven solutions. With strong expertise in 
//                 <span className="text-[#FFB347]"> Machine Learning, Deep Learning, Generative AI</span>, and 
//                 <span className="text-[#FFB347]"> Natural Language Processing</span>, 
//                 I specialize in designing data products that create measurable business impact.
//               </p>
              
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 I have hands-on experience across the AI lifecycle — from <span className="text-[#FFB347]">feature engineering, 
//                 model development, and deployment</span> to <span className="text-[#FFB347]">cloud-based MLOps pipelines</span>. 
//                 My projects span predictive modeling, data visualization, recommendation systems, and real-time analytics.
//               </p>

//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Beyond technical expertise, I enjoy <span className="text-[#FFB347]">mentoring peers</span>, 
//                 contributing to open-source, and keeping pace with the fast-evolving field of AI. 
//                 I believe in creating solutions that are not only accurate but also scalable, interpretable, 
//                 and business-aligned.
//               </p>

//               <div className="flex flex-wrap gap-3 pt-4">
//                 {[
//                   'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 
//                   'SQL', 'Power BI', 'AWS', 'Azure', 'Docker', 'NLP', 'Generative AI'
//                 ].map((skill) => (
//                   <motion.span
//                     key={skill}
//                     whileHover={{ scale: 1.05 }}
//                     className="px-4 py-2 bg-[#FFB347]/10 text-[#FFB347] rounded-full text-sm font-medium border border-[#FFB347]/30"
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Right Content - Stats Cards */}
//             <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
//               <motion.div
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-[#FFB347]/30 shadow-[0_0_25px_rgba(255,179,71,0.25)] text-center"
//               >
//                 <motion.div
//                   className="text-4xl font-bold text-[#FFB347] mb-2"
//                   animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                 >
//                   {counts.models}+
//                 </motion.div>
//                 <p className="text-muted-foreground font-medium">AI/ML Models Deployed</p>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-[#FFB347]/30 shadow-[0_0_25px_rgba(255,179,71,0.25)] text-center"
//               >
//                 <motion.div
//                   className="text-4xl font-bold text-[#FFB347] mb-2"
//                   animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
//                   transition={{ duration: 1, delay: 0.7 }}
//                 >
//                   {counts.projects}+
//                 </motion.div>
//                 <p className="text-muted-foreground font-medium">Projects & Case Studies</p>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-[#FFB347]/30 shadow-[0_0_25px_rgba(255,179,71,0.25)] text-center"
//               >
//                 <motion.div
//                   className="text-4xl font-bold text-[#FFB347] mb-2"
//                   animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
//                   transition={{ duration: 1, delay: 0.9 }}
//                 >
//                   {counts.data}GB+
//                 </motion.div>
//                 <p className="text-muted-foreground font-medium">Data Processed</p>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistAbout;

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const DataScientistAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [counts, setCounts] = useState({ models: 0, projects: 0, data: 0 });
  const targets = { models: 15, projects: 40, data: 120 }; // based on resume impact

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals: NodeJS.Timeout[] = [];

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);

      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [isInView]);

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
    <section
      id="about"
      className="
        py-20 relative 
        bg-white
        dark:bg-gradient-to-b dark:from-[#2D3032] dark:via-[#3A3C3E] dark:to-[#1A1A1A]
      "
    >
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
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#9615DB] to-[#FFB347] mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m <span className="text-[#FFB347] font-semibold">Pavan Kalyan Padala</span>, a Data Scientist passionate about 
                building intelligent AI-driven solutions. With strong expertise in 
                <span className="text-[#FFB347]"> Machine Learning, Deep Learning, Generative AI</span>, and 
                <span className="text-[#FFB347]"> Natural Language Processing</span>, 
                I specialize in designing data products that create measurable business impact.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have hands-on experience across the AI lifecycle — from <span className="text-[#FFB347]">feature engineering, 
                model development, and deployment</span> to <span className="text-[#FFB347]">cloud-based MLOps pipelines</span>. 
                My projects span predictive modeling, data visualization, recommendation systems, and real-time analytics.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond technical expertise, I enjoy <span className="text-[#FFB347]">mentoring peers</span>, 
                contributing to open-source, and keeping pace with the fast-evolving field of AI. 
                I believe in creating solutions that are not only accurate but also scalable, interpretable, 
                and business-aligned.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 
                  'SQL', 'Power BI', 'AWS', 'Azure', 'Docker', 'NLP', 'Generative AI'
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-[#FFB347]/10 text-[#FFB347] rounded-full text-sm font-medium border border-[#FFB347]/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Stats Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-[#FFB347]/30 shadow-[0_0_25px_rgba(255,179,71,0.25)] text-center"
              >
                <motion.div
                  className="text-4xl font-bold text-[#FFB347] mb-2"
                  animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {counts.models}+
                </motion.div>
                <p className="text-muted-foreground font-medium">AI/ML Models Deployed</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-[#FFB347]/30 shadow-[0_0_25px_rgba(255,179,71,0.25)] text-center"
              >
                <motion.div
                  className="text-4xl font-bold text-[#FFB347] mb-2"
                  animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  {counts.projects}+
                </motion.div>
                <p className="text-muted-foreground font-medium">Projects & Case Studies</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-[#FFB347]/30 shadow-[0_0_25px_rgba(255,179,71,0.25)] text-center"
              >
                <motion.div
                  className="text-4xl font-bold text-[#FFB347] mb-2"
                  animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  {counts.data}GB+
                </motion.div>
                <p className="text-muted-foreground font-medium">Data Processed</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataScientistAbout;

