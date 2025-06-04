import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';
import Footer from './Footer';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string; // Optional title for the page, can be used with document.title
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className, title }) => {
  React.useEffect(() => {
    if (title) {
      document.title = `${title} - Wellfood Chicken`;
    }
  }, [title]);

  return (
    <div className={cn('min-h-screen flex flex-col bg-background text-foreground', className)}>
      <Header />
      <main className="flex-1 pt-16"> {/* pt-16 to offset fixed header (h-16) */}
        <div className="max-w-7xl mx-auto px-6 py-8 sm:py-12">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainAppLayout;
