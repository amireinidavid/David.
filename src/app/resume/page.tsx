"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const ResumePage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const [activeSection, setActiveSection] = useState("experience");
  
  // Parallax effects
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  
  // Skills with proficiency
  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/Next.js", level: 95 },
    { name: "Node.js/Express", level: 85 },
    { name: "UI/UX Design", level: 88 },
    { name: "TailwindCSS", level: 92 },
    { name: "GraphQL", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "Python", level: 75 },
    { name: "AWS/DevOps", level: 82 },
    { name: "Docker/Kubernetes", level: 78 },
  ];
  
  // Experience data
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Led development of cutting-edge web applications using React and Next.js. Implemented modern UI practices and optimized performance.",
      technologies: ["React", "Next.js", "TypeScript", "GraphQL", "TailwindCSS"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      description: "Developed and maintained full-stack applications with React and Node.js. Worked on database design and API development.",
      technologies: ["JavaScript", "Node.js", "MongoDB", "Express", "React"],
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      period: "2017 - 2019",
      description: "Created responsive web designs and interactive user interfaces. Collaborated with design team to implement pixel-perfect layouts.",
      technologies: ["HTML/CSS", "JavaScript", "Sass", "Vue.js"],
    },
  ];
  
  // Education data
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2015 - 2017",
      details: "Specialized in Web Technologies and Advanced Algorithms. Graduated with honors.",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "National University",
      period: "2011 - 2015",
      details: "Focused on software development principles and programming fundamentals.",
    },
  ];
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-zinc-950 via-[#111111] to-zinc-900" ref={containerRef}>
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-10"
        style={{ y: yBg1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-[#ff6b00] blur-[120px]" />
          <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-[#ff9d00] blur-[100px]" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-[#ff6b00] blur-[90px]" />
        </div>
      </motion.div>
      
      {/* Glowing grid */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      {/* Main content container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-6"
      >
        {/* Header section */}
        <motion.header 
          className="py-24 flex flex-col items-center text-center"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b00] via-[#ff8c00] to-[#ff9d00] mb-6">
              David Resume
            </h1>
            <p className="text-xl text-orange-100/70 max-w-3xl mx-auto leading-relaxed">
              Full Stack Developer & UI/UX Designer crafting exceptional digital experiences with cutting-edge technologies
            </p>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            <button className="px-6 py-2.5 rounded-full border border-[#ff6b00]/30 bg-[#ff6b00]/10 text-orange-300 hover:bg-[#ff6b00]/20 transition-all duration-300">
              Download CV
            </button>
            <button className="px-6 py-2.5 rounded-full border border-[#ff9d00]/30 bg-[#ff9d00]/10 text-orange-300 hover:bg-[#ff9d00]/20 transition-all duration-300">
              Contact Me
            </button>
          </motion.div>
        </motion.header>
        
        {/* Navigation tabs */}
        <div className="sticky top-0 z-30 backdrop-blur-lg bg-zinc-900/70 rounded-xl p-1.5 max-w-xl mx-auto mb-12">
          <div className="flex justify-between items-center rounded-lg p-1 bg-zinc-800/50">
            {["experience", "skills", "education", "projects"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-md capitalize text-sm font-medium transition-all ${
                  activeSection === section 
                    ? "bg-gradient-to-r from-[#ff6b00] to-[#ff9d00] text-white" 
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
        
        {/* Experience Section */}
        <section className={`mb-20 transition-all duration-500 ${activeSection === "experience" ? "opacity-100" : "opacity-0 hidden"}`}>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-10 inline-block relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-[#ff6b00] before:to-[#ff9d00]"
          >
            Professional Experience
          </motion.h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-[#ff6b00] before:to-[#ff9d00]"
              >
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-[#ff6b00] -translate-x-[calc(50%-0.5px)] shadow-[0_0_10px_rgba(255,107,0,0.8)]" />
                
                <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all hover:shadow-lg hover:shadow-[#ff6b00]/10">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-orange-300">{exp.company}</p>
                    </div>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-zinc-700/50 text-orange-300 border border-[#ff6b00]/20">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-zinc-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-zinc-700/70 text-orange-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Skills Section */}
        <section className={`mb-20 transition-all duration-500 ${activeSection === "skills" ? "opacity-100" : "opacity-0 hidden"}`}>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-10 inline-block relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-[#ff6b00] before:to-[#ff9d00]"
          >
            Technical Skills
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative overflow-hidden backdrop-blur-sm bg-zinc-800/30 p-5 rounded-xl border border-zinc-700/50"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-sm font-bold text-orange-300">{skill.level}%</span>
                </div>
                
                <div className="h-2 w-full bg-zinc-700/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ff9d00]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* 3D skill cloud - visually striking element */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 h-80 relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-2xl mx-auto">
                {[
                  "JavaScript", "React", "Node.js", "Next.js", "TypeScript", "Redux", 
                  "CSS3", "HTML5", "TailwindCSS", "Git", "GraphQL", "MongoDB", "AWS",
                  "Docker", "CI/CD", "UX/UI", "Figma", "REST API", "Performance"
                ].map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.1, 0.8],
                      x: Math.sin(i) * 100 * Math.random() * 2,
                      y: Math.cos(i) * 100 * Math.random() * 2,
                      z: Math.sin(i * 2) * 50
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 5 + i, 
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    className="absolute text-xs md:text-base font-medium px-3 py-1.5 rounded-full text-orange-100 
                              bg-gradient-to-br from-[#ff6b00]/20 to-[#ff9d00]/20 backdrop-blur-sm border border-[#ff6b00]/10"
                    style={{
                      left: `${30 + Math.random() * 40}%`,
                      top: `${30 + Math.random() * 40}%`,
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Education Section */}
        <section className={`mb-20 transition-all duration-500 ${activeSection === "education" ? "opacity-100" : "opacity-0 hidden"}`}>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-10 inline-block relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-[#ff6b00] before:to-[#ff9d00]"
          >
            Education & Certifications
          </motion.h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-[#ff6b00] before:to-[#ff9d00]"
              >
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-[#ff6b00] -translate-x-[calc(50%-0.5px)] shadow-[0_0_10px_rgba(255,107,0,0.8)]" />
                
                <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all hover:shadow-lg hover:shadow-[#ff6b00]/10">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-orange-300">{edu.institution}</p>
                    </div>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-zinc-700/50 text-orange-300 border border-[#ff6b00]/20">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-zinc-300">{edu.details}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12"
            >
              <h3 className="text-xl font-bold mb-6 text-white">Professional Certifications</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2022" },
                  { name: "Professional Frontend Developer", issuer: "Meta", year: "2021" },
                  { name: "UI/UX Design Professional", issuer: "Google", year: "2020" },
                  { name: "Full Stack JavaScript", issuer: "MongoDB University", year: "2019" }
                ].map((cert, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#ff6b00]/10 border border-[#ff6b00]/20"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ff6b00]/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">{cert.name}</p>
                      <p className="text-sm text-orange-200">{cert.issuer} • {cert.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section className={`mb-20 transition-all duration-500 ${activeSection === "projects" ? "opacity-100" : "opacity-0 hidden"}`}>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-10 inline-block relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-[#ff6b00] before:to-[#ff9d00]"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.",
                technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
                image: "bg-gradient-to-br from-[#ff6b00] to-[#ff8c00]"
              },
              {
                title: "Analytics Dashboard",
                description: "Real-time data visualization platform with customizable widgets and user permission system.",
                technologies: ["React", "D3.js", "Firebase", "Redux"],
                image: "bg-gradient-to-br from-[#ff8c00] to-[#ff9d00]"
              },
              {
                title: "Social Media App",
                description: "Feature-rich social platform with real-time messaging, content sharing, and personalized feeds.",
                technologies: ["React Native", "GraphQL", "AWS", "Socket.io"],
                image: "bg-gradient-to-br from-[#ff9d00] to-[#ff6b00]"
              },
              {
                title: "Project Management Tool",
                description: "Collaborative workspace for teams with task management, timelines, and resource allocation.",
                technologies: ["Vue.js", "Express", "PostgreSQL", "WebSockets"],
                image: "bg-gradient-to-br from-orange-600 to-[#ff6b00]"
              },
              {
                title: "Learning Management System",
                description: "Educational platform with course creation, student progress tracking, and assessment tools.",
                technologies: ["React", "Django", "Redis", "AWS S3"],
                image: "bg-gradient-to-br from-[#ff6b00] to-orange-600"
              },
              {
                title: "Blockchain Explorer",
                description: "Visualization tool for blockchain data with transaction tracking and wallet analysis.",
                technologies: ["Next.js", "Ethers.js", "Node.js", "TailwindCSS"],
                image: "bg-gradient-to-br from-[#ff8c00] to-[#ff6b00]"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-xl backdrop-blur-sm bg-zinc-800/30 border border-zinc-700/50 group"
              >
                <div className={`h-48 ${project.image} flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  <div className="w-16 h-16 rounded-full backdrop-blur-md bg-white/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-300 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-zinc-700/50 text-orange-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <button className="text-sm text-orange-300 hover:text-orange-100 flex items-center gap-1 transition-colors">
                      Live Demo
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                    <button className="text-sm text-orange-300 hover:text-orange-100 flex items-center gap-1 transition-colors">
                      View Code
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Contact section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative py-20 px-6 sm:px-10 rounded-2xl overflow-hidden backdrop-blur-sm border border-[#ff6b00]/20 
                      bg-gradient-to-b from-zinc-900/60 to-[#ff6b00]/10 my-20"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#ff6b00]/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#ff9d00]/20 blur-[100px] translate-y-1/2 -translate-x-1/2" />
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to work together?</h2>
            <p className="text-orange-200/80 max-w-2xl mx-auto mb-10">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 font-medium rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ff9d00] text-white hover:shadow-xl hover:shadow-[#ff6b00]/20 transition-all"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default ResumePage;
