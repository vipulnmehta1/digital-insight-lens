
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true, 
  className 
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-12", 
      centered && "text-center",
      className
    )}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold mb-4",
        centered && "mx-auto"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg text-muted-foreground max-w-2xl",
          centered && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
