"use client";
import { motion } from 'framer-motion';

interface MeshBackgroundProps {
  variant?: 'default' | 'warm' | 'cool' | 'purple' | 'green';
}

const colorSchemes: Record<string, string> = {
  default: `radial-gradient(circle at 50% 50%, rgba(152,245,255,0.03) 0%, transparent 50%)`,
  warm: `radial-gradient(circle at 50% 50%, rgba(255,184,217,0.03) 0%, transparent 50%)`,
  cool: `radial-gradient(circle at 50% 50%, rgba(92,224,255,0.03) 0%, transparent 50%)`,
  purple: `radial-gradient(circle at 50% 50%, rgba(184,169,255,0.03) 0%, transparent 50%)`,
  green: `radial-gradient(circle at 50% 50%, rgba(168,255,212,0.03) 0%, transparent 50%)`,
};

const MeshBackground = ({ variant = 'default' }: MeshBackgroundProps) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ background: colorSchemes[variant] }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating particles - simplified for performance */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: 'rgba(152,245,255,0.15)',
            left: `${20 + (i * 20)}%`,
            top: `${15 + (i * 18)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + (i * 2),
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Subtle star shapes */}
      {Array.from({ length: 2 }).map((_, i) => (
        <motion.svg
          key={`star-${i}`}
          className="absolute"
          style={{
            color: 'rgba(152,245,255,0.08)',
            left: `${25 + (i * 50)}%`,
            top: `${20 + (i * 30)}%`,
            width: `${14 + (i * 4)}px`,
            height: `${14 + (i * 4)}px`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
          animate={{
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 6 + (i * 2),
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 1.5,
          }}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </motion.svg>
      ))}
    </motion.div>
  );
};

export default MeshBackground;
