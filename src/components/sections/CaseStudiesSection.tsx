
import React from "react";
import SectionHeading from "../SectionHeading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "SaaS Platform Acquisition",
    description: "Conducted technical due diligence for a $50M acquisition of a cloud-based project management platform, identifying scalability challenges and security vulnerabilities before acquisition.",
    outcome: "Negotiated $3.5M reduction in purchase price and developed post-acquisition technical roadmap.",
    categories: ["Technical Due Diligence", "SaaS"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "E-commerce Digital Transformation",
    description: "Assessed digital transformation strategy of a retail acquisition target with $120M annual revenue, focusing on omnichannel capabilities and technology integration potential.",
    outcome: "Identified $8M in potential cost savings through platform consolidation and developed 24-month integration plan.",
    categories: ["Digital Strategy", "E-commerce"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "FinTech Market Analysis",
    description: "Conducted comprehensive market analysis for PE firm considering investment in payment processing technology, including competitive landscape and regulatory challenges.",
    outcome: "Provided strategic recommendations that informed a successful $85M investment with subsequent 3x return.",
    categories: ["Market Analysis", "FinTech"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="section-container bg-gradient-to-b from-white to-advisor/30">
      <SectionHeading 
        title="Case Studies" 
        subtitle="Examples of how my expertise has helped private equity firms make informed investment decisions and maximize returns."
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{study.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {study.categories.map((category, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-brand-100 text-brand-800 hover:bg-brand-200">{category}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700 text-base">
                {study.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <p className="font-medium text-sm">
                <span className="text-brand-600">Outcome:</span> {study.outcome}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
