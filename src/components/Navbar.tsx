
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-display font-semibold text-brand-800">
          <span className="text-brand-600">DD</span>Advisor
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium hover:text-brand-600 transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium hover:text-brand-600 transition-colors">About</a>
          <a href="#expertise" className="text-sm font-medium hover:text-brand-600 transition-colors">Expertise</a>
          <a href="#case-studies" className="text-sm font-medium hover:text-brand-600 transition-colors">Case Studies</a>
          <Button asChild size="sm" variant="default">
            <a href="#contact">Contact Me</a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isMobileMenuOpen ? "hidden" : "block"}>
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isMobileMenuOpen ? "block" : "hidden"}>
            <line x1="18" x2="6" y1="6" y2="18"></line>
            <line x1="6" x2="18" y1="6" y2="18"></line>
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[300px] border-b" : "max-h-0"}`}>
        <div className="container py-4 flex flex-col space-y-3">
          <a href="#services" className="px-4 py-2 text-sm font-medium hover:text-brand-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#about" className="px-4 py-2 text-sm font-medium hover:text-brand-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#expertise" className="px-4 py-2 text-sm font-medium hover:text-brand-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Expertise</a>
          <a href="#case-studies" className="px-4 py-2 text-sm font-medium hover:text-brand-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</a>
          <Button asChild size="sm" variant="default" className="mx-4">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Me</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
