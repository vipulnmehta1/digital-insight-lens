
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-advisor-light via-white to-advisor opacity-70 z-0"></div>
      
      {/* Abstract Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <pattern id="circles" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Expert Due Diligence for <span className="text-brand-600">Digital Transformation</span> Investments
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 opacity-0 animate-fade-delayed">
            Helping private equity firms make informed investment decisions through comprehensive technical and market analysis of digital transformation opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-delayed-lg">
            <Button asChild size="lg" className="text-base">
              <a href="#services">Explore Services</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
