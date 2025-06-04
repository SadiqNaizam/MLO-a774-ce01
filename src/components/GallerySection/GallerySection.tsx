import React from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImagesData: GalleryImage[] = [
  { id: 1, src: 'https://placehold.co/600x400/101010/FF5C00?text=Food+Gallery+1', alt: 'Delicious food 1' },
  { id: 2, src: 'https://placehold.co/600x400/101010/FFCF51?text=Food+Gallery+2', alt: 'Delicious food 2' },
  { id: 3, src: 'https://placehold.co/600x400/101010/FFFFFF?text=Food+Gallery+3', alt: 'Delicious food 3' },
  { id: 4, src: 'https://placehold.co/600x400/101010/FF5C00?text=Food+Gallery+4', alt: 'Delicious food 4' },
  { id: 5, src: 'https://placehold.co/600x400/101010/FFCF51?text=Food+Gallery+5', alt: 'Delicious food 5' },
  { id: 6, src: 'https://placehold.co/600x400/101010/FFFFFF?text=Food+Gallery+6', alt: 'Delicious food 6' },
];

interface GallerySectionProps {
  className?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ className }) => {
  return (
    <section className={cn('py-16 sm:py-20 bg-background', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-foreground">
          Our Culinary Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryImagesData.map((image) => (
            <Card key={image.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <AspectRatio ratio={16 / 9}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </AspectRatio>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
