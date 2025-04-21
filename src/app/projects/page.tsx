"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      id: "1",
      title: "DaveFlix",
      description:
        "A Netflix clone that allows users to browse movies and TV shows, view details, and add to favorites. Built with Next.js and Tailwind CSS.",
      image: "/assets/daveflix.png",
      url: "https://daveflix.vercel.app",
      categories: ["Web Development", "Frontend"],
      technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
      featured: true,
    },
    {
      id: 2,
      title: "Buzz Stream",
      description: "Real-time messaging application with user authentication, message encryption, and group chat functionality.",
      image: "/assets/buzzstream.png",
      url: "https://buzz-stream.vercel.app",
      categories: ["Web App", "Full Stack", "UI/UX"],
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      featured: true,
    },
    {
      id: 3,
      title: "SocialGram",
      description: "Instagram clone featuring image sharing, user profiles, comments, likes, and following functionality.",
      image: "/assets/socialgram.png",
      url: "https://socialgram-six.vercel.app",
      categories: ["Web App", "Full Stack", "Social Media"],
      technologies: ["React", "Firebase", "TailwindCSS", "Context API", "Storage"],
    },
    {
      id: 4,
      title: "Shop Best",
      description: "Comprehensive e-commerce platform with product catalog, shopping cart, payment integration, and order management.",
      image: "/assets/socialgram.png", // Temporarily using an existing image as fallback
      url: "https://shop-best.vercel.app",
      categories: ["E-commerce", "Full Stack", "UI/UX"],
      technologies: ["Next.js", "MongoDB", "Stripe", "Redux", "Authentication"],
      featured: true,
    },
    {
      id: 5,
      title: "Pitch Hub",
      description: "Platform for startups to create and share pitch decks with investors, featuring analytics and feedback tools.",
      image: "/assets/pitchhub.png",
      url: "https://pitch-hub2-0.vercel.app",
      categories: ["Web App", "Business", "UI/UX"],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    },
  ];

  // Get all unique categories
  const categories = ["All", ...new Set(projects.flatMap(project => project.categories))];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <div className="bg-[#111111] min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#ff6b00] blur-[150px] transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#ff9d00] blur-[150px] transform -translate-x-1/2 translate-y-1/2" />
      </div>
      
      {/* Grid background */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b00] via-[#ff8c00] to-[#ff9d00]"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-300 text-lg"
          >
            Explore my portfolio of web applications, ranging from streaming platforms to e-commerce solutions, 
            showcasing my expertise in frontend and full-stack development.
          </motion.p>
        </div>
        
        {/* Filter categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <button 
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-gradient-to-r from-[#ff6b00] to-[#ff9d00] text-white"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Featured projects (larger size) */}
        <div className="mb-16">
          {activeCategory === "All" && (
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-bold mb-8 inline-block relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#ff6b00] before:to-[#ff9d00]"
            >
              Featured Projects
            </motion.h2>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects
              .filter(project => activeCategory === "All" ? project.featured : true)
              .slice(0, activeCategory === "All" ? 2 : Infinity)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-[#ff6b00]/50 transition-all duration-500 h-full flex flex-col">
                    {/* Project image with overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b00]/20 to-zinc-900/80 mix-blend-overlay z-10" />
                      
                      {/* Image or fallback gradient */}
                      <div className="absolute inset-0 bg-zinc-900">
                        {/* Gradient fallback that always shows */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/30 to-[#ff9d00]/20" />
                        
                        {/* Try to load image with error handling */}
                        <div className="relative h-full w-full">
                          <Image 
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover opacity-80"
                            priority={index === 0}
                            onError={(e) => {
                              console.error(`Failed to load image: ${project.image}`);
                              // When image fails to load, the fallback gradient will still show
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Live site link */}
                      <div className="absolute top-4 right-4 z-20">
                        <Link href={project.url} target="_blank" rel="noopener noreferrer"
                          className="px-3 py-1 bg-[#ff6b00]/80 hover:bg-[#ff6b00] text-white text-xs font-medium rounded-full flex items-center space-x-1 transition-all"
                        >
                          <span>Live Site</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Project details */}
                    <div className="flex-1 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff6b00] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.categories.map((category, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-400">
                            {category}
                          </span>
                        ))}
                      </div>
                      
                      <h4 className="text-sm font-semibold text-zinc-300 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-[#ff6b00]/10 text-[#ff9d00] border border-[#ff6b00]/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="px-6 pb-6 pt-2 flex justify-between items-center">
                      <span className="text-xs text-zinc-500">Project #{project.id}</span>
                      <Link href={project.url} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-[#ff6b00] hover:text-[#ff9d00] flex items-center space-x-1 transition-colors"
                      >
                        <span>View Project</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
        
        {/* All projects grid */}
        {activeCategory === "All" && (
          <>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl font-bold mb-8 inline-block relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#ff6b00] before:to-[#ff9d00]"
            >
              All Projects
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(project => !project.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.7 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-[#ff6b00]/50 transition-all duration-500 h-full flex flex-col">
                      {/* Smaller project card with similar structure */}
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b00]/20 to-zinc-900/80 mix-blend-overlay z-10" />
                        
                        {/* Image or fallback gradient */}
                        <div className="absolute inset-0 bg-zinc-900">
                          {/* Gradient fallback */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/30 to-[#ff9d00]/20" />
                          
                          {/* Try to load image with error handling */}
                          <div className="relative h-full w-full">
                            <Image 
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover opacity-80"
                              onError={(e) => {
                                console.error(`Failed to load image: ${project.image}`);
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          </div>
                        </div>
                        
                        <div className="absolute top-3 right-3 z-20">
                          <Link href={project.url} target="_blank" rel="noopener noreferrer"
                            className="px-2 py-1 bg-[#ff6b00]/80 hover:bg-[#ff6b00] text-white text-xs font-medium rounded-full flex items-center space-x-1 transition-all"
                          >
                            <span>Live</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                      
                      <div className="flex-1 p-4">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff6b00] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 text-sm mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="text-xs px-2 py-0.5 rounded-full bg-[#ff6b00]/10 text-[#ff9d00] border border-[#ff6b00]/20">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="px-4 pb-4 pt-0 flex justify-end">
                        <Link href={project.url} target="_blank" rel="noopener noreferrer"
                          className="text-xs text-[#ff6b00] hover:text-[#ff9d00] flex items-center space-x-1 transition-colors"
                        >
                          <span>View Project</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </>
        )}
        
        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-24 text-center"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-b from-zinc-900/60 to-[#ff6b00]/5 p-8 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your project?</h2>
            <p className="text-zinc-400 mb-6">Let's collaborate to bring your ideas to life with cutting-edge web technology.</p>
            <Link href="/contact" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#ff6b00] to-[#ff9d00] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#ff6b00]/20 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
