import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  clickable?: boolean;
  className?: string;
  textClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  clickable = false,
  className,
  textClassName 
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const LogoContent = () => (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="gradient-primary rounded-lg p-1.5">
        <Globe className={cn('text-primary-foreground', sizeClasses[size])} />
      </div>
      <div className="flex flex-col leading-tight">
        <span className={cn('font-serif font-bold text-foreground', textSizeClasses[size], textClassName)}>
          SudInd
        </span>
        <span className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase">
          Smart Portal
        </span>
      </div>
    </div>
  );

  if (clickable) {
    return (
      <Link to="/" className="hover:opacity-90 transition-opacity">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
};

export default Logo;
