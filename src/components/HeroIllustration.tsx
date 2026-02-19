// src/components/HeroIllustration.tsx
import { motion } from 'framer-motion';
import Logo from './Logo';

const Star = ({ x, y, scale, duration, delay }: { x: number, y: number, scale: number, duration: number, delay: number }) => (
    <motion.circle
        cx={x}
        cy={y}
        r={2 * scale}
        fill="white"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0], scale: [0, scale, 0] }}
        transition={{ duration, repeat: Infinity, delay }}
    />
);

const HeroIllustration = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <svg viewBox="0 0 400 400">
                {/* Stars */}
                <Star x={50} y={50} scale={1.2} duration={3} delay={0.5} />
                <Star x={350} y={80} scale={1} duration={4} delay={1} />
                <Star x={100} y={300} scale={0.8} duration={3.5} delay={1.5} />
                <Star x={300} y={350} scale={1.1} duration={2.5} delay={0} />

                {/* Rocket */}
                <motion.g
                    initial={{ y: 20 }}
                    animate={{ y: -20 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                >
                    {/* Rocket Body */}
                    <path d="M 200 50 L 150 200 L 250 200 Z" fill="#E5E7EB" />
                    <path d="M 150 200 C 150 250, 250 250, 250 200" fill="#E5E7EB" />
                    <circle cx="200" cy="220" r="55" fill="#D1D5DB" />
                    
                    {/* Fins */}
                    <path d="M 150 200 L 100 250 L 150 220" fill="#9CA3AF" />
                    <path d="M 250 200 L 300 250 L 250 220" fill="#9CA3AF" />

                    {/* Flame */}
                    <motion.path
                        d="M 170 275 C 180 350, 220 350, 230 275 Z"
                        fill="#F59E0B"
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    />
                     <motion.path
                        d="M 180 275 C 190 330, 210 330, 220 275 Z"
                        fill="#FBBF24"
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: [1.2, 1, 1.2] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    />
                </motion.g>

                {/* Ulyg Dog in the rocket window */}
                <g transform="translate(145, 165) scale(0.55)">
                    <Logo />
                </g>
            </svg>
        </div>
    )
}

export default HeroIllustration;