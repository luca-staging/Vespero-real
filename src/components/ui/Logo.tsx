import React from 'react';

function RevoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
      <path d="M4 20V10.5L12 4l8 6.5V20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Logo({ size = 'default' }: { size?: 'default' | 'large' }) {
  const isLarge = size === 'large';

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex items-center justify-center rounded-full bg-accent text-cream-50 ${
          isLarge ? 'w-12 h-12' : 'w-9 h-9'
        }`}
      >
        <RevoIcon />
      </div>
      <span
        className={`font-display font-medium tracking-tight text-cream-100 ${
          isLarge ? 'text-4xl' : 'text-2xl'
        }`}
      >
        Revo<span className="italic text-secondary">Fi</span>
      </span>
    </div>
  );
}
