
import React from "react";
import SectionHeading from "../SectionHeading";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Technical Due Diligence",
    description: "Comprehensive assessment of technical infrastructure, architecture, and development practices to evaluate scalability, security, and technical debt.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Digital Transformation Strategy",
    description: "Evaluation of digital transformation initiatives, including roadmap assessment, implementation strategy, and alignment with business objectives.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    )
  },
  {
    title: "Market & Competitive Analysis",
    description: "In-depth analysis of market trends, competitive landscape, and growth potential to identify risks and opportunities in the target's sector.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    title: "Technology Risk Assessment",
    description: "Identification and evaluation of technology risks, including cybersecurity vulnerabilities, compliance issues, and operational challenges.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-container bg-white">
      <SectionHeading 
        title="Services" 
        subtitle="Comprehensive due diligence and advisory services specifically tailored for private equity investments in the digital transformation space."
      />
      
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="text-center md:text-left md:flex items-start gap-4">
                <div className="mb-4 md:mb-0">{service.icon}</div>
                <div>
                  <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
