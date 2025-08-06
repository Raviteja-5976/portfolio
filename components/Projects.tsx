'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Brain, Users, TrendingUp, Mic, MessageSquare, Coins } from 'lucide-react';

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
    title: "Task Management Web App for GDSC",
    description: "Comprehensive task tracking system built for Google Developers Student Clubs with team management features.",
    features: [
      "Task creation and assignment",
      "Team collaboration tools",
      "Progress tracking and updates",
      "MySQL database integration",
      "Streamlit-based user interface"
    ],
    technologies: ["Python", "MySQL", "Streamlit", "Pandas"],
    icon: Users,
    github: "https://github.com/Raviteja-5976/Task-Manager-using-streamlit",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Mine-GPT: AI Q&A and Image Generator",
    description: "Comprehensive AI-powered web application with advanced question answering and image generation capabilities.",
    features: [
      "Advanced question answering system",
      "AI-powered image generation",
      "Interactive user experience",
      "Streamlit-based interface",
      "Multiple AI model integration"
    ],
    technologies: ["Python", "Streamlit", "OpenAI", "AI/ML", "Image Generation"],
    icon: MessageSquare,
    github: "https://github.com/Raviteja-5976/chatbot-using-streamlit",
    color: "from-pink-500 to-rose-500"
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

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical expertise through innovative projects spanning AI/ML, web development, and blockchain
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.isPrivate && (
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full border border-yellow-400/30">
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-white/10 hover:bg-cyan-400/20 transition-colors duration-300"
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
                      className="p-2 rounded-full bg-white/10 hover:bg-cyan-400/20 transition-colors duration-300"
                    >
                      <ExternalLink size={18} className="text-gray-400 hover:text-cyan-400" />
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-start">
                      <span className="text-cyan-400 mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-sm text-gray-500 italic">
                      +{project.features.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Raviteja-5976"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-2xl transition-all duration-300"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};