// src/components/AboutIllustration.tsx
import { motion } from 'framer-motion';
import Logo from './Logo';

const AboutIllustration = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <svg viewBox="0 0 400 400">
                {/* Background galaxy */}
                <defs>
                    <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style={{stopColor: 'rgba(251, 191, 36, 0.3)', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor: 'rgba(251, 191, 36, 0)', stopOpacity:1}} />
                    </radialGradient>
                </defs>
                <rect width="400" height="400" fill="url(#grad1)" />

                {/* Ulyg Dog */}
                <g transform="translate(50, 150) scale(0.8)">
                    <Logo />
                </g>

                {/* Star Chart */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <path d="M 200 100 L 350 200" stroke="#FBBF24" strokeWidth="2" strokeDasharray="5 5" />
                    <path d="M 220 50 L 300 300" stroke="#FBBF24" strokeWidth="2" strokeDasharray="5 5" />
                    <circle cx="200" cy="100" r="5" fill="#FBBF24" />
                    <text x="190" y="90" fill="white">ULGD</text>
                    <circle cx="350" cy="200" r="10" fill="#F59E0B" />
                    <text x="340" y="190" fill="black">Moon</text>
                    <circle cx="300" cy="300" r="15" fill="#EF4444" />
                     <text x="290" y="290" fill="white">Mars</text>
                </motion.g>
            </svg>
        </div>
    )
}

export default AboutIllustration;