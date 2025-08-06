'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, MapPin, Send } from 'lucide-react';
import { ParallaxBackground } from './ParallaxBackground';

export const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:ravitejakarnati5312@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ravitejakarnati5312@gmail.com",
      href: "mailto:ravitejakarnati5312@gmail.com",
      color: "from-red-400 to-red-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Raviteja-5976",
      href: "https://github.com/Raviteja-5976",
      color: "from-gray-600 to-black"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "raviteja-karnati",
      href: "https://www.linkedin.com/in/raviteja-karnati-017306265/",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: ExternalLink,
      label: "Blog",
      value: "paradigm.raviteja.tech",
      href: "https://paradigm.raviteja.tech/",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <ParallaxBackground sectionId="contact" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 break-words">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Let's collaborate on something amazing! I'm always open to discussing new opportunities, 
            innovative projects, or just having a conversation about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect p-6 sm:p-8 rounded-xl border border-white/10 relative overflow-hidden"
          >
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-tr from-pink-400/10 to-yellow-400/10 rounded-full blur-lg animate-bounce" />
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white break-words">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm sm:text-base break-words"
                    placeholder="Enter your email"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="glass-effect p-6 sm:p-8 rounded-xl border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white break-words">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                  >
                    <motion.div 
                      className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${contact.color} mr-3 sm:mr-4 flex-shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <contact.icon size={18} className="text-white sm:w-5 sm:h-5" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-400">{contact.label}</p>
                      <p className="text-white group-hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base break-words">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass-effect p-6 sm:p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white break-words">Let's Build Something Together</h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                I'm currently pursuing my B.Tech in Computer Science while working as an AI Intern. 
                Whether you have a project in mind, need consultation, or just want to connect with 
                a fellow developer, I'd love to hear from you!
              </p>
              <div className="flex items-center text-gray-400 text-sm sm:text-base">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span className="break-words">Hyderabad, Telangana, India</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="glass-effect p-6 sm:p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white break-words">Quick Connect</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                For immediate responses, feel free to reach out on any of these platforms:
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full glass-effect hover:bg-cyan-400/20 transition-all duration-300"
                  >
                    <contact.icon size={18} className="text-cyan-400 sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};