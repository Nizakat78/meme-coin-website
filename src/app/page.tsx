"use client";

import { motion, type Variants } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import ThreeBackground from '@/components/ThreeBackground';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ---- Large Hero Graphic: Dog in Space Suit on Moon (SVG) ---- */
const HeroGraphic = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <motion.div
      onClick={handleClick}
      animate={{ y: isClicked ? [0, -20, 0] : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ cursor: 'pointer' }}
      className="w-full h-full"
    >
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Background glow */}
        <defs>
          <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(74,222,128,0.2)"/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="150" fill="url(#heroGlow)"/>
        
        {/* Moon surface */}
        <ellipse cx="200" cy="350" rx="180" ry="60" fill="rgba(74,222,128,0.05)" stroke="rgba(74,222,128,0.2)" strokeWidth="1"/>
        
        {/* Dog astronaut body */}
        <g transform="translate(200, 220)">
          {/* Spacesuit body */}
          <ellipse cx="0" cy="40" rx="50" ry="60" fill="rgba(74,222,128,0.2)" stroke="rgba(74,222,128,0.4)" strokeWidth="2"/>
          
          {/* Helmet */}
          <circle cx="0" cy="-30" r="45" fill="rgba(74,222,128,0.1)" stroke="rgba(74,222,128,0.5)" strokeWidth="2"/>
          <ellipse cx="0" cy="-25" rx="35" ry="30" fill="rgba(74,222,128,0.05)" stroke="rgba(74,222,128,0.3)" strokeWidth="1"/>
          
          {/* Dog face inside helmet */}
          <circle cx="-15" cy="-35" r="6" fill="white" opacity="0.9"/>
          <circle cx="-15" cy="-35" r="2.5" fill="#333"/>
          <circle cx="15" cy="-35" r="6" fill="white" opacity="0.9"/>
          <circle cx="15" cy="-35" r="2.5" fill="#333"/>
          <ellipse cx="0" cy="-25" rx="8" ry="6" fill="#333"/>
          <path d="M -10 -15 Q 0 -5 10 -15" stroke="#FF69B4" strokeWidth="2" fill="none"/>
          <path d="M 0 -10 Q 3 -5 0 0" stroke="#FF69B4" strokeWidth="2" fill="none"/>
          
          {/* Ears */}
          <ellipse cx="-40" cy="-40" rx="15" ry="20" fill="rgba(74,222,128,0.3)" stroke="rgba(74,222,128,0.5)" strokeWidth="1"/>
          <ellipse cx="40" cy="-40" rx="15" ry="20" fill="rgba(74,222,128,0.3)" stroke="rgba(74,222,128,0.5)" strokeWidth="1"/>
          
          {/* Backpack */}
          <rect x="-55" y="-20" width="15" height="50" rx="3" fill="rgba(74,222,128,0.25)" stroke="rgba(74,222,128,0.4)" strokeWidth="1"/>
          <rect x="40" y="-20" width="15" height="50" rx="3" fill="rgba(74,222,128,0.25)" stroke="rgba(74,222,128,0.4)" strokeWidth="1"/>
        </g>
        
        {/* Rocket */}
        <motion.g
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <g transform="translate(320, 100)">
            <path d="M 0 60 L -20 100 L 20 100 Z" fill="rgba(74,222,128,0.3)" stroke="rgba(74,222,128,0.5)" strokeWidth="1"/>
            <circle cx="0" cy="110" r="15" fill="rgba(74,222,128,0.15)" stroke="rgba(74,222,128,0.4)" strokeWidth="1"/>
            <motion.path
              d="M -10 120 Q 0 150 10 120 Z"
              fill="#4ade80"
              animate={{ scaleY: [1, 1.3, 1] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
          </g>
        </motion.g>
        
        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={i}
            cx={30 + (i * 18) % 340}
            cy={30 + (i * 23) % 200}
            r={1 + (i % 3)}
            fill="#4ade80"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

/* ---- Feature Section Graphics ---- */
const SupplyGraphic = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="supplyGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(74,222,128,0.2)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="80" fill="url(#supplyGlow)"/>
    <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(74,222,128,0.3)" strokeWidth="2" strokeDasharray="8 4"/>
    <text x="100" y="95" textAnchor="middle" fill="#4ade80" fontSize="28" fontWeight="900">1B</text>
    <text x="100" y="120" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">SUPPLY</text>
    <motion.circle cx="100" cy="100" r="50" fill="none" stroke="rgba(74,222,128,0.2)" strokeWidth="1">
      <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite"/>
    </motion.circle>
  </svg>
);

const ZeroTaxGraphic = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="zeroGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(34,211,191,0.2)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="80" fill="url(#zeroGlow)"/>
    <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(34,211,191,0.3)" strokeWidth="2"/>
    <text x="100" y="110" textAnchor="middle" fill="#4ade80" fontSize="48" fontWeight="900">0%</text>
    <motion.path d="M 60 100 L 85 125 L 140 70" fill="none" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="stroke-dasharray" from="0 200" to="200 0" dur="1s" fill="freeze"/>
    </motion.path>
  </svg>
);

const CommunityGraphicSmall = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="commGlowSmall" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(74,222,128,0.2)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="80" fill="url(#commGlowSmall)"/>
    {/* Central node */}
    <circle cx="100" cy="100" r="20" fill="rgba(74,222,128,0.2)" stroke="rgba(74,222,128,0.4)" strokeWidth="2"/>
    {/* Outer nodes */}
    {[0, 120, 240].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = 100 + 50 * Math.cos(rad);
      const y = 100 + 50 * Math.sin(rad);
      return (
        <g key={i}>
          <line x1="100" y1="100" x2={x} y2={y} stroke="rgba(74,222,128,0.3)" strokeWidth="1.5"/>
          <circle cx={x} cy={y} r="12" fill="rgba(74,222,128,0.15)" stroke="rgba(74,222,128,0.4)" strokeWidth="1.5"/>
          <circle cx={x} cy={y} r="5" fill="rgba(74,222,128,0.5)"/>
        </g>
      );
    })}
  </svg>
);

/* ---- Stats Section Illustration ---- */
const StatsGraphic = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <radialGradient id="statsGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(74,222,128,0.15)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <rect width="400" height="300" fill="url(#statsGlow)"/>
    
    {/* Chart bars */}
    {[40, 80, 120, 160, 200, 240, 280].map((x, i) => {
      const heights = [60, 100, 80, 140, 120, 180, 160];
      return (
        <motion.g key={i}>
          <rect x={x} y={250 - heights[i]} width="25" height={heights[i]} fill="rgba(74,222,128,0.2)" stroke="rgba(74,222,128,0.4)" strokeWidth="1" rx="3">
            <animate attributeName="height" from="0" to={heights[i]} dur="0.8s" fill="freeze"/>
          </rect>
        </motion.g>
      );
    })}
    
    {/* Trend line */}
    <motion.path
      d="M 40 190 L 100 150 L 160 170 L 220 110 L 280 130 L 340 70"
      fill="none"
      stroke="rgba(74,222,128,0.6)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
    
    {/* Data points */}
    {[
      { x: 40, y: 190 }, { x: 100, y: 150 }, { x: 160, y: 170 },
      { x: 220, y: 110 }, { x: 280, y: 130 }, { x: 340, y: 70 }
    ].map((point, i) => (
      <motion.circle
        key={i}
        cx={point.x}
        cy={point.y}
        r="5"
        fill="rgba(74,222,128,0.3)"
        stroke="rgba(74,222,128,0.6)"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8 + (i * 0.1) }}
      />
    ))}
  </svg>
);

/* ---- Floating Geometric Decorations ---- */
const FloatingDecorations = () => (
  <>
    {/* Floating Hexagons */}
    {[[8, 15, 40, 25], [85, 25, 30, 35], [12, 70, 35, 20], [90, 65, 28, 40], [45, 85, 32, 30]].map(([left, top, size, dur], i) => (
      <motion.div
        key={`hex-${i}`}
        className="absolute pointer-events-none z-0"
        style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          opacity: [0.05, 0.12, 0.05]
        }}
        transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" stroke="rgba(74,222,128,0.2)" strokeWidth="1"/>
        </svg>
      </motion.div>
    ))}
    {/* Floating Diamonds */}
    {[[20, 40, 24, 18], [75, 50, 20, 22], [55, 20, 22, 28]].map(([left, top, size, dur], i) => (
      <motion.div
        key={`dia-${i}`}
        className="absolute pointer-events-none z-0"
        style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
        animate={{
          y: [0, 15, 0],
          rotate: [45, 90, 45],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="rgba(34,211,191,0.15)" strokeWidth="1"/>
        </svg>
      </motion.div>
    ))}
    {/* Floating Circles */}
    {[[30, 60, 16], [70, 30, 12], [15, 85, 10], [88, 80, 14], [50, 10, 8]].map(([left, top, size], i) => (
      <motion.div
        key={`circ-${i}`}
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          background: i % 2 === 0 ? "rgba(74,222,128,0.06)" : "rgba(34,211,191,0.05)",
          border: "1px solid rgba(74,222,128,0.1)"
        }}
        animate={{
          y: [0, -25 - i * 5, 0],
          x: [0, i % 2 === 0 ? 10 : -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
      />
    ))}
  </>
);

export default function Home() {
  return (
    <motion.div
      className="relative bg-black text-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Aurora Background Effect */}
      <div className="aurora-bg absolute inset-0 pointer-events-none z-0" />

      {/* Three.js 3D Background */}
      <ThreeBackground />

      {/* Floating Decorations */}
      <FloatingDecorations />

      {/* ===== HERO SECTION ===== */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-12 max-w-7xl mx-auto gap-4">
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2"
          variants={containerVariants}
        >
          <AnimatedText
            text="Don't Just HODL. Get ULYG."
            el="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 gradient-text-green text-glow leading-[0.95]"
          />
          <AnimatedText
            text="The Meme Coin That Embraces Chaos"
            el="div"
            className="text-2xl md:text-3xl font-bold tracking-tight mb-4 gradient-text-premium mt-4"
          />
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-xl mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Tired of cute dogs? Sick of perfect logos? ULGD is the meme coin for the rest of us. Ugly and proud.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link href="/how-to-buy">
              <motion.button
                className="btn-premium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get ULYG Now
              </motion.button>
            </Link>
            <Link href="/whitepaper">
              <motion.button
                className="px-8 py-3.5 rounded-full text-lg font-bold border-2 transition-all duration-300"
                style={{ borderColor: 'rgba(74,222,128,0.4)', color: '#4ade80' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(74,222,128,0.1)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                whileHover={{ scale: 1.05, borderColor: "rgba(74,222,128,0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                The Ulyg Paper
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Graphic - Dog Astronaut */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center mt-4 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, type: 'spring', stiffness: 60 }}
        >
          <motion.div
            className="w-full max-w-lg"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <HeroGraphic />
          </motion.div>
        </motion.div>
      </div>

      {/* ===== FEATURE BADGES WITH GRAPHICS ===== */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter gradient-text-green mb-4">Why ULGD?</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Built different. Built ugly. Built to last.</p>
            </div>
          </AnimatedOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { graphic: <SupplyGraphic />, title: "1 Billion Supply", desc: "Fixed, finite, and fair. No minting, no surprises. Every token accounted for." },
              { graphic: <ZeroTaxGraphic />, title: "Zero Tax", desc: "0% buy and sell tax. What you trade is what you get. No hidden fees." },
              { graphic: <CommunityGraphicSmall />, title: "Community First", desc: "40% to community treasury. Built by the pack, for the pack." },
            ].map((feat, i) => (
              <AnimatedOnScroll key={i}>
                <motion.div
                  className="card-premium holo-shine tilt-card rounded-2xl p-8 text-center relative overflow-hidden"
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  <motion.div
                    className="w-28 h-28 mx-auto mb-6"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity, repeatType: "reverse" }}
                  >
                    {feat.graphic}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#4ade80' }}>{feat.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                </motion.div>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* ===== GROWTH CHART SECTION ===== */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedOnScroll className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <StatsGraphic />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ color: '#4ade80', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)' }}>
                UGLYNOMICS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text-green mb-4">The Ugly Truth in Numbers</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our tokenomics are designed for long-term growth. Fair distribution, zero tax, and a community treasury that fuels the entire ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "1B", label: "Total Supply" },
                  { val: "0%", label: "Tax Rate" },
                  { val: "40%", label: "Community" },
                  { val: "ERC-20", label: "Standard" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="card-premium neon-border rounded-xl p-4 text-center relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-xl font-bold" style={{ color: '#4ade80' }}>{stat.val}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatedOnScroll>
        </div>
      </div>

      {/* ===== CTA SECTION ===== */}
      <div className="relative z-10 py-20 px-6">
        <AnimatedOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter gradient-text-green mb-6">Ready to Get Ugly?</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">Join the most authentic meme coin community and embrace the chaos.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/how-to-buy">
                <motion.button className="btn-premium" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Buy ULGD
                </motion.button>
              </Link>
              <Link href="/community">
                <motion.button
                  className="px-8 py-3.5 rounded-full text-lg font-bold border-2 transition-all duration-300"
                  style={{ borderColor: 'rgba(34,211,191,0.4)', color: '#22d3bf' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(34,211,191,0.1)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join the Pack
                </motion.button>
              </Link>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent to-transparent" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(74,222,128,0.2), transparent)' }} />
    </motion.div>
  );
}
