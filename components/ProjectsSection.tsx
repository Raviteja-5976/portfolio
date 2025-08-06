'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { ExternalLink, Github, Brain, Users, TrendingUp, Mic, MessageSquare, Coins, Eye, Lock } from 'lucide-react';
import { ParallaxBackground } from './ParallaxBackground';

const projects = [
  {
    title: "Study Pilot",
    description: "AI-Based Community Learning Platform that transforms any source (PDF, YouTube, Website) into structured courses with autonomous content generation.",
    features: [
      "Autonomous course generation from multiple sources",
      "AI character-based live conversations",
      "Podcast and quiz generation for each module",
      "Community forum for discussions",
      "Course sharing and search functionality"
    ],
    technologies: ["Flask", "Python", "AI/ML", "OpenAI", "Gemini API"],
    icon: Brain,
    status: "Private Repository",
    isPrivate: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Hathority Portal",
    description: "Company's internal portal built for Learning Management System and Employee/Client Management with AWS deployment.",
    features: [
      "Learning Management System",
      "Employee and Client Management",
      "Multi-admin role system",
      "AWS hosted deployment",
      "Secure authentication system"
    ],
    technologies: ["Django", "Python", "AWS", "PostgreSQL", "Bootstrap"],
    icon: Users,
    link: "https://hathority.raviteja.tech/",
    status: "Private Repository",
    isPrivate: true,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Learning Helper Assistant",
    description: "Python Flask web app using RAG and LLM to help users learn PDF content with chat features, podcasts, and exams.",
    features: [
      "RAG-based PDF content analysis",
      "Interactive chatbot for learning assistance",
      "Chapter segregation and organization",
      "Podcast generation from content",
      "Automated exam creation"
    ],
    technologies: ["Flask", "Python", "RAG", "LLM", "OpenAI"],
    icon: Brain,
    github: "https://github.com/Raviteja-5976/Learning-Helper-Assistant",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Echo-Mind: Advanced Voice Assistant",
    description: "Sophisticated voice assistant with multiple integrated features including weather API, OpenAI integration, and automated email functionality.",
    features: [
      "Weather API integration",
      "OpenAI-powered intelligent responses",
      "Automated email functionality using SMTP",
      "Customized email generation using LLMs",
      "Voice recognition and response system"
    ],
    technologies: ["Python", "OpenAI", "SMTP", "Weather API", "Speech Recognition"],
    icon: Mic,
    github: "https://github.com/Raviteja-5976/Voice-Assistant",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Genre Elo Rating",
    description: "Python Flask application using Elo rating algorithm to evaluate user's favorite genres with cumulative results.",
    features: [
      "Elo rating algorithm implementation",
      "User preference evaluation",
      "Database-driven favorites tracking",
      "Cumulative result analysis",
      "Interactive genre comparison"
    ],
    technologies: ["Flask", "Python", "SQLite", "Elo Algorithm"],
    icon: TrendingUp,
    github: "https://github.com/Raviteja-5976/Genre_elo_rating",
    link: "https://genre-elo.raviteja.tech/",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Switch Coin (SWCHN)",
    description: "Custom cryptocurrency deployed on Solana DevNet with wallet integration and normal currency exchange functionality.",
    features: [
      "Custom cryptocurrency on Solana",
      "Wallet integration support",
      "Currency exchange functionality",
      "DevNet deployment",
      "Blockchain transaction support"
    ],
    technologies: ["Solana", "Rust", "Blockchain", "Cryptocurrency", "Web3"],
    icon: Coins,
    color: "from-amber-500 to-yellow-500"
  }
];

export const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = (index: number) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <section id="projects" className="min-h-screen py-12 sm:py-16 lg:py-20 relative overflow-hidden projects-bg">
      <ParallaxBackground sectionId="projects" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 break-words">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Interactive project showcase - Click on any project card to explore details and flip for more information!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="project-card"
            >
              <div 
                className={`project-card-inner ${selectedProject === index ? 'rotate-y-180' : ''}`}
                onClick={() => handleProjectClick(index)}
              >
                {/* Front of card */}
                <div className="project-card-front glass-effect border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${project.color}`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon size={20} className="text-white sm:w-6 sm:h-6" />
                    </motion.div>
                    
                    <div className="flex space-x-2">
                      {project.isPrivate ? (
                        <div className="p-2 rounded-full bg-yellow-500/20">
                          <Lock size={14} className="text-yellow-400" />
                        </div>
                      ) : (
                        <div className="p-2 rounded-full bg-green-500/20">
                          <Eye size={14} className="text-green-400" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 break-words">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm break-words">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/20 break-words"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-gray-400 rounded-full text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="text-center text-sm text-gray-400">
                    Click to explore features →
                  </div>
                </div>

                {/* Back of card */}
                <div className="project-card-back">
                  <h4 className="text-lg font-bold text-white mb-4 break-words">Key Features</h4>
                  <ul className="space-y-2 mb-6">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-start break-words">
                        <span className="text-cyan-400 mr-2 mt-1 flex-shrink-0">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-center space-x-3 mt-auto">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-full bg-white/10 hover:bg-cyan-400/20 transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} className="text-gray-400 hover:text-cyan-400" />
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-full bg-white/10 hover:bg-cyan-400/20 transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} className="text-gray-400 hover:text-cyan-400" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { number: "10+", label: "Projects Completed", color: "text-cyan-400" },
            { number: "6", label: "Technologies Used", color: "text-purple-400" },
            { number: "3", label: "Live Deployments", color: "text-green-400" },
            { number: "100%", label: "Learning Rate", color: "text-yellow-400" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center glass-effect p-4 sm:p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
            >
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm break-words">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.a
            href="https://github.com/Raviteja-5976"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold transition-all duration-300 text-sm sm:text-base break-words"
          >
            <Github className="mr-2 sm:mr-3" size={20} />
            Explore All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};