import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  clickable?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  clickable = false,
  className
}) => {
  const sizeClasses = {
    sm: 'h-12 sm:h-14',
    md: 'h-14 sm:h-16 md:h-20',
    lg: 'h-16 sm:h-20 md:h-24',
  };

  const LogoContent = () => (
    <div className={cn('flex items-center', className)}>
      <img 
        src="/plain-logo.png" 
        alt="SudInd Smart Portal" 
        className={cn(
          'object-contain object-center',
          sizeClasses[size],
          'w-auto max-w-full'
        )}
        style={{ maxHeight: '100%' }}
      />
    </div>
  );

  if (clickable) {
    return (
      <Link to="/" className="hover:opacity-90 transition-opacity inline-flex items-center">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
};

export default Logo;
