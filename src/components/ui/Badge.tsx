import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  color?: 'green' | 'red' | 'blue' | 'yellow' | 'orange' | 'purple' | 'accent';
  variant?: 'solid' | 'subtle';
};

const colorStyles = {
  solid: {
    green: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    red: 'bg-red-50 text-red-800 border-red-200',
    blue: 'bg-sky-50 text-sky-900 border-sky-200',
    yellow: 'bg-amber-50 text-amber-900 border-amber-200',
    orange: 'bg-orange-50 text-orange-900 border-orange-200',
    purple: 'bg-violet-50 text-violet-900 border-violet-200',
    accent: 'bg-accent-muted text-accent border-accent/20',
  },
  subtle: {
    green: 'bg-white text-emerald-800 border-emerald-200',
    red: 'bg-white text-red-800 border-red-200',
    blue: 'bg-white text-sky-900 border-sky-200',
    yellow: 'bg-white text-amber-900 border-amber-200',
    orange: 'bg-white text-orange-900 border-orange-200',
    purple: 'bg-white text-violet-900 border-violet-200',
    accent: 'bg-white text-accent border-accent/20',
  },
};

export function Badge({
  children,
  color = 'accent',
  variant = 'solid',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border
        ${colorStyles[variant][color]}
      `}
    >
      {children}
    </span>
  );
}
