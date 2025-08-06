'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Brain, Cloud, GitBranch, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: "Intermediate", color: "from-yellow-400 to-yellow-600" },
      { name: "JavaScript", level: "Intermediate", color: "from-yellow-300 to-yellow-500" },
      { name: "HTML", level: "Expert", color: "from-orange-400 to-red-500" },
      { name: "CSS", level: "Intermediate", color: "from-blue-400 to-blue-600" },
      { name: "Java", level: "Beginner", color: "from-red-400 to-red-600" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: Wrench,
    skills: [
      { name: "React", level: "Beginner", color: "from-cyan-400 to-blue-500" },
      { name: "Flask", level: "Intermediate", color: "from-gray-400 to-gray-600" },
      { name: "Django", level: "Intermediate", color: "from-green-400 to-green-600" },
      { name: "FastAPI", level: "Intermediate", color: "from-teal-400 to-teal-600" },
      { name: "Streamlit", level: "Intermediate", color: "from-red-400 to-pink-500" },
      { name: "Langchain", level: "Intermediate", color: "from-purple-400 to-purple-600" },
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "LLM", level: "Intermediate", color: "from-purple-400 to-pink-500" },
      { name: "Generative AI", level: "Intermediate", color: "from-pink-400 to-rose-500" },
      { name: "OpenAI", level: "Intermediate", color: "from-green-400 to-emerald-500" },
      { name: "Neural Networks", level: "Intermediate", color: "from-blue-400 to-indigo-500" },
      { name: "Deep Learning", level: "Intermediate", color: "from-indigo-400 to-purple-500" },
      { name: "Machine Learning", level: "Intermediate", color: "from-teal-400 to-cyan-500" },
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: "Intermediate", color: "from-blue-400 to-blue-600" },
      { name: "PostgreSQL", level: "Intermediate", color: "from-blue-500 to-indigo-600" },
      { name: "SQLite", level: "Intermediate", color: "from-gray-400 to-gray-600" },
      { name: "SQL", level: "Intermediate", color: "from-orange-400 to-red-500" },
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "DevOps", level: "Intermediate", color: "from-green-400 to-blue-500" },
      { name: "GitHub Actions", level: "Intermediate", color: "from-gray-600 to-black" },
      { name: "CI/CD", level: "Intermediate", color: "from-blue-400 to-purple-500" },
      { name: "Boomi Cloud", level: "Intermediate", color: "from-purple-400 to-indigo-500" },
    ]
  },
  {
    title: "Tools & Technologies",
    icon: GitBranch,
    skills: [
      { name: "Git", level: "Intermediate", color: "from-orange-400 to-red-500" },
      { name: "GitHub", level: "Intermediate", color: "from-gray-600 to-black" },
      { name: "Tailwind", level: "Intermediate", color: "from-cyan-400 to-blue-500" },
      { name: "API Development", level: "Intermediate", color: "from-green-400 to-teal-500" },
      { name: "Data Analysis", level: "Intermediate", color: "from-yellow-400 to-orange-500" },
      { name: "Prompt Engineering", level: "Intermediate", color: "from-pink-400 to-rose-500" },
    ]
  }
];

const levelColors = {
  "Expert": "bg-green-500",
  "Intermediate": "bg-yellow-500",
  "Beginner": "bg-red-500"
};

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My technical expertise across various domains of software development and AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass-effect p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-cyan-400 mr-3">
                  <category.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${levelColors[skill.level as keyof typeof levelColors]} text-black`}>
                          {skill.level}
                        </span>
                      </div>
                      
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={inView ? { 
                            width: skill.level === 'Expert' ? '95%' : 
                                   skill.level === 'Intermediate' ? '75%' : '50%' 
                          } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};