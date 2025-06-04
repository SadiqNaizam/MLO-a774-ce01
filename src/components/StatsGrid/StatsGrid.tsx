import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Users, ChefHat, Heart } from 'lucide-react';

interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: React.ElementType;
}

const statsData: StatItem[] = [
  {
    id: 1,
    value: '8k+',
    label: 'Happy Customers',
    icon: Users,
  },
  {
    id: 2,
    value: '35+',
    label: 'Passionate Chefs',
    icon: ChefHat,
  },
  {
    id: 3,
    value: '85+',
    label: 'Favourite Dishes',
    icon: Heart,
  },
];

interface StatsGridProps {
  className?: string;
}

const StatsGrid: React.FC<StatsGridProps> = ({ className }) => {
  return (
    <section className={cn('py-16 sm:py-20 bg-background', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The prompt implies StatsGrid is just the grid itself. 
            The "Learn About Wellfood" section from OCR would be a separate component or wrapper. */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {statsData.map((stat) => (
            <Card key={stat.id} className="bg-card text-card-foreground shadow-lg p-6 text-center">
              <CardContent className="p-0 flex flex-col items-center">
                <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
                <p className="text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
