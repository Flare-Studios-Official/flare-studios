import React, { useRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { sound } from '../../utils/sound';

interface LiquidGlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  magnetic?: boolean;
}

export const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  magnetic = true,
  className,
  onClick,
  onMouseEnter,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    // Subtle damping
    setOffset({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    sound.playHover();
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    sound.playClick();
    if (onClick) onClick(e);
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wider',
    md: 'px-6 py-3.5 text-xs md:text-sm font-semibold tracking-wider',
    lg: 'px-8 py-4 text-sm md:text-base font-bold tracking-wider',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#FF5722] to-[#FF9B45] text-white shadow-[0_0_30px_rgba(255,87,34,0.4)] hover:shadow-[0_0_45px_rgba(255,87,34,0.65)] border border-white/25',
    secondary:
      'bg-white/[0.06] text-[#F5F3EF] hover:bg-white/[0.12] border border-white/15 backdrop-blur-xl hover:border-white/30 shadow-lg',
    glass:
      'bg-[#121212]/80 text-[#F5F3EF] hover:text-[#FF5722] border border-white/10 hover:border-[#FF5722]/50 backdrop-blur-xl',
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: offset.x === 0 ? 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.1s linear',
      }}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full uppercase',
        'transition-all duration-300 active:scale-[0.98]',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {/* Specular sheen reflection */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {icon && (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
};
