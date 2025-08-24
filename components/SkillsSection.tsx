'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { Code, Database, Brain, Cloud, GitBranch, Wrench, Zap, Settings } from 'lucide-react';
import { ParallaxBackground } from './ParallaxBackground';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 85, color: "from-yellow-400 to-yellow-600" },
      { name: "JavaScript", level: 75, color: "from-yellow-300 to-yellow-500" },
      { name: "HTML", level: 95, color: "from-orange-400 to-red-500" },
      { name: "CSS", level: 85, color: "from-blue-400 to-blue-600" },
      { name: "Java", level: 60, color: "from-red-400 to-red-600" },
      { name: "SQL", level: 90, color: "from-blue-500 to-indigo-600" },
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "LLM", level: 85, color: "from-purple-400 to-pink-500" },
      { name: "Generative AI", level: 80, color: "from-pink-400 to-rose-500" },
      { name: "OpenAI", level: 90, color: "from-green-400 to-emerald-500" },
      { name: "Gemini API", level: 85, color: "from-blue-400 to-cyan-500" },
      { name: "Machine Learning", level: 80, color: "from-teal-400 to-cyan-500" },
      { name: "Neural Networks", level: 75, color: "from-blue-400 to-indigo-500" },
      { name: "Deep Learning", level: 70, color: "from-indigo-400 to-purple-500" },
      { name: "PyTorch", level: 70, color: "from-red-400 to-red-600" },
      { name: "TensorFlow", level: 65, color: "from-orange-400 to-orange-600" },
      { name: "Prompt Engineering", level: 90, color: "from-violet-400 to-purple-500" },
      { name: "Data Analysis", level: 85, color: "from-orange-400 to-red-500" },
      { name: "Data Processing", level: 80, color: "from-green-400 to-teal-500" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: Wrench,
    skills: [
      { name: "React", level: 70, color: "from-cyan-400 to-blue-500" },
      { name: "Flask", level: 85, color: "from-gray-400 to-gray-600" },
      { name: "Django", level: 80, color: "from-green-400 to-green-600" },
      { name: "FastAPI", level: 85, color: "from-teal-400 to-teal-600" },
      { name: "Streamlit", level: 90, color: "from-red-400 to-pink-500" },
      { name: "Langchain", level: 85, color: "from-purple-400 to-purple-600" },
      { name: "Tailwind", level: 80, color: "from-cyan-400 to-blue-500" },
      { name: "Node", level: 75, color: "from-orange-400 to-red-500" },
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85, color: "from-blue-400 to-blue-600" },
      { name: "PostgreSQL", level: 80, color: "from-blue-500 to-indigo-600" },
      { name: "SQLite", level: 90, color: "from-gray-400 to-gray-600" },
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "DevOps", level: 75, color: "from-green-400 to-blue-500" },
      { name: "GitHub Actions", level: 80, color: "from-gray-600 to-black" },
      { name: "Build Pipelines", level: 75, color: "from-blue-400 to-purple-500" },
      { name: "Continuous Integration", level: 80, color: "from-cyan-400 to-blue-500" },
      { name: "Continuous Delivery", level: 75, color: "from-purple-400 to-pink-500" },
      { name: "Release Management", level: 70, color: "from-green-400 to-teal-500" },
      { name: "Boomi Cloud", level: 85, color: "from-purple-400 to-indigo-500" },
    ]
  },
  {
    title: "Tools & Technologies",
    icon: Settings,
    skills: [
      { name: "Git", level: 85, color: "from-orange-400 to-red-500" },
      { name: "GitHub", level: 90, color: "from-gray-600 to-black" },
      { name: "API Development", level: 85, color: "from-green-400 to-teal-500" },
      { name: "APIs", level: 90, color: "from-blue-400 to-cyan-500" },
      { name: "Agent Development Kit", level: 75, color: "from-purple-400 to-pink-500" },
    ]
  }
];

export const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [matrixChars, setMatrixChars] = useState<Array<{ id: number; char: string; x: number; delay: number }>>([]);

  useEffect(() => {
    // Generate matrix effect
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newMatrixChars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      x: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setMatrixChars(newMatrixChars);
  }, [inView]);

  return (
    <section id="skills" className="min-h-screen py-12 sm:py-16 lg:py-20 relative overflow-hidden skills-bg">
      <ParallaxBackground sectionId="skills" />
      
      {/* Matrix Background Effect */}
      <div className="matrix-bg">
        {matrixChars.map((char) => (
          <div
            key={char.id}
            className="matrix-char"
            style={{
              left: `${char.x}%`,
              animationDelay: `${char.delay}s`,
            }}
          >
            {char.char}
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 break-words">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive technical expertise across the full spectrum of modern development and AI technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass-effect p-4 sm:p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 h-fit"
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="text-cyan-400 mr-3"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon size={24} className="sm:w-7 sm:h-7" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-white break-words">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors duration-300 break-words">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-400 font-semibold flex-shrink-0 ml-2">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          ease: "easeOut"
                        }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: 'linear',
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 1
                          }}
                        />
                      </motion.div>
                      
                      {/* Glow effect on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 sm:mt-16"
        >
          <div className="glass-effect p-6 sm:p-8 rounded-xl border border-white/10 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-pink-400/10 to-yellow-400/10 rounded-full blur-xl animate-bounce" />
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center gradient-text break-words">
                <Zap className="inline mr-2" size={28} />
                Technical Expertise Overview
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { 
                    number: "40+", 
                    label: "Technologies Mastered", 
                    color: "text-cyan-400",
                    description: "Comprehensive skill set"
                  },
                  { 
                    number: "80%", 
                    label: "Average Proficiency", 
                    color: "text-purple-400",
                    description: "High-level expertise"
                  },
                  { 
                    number: "6", 
                    label: "Core Domains", 
                    color: "text-green-400",
                    description: "Specialized areas"
                  },
                  { 
                    number: "1+", 
                    label: "Years Experience", 
                    color: "text-yellow-400",
                    description: "Continuous learning"
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-white font-semibold text-xs sm:text-sm mb-1 break-words">
                      {stat.label}
                    </div>
                    <div className="text-gray-400 text-xs break-words">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="text-center text-gray-300 mt-6 leading-relaxed text-sm sm:text-base px-4"
              >
                Constantly evolving skill set with focus on cutting-edge technologies in AI, machine learning, 
                and full-stack development. Committed to staying at the forefront of technological innovation.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
