import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'; // Added for "Book Now" as per image context

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section 
      className={cn(
        'relative flex flex-col items-center justify-center text-center h-[calc(100vh-4rem)] min-h-[600px] md:min-h-[700px] text-white overflow-hidden',
        className
      )}
    >
      {/* Background Image - Placeholder */} 
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080/000000/FF5C00?text=Chicken+Dish+Background')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */} 
      </div>

      {/* Content */} 
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-sm font-semibold tracking-wider uppercase text-primary sm:text-base md:text-lg">
          SPECIAL FOR YOUR BEST CHOICE
        </p>
        <h1 className="font-extrabold text-white uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[160px] leading-none tracking-tight">
          CHICKEN
        </h1>
        
        <div className="mt-6 md:mt-8 relative max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          {/* Food Image - Placeholder */} 
          <img 
            src="https://placehold.co/600x400/171717/FFFFFF?text=Delicious+Fried+Chicken"
            alt="Fried Chicken"
            className="rounded-lg shadow-2xl"
          />
          <Badge 
            variant="default" 
            className="absolute -bottom-4 -right-4 transform rotate-[-15deg] bg-primary text-primary-foreground text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 font-bold uppercase tracking-wider shadow-lg"
          >
            QUALITY FOOD
          </Badge>
        </div>

        {/* Optional CTA Button, if it belongs here and not header */}
        {/* <Button size="lg" className="mt-10 bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3">
          Order Now
        </Button> */}
      </div>
    </section>
  );
};

export default HeroSection;
