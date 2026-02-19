"use client";

// src/components/RoadmapGraphic.tsx
import { motion } from 'framer-motion';
import Logo from './Logo';

const RoadmapGraphic = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <svg viewBox="0 0 400 400">
                {/* Winding path */}
                <motion.path
                    d="M 50 350 Q 150 250 200 200 T 350 100"
                    stroke="#FBBF24"
                    strokeWidth="5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Stars along the path */}
                <motion.circle cx="80" cy="320" r="5" fill="#E5E7EB"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }} />
                <motion.circle cx="210" cy="190" r="7" fill="#E5E7EB"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }} />
                <motion.circle cx="320" cy="120" r="6" fill="#E5E7EB"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.5 }} />

                {/* Ulyg Dog at the end of the path */}
                <motion.g
                    transform="translate(290, 80) scale(0.3)"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.8, type: 'spring', stiffness: 100 }}
                >
                    <Logo />
                </motion.g>

                {/* Rocket near the moon */}
                <motion.g
                    transform="translate(320, 50) scale(0.2)"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3, duration: 0.8, type: 'spring', stiffness: 100 }}
                >
                    <path d="M 50 0 L 25 75 L 75 75 Z" fill="#D1D5DB" />
                    <circle cx="50" cy="80" r="20" fill="#E5E7EB" />
                    <rect x="45" y="90" width="10" height="30" fill="#EF4444" />
                </motion.g>

                 {/* Moon */}
                <motion.circle cx="340" cy="60" r="30" fill="#9CA3AF"
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 3.2, duration: 0.8 }}
                />
            </svg>
        </div>
    )
}

export default RoadmapGraphic;