'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Users, BookOpen, Star, ExternalLink } from 'lucide-react';

const achievements = [
  {
    title: "2nd Position in GDSC Solution Challenge",
    description: "Won second place at college level for EchoMind project and got selected for regional level (All India)",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500",
    category: "Competition"
  },
  {
    title: "1st Prize in Innovative Idea Presentation",
    description: "Won first prize for developing CAAL (Context Aware Adaptive Learning) methodology and optimizing Large Action Model (LAM)",
    icon: Star,
    color: "from-purple-400 to-pink-500",
    category: "Innovation"
  },
  {
    title: "AI Mastery Bootcamp Resource Person",
    description: "Served as a resource person for AI Mastery Bootcamp at college, helping juniors learn about AI and tools",
    icon: Users,
    color: "from-blue-400 to-cyan-500",
    category: "Leadership"
  },
  {
    title: "Multiple Hackathon Participations",
    description: "Active participant in National Level GenAI Hackathon and various other competitive programming events",
    icon: Award,
    color: "from-green-400 to-teal-500",
    category: "Participation"
  }
];

const certificates = [
  {
    title: "Boomi Professional Integration Developer",
    issuer: "Boomi",
    date: "May 2025",
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "GitHub Foundations Certificate",
    issuer: "GitHub",
    date: "June 28, 2025",
    link: "https://www.credly.com/badges/5cf07898-cafd-48c1-93a0-fe127d990600/public_url",
    color: "from-gray-600 to-black"
  },
  {
    title: "Postman API Beginner Learning Path",
    issuer: "Postman",
    date: "April 21, 2025",
    link: "https://verify.skilljar.com/c/b6pbqiadv8na",
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Boomi Associate Integration Developer",
    issuer: "Boomi",
    date: "Feb 26, 2025",
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Google Cybersecurity Specialization",
    issuer: "Google (Coursera)",
    date: "July 2024",
    description: "Completed multiple courses including Foundations of Cyber Security, Play It Safe: Manage Security Risks, and Connect and Protect: Networks and Network Security",
    color: "from-blue-500 to-green-500"
  }
];

export const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Achievements & Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition for excellence in technology, innovation, and continuous learning
          </p>
        </motion.div>

        {/* Achievements Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            <span className="gradient-text">🏆 Major Achievements</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-effect p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} mr-4 flex-shrink-0`}>
                    <achievement.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">
                        {achievement.title}
                      </h4>
                      <span className="px-2 py-1 bg-white/10 text-cyan-400 rounded-full text-xs font-semibold">
                        {achievement.category}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            <span className="gradient-text">📜 Professional Certifications</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-effect p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${cert.color}`}>
                    <BookOpen size={20} className="text-white" />
                  </div>
                  {cert.link && (
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-white/10 hover:bg-cyan-400/20 transition-colors duration-300"
                    >
                      <ExternalLink size={16} className="text-gray-400 hover:text-cyan-400" />
                    </motion.a>
                  )}
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.title}
                </h4>
                
                <p className="text-cyan-400 font-semibold mb-2">
                  {cert.issuer}
                </p>
                
                <p className="text-sm text-gray-400 mb-3">
                  {cert.date}
                </p>
                
                {cert.description && (
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "5+", label: "Certifications Earned" },
            { number: "3", label: "Major Awards Won" },
            { number: "50+", label: "Students Mentored" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center glass-effect p-6 rounded-xl border border-white/10">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-3xl font-bold gradient-text mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};