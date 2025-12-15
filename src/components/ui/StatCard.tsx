import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  icon: LucideIcon;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon: Icon, className }) => {
  return (
    <div className={cn('text-center', className)}>
      <div className="mb-3 flex justify-center">
        <div className="rounded-full bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="text-3xl font-bold text-foreground lg:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export default StatCard;
