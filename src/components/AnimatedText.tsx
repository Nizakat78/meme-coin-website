"use client";

import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: (i = 1) => ({
    transition: { staggerChildren: 0.025, delayChildren: i * 0.01 },
  }),
};

const charVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.2, 0.65, 0.3, 0.9],
        },
    },
};

interface AnimatedTextProps {
  text: string;
  el?: keyof React.JSX.IntrinsicElements;
  className?: string;
}

const AnimatedText = ({ text, el: Wrapper = 'p', className }: AnimatedTextProps) => {
    const words = text.split(' ');

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        aria-hidden
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
            {/* Add space between words */}
            {wordIndex < words.length -1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;