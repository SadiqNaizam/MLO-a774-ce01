import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { PhoneCall, Search, ShoppingCart, Menu, ChevronDown } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href?: string;
  isDropdown?: boolean;
  subItems?: NavSubItem[];
}

interface NavSubItem {
  id: string;
  title: string;
  href: string;
  description: string;
}

const navigationItems: NavItem[] = [
  { id: 'home', label: "HOME", href: "/" },
  {
    id: 'menu',
    label: "MENU",
    isDropdown: true,
    subItems: [
      { id: 'menu-all', title: "All Day Menu", href: "/menu/all-day", description: "Explore our full range of delicious dishes." },
      { id: 'menu-chicken', title: "Chicken Specials", href: "/menu/chicken", description: "Signature chicken preparations by our chefs." },
      { id: 'menu-pizza', title: "Pizzas", href: "/menu/pizza", description: "Freshly baked pizzas with various toppings." },
      { id: 'menu-drinks', title: "Drinks & Beverages", href: "/menu/drinks", description: "Refreshing beverages to accompany your meal." },
    ],
  },
  {
    id: 'pages',
    label: "PAGES",
    isDropdown: true,
    subItems: [
      { id: 'pages-about', title: "About Us", href: "/about", description: "Learn more about Wellfood and our story." },
      { id: 'pages-gallery', title: "Gallery", href: "/gallery", description: "See photos of our delicious food and restaurant." },
      { id: 'pages-faq', title: "FAQ", href: "/faq", description: "Frequently asked questions about our services." },
    ],
  },
  { id: 'blog', label: "BLOG", href: "/blog" },
  { 
    id: 'shop',
    label: "SHOP", 
    isDropdown: true,
    subItems: [
      { id: 'shop-all', title: "All Products", href: "/shop", description: "Browse all available items for online order." },
      { id: 'shop-merch', title: "Merchandise", href: "/shop/merch", description: "Get Wellfood branded merchandise." },
    ]
  },
  { id: 'contact', label: "CONTACTS", href: "/contact" },
];

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-16 bg-background text-foreground border-b border-border',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 shrink-0">
          <div className="w-4 h-4 bg-primary rounded-sm"></div>
          <span className="font-bold text-2xl text-foreground">WELLFOOD</span>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex mx-auto">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                {item.isDropdown && item.subItems ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 focus:bg-accent/50 data-[state=open]:bg-accent/50">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.subItems.map((subItem) => (
                          <ListItem key={subItem.id} href={subItem.href} title={subItem.title}>
                            {subItem.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink href={item.href} className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/50 focus:bg-accent/50")}>
                    {item.label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Actions - Desktop */}
        <div className="hidden lg:flex items-center space-x-4 shrink-0">
          <a href="tel:+88012345688" className="flex items-center text-sm hover:text-primary transition-colors">
            <PhoneCall className="mr-2 h-4 w-4 text-primary" />
            <span className="font-medium">+880 123 456 88</span>
          </a>
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Shopping Cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button & Actions */}
        <div className="lg:hidden flex items-center space-x-2">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-3 py-1.5 text-sm sm:px-4">
            Book Now
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Dropdown/Sheet) - Placeholder for future implementation */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-t border-border shadow-lg lg:hidden">
          <nav className="flex flex-col space-y-1 px-4 py-2">
            {navigationItems.map((item) => (
              item.isDropdown && item.subItems ? (
                <div key={item.id} className="py-1">
                  <button 
                    className="flex items-center justify-between w-full px-3 py-2 text-left font-medium rounded-md hover:bg-accent/50 focus:bg-accent/50"
                    onClick={(e) => {
                      // Basic toggle for sub-items if needed, or just navigate to a main page for the category
                      const target = e.currentTarget.nextElementSibling as HTMLElement | null;
                      if (target) target.classList.toggle('hidden');
                    }}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  </button>
                  <ul className="pl-4 mt-1 space-y-1 hidden">
                    {item.subItems.map(subItem => (
                       <li key={subItem.id}>
                         <a href={subItem.href} className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground">
                           {subItem.title}
                         </a>
                       </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent/50 focus:bg-accent/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
             <div className="border-t border-border mt-2 pt-2 space-y-2">
                <a href="tel:+88012345688" className="flex items-center px-3 py-2 text-sm hover:text-primary transition-colors">
                    <PhoneCall className="mr-2 h-4 w-4 text-primary" />
                    <span className="font-medium">+880 123 456 88</span>
                </a>
                <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                    <Search className="mr-2 h-4 w-4" /> Search
                </Button>
                <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Cart
                </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none text-foreground">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
