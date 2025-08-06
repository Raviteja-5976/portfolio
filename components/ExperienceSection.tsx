'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Briefcase, Calendar, MapPin, Building, Star } from 'lucide-react';
import { ParallaxBackground } from './ParallaxBackground';

export const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const responsibilities = [
    "Developing advanced AI solutions and machine learning models for enterprise applications",
    "Building internal company portals using Django framework and deploying on AWS",
    "Working with Large Language Models (LLMs) and Generative AI technologies",
    "Collaborating with cross-functional teams to implement AI-driven features",
    "Contributing to research and development of intelligent system architectures"
  ];

  const projects = [
    "Hathority Portal - Company's internal Learning and Employee Management System",
    "Study Pilot - AI-powered community learning platform with course generation capabilities",
    "Various AI integrations using OpenAI, Gemini API, and other cutting-edge technologies"
  ];

  return (
    <section id="experience" className="min-h-screen py-20 relative overflow-hidden">
      <ParallaxBackground sectionId="experience" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey in technology and artificial intelligence
          </p>
        </motion.div>

        {/* Main Experience Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-16"
        >
          <div className="glass-effect p-8 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-400/10 to-yellow-400/10 rounded-full blur-xl animate-bounce" />
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <motion.div 
                  className="text-cyan-400 mr-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Briefcase size={40} />
                </motion.div>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-500/20 text-green-400 border border-green-400/30">
                  Current Position
                </span>
              </div>

              <motion.h3 
                className="text-3xl font-bold text-white mb-4"
                whileHover={{ scale: 1.05, color: "#00d4ff" }}
              >
                AI Intern
              </motion.h3>
              
              <div className="flex items-center text-cyan-400 font-semibold mb-6">
                <Building size={24} className="mr-3" />
                <span className="text-xl">Hathoriy LLC</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center text-gray-400">
                  <Calendar size={20} className="mr-3" />
                  <span>Feb 2025 - Aug 2025</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin size={20} className="mr-3" />
                  <span>Onsite Paid Internship</span>
                </div>
              </div>

              {/* Interactive Responsibilities */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Star className="mr-2 text-yellow-400" size={20} />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {responsibilities.map((responsibility, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        whileHover={{ x: 10, color: "#00d4ff" }}
                        className="flex items-start text-gray-300 cursor-pointer"
                      >
                        <span className="text-cyan-400 mr-3 mt-1">•</span>
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  whileHover={{ x: -10 }}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Star className="mr-2 text-purple-400" size={20} />
                    Notable Projects
                  </h4>
                  <ul className="space-y-3">
                    {projects.map((project, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        whileHover={{ x: -10, color: "#ff00ff" }}
                        className="flex items-start text-gray-300 cursor-pointer"
                      >
                        <span className="text-purple-400 mr-3 mt-1">•</span>
                        {project}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Experience Context */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="interactive-card glass-effect p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">Leadership & Mentoring</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                Resource person for AI Mastery Bootcamp at college
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                Mentored 50+ junior students in AI and machine learning concepts
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                Active participant in various hackathons and coding competitions
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="interactive-card glass-effect p-6 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">Technical Contributions</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Built 10+ full-stack projects with AI/ML integration
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Contributed to open-source projects and maintained active GitHub profile
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Developed innovative solutions for real-world problems
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};