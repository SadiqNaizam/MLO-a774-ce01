import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Promotion {
  id: number;
  title: string;
  description?: string;
  imageSrc: string;
  ctaText: string;
  bgColorClass?: string;
  textColorClass?: string;
}

const promotionsData: Promotion[] = [
  {
    id: 1,
    title: 'SPECIALTY PIZZA',
    description: 'Authentic taste, fresh ingredients.',
    imageSrc: 'https://placehold.co/400x300/101010/FFCF51?text=Specialty+Pizza',
    ctaText: 'Shop Now',
    bgColorClass: 'bg-secondary/10',
  },
  {
    id: 2,
    title: 'BUY 1 GET 1 FREE',
    description: 'Limited time offer on select items.',
    imageSrc: 'https://placehold.co/400x300/101010/FF5C00?text=Buy+1+Get+1',
    ctaText: 'Shop Now',
    bgColorClass: 'bg-primary/10',
  },
  {
    id: 3,
    title: 'DELICIOUS FAST FOODS',
    description: 'Quick, tasty, and satisfying meals.',
    imageSrc: 'https://placehold.co/400x300/101010/FFFFFF?text=Fast+Foods',
    ctaText: 'Shop Now',
    bgColorClass: 'bg-muted/50',
  },
];

interface PromotionsGridProps {
  className?: string;
}

const PromotionsGrid: React.FC<PromotionsGridProps> = ({ className }) => {
  return (
    <section className={cn('py-16 sm:py-20 bg-background', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-foreground">
          Our Special Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {promotionsData.map((promo) => (
            <Card key={promo.id} className={cn('flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300', promo.bgColorClass || 'bg-card')}>
              <div className="aspect-video overflow-hidden">
                <img src={promo.imageSrc} alt={promo.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className={cn('text-xl sm:text-2xl font-semibold', promo.textColorClass || 'text-card-foreground')}>{promo.title}</CardTitle>
              </CardHeader>
              {promo.description && (
                <CardContent className="p-4 sm:p-6 pt-0 flex-grow">
                  <p className={cn('text-sm sm:text-base', promo.textColorClass ? `${promo.textColorClass} opacity-80` : 'text-muted-foreground')}>{promo.description}</p>
                </CardContent>
              )}
              <CardFooter className="p-4 sm:p-6 pt-0 mt-auto">
                <Button variant="outline" className={cn('w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground', promo.id === 2 && 'border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground')}>
                  {promo.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsGrid;
