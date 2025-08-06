'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  shape: 'circle' | 'triangle' | 'square';
}

export const ParallaxBackground = ({ sectionId }: { sectionId: string }) => {
  const [shapes, setShapes] = useState<FloatingShape[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const generateShapes = () => {
      const newShapes: FloatingShape[] = [];
      for (let i = 0; i < 15; i++) {
        newShapes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20,
          speed: Math.random() * 0.5 + 0.1,
          shape: ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)] as 'circle' | 'triangle' | 'square',
        });
      }
      setShapes(newShapes);
    };

    generateShapes();

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getShapeElement = (shape: FloatingShape) => {
    const baseStyle = {
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      transform: `translateY(${scrollY * shape.speed}px)`,
    };

    switch (shape.shape) {
      case 'circle':
        return (
          <div
            key={shape.id}
            className="floating-shape rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
            style={baseStyle}
          />
        );
      case 'triangle':
        return (
          <div
            key={shape.id}
            className="floating-shape bg-gradient-to-r from-pink-400/20 to-yellow-400/20"
            style={{
              ...baseStyle,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            }}
          />
        );
      case 'square':
        return (
          <div
            key={shape.id}
            className="floating-shape bg-gradient-to-r from-green-400/20 to-blue-400/20 rotate-45"
            style={baseStyle}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="parallax-bg">
      {shapes.map(getShapeElement)}
    </div>
  );
};