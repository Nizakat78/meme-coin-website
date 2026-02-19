"use client";

import { motion, useAnimation, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, Children } from 'react';

type AnimationType = 'fadeInUp' | 'fadeInLeft' | 'zoomIn';

interface AnimatedOnScrollProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  animationType?: AnimationType;
}

const animationVariants: Record<AnimationType, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  },
};

const AnimatedOnScroll = ({ children, className, stagger = 0, animationType = 'fadeInUp' }: AnimatedOnScrollProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animationVariants[animationType]}
      className={className}
    >
      {stagger > 0 ? (
        Children.map(children, (child, i) => (
          <motion.div
            key={i}
            variants={animationVariants[animationType]}
            custom={i}
            initial="hidden"
            animate={controls}
            transition={{ delay: i * stagger }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  );
};

export default AnimatedOnScroll;