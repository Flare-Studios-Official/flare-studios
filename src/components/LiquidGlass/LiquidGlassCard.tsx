import React, { useRef, useState } from 'react';
import { cn } from '../../utils/cn';

interface LiquidGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  enableTilt?: boolean;
}

export const LiquidGlassCard: React.FC<LiquidGlassCardProps> = ({
  children,
  className,
  glowColor = 'rgba(255, 87, 34, 0.25)',
  enableTilt = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      setTilt({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: enableTilt
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : undefined,
        transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.5s ease-out',
      }}
      className={cn(
        'relative overflow-hidden rounded-2xl bg-[#121212]/70 backdrop-blur-xl',
        'border border-white/10 shadow-2xl transition-all duration-300',
        'hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]',
        className
      )}
      {...props}
    >
      {/* Dynamic Specular Glare / Liquid Light following cursor */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 60%)`,
            opacity: 0.7,
          }}
        />
      )}

      {/* Subtle Apple-style Rim Highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5" />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
