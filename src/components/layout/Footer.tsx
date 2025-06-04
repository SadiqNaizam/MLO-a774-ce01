import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('bg-background text-muted-foreground border-t border-border', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-sm">
          &copy; {currentYear} Wellfood Chicken. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Website by Your Creative Team
        </p>
        {/* Placeholder for social media icons or other links if needed */}
        {/* <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-primary"><Facebook className="h-5 w-5" /></a>
          <a href="#" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
          <a href="#" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
