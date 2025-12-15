import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  href?: string;
  className?: string;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  href,
  className,
  featured = false,
}) => {
  return (
    <Card 
      className={cn(
        'group hover-lift border-2 transition-all duration-300',
        featured ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-transparent' : 'hover:border-primary/30',
        className
      )}
    >
      <CardContent className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className={cn(
            'flex h-14 w-14 items-center justify-center rounded-xl transition-colors',
            featured ? 'gradient-primary' : 'bg-primary/10 group-hover:bg-primary/20'
          )}>
            <Icon className={cn('h-7 w-7', featured ? 'text-primary-foreground' : 'text-primary')} />
          </div>
          {featured && (
            <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary-foreground bg-secondary">
              Popular
            </span>
          )}
        </div>
        
        <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {features && features.length > 0 && (
          <ul className="mb-4 space-y-2">
            {features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        {href && (
          <Button
            variant="outline"
            size="sm"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
            asChild
          >
            <Link to={href}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
