
import React from "react";
import SectionHeading from "../SectionHeading";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const expertiseAreas = [
  { name: "Technical Due Diligence", value: 95 },
  { name: "Digital Transformation", value: 90 },
  { name: "Private Equity", value: 85 },
  { name: "Market Analysis", value: 88 },
  { name: "Technology Strategy", value: 92 },
  { name: "Risk Assessment", value: 86 }
];

const industries = [
  { 
    title: "SaaS & Enterprise Software", 
    description: "Cloud platforms, enterprise applications, productivity tools, and specialized business software solutions."
  },
  { 
    title: "E-commerce & Retail Tech", 
    description: "Online marketplaces, omnichannel retail platforms, and consumer-facing digital solutions."
  },
  { 
    title: "FinTech", 
    description: "Payment processors, banking technology, wealth management platforms, and financial services software."
  },
  { 
    title: "Healthcare IT", 
    description: "Electronic health records, telemedicine platforms, healthcare analytics, and medical practice management software."
  }
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="section-container bg-white">
      <SectionHeading 
        title="Areas of Expertise" 
        subtitle="Specialized knowledge and experience in key areas relevant to digital transformation investments."
      />
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6">Core Competencies</h3>
          <div className="space-y-6">
            {expertiseAreas.map((area, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{area.name}</span>
                  <span className="text-sm text-muted-foreground">{area.value}%</span>
                </div>
                <Progress value={area.value} className="h-2" />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6">Industry Focus</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-advisor/30 border-0">
                <CardContent className="p-5">
                  <CardTitle className="text-lg mb-2">{industry.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
