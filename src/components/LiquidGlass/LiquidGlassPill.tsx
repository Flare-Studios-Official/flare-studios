import React from 'react';
import { cn } from '../../utils/cn';

interface LiquidGlassPillProps {
  children: React.ReactNode;
  variant?: 'orange' | 'amber' | 'white' | 'subtle';
  className?: string;
  icon?: React.ReactNode;
}

export const LiquidGlassPill: React.FC<LiquidGlassPillProps> = ({
  children,
  variant = 'orange',
  className,
  icon,
}) => {
  const variantStyles = {
    orange: 'bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/30 shadow-[0_0_12px_rgba(255,87,34,0.15)]',
    amber: 'bg-[#FF9B45]/10 text-[#FF9B45] border-[#FF9B45]/30 shadow-[0_0_12px_rgba(255,155,69,0.15)]',
    white: 'bg-white/10 text-[#F5F3EF] border-white/20',
    subtle: 'bg-white/[0.04] text-white/70 border-white/10',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-widest uppercase',
        'backdrop-blur-md transition-all duration-300',
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="opacity-80">{icon}</span>}
      {children}
    </span>
  );
};
