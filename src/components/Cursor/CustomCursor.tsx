import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('select') ||
          target.closest('[data-cursor="pointer"]')
        );
        setIsHovered(isInteractive);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animationFrameId: number;
    const render = () => {
      // Lerp ring towards mouse position
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Center point */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-50 -ml-1 -mt-1 h-2 w-2 rounded-full bg-[#FF5722] shadow-[0_0_10px_#FF5722]"
        style={{ willChange: 'transform' }}
      />

      {/* Outer interactive ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-[#FF5722]/50 backdrop-blur-[1px] transition-[width,height,margin,background-color] duration-200 ease-out ${
          isHovered
            ? '-ml-6 -mt-6 h-12 w-12 bg-[#FF5722]/15 border-[#FF9B45]'
            : '-ml-4 -mt-4 h-8 w-8 bg-transparent'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
};
