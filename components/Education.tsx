'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Technology",
    stream: "Computer Science and Engineering",
    institution: "Guru Nanak Institutions Technical Campus",
    location: "Hyderabad, Telangana, India",
    duration: "2021 - 2025",
    grade: "CGPA: 7.5",
    type: "current"
  },
  {
    degree: "Intermediate",
    stream: "PCM (Physics, Chemistry, Mathematics)",
    institution: "New Era Co-op Junior College",
    location: "Hyderabad, Telangana, India",
    duration: "2018 - 2020",
    grade: "84%",
    type: "completed"
  },
  {
    degree: "Schooling",
    stream: "High School",
    institution: "Sri Chaitanya Techno School",
    location: "Hyderabad, Telangana, India",
    duration: "Passed Out: 2018",
    grade: "CGPA: 8.8",
    type: "completed"
  }
];

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-5" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey in Computer Science and Engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-black ${
                index % 2 === 0 
                  ? 'left-2 md:right-0 md:left-auto' 
                  : 'left-2 md:left-0'
              } md:transform md:translate-x-1/2`}></div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-effect p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 ml-8 md:ml-0"
              >
                <div className="flex items-center mb-3">
                  <GraduationCap className="text-cyan-400 mr-2" size={24} />
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    edu.type === 'current' 
                      ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                      : 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                  }`}>
                    {edu.type === 'current' ? 'Current' : 'Completed'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {edu.degree}
                </h3>
                
                <p className="text-cyan-400 font-semibold mb-2">
                  {edu.stream}
                </p>

                <p className="text-gray-300 mb-3">
                  {edu.institution}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-400 space-y-2 sm:space-y-0">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {edu.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {edu.duration}
                  </div>
                  <div className="flex items-center">
                    <Award size={16} className="mr-1" />
                    {edu.grade}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};