import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Logo from '@/components/ui/Logo';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { languageMode, toggleLanguage } = useLanguage();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Medical Services', href: '/medical' },
    { name: 'Academic Services', href: '/academic' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:backdrop-blur"
      style={{ 
        backgroundColor: `hsl(var(--navbar-background) / var(--navbar-background-opacity))` 
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Logo size="md" clickable={true} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors rounded-md',
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Language Toggle */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button onClick={toggleLanguage} variant="outline" className="gap-2">
              <Languages className="h-4 w-4" />
              {languageMode === 'bilingual' ? 'English' : 'عربي'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden border-t"
          style={{ 
            backgroundColor: `hsl(var(--navbar-background))` 
          }}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block px-4 py-3 rounded-md text-base font-medium transition-colors',
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t mt-4">
              <Button className="w-full" onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }} variant="outline">
                <Languages className="mr-2 h-4 w-4" />
                {languageMode === 'bilingual' ? 'English' : 'عربي'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
