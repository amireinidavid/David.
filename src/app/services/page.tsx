"use client";

import { motion } from "framer-motion";

const ServiceCard = ({ number, title, description }: { number: string, title: string, description: string }) => {
  return (
    <motion.div 
      className="p-8 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="text-6xl font-bold text-orange-500 opacity-50 mb-4">{number}</div>
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 mb-6 max-w-lg">{description}</p>
      <div className="h-px w-full bg-gray-800 mb-8"></div>
      
      <div className="absolute right-8 top-8">
        <motion.button 
          className="w-16 h-16 rounded-full bg-white hover:bg-orange-500 hover:text-white flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      number: "01",
      title: "Frontend Development",
      description: "Creating responsive, interactive, and optimized user interfaces using the latest technologies like React, Next.js, and Tailwind CSS."
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Crafting beautiful and intuitive user experiences with a focus on usability, accessibility, and modern design principles."
    },
    {
      number: "03",
      title: "Backend Development",
      description: "Building robust, scalable server-side applications and APIs using Node.js, Express, MongoDB, and other modern technologies."
    },
    {
      number: "04",
      title: "Web3 Development",
      description: "Developing decentralized applications (dApps), smart contracts, and blockchain integrations using Ethereum, Solidity, and related technologies."
    },
    {
      number: "05",
      title: "Data Analytics",
      description: "Transforming raw data into valuable insights through data visualization, analysis, and reporting using modern tools and frameworks."
    },
    {
      number: "06",
      title: "Full Stack Development",
      description: "Handling both client and server sides to build complete, end-to-end web applications with seamless functionality."
    },
    {
      number: "07",
      title: "Graphics Design",
      description: "Creating stunning visual assets, logos, illustrations, and marketing materials that align with your brand identity and goals."
    },
  ];

  return (
    <div className=" min-h-screen">
      <motion.div 
        className="container mx-auto pt-16 pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}  
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">The Services I Offer</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your needs, helping you build and scale your digital presence with cutting-edge technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
