// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Calendar, MapPin, TrendingUp } from 'lucide-react';

// const DataScientistExperience = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const experiences = [
//     {
//       id: 1,
//       title: 'Senior Data Scientist',
//       company: 'TechCorp AI Solutions',
//       location: 'San Francisco, CA',
//       period: '2022 - Present',
//       achievements: [
//         'Led a team of 5 data scientists to develop ML models that improved customer retention by 35%',
//         'Built end-to-end MLOps pipeline reducing model deployment time from weeks to hours',
//         'Implemented A/B testing framework that increased experiment velocity by 3x',
//         'Mentored junior data scientists and established best practices for the team'
//       ],
//       technologies: ['Python', 'TensorFlow', 'AWS', 'MLflow', 'Kubernetes']
//     },
//     {
//       id: 2,
//       title: 'Data Scientist',
//       company: 'DataDriven Analytics',
//       location: 'New York, NY',
//       period: '2020 - 2022',
//       achievements: [
//         'Developed predictive models for demand forecasting with 92% accuracy',
//         'Created automated reporting dashboards serving 500+ stakeholders',
//         'Reduced data processing time by 60% through optimized ETL pipelines',
//         'Collaborated with product teams to integrate ML insights into user experiences'
//       ],
//       technologies: ['Python', 'Scikit-learn', 'Apache Spark', 'Tableau', 'PostgreSQL']
//     },
//     {
//       id: 3,
//       title: 'Junior Data Analyst',
//       company: 'StartupX',
//       location: 'Austin, TX',
//       period: '2019 - 2020',
//       achievements: [
//         'Analyzed user behavior data to identify key growth opportunities',
//         'Built statistical models for pricing optimization increasing revenue by 18%',
//         'Created data visualization tools for executive decision making',
//         'Established data quality frameworks and monitoring systems'
//       ],
//       technologies: ['Python', 'R', 'SQL', 'Power BI', 'Excel']
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
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const lineVariants = {
//     hidden: { height: 0 },
//     visible: { height: '100%' },
//   };

//   return (
//     <section id="experience" className="py-20 relative">
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
//               Professional <span className="text-primary">Experience</span>
//             </h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
//               Journey through roles where data meets impact
//             </p>
//           </motion.div>

//           {/* Timeline */}
//           <div className="relative">
//             {/* Animated Timeline Line */}
//             <motion.div
//               variants={lineVariants}
//               className="absolute left-8 top-0 w-0.5 bg-primary/30 origin-top"
//               style={{ height: '100%' }}
//             />
//             <motion.div
//               variants={lineVariants}
//               transition={{ duration: 2, delay: 0.5 }}
//               className="absolute left-8 top-0 w-0.5 bg-primary origin-top"
//             />

//             <div className="space-y-12">
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={exp.id}
//                   variants={cardVariants}
//                   transition={{ delay: index * 0.2 }}
//                   className="relative flex items-start space-x-8"
//                 >
//                   {/* Timeline Dot */}
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={isInView ? { scale: 1 } : {}}
//                     transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
//                     className="flex-shrink-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow relative z-10"
//                   />

//                   {/* Experience Card */}
//                   <motion.div
//                     whileHover={{ y: -5, scale: 1.02 }}
//                     className="flex-1 bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass p-6 hover:shadow-hover transition-all duration-300"
//                   >
//                     <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
//                       <div>
//                         <h3 className="text-xl font-bold text-foreground mb-1">
//                           {exp.title}
//                         </h3>
//                         <h4 className="text-lg text-primary font-semibold">
//                           {exp.company}
//                         </h4>
//                       </div>
                      
//                       <div className="flex flex-col lg:items-end mt-2 lg:mt-0 space-y-1">
//                         <div className="flex items-center text-muted-foreground text-sm">
//                           <Calendar className="w-4 h-4 mr-2" />
//                           {exp.period}
//                         </div>
//                         <div className="flex items-center text-muted-foreground text-sm">
//                           <MapPin className="w-4 h-4 mr-2" />
//                           {exp.location}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Achievements */}
//                     <div className="space-y-3 mb-6">
//                       {exp.achievements.map((achievement, idx) => (
//                         <motion.div
//                           key={idx}
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={isInView ? { opacity: 1, x: 0 } : {}}
//                           transition={{ delay: 0.8 + index * 0.2 + idx * 0.1 }}
//                           className="flex items-start space-x-3"
//                         >
//                           <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
//                           <p className="text-muted-foreground leading-relaxed">
//                             {achievement}
//                           </p>
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* Technologies */}
//                     <div className="flex flex-wrap gap-2">
//                       {exp.technologies.map((tech, idx) => (
//                         <motion.span
//                           key={tech}
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                           transition={{ delay: 1 + index * 0.2 + idx * 0.05 }}
//                           whileHover={{ scale: 1.05 }}
//                           className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
//                         >
//                           {tech}
//                         </motion.span>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistExperience;

// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Calendar, MapPin, TrendingUp } from 'lucide-react';

// const DataScientistExperience = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const experiences = [
//     {
//       id: 1,
//       title: 'Data Science Intern',
//       company: 'Innomatics Research Labs',
//       location: 'Hyderabad, India',
//       period: 'Jun 2023 – Dec 2023',
//       achievements: [
//         'Developed and optimized machine learning models for classification and regression tasks',
//         'Worked on data preprocessing, feature engineering, and exploratory data analysis for large datasets',
//         'Built visualizations and dashboards to communicate insights effectively',
//         'Collaborated with senior data scientists on real-world problem statements'
//       ],
//       technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn']
//     },
//     {
//       id: 2,
//       title: 'Project Trainee',
//       company: 'Bharat Sanchar Nigam Limited (BSNL)',
//       location: 'Vizianagaram, India',
//       period: 'Apr 2022 – Jun 2022',
//       achievements: [
//         'Gained hands-on exposure to telecommunication systems and network operations',
//         'Studied data management processes and optimization in telecom systems',
//         'Assisted in monitoring and analyzing network performance reports',
//         'Prepared detailed documentation of technical learnings and workflow processes'
//       ],
//       technologies: ['Networking', 'Telecom Systems', 'Data Analysis']
//     },
//     {
//       id: 3,
//       title: 'Academic Projects',
//       company: 'Various',
//       location: 'Vizianagaram, India',
//       period: '2021 – 2023',
//       achievements: [
//         'Developed a **Diabetes Prediction System** using ML algorithms achieving strong predictive accuracy',
//         'Implemented a **Real-Time Crowd Detection System** using YOLO for monitoring and safety applications',
//         'Built multiple end-to-end ML projects covering preprocessing, modeling, and evaluation',
//         'Explored statistical methods for improving classification and regression model performance'
//       ],
//       technologies: ['Python', 'YOLO', 'TensorFlow', 'Scikit-learn', 'OpenCV']
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
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const lineVariants = {
//     hidden: { height: 0 },
//     visible: { height: '100%' },
//   };

//   return (
//     <section id="experience" className="py-20 relative">
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
//               Professional <span className="text-primary">Experience</span>
//             </h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
//               Journey through roles where data meets impact
//             </p>
//           </motion.div>

//           {/* Timeline */}
//           <div className="relative">
//             {/* Animated Timeline Line */}
//             <motion.div
//               variants={lineVariants}
//               className="absolute left-8 top-0 w-0.5 bg-primary/30 origin-top"
//               style={{ height: '100%' }}
//             />
//             <motion.div
//               variants={lineVariants}
//               transition={{ duration: 2, delay: 0.5 }}
//               className="absolute left-8 top-0 w-0.5 bg-primary origin-top"
//             />

//             <div className="space-y-12">
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={exp.id}
//                   variants={cardVariants}
//                   transition={{ delay: index * 0.2 }}
//                   className="relative flex items-start space-x-8"
//                 >
//                   {/* Timeline Dot */}
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={isInView ? { scale: 1 } : {}}
//                     transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
//                     className="flex-shrink-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow relative z-10"
//                   />

//                   {/* Experience Card */}
//                   <motion.div
//                     whileHover={{ y: -5, scale: 1.02 }}
//                     className="flex-1 bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass p-6 hover:shadow-hover transition-all duration-300"
//                   >
//                     <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
//                       <div>
//                         <h3 className="text-xl font-bold text-foreground mb-1">
//                           {exp.title}
//                         </h3>
//                         <h4 className="text-lg text-primary font-semibold">
//                           {exp.company}
//                         </h4>
//                       </div>
                      
//                       <div className="flex flex-col lg:items-end mt-2 lg:mt-0 space-y-1">
//                         <div className="flex items-center text-muted-foreground text-sm">
//                           <Calendar className="w-4 h-4 mr-2" />
//                           {exp.period}
//                         </div>
//                         <div className="flex items-center text-muted-foreground text-sm">
//                           <MapPin className="w-4 h-4 mr-2" />
//                           {exp.location}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Achievements */}
//                     <div className="space-y-3 mb-6">
//                       {exp.achievements.map((achievement, idx) => (
//                         <motion.div
//                           key={idx}
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={isInView ? { opacity: 1, x: 0 } : {}}
//                           transition={{ delay: 0.8 + index * 0.2 + idx * 0.1 }}
//                           className="flex items-start space-x-3"
//                         >
//                           <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
//                           <p className="text-muted-foreground leading-relaxed">
//                             {achievement}
//                           </p>
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* Technologies */}
//                     <div className="flex flex-wrap gap-2">
//                       {exp.technologies.map((tech, idx) => (
//                         <motion.span
//                           key={tech}
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                           transition={{ delay: 1 + index * 0.2 + idx * 0.05 }}
//                           whileHover={{ scale: 1.05 }}
//                           className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
//                         >
//                           {tech}
//                         </motion.span>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DataScientistExperience;


import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const DataScientistExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      id: 1,
      title: 'Data Scientist',
      company: 'Infosys',
      location: '',
      period: 'April 2022 – June 2023',
      achievements: [
        // 'Developed anomaly detection ML models improving detection accuracy by 22%, reducing manual triage and MTTR.',
        // 'Automated ETL and feature engineering pipelines, improving data availability by 30% and query latency by 35%.',
        // 'Built and deployed ML models on AWS (S3, EC2, SageMaker) with CI/CD (Jenkins), reducing rollout cycle time by 40%.',
        // 'Implemented data governance, monitoring, and dashboards in Tableau/Power BI enabling faster stakeholder insights.',
        // 'Reduced infrastructure cost by 20% through optimized model deployment and resource scaling
        // .'
      '  Improved anomaly detection accuracy by 22%, reducing manual triage and MTTR.',

'Automated ETL and feature pipelines, boosting data availability by 30% and cutting query latency by 35%.',

'Deployed ML models on AWS (S3, EC2, SageMaker) with CI/CD, reducing rollout time by 40%.',

'Enabled faster insights with Tableau/Power BI dashboards and cut infra cost by 20% through optimized scaling.'
      ],
      technologies: ['Python', 'Scikit-learn', 'AWS SageMaker', 'Tableau', 'Power BI', 'SQL', 'Jenkins']
    },
    {
      id: 2,
      title: 'Generative AI Engineer',
      company: 'JPMorgan Chase & Co.',
      location: '',
      period: 'Dec 2020 - Mar 2022 ',
      achievements: [
        'Built LLM-based automation pipelines reducing support resolution time by 35%.',
        'Created prompt-optimized GPT workflows integrated into Pega, reducing manual drafting time by 45%.',
        'Engineered curated multi-source ETL for LLM inputs, improving accuracy of text generation by 28%.',
        'Enhanced contextual understanding in AI responses by 32% through fine-tuning and evaluation pipelines.'
      ],
      technologies: ['Python', 'PyTorch', 'Hugging Face', 'Azure OpenAI', 'AWS Bedrock', 'Pega']
    },
    // {
    //   id: 3,
    //   title: 'Data Science Intern',
    //   company: 'Startup Projects (Academic/Capstone)',
    //   location: 'Remote',
    //   period: '2019 – 2020',
    //   achievements: [
    //     'RSVP Movies Analytics: Improved movie recommendation system accuracy by 30% using feature engineering and Tableau dashboards.',
    //     'Customer Churn Prediction: Built churn classification model (85% accuracy) integrated with Power BI dashboards, driving 12% retention uplift.',
    //     'Developed statistical models and visualizations to enable actionable insights for stakeholders.',
    //   ],
    //   technologies: ['Python', 'Scikit-learn', 'Pandas', 'Tableau', 'Power BI', 'SQL']
    // }
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: '100%' },
  };

  return (
    <section id="experience" className="py-20 relative">
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
              Professional <span className="text-primary">Experience</span>
            </h2>
            {/* <div className="w-24 h-1 bg-primary mx-auto rounded-full" /> */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#9615DB] to-[#FFB347] mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Journey through roles where data meets impact
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div
              variants={lineVariants}
              className="absolute left-8 top-0 w-0.5 bg-primary/30 origin-top"
              style={{ height: '100%' }}
            />
            <motion.div
              variants={lineVariants}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute left-8 top-0 w-0.5 bg-primary origin-top"
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={cardVariants}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                    className="flex-shrink-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow relative z-10"
                  />

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex-1 bg-card/50 backdrop-blur-sm rounded-2xl border border-subtle/20 shadow-glass p-6 hover:shadow-hover transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-primary font-semibold">
                          {exp.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col lg:items-end mt-2 lg:mt-0 space-y-1">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        {/* <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div> */}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.8 + index * 0.2 + idx * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 1 + index * 0.2 + idx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          // className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                          className="px-3 py-1 bg-[#FFB347]/10 text-[#FFB347] text-xs font-medium rounded-full border border-[#FFB347]/20"

                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataScientistExperience;

