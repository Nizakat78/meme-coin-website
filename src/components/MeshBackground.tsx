"use client";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface MeshBackgroundProps {
  variant?: 'default' | 'warm' | 'cool' | 'purple' | 'green';
}

const colorSchemes = {
  sunrise: {
    gradient: `radial-gradient(circle at 50% 100%, #ffc107 0%, #ff8f00 10%, #ff5722 20%, #f44336 30%, #c2185b 50%, #512da8 70%, #1a237e 90%, #000000 100%)`,
  },
  day: {
    gradient: `radial-gradient(circle at 50% 50%, #87CEEB 0%, #1E90FF 50%, #00008B 100%)`,
  },
  sunset: {
    gradient: `radial-gradient(circle at 50% 100%, #ffc107 0%, #ff8f00 10%, #ff5722 20%, #f44336 30%, #c2185b 50%, #512da8 70%, #1a237e 90%, #000000 100%)`,
  },
  night: {
    gradient: `radial-gradient(circle at 50% 50%, #000000 0%, #000033 50%, #000066 100%)`,
  },
};

const MeshBackground = ({ variant = 'default' }: MeshBackgroundProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          background: colorSchemes.sunrise.gradient,
          transition: { duration: 5, ease: 'easeInOut' },
        });
        await controls.start({
          background: colorSchemes.day.gradient,
          transition: { duration: 10, ease: 'easeInOut' },
        });
        await controls.start({
          background: colorSchemes.sunset.gradient,
          transition: { duration: 5, ease: 'easeInOut' },
        });
        await controls.start({
          background: colorSchemes.night.gradient,
          transition: { duration: 10, ease: 'easeInOut' },
        });
      }
    };
    sequence();
  }, [controls]);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      animate={controls}
      initial={{ background: colorSchemes.night.gradient }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: 'rgba(152,245,255,0.2)',
            left: `${15 + (i * 15)}%`,
            top: `${10 + (i * 14)}%`,
          }}
          animate={{
            y: [0, -30 - (i * 10), 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + (i * 2),
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Subtle star shapes */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.svg
          key={`star-${i}`}
          className="absolute"
          style={{
            color: 'rgba(152,245,255,0.1)',
            left: `${20 + (i * 30)}%`,
            top: `${15 + (i * 25)}%`,
            width: `${16 + (i * 6)}px`,
            height: `${16 + (i * 6)}px`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
          animate={{
            rotate: [0, 180, 360],
            opacity: [0.1, 0.25, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12 + (i * 4),
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 2,
          }}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </motion.svg>
      ))}
    </motion.div>
  );
};

export default MeshBackground;
