'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Rocket, Users } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expert in modern web technologies including React, Next.js, Python, and various frameworks"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Specializing in LLMs, Generative AI, Neural Networks, and intelligent system development"
    },
    {
      icon: Rocket,
      title: "Innovation Focused",
      description: "Constantly exploring cutting-edge technologies and building solutions that push boundaries"
    },
    {
      icon: Users,
      title: "Collaborative Leader",
      description: "Experience mentoring teams and sharing knowledge through bootcamps and workshops"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science student and AI enthusiast with a deep love for creating 
            innovative solutions that bridge the gap between complex technology and user-friendly experiences. 
            Currently pursuing my B.Tech in CSE while working as an AI Intern at Hathoriy LLC.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="text-cyan-400 mb-4">
                <feature.icon size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            My journey in technology began with curiosity about how things work and evolved into a passion 
            for creating solutions that matter. From building neural networks from scratch to developing 
            comprehensive web applications, I've always believed in learning by doing. My experience spans 
            across multiple domains - from AI and machine learning to full-stack development, with a 
            particular focus on creating intelligent systems that can understand and assist users in 
            meaningful ways.
          </p>
          <br />
          <p className="text-gray-300 leading-relaxed text-lg">
            When I'm not coding, you'll find me exploring the latest in AI research, contributing to open-source 
            projects, or sharing knowledge with fellow developers through workshops and mentoring sessions. 
            I believe in the power of community and continuous learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
};