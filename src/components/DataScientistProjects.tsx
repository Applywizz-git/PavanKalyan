// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

// const DataScientistProjects = () => {
//   const [currentIndex, setCurrentIndex] = useState(1); // Start with center card
  
//   const projects = [
//     {
//       id: 1,
//       title: 'Predictive Customer Analytics',
//       category: 'Machine Learning',
//       description: 'Built an end-to-end ML pipeline to predict customer churn with 94% accuracy, reducing churn by 23% and saving $2M annually.',
//       metrics: ['94% Accuracy', '23% Churn Reduction', '$2M Annual Savings'],
//       techStack: ['Python', 'XGBoost', 'AWS SageMaker', 'Apache Airflow'],
//       image: '/src/assets/project-ml-analytics.jpg',
//       demoUrl: '#',
//       githubUrl: '#',
//     },
//     {
//       id: 2,
//       title: 'NLP Sentiment Analysis Platform',
//       category: 'Natural Language Processing',
//       description: 'Developed a real-time sentiment analysis system processing 10K+ reviews daily, improving product feedback response time by 80%.',
//       metrics: ['10K+ Daily Reviews', '80% Faster Response', '92% Accuracy'],
//       techStack: ['PyTorch', 'BERT', 'FastAPI', 'Docker', 'Kubernetes'],
//       image: '/src/assets/project-nlp-sentiment.jpg',
//       demoUrl: '#',
//       githubUrl: '#',
//     },
//     {
//       id: 3,
//       title: 'Time Series Forecasting System',
//       category: 'Forecasting & Analytics',
//       description: 'Created a multi-variate forecasting model for demand prediction, improving inventory optimization by 35% and reducing costs.',
//       metrics: ['35% Better Optimization', '15% Cost Reduction', '89% Forecast Accuracy'],
//       techStack: ['Prophet', 'LSTM', 'Pandas', 'Streamlit', 'PostgreSQL'],
//       image: '/src/assets/project-forecasting.jpg',
//       demoUrl: '#',
//       githubUrl: '#',
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % projects.length);
//     }, 5000); // Auto-loop every 5 seconds
    
//     return () => clearInterval(interval);
//   }, [projects.length]);

//   const nextProject = () => {
//     setCurrentIndex((prev) => (prev + 1) % projects.length);
//   };

//   const prevProject = () => {
//     setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   const getCardPosition = (index: number) => {
//     const diff = index - currentIndex;
//     if (diff === 0) return 'center';
//     if (diff === 1 || diff === -(projects.length - 1)) return 'right';
//     if (diff === -1 || diff === projects.length - 1) return 'left';
//     return 'hidden';
//   };

//   const cardVariants = {
//     center: { 
//       x: 0, 
//       scale: 1, 
//       zIndex: 3,
//       opacity: 1,
//       rotateY: 0,
//     },
//     left: { 
//       x: -300, 
//       scale: 0.8, 
//       zIndex: 1,
//       opacity: 0.6,
//       rotateY: 15,
//     },
//     right: { 
//       x: 300, 
//       scale: 0.8, 
//       zIndex: 1,
//       opacity: 0.6,
//       rotateY: -15,
//     },
//     hidden: { 
//       x: 0, 
//       scale: 0.6, 
//       zIndex: 0,
//       opacity: 0,
//     },
//   };

//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="max-w-7xl mx-auto"
//         >
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Featured <span className="text-primary">Projects</span>
//             </h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
//               Showcasing impactful data science solutions that drive business value
//             </p>
//           </motion.div>

//           {/* Projects Carousel */}
//           <div className="relative h-[600px] flex items-center justify-center">
//             <AnimatePresence mode="wait">
//               {projects.map((project, index) => {
//                 const position = getCardPosition(index);
//                 if (position === 'hidden') return null;

//                 return (
//                   <motion.div
//                     key={project.id}
//                     variants={cardVariants}
//                     animate={position}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}
//                     className="absolute w-[400px] h-[500px] perspective-1000"
//                     style={{ transformStyle: 'preserve-3d' }}
//                   >
//                     <motion.div
//                       className={`w-full h-full bg-card/80 backdrop-blur-md rounded-2xl border border-subtle/20 shadow-glass overflow-hidden cursor-pointer ${
//                         position === 'center' ? 'shadow-glow' : ''
//                       }`}
//                       whileHover={position === 'center' ? { y: -10, scale: 1.02 } : {}}
//                       onClick={() => position !== 'center' && setCurrentIndex(index)}
//                     >
//                       {/* Project Image */}
//                       <div className="h-48 overflow-hidden">
//                         <img 
//                           src={project.image} 
//                           alt={project.title}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
//                       </div>

//                       {/* Project Content */}
//                       <div className="p-6 space-y-4">
//                         <div>
//                           <span className="text-sm text-primary font-semibold uppercase tracking-wide">
//                             {project.category}
//                           </span>
//                           <h3 className="text-xl font-bold text-foreground mt-1">
//                             {project.title}
//                           </h3>
//                         </div>

//                         <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
//                           {project.description}
//                         </p>

//                         {/* Metrics */}
//                         <div className="flex flex-wrap gap-2">
//                           {project.metrics.map((metric, idx) => (
//                             <span 
//                               key={idx}
//                               className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
//                             >
//                               {metric}
//                             </span>
//                           ))}
//                         </div>

//                         {/* Tech Stack */}
//                         <div className="flex flex-wrap gap-2">
//                           {project.techStack.map((tech, idx) => (
//                             <span 
//                               key={idx}
//                               className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded border border-subtle/20"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>

//                         {/* Action Buttons */}
//                         {position === 'center' && (
//                           <motion.div 
//                             className="flex gap-2 pt-2"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.3 }}
//                           >
//                             <Button size="sm" className="flex-1">
//                               <ExternalLink className="w-4 h-4 mr-2" />
//                               Demo
//                             </Button>
//                             <Button variant="outline" size="sm" className="flex-1">
//                               <Github className="w-4 h-4 mr-2" />
//                               Code
//                             </Button>
//                           </motion.div>
//                         )}
//                       </div>
//                     </motion.div>
//                   </motion.div>
//                 );
//               })}
//             </AnimatePresence>

//             {/* Navigation Buttons */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute left-4 z-10 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-subtle/20 hover:bg-primary hover:text-primary-foreground"
//               onClick={prevProject}
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </Button>

//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute right-4 z-10 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-subtle/20 hover:bg-primary hover:text-primary-foreground"
//               onClick={nextProject}
//             >
//               <ChevronRight className="w-6 h-6" />
//             </Button>
//           </div>

//           {/* Carousel Indicators */}
//           <div className="flex justify-center mt-8 space-x-2">
//             {projects.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all ${
//                   index === currentIndex 
//                     ? 'bg-primary w-8' 
//                     : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
//                 }`}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistProjects;

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

// const DataScientistProjects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0); // Start with first project

//   const projects = [
//     {
//       id: 1,
//       title: 'RSVP Movies Analytics Case Study',
//       category: 'Data Analytics & Visualization',
//       description: 'Extracted and transformed large movie datasets with SQL and Python, improving recommendation accuracy by 30% and reducing redundancy by 25%.',
//       metrics: ['30% Better Recommendations', '25% Less Redundancy'],
//       techStack: ['Python', 'SQL', 'Pandas', 'Tableau', 'Matplotlib'],
//       image: '/src/assets/project-rsvp-movies.jpg',
//       demoUrl: '#',
//       githubUrl: '#',
//     },
//     {
//       id: 2,
//       title: 'Customer Churn Prediction Model',
//       category: 'Machine Learning',
//       description: 'Developed a supervised ML model (85% accuracy) predicting customer churn, with engineered features and Power BI dashboards enabling 12% higher retention.',
//       metrics: ['85% Accuracy', '12% Retention Improvement'],
//       techStack: ['Python', 'scikit-learn', 'pandas', 'Power BI'],
//       image: '/src/assets/project-churn.jpg',
//       demoUrl: '#',
//       githubUrl: '#',
//     }
//   ];

//   const nextProject = () => {
//     setCurrentIndex((prev) => (prev + 1) % projects.length);
//   };

//   const prevProject = () => {
//     setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   const getCardPosition = (index: number) => {
//     const diff = index - currentIndex;
//     if (diff === 0) return 'center';
//     if (diff === 1 || diff === -(projects.length - 1)) return 'right';
//     if (diff === -1 || diff === projects.length - 1) return 'left';
//     return 'hidden';
//   };

//   const cardVariants = {
//     center: { x: 0, scale: 1, zIndex: 3, opacity: 1, rotateY: 0 },
//     left: { x: -300, scale: 0.8, zIndex: 1, opacity: 0.6, rotateY: 15 },
//     right: { x: 300, scale: 0.8, zIndex: 1, opacity: 0.6, rotateY: -15 },
//     hidden: { x: 0, scale: 0.6, zIndex: 0, opacity: 0 },
//   };

//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="max-w-7xl mx-auto"
//         >
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Featured <span className="text-primary">Projects</span>
//             </h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
//               Showcasing impactful data science solutions from real-world case studies
//             </p>
//           </motion.div>

//           {/* Projects Carousel */}
//           <div className="relative h-[600px] flex items-center justify-center">
//             <AnimatePresence mode="wait">
//               {projects.map((project, index) => {
//                 const position = getCardPosition(index);
//                 if (position === 'hidden') return null;

//                 return (
//                   <motion.div
//                     key={project.id}
//                     variants={cardVariants}
//                     animate={position}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}
//                     className="absolute w-[400px] h-[500px] perspective-1000"
//                     style={{ transformStyle: 'preserve-3d' }}
//                   >
//                     <motion.div
//                       className={`w-full h-full bg-card/80 backdrop-blur-md rounded-2xl border border-subtle/20 shadow-glass overflow-hidden cursor-pointer ${
//                         position === 'center' ? 'shadow-glow' : ''
//                       }`}
//                       whileHover={position === 'center' ? { y: -10, scale: 1.02 } : {}}
//                       onClick={() => position !== 'center' && setCurrentIndex(index)}
//                     >
//                       {/* Project Image */}
//                       <div className="h-48 overflow-hidden relative">
//                         <img 
//                           src={project.image} 
//                           alt={project.title}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
//                       </div>

//                       {/* Project Content */}
//                       <div className="p-6 space-y-4">
//                         <div>
//                           <span className="text-sm text-primary font-semibold uppercase tracking-wide">
//                             {project.category}
//                           </span>
//                           <h3 className="text-xl font-bold text-foreground mt-1">
//                             {project.title}
//                           </h3>
//                         </div>

//                         <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
//                           {project.description}
//                         </p>

//                         {/* Metrics */}
//                         <div className="flex flex-wrap gap-2">
//                           {project.metrics.map((metric, idx) => (
//                             <span 
//                               key={idx}
//                               className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
//                             >
//                               {metric}
//                             </span>
//                           ))}
//                         </div>

//                         {/* Tech Stack */}
//                         <div className="flex flex-wrap gap-2">
//                           {project.techStack.map((tech, idx) => (
//                             <span 
//                               key={idx}
//                               className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded border border-subtle/20"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>

//                         {/* Action Buttons */}
//                         {position === 'center' && (
//                           <motion.div 
//                             className="flex gap-2 pt-2"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.3 }}
//                           >
//                             <Button size="sm" className="flex-1">
//                               <ExternalLink className="w-4 h-4 mr-2" />
//                               Demo
//                             </Button>
//                             <Button variant="outline" size="sm" className="flex-1">
//                               <Github className="w-4 h-4 mr-2" />
//                               Code
//                             </Button>
//                           </motion.div>
//                         )}
//                       </div>
//                     </motion.div>
//                   </motion.div>
//                 );
//               })}
//             </AnimatePresence>

//             {/* Navigation Buttons */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute left-4 z-10 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-subtle/20 hover:bg-primary hover:text-primary-foreground"
//               onClick={prevProject}
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </Button>

//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute right-4 z-10 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-subtle/20 hover:bg-primary hover:text-primary-foreground"
//               onClick={nextProject}
//             >
//               <ChevronRight className="w-6 h-6" />
//             </Button>
//           </div>

//           {/* Carousel Indicators */}
//           <div className="flex justify-center mt-8 space-x-2">
//             {projects.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all ${
//                   index === currentIndex 
//                     ? 'bg-primary w-8' 
//                     : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
//                 }`}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistProjects;


// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { ExternalLink, Github } from 'lucide-react';

// const DataScientistProjects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: 'Predictive Customer Analytics',
//       category: 'Machine Learning',
//       description: 'Built an end-to-end ML pipeline to predict customer churn with 94% accuracy, reducing churn by 23% and saving $2M annually.',
//       metrics: ['94% Accuracy', '23% Churn Reduction', '$2M Annual Savings'],
//       techStack: ['Python', 'XGBoost', 'AWS SageMaker', 'Apache Airflow'],
//       image: '/src/assets/project-ml-analytics.jpg',
//       demoUrl: '#',
//       githubUrl: '#',
//     },
//     {
//       id: 2,
//       title: 'NLP Sentiment Analysis Platform',
//       category: 'Natural Language Processing',
//       description: 'Developed a real-time sentiment analysis system processing 10K+ reviews daily, improving product feedback response time by 80%.',
//       metrics: ['10K+ Daily Reviews', '80% Faster Response', '92% Accuracy'],
//       techStack: ['PyTorch', 'BERT', 'FastAPI', 'Docker', 'Kubernetes'],
//       image: '/src/assets/project-nlp-sentiment.jpg',
//       demoUrl: '#',
//       githubUrl: '#',
//     },
//     {
//       id: 3,
//       title: 'Time Series Forecasting System',
//       category: 'Forecasting & Analytics',
//       description: 'Created a multi-variate forecasting model for demand prediction, improving inventory optimization by 35% and reducing costs.',
//       metrics: ['35% Better Optimization', '15% Cost Reduction', '89% Forecast Accuracy'],
//       techStack: ['Prophet', 'LSTM', 'Pandas', 'Streamlit', 'PostgreSQL'],
//       image: '/src/assets/project-forecasting.jpg',
//       demoUrl: '#',
//       githubUrl: '#',
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="max-w-7xl mx-auto"
//         >
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Featured <span className="text-primary">Projects</span>
//             </h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
//               Showcasing impactful data science solutions that drive business value
//             </p>
//           </motion.div>

//           {/* Projects Grid (Side by Side) */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="bg-card/80 backdrop-blur-md rounded-2xl border border-subtle/20 shadow-glass overflow-hidden"
//               >
//                 {/* Project Image */}
//                 <div className="h-48 overflow-hidden relative">
//                   <img 
//                     src={project.image} 
//                     alt={project.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
//                 </div>

//                 {/* Project Content */}
//                 <div className="p-6 space-y-4">
//                   <div>
//                     <span className="text-sm text-primary font-semibold uppercase tracking-wide">
//                       {project.category}
//                     </span>
//                     <h3 className="text-xl font-bold text-foreground mt-1">
//                       {project.title}
//                     </h3>
//                   </div>

//                   <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
//                     {project.description}
//                   </p>

//                   {/* Metrics */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.metrics.map((metric, idx) => (
//                       <span 
//                         key={idx}
//                         className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
//                       >
//                         {metric}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.techStack.map((tech, idx) => (
//                       <span 
//                         key={idx}
//                         className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded border border-subtle/20"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Action Buttons */}
//                   <motion.div 
//                     className="flex gap-2 pt-2"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     <Button size="sm" className="flex-1">
//                       <ExternalLink className="w-4 h-4 mr-2" />
//                       Demo
//                     </Button>
//                     <Button variant="outline" size="sm" className="flex-1">
//                       <Github className="w-4 h-4 mr-2" />
//                       Code
//                     </Button>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistProjects;

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const DataScientistProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'RSVP Movies Analytics Case Study',
      category: 'Data Analytics & Visualization',
      description: 'Extracted and transformed large movie datasets using SQL and Python (pandas), improving recommendation accuracy by 30%. Built normalized database schemas and dashboards for strategic decision-making.',
      metrics: ['30% Accuracy Improvement', '25% Reduced Redundancy'],
      techStack: ['SQL', 'Python (pandas)', 'Matplotlib', 'Tableau'],
      image: '/src/assets/rsvp.jpeg',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Customer Churn Prediction Model',
      category: 'Machine Learning',
      description: 'Developed a supervised ML model with scikit-learn achieving 85% accuracy in predicting customer churn. Applied feature engineering and visualization to guide retention campaigns with a 12% boost.',
      metrics: ['85% Accuracy', '15% Fewer False Positives', '12% Retention Increase'],
      techStack: ['Python (scikit-learn, pandas)', 'Power BI', 'Feature Engineering'],
      image: '/src/assets/churn.png',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            {/* <div className="w-24 h-1 bg-primary mx-auto rounded-full" /> */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#9615DB] to-[#FFB347] mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Showcasing impactful data science solutions that drive measurable business outcomes
            </p>
          </motion.div>

          {/* Projects Grid (Side by Side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card/80 backdrop-blur-md rounded-2xl border border-subtle/20 shadow-glass overflow-hidden"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-sm text-[#FFB347]  font-semibold uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-[#FFB347] text-xs font-medium rounded-full"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded border border-subtle/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex gap-2 pt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {/* <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button> */}
                    {/* <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button> */}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataScientistProjects;

