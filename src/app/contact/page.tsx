"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Handle cursor tracking for the interactive gradient
  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormState('submitting');
    
    try {
      // Configure EmailJS with your service ID, template ID, and public key
      // You'll need to sign up at emailjs.com and create these
      await emailjs.sendForm(
        'service_z8h3fvf', // Replace with your EmailJS service ID
        'template_64evj69', // Replace with your EmailJS template ID
        formRef.current!,
        'ms-zUsw4YPlhKkTxc' // Replace with your EmailJS public key
      );
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setFormState('success');
      
      // Reset form state after 5 seconds
      setTimeout(() => {
        setFormState('idle');
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormState('error');
      
      // Reset error state after 5 seconds
      setTimeout(() => {
        setFormState('idle');
      }, 5000);
    }
  };

  return (
    <div className="bg-[#111111] min-h-screen relative overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Interactive background gradient that follows cursor */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-30 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 400px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255, 107, 0, 0.15), transparent)`
        }}
      />
      
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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-300 text-lg"
          >
            Have a project in mind or just want to say hello? Fill out the form below,
            and I'll get back to you as soon as possible.
          </motion.p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-zinc-800 p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 inline-block relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#ff6b00] before:to-[#ff9d00]">
                  Contact Information
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#ff6b00]/10 flex items-center justify-center flex-shrink-0 border border-[#ff6b00]/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff6b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Email</h3>
                      <p className="text-zinc-400 mb-1">For project inquiries:</p>
                      <a href="mailto:davidamireini@gamil.com" className="text-[#ff6b00] hover:text-[#ff9d00] transition-colors">
                        davidamireini@gamil.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#ff6b00]/10 flex items-center justify-center flex-shrink-0 border border-[#ff6b00]/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff6b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Location</h3>
                      <p className="text-zinc-400">
                        Based in New York, USA<br />
                        Available worldwide
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#ff6b00]/10 flex items-center justify-center flex-shrink-0 border border-[#ff6b00]/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff6b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Working Hours</h3>
                      <p className="text-zinc-400">
                        Monday - Friday<br />
                        9:00 AM - 6:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-zinc-800">
                  <h3 className="text-white font-medium mb-4">Connect with me</h3>
                  <div className="flex space-x-3">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#191919] hover:bg-[#222222] transition-colors border border-[#333333] text-zinc-400 hover:text-[#ff6b00]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#191919] hover:bg-[#222222] transition-colors border border-[#333333] text-zinc-400 hover:text-[#ff6b00]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#191919] hover:bg-[#222222] transition-colors border border-[#333333] text-zinc-400 hover:text-[#ff6b00]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#191919] hover:bg-[#222222] transition-colors border border-[#333333] text-zinc-400 hover:text-[#ff6b00]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-zinc-800 p-8">
                <h2 className="text-2xl font-bold mb-6 inline-block relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#ff6b00] before:to-[#ff9d00]">
                  Send Me a Message
                </h2>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-zinc-300 text-sm font-medium mb-2">
                        Your Name <span className="text-[#ff6b00]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full bg-zinc-800/50 border ${errors.name ? 'border-red-500' : 'border-zinc-700'} rounded-lg p-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/50 focus:border-[#ff6b00] transition-all`}
                          placeholder="John Doe"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-zinc-300 text-sm font-medium mb-2">
                        Your Email <span className="text-[#ff6b00]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-zinc-800/50 border ${errors.email ? 'border-red-500' : 'border-zinc-700'} rounded-lg p-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/50 focus:border-[#ff6b00] transition-all`}
                          placeholder="example@email.com"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-zinc-300 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/50 focus:border-[#ff6b00] transition-all"
                        placeholder="Project Inquiry"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-zinc-300 text-sm font-medium mb-2">
                      Message <span className="text-[#ff6b00]">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full bg-zinc-800/50 border ${errors.message ? 'border-red-500' : 'border-zinc-700'} rounded-lg p-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/50 focus:border-[#ff6b00] transition-all`}
                        placeholder="Tell me about your project or inquiry..."
                      ></textarea>
                      <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                    </div>
                    {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message}</p>}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-md border border-[#ff6b00] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#ff6b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-zinc-400 text-sm">
                      Your data is securely processed and never shared with third parties.
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className={`relative w-full py-4 px-6 rounded-lg font-medium text-white ${
                      formState === 'submitting' 
                        ? 'bg-zinc-700' 
                        : 'bg-gradient-to-r from-[#ff6b00] to-[#ff9d00] hover:shadow-lg hover:shadow-[#ff6b00]/20'
                    } transition-all duration-300 overflow-hidden`}
                  >
                    <span className={`relative z-10 flex items-center justify-center ${formState === 'submitting' ? 'opacity-0' : 'opacity-100'}`}>
                      {formState === 'submitting' ? '' : 'Send Message'}
                    </span>
                    
                    {formState === 'submitting' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>
                    )}
                  </button>
                </form>
                
                {/* Feedback Messages */}
                <div className="mt-6">
                  {formState === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-green-900/20 border border-green-900 text-green-400"
                    >
                      <div className="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Your message has been sent successfully! I'll get back to you soon.</span>
                      </div>
                    </motion.div>
                  )}
                  
                  {formState === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-red-900/20 border border-red-900 text-red-400"
                    >
                      <div className="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>There was an error sending your message. Please try again later.</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-zinc-400 mt-3">Quick answers to questions I often receive</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/30 backdrop-blur-sm rounded-xl border border-zinc-800 p-6 hover:border-[#ff6b00]/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">What services do you offer?</h3>
                <p className="text-zinc-400">I specialize in web development, UI/UX design, and full-stack development with expertise in React, Next.js, and modern front-end technologies.</p>
              </div>
              
              <div className="bg-zinc-900/30 backdrop-blur-sm rounded-xl border border-zinc-800 p-6 hover:border-[#ff6b00]/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">How long does a typical project take?</h3>
                <p className="text-zinc-400">Project timelines vary based on complexity, but most websites take 2-6 weeks from concept to launch. I'll provide a detailed timeline during our initial consultation.</p>
              </div>
              
              <div className="bg-zinc-900/30 backdrop-blur-sm rounded-xl border border-zinc-800 p-6 hover:border-[#ff6b00]/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">What is your pricing structure?</h3>
                <p className="text-zinc-400">I offer both project-based and hourly rates depending on your needs. Each project is unique, so I provide custom quotes after understanding your requirements.</p>
              </div>
              
              <div className="bg-zinc-900/30 backdrop-blur-sm rounded-xl border border-zinc-800 p-6 hover:border-[#ff6b00]/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">Do you offer maintenance after project completion?</h3>
                <p className="text-zinc-400">Yes, I offer ongoing maintenance packages to keep your site secure, up-to-date, and performing optimally. We can discuss these options during project planning.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
