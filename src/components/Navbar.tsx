"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const NavLink = ({ href, label, isActive, onClick = () => {} }: { href: string, label: string, isActive: boolean, onClick?: () => void }) => {
  return (
    <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Link 
        href={href} 
        className={`text-foreground hover:text-[#ff6b00] font-medium transition-colors py-1 px-1 relative ${
          isActive ? 'text-[#ff6b00]' : ''
        }`}
        onClick={onClick}
      >
        {label}
        {isActive && (
          <motion.div 
            className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#ff6b00]"
            layoutId="activeNavIndicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 380, 
              damping: 30 
            }}
          />
        )}
      </Link>
    </motion.div>
  );
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-3xl font-extrabold text-[#ff6b00]">
              David.
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              href="/" 
              label="Home" 
              isActive={pathname === '/'} 
            />
            
            <NavLink 
              href="/services" 
              label="Services" 
              isActive={pathname === '/services'} 
            />
            
            <NavLink 
              href="/resume" 
              label="Resume" 
              isActive={pathname === '/resume'} 
            />
            
            <NavLink 
              href="/projects" 
              label="Projects" 
              isActive={pathname === '/projects'} 
            />
            
            <NavLink 
              href="/contact" 
              label="Contact" 
              isActive={pathname === '/contact'} 
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/contact" className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff6b00] to-[#ff9d00] rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-6 py-2 bg-background text-foreground rounded-full border border-[#ff6b00] group-hover:text-[#ff6b00] transition-all"
                >
                  Hire Me
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/contact" className="relative group mr-2">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff6b00] to-[#ff9d00] rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-1.5 bg-background text-foreground rounded-full border border-[#ff6b00] group-hover:text-[#ff6b00] text-sm transition-all"
                >
                  Hire Me
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-foreground p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-border/30 mt-4"
            >
              <div className="pt-4 pb-2 space-y-3">
                <NavLink 
                  href="/" 
                  label="Home" 
                  isActive={pathname === '/'} 
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                <NavLink 
                  href="/services" 
                  label="Services" 
                  isActive={pathname === '/services'} 
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                <NavLink 
                  href="/resume" 
                  label="Resume" 
                  isActive={pathname === '/resume'} 
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                <NavLink 
                  href="/projects" 
                  label="Projects" 
                  isActive={pathname === '/projects'} 
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                <NavLink 
                  href="/contact" 
                  label="Contact" 
                  isActive={pathname === '/contact'} 
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
