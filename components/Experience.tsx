'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-5" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey in technology and artificial intelligence
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-12 md:pr-8 md:w-1/2"
          >
            {/* Timeline dot */}
            <div className="absolute top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-black left-2 md:right-0 md:left-auto md:transform md:translate-x-1/2"></div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect p-8 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 ml-8 md:ml-0"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="text-cyan-400 mr-3" size={28} />
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-400/30">
                  Current Position
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                AI Intern
              </h3>
              
              <div className="flex items-center text-cyan-400 font-semibold mb-4">
                <Building size={18} className="mr-2" />
                Hathoriy LLC
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-400 mb-6 space-y-2 sm:space-y-0">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  Feb 2025 - Aug 2025
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  Onsite Paid Internship
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Key Responsibilities & Achievements
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Developing advanced AI solutions and machine learning models for enterprise applications
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Building internal company portals using Django framework and deploying on AWS
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Working with Large Language Models (LLMs) and Generative AI technologies
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Collaborating with cross-functional teams to implement AI-driven features
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Contributing to research and development of intelligent system architectures
                  </li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-white/10">
                <h5 className="text-white font-semibold mb-2">Notable Projects During Internship</h5>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Built Hathority Portal - Company's internal Learning and Employee Management System</p>
                  <p>• Developed Study Pilot - AI-powered community learning platform with course generation capabilities</p>
                  <p>• Implemented various AI integrations using OpenAI, Gemini API, and other cutting-edge technologies</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Experience Context */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 glass-effect p-8 rounded-xl border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">Beyond Professional Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Leadership & Mentoring</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Resource person for AI Mastery Bootcamp at college
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Mentored junior students in AI and machine learning concepts
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Active participant in various hackathons and coding competitions
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Technical Contributions</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Built 10+ full-stack projects with AI/ML integration
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Contributed to open-source projects and maintained active GitHub profile
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Developed innovative solutions for real-world problems
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};