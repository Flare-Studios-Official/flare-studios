import React, { useEffect, useRef } from 'react';

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Floating Stardust Particles
    interface Particle {
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      speedX: number;
      speedY: number;
      pulseSpeed: number;
      phase: number;
      color: string;
    }

    const particles: Particle[] = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      baseAlpha: Math.random() * 0.5 + 0.2,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.4 ? '#FF5722' : '#FF9B45',
    }));

    // Floating 3D Geometric Nodes
    interface GeoNode {
      x: number;
      y: number;
      z: number;
      radius: number;
      angleX: number;
      angleY: number;
      rotSpeedX: number;
      rotSpeedY: number;
    }

    const geometries: GeoNode[] = [
      { x: -160, y: -120, z: 0, radius: 45, angleX: 0.2, angleY: 0.1, rotSpeedX: 0.008, rotSpeedY: 0.012 },
      { x: 180, y: 110, z: 40, radius: 35, angleX: 0.5, angleY: 0.4, rotSpeedX: -0.01, rotSpeedY: 0.007 },
      { x: -190, y: 130, z: -30, radius: 28, angleX: 0.9, angleY: 0.3, rotSpeedX: 0.007, rotSpeedY: -0.009 },
      { x: 210, y: -140, z: 20, radius: 32, angleX: 0.1, angleY: 0.6, rotSpeedX: -0.008, rotSpeedY: -0.011 },
    ];

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + (mouse.x - width / 2) * 0.08;
      const centerY = height / 2 + (mouse.y - height / 2) * 0.08;

      // 1. Atmospheric Deep Background Light Rays
      const atmosphericGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        Math.max(width, height) * 0.65
      );
      atmosphericGlow.addColorStop(0, 'rgba(255, 87, 34, 0.18)');
      atmosphericGlow.addColorStop(0.35, 'rgba(255, 155, 69, 0.07)');
      atmosphericGlow.addColorStop(0.7, 'rgba(8, 8, 8, 0.85)');
      atmosphericGlow.addColorStop(1, '#080808');

      ctx.fillStyle = atmosphericGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Central Core Glowing Orb
      const orbRadius = Math.min(width, height) * 0.18 + Math.sin(time * 2) * 6;
      const coreGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        orbRadius * 1.8
      );
      coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      coreGradient.addColorStop(0.15, 'rgba(255, 155, 69, 0.8)');
      coreGradient.addColorStop(0.45, 'rgba(255, 87, 34, 0.45)');
      coreGradient.addColorStop(0.85, 'rgba(255, 87, 34, 0.08)');
      coreGradient.addColorStop(1, 'rgba(8, 8, 8, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, orbRadius * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();

      // 3. Floating 3D Geometric wireframe rings around the orb
      ctx.save();
      ctx.translate(centerX, centerY);

      geometries.forEach((geo, i) => {
        geo.angleX += geo.rotSpeedX;
        geo.angleY += geo.rotSpeedY;

        const orbitTime = time * 0.5 + i * 1.5;
        const currentX = geo.x + Math.sin(orbitTime) * 30;
        const currentY = geo.y + Math.cos(orbitTime * 0.8) * 20;

        ctx.save();
        ctx.translate(currentX, currentY);
        ctx.rotate(geo.angleX);

        ctx.strokeStyle = i % 2 === 0 ? 'rgba(255, 87, 34, 0.35)' : 'rgba(255, 155, 69, 0.25)';
        ctx.lineWidth = 1.2;

        // Draw geometric diamond wireframe
        const r = geo.radius + Math.sin(time + i) * 3;
        ctx.beginPath();
        ctx.moveTo(0, -r);
        ctx.lineTo(r, 0);
        ctx.lineTo(0, r);
        ctx.lineTo(-r, 0);
        ctx.closePath();
        ctx.stroke();

        // Inner specular ring
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.fill();

        ctx.restore();
      });

      ctx.restore();

      // 4. Subtle Ambient Floating Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.phase += p.pulseSpeed;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.baseAlpha + Math.sin(p.phase) * 0.2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.05, Math.min(1, currentAlpha));
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-90 transition-opacity duration-1000"
    />
  );
};
