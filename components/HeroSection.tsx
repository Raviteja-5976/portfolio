'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import { ParallaxBackground } from './ParallaxBackground';

export const HeroSection = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer & AI Engineer';

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    // Typing effect
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    // Track section view
    if ((window as any).achievementSystem) {
      (window as any).achievementSystem.handleSectionView('hero');
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center justify-center hero-bg">
      <ParallaxBackground sectionId="hero" />
      
      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 break-words"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="gradient-text">Raviteja Karnati</span>
          </motion.h1>
          
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8 h-12 sm:h-14 md:h-16 flex justify-center items-center px-4">
            <span className="typing-effect text-gray-300 text-center">
              {typedText}
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8 px-4"
          >
            Welcome to my interactive portfolio! Explore my journey through AI, machine learning, 
            and full-stack development.
          </motion.p>

          {/* Interactive Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12 px-4"
          >
            {[
              { icon: Github, href: "https://github.com/Raviteja-5976", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/raviteja-karnati-017306265/", label: "LinkedIn" },
              { icon: ExternalLink, href: "https://paradigm.raviteja.tech/", label: "Blog" },
              { icon: Mail, href: "mailto:ravitejakarnati5312@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, y: -10, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="interactive-card p-3 sm:p-4 rounded-full glass-effect hover:bg-cyan-400/20 transition-all duration-300"
              >
                <Icon size={24} className="text-cyan-400 sm:w-7 sm:h-7" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="interactive-card w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              Explore My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#00d4ff" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="interactive-card w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300 text-sm sm:text-base"
            >
              Get In Touch
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 0 30px rgba(16, 185, 129, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-card w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 rounded-full text-white font-semibold transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2 hover:from-emerald-300 hover:via-green-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25"
            >
              <Download size={18} />
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};