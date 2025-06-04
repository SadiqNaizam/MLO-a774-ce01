import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}

const menuItemsData: MenuItem[] = [
  {
    id: 1,
    name: 'Fried Chicken Classic',
    description: 'Crispy, juicy, and perfectly seasoned.',
    price: '$25',
    imageSrc: 'https://placehold.co/150x150/171717/FFFFFF?text=Fried+Chicken',
  },
  {
    id: 2,
    name: 'Spicy Chicken Leg',
    description: 'A fiery kick for the adventurous palate.',
    price: '$25',
    imageSrc: 'https://placehold.co/150x150/171717/FF5C00?text=Spicy+Leg',
  },
  {
    id: 3,
    name: 'Chicken Steak Sizzler',
    description: 'Grilled chicken steak with savory sauce.',
    price: '$28',
    imageSrc: 'https://placehold.co/150x150/171717/FFCF51?text=Chicken+Steak',
  },
  {
    id: 4,
    name: 'Baked Chicken Herb',
    description: 'Tender baked chicken with aromatic herbs.',
    price: '$26',
    imageSrc: 'https://placehold.co/150x150/171717/FFFFFF?text=Baked+Chicken',
  },
  {
    id: 5,
    name: 'Grill Master Chicken',
    description: 'Smoky grilled chicken, full of flavor.',
    price: '$27',
    imageSrc: 'https://placehold.co/150x150/171717/FF5C00?text=Grilled+Chicken',
  },
  {
    id: 6,
    name: 'Family Chicken Bucket',
    description: 'A hearty bucket for the whole family.',
    price: '$45',
    imageSrc: 'https://placehold.co/150x150/171717/FFCF51?text=Chicken+Bucket',
  },
];

interface FoodMenuGridProps {
  className?: string;
}

const FoodMenuGrid: React.FC<FoodMenuGridProps> = ({ className }) => {
  return (
    <section className={cn('py-16 sm:py-20 bg-background', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-3">Popular Menu</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            We Provide Exclusive Food Based on USA Explore Popular Food. 
            Discover diverse menu features and delectable items crafted by our expert chefs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {menuItemsData.map((item) => (
            <Card key={item.id} className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6 flex items-start space-x-4 sm:space-x-6">
                <img 
                  src={item.imageSrc} 
                  alt={item.name} 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-md object-cover flex-shrink-0"
                />
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">{item.name}</h3>
                    <p className="text-lg sm:text-xl font-bold text-primary whitespace-nowrap">{item.price}</p>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodMenuGrid;
