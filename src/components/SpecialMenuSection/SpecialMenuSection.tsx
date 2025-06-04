import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UtensilsCrossed } from 'lucide-react';

interface SpecialMenuSectionProps {
  className?: string;
}

const SpecialMenuSection: React.FC<SpecialMenuSectionProps> = ({ className }) => {
  const specialOffer = {
    title: "Today's Special Food Menu",
    subtitle: 'This weekend only',
    price: '$59',
    imageSrc: 'https://placehold.co/800x600/101010/FF5C00?text=Special+Menu+Dish',
    description: 'Indulge in our chef\'s special creation, a culinary masterpiece featuring the freshest seasonal ingredients, perfectly prepared to tantalize your taste buds. A limited-time delight not to be missed!',
    ctaText: 'Order Special Now',
  };

  return (
    <section className={cn('py-16 sm:py-20 bg-muted/30', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-card p-8 sm:p-10 md:p-12 rounded-lg shadow-xl">
          <div className="md:w-1/2 w-full relative order-2 md:order-1">
            <Badge 
              variant="destructive" 
              className="absolute top-0 right-0 -mt-4 -mr-4 z-10 text-base sm:text-lg px-4 py-2 bg-primary text-primary-foreground transform rotate-3 shadow-lg"
            >
              ONLY {specialOffer.price}
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
              {specialOffer.title}
            </h2>
            <p className="text-lg sm:text-xl text-secondary font-semibold mb-4 sm:mb-6">
              {specialOffer.subtitle}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              {specialOffer.description}
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 w-full sm:w-auto">
              <UtensilsCrossed className="mr-2 h-5 w-5" />
              {specialOffer.ctaText}
            </Button>
          </div>
          <div className="md:w-1/2 w-full order-1 md:order-2">
            <img 
              src={specialOffer.imageSrc} 
              alt={specialOffer.title} 
              className="w-full h-auto rounded-lg object-cover shadow-lg max-h-[400px] md:max-h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialMenuSection;
