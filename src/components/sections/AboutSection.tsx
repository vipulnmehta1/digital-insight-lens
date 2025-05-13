
import React from "react";
import SectionHeading from "../SectionHeading";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-advisor/50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <SectionHeading 
            title="About Me" 
            subtitle="Expertise at the intersection of private equity, technology, and business transformation."
            centered={false}
          />
          
          <div className="space-y-4 text-gray-700">
            <p>
              With over a decade of experience in the private equity sector, I specialize in providing comprehensive due diligence services for firms investing in digital transformation initiatives across various industries.
            </p>
            <p>
              My unique background combines technical expertise with business acumen, allowing me to offer insights that bridge the gap between technological capabilities and business value. I've supported numerous successful acquisitions by identifying both opportunities and risks that traditional due diligence might miss.
            </p>
            <p>
              I work closely with investment teams to evaluate the technical foundation, market positioning, and growth potential of target companies, enabling informed investment decisions that maximize returns while minimizing risk.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="default">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#case-studies">View Case Studies</a>
            </Button>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-200/50 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-300/50 rounded-full z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Professional advisor" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
