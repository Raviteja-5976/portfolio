'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Code, Brain, Rocket, Users, Zap } from 'lucide-react';
import { ParallaxBackground } from './ParallaxBackground';

const features = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Expert in modern web technologies including React, Next.js, Python, and various frameworks",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Specializing in LLMs, Generative AI, Neural Networks, and intelligent system development",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Innovation Focused",
    description: "Constantly exploring cutting-edge technologies and building solutions that push boundaries",
    color: "from-green-400 to-teal-500"
  },
  {
    icon: Users,
    title: "Collaborative Leader",
    description: "Experience mentoring teams and sharing knowledge through bootcamps and workshops",
    color: "from-orange-400 to-red-500"
  }
];

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="about" className="min-h-screen py-12 sm:py-16 lg:py-20 relative overflow-hidden about-bg">
      <ParallaxBackground sectionId="about" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 break-words">
            <span className="gradient-text">About Me</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            I'm a passionate Computer Science student and AI enthusiast with a deep love for creating 
            innovative solutions that bridge the gap between complex technology and user-friendly experiences.
          </motion.p>
        </motion.div>

        {/* Interactive Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)"
              }}
              className="interactive-card glass-effect p-4 sm:p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
            >
              <motion.div 
                className={`p-3 sm:p-4 rounded-lg bg-gradient-to-r ${feature.color} mb-4 w-fit`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon size={28} className="text-white sm:w-8 sm:h-8" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white break-words">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative"
        >
          <div className="glass-effect p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-tr from-pink-400/20 to-yellow-400/20 rounded-full blur-lg animate-bounce" />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold mb-6 gradient-text break-words"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="inline mr-2" size={28} />
                My Journey
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="space-y-4"
                >
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    My journey in technology began with curiosity about how things work and evolved into a passion 
                    for creating solutions that matter. From building neural networks from scratch to developing 
                    comprehensive web applications, I've always believed in learning by doing.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    Currently working as an AI Intern at Hathoriy LLC, I'm gaining hands-on experience in 
                    enterprise AI solutions while pursuing my B.Tech in Computer Science Engineering.
                  </p>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: -10 }}
                  className="space-y-4"
                >
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    When I'm not coding, you'll find me exploring the latest in AI research, contributing to 
                    open-source projects, or sharing knowledge with fellow developers through workshops and 
                    mentoring sessions.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    I believe in the power of community and continuous learning. Every project is an opportunity 
                    to push boundaries and create something meaningful.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};