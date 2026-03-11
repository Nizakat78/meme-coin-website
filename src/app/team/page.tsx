"use client";

import AnimatedText from '@/components/AnimatedText';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import MeshBackground from '@/components/MeshBackground';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/* ─── #98F5FF Theme Palette ─── */
const BLUE = '#98F5FF';
const BLUE_LIGHT = '#5CE0FF';
const BLUE_GLOW = 'rgba(152,245,255,';
const CYAN = '#2ECBFF';
const INDIGO = '#B8A9FF';
const TEAL = '#A8FFD4';
const ROSE = '#FFB8D9';

/* ─── Team Data ─── */
const teamMembers = [
  {
    name: 'Chief Executive Strategist',
    role: 'Blockchain Architect',
    color: BLUE,
    bio: 'Pioneering decentralized solutions with 8+ years in blockchain architecture and smart contract development.',
    icon: 'shield',
  },
  {
    name: 'Lead Protocol Engineer',
    role: 'Smart Contract Wizard',
    color: BLUE_LIGHT,
    bio: 'Building bulletproof protocols and gas-optimized contracts. Audited over 200+ DeFi projects.',
    icon: 'code',
  },
  {
    name: 'Head of Growth & Marketing',
    role: 'Community Builder',
    color: CYAN,
    bio: 'Scaling communities from zero to 100K+. Expert in viral campaigns and ecosystem partnerships.',
    icon: 'megaphone',
  },
  {
    name: 'Director of Operations',
    role: 'Systems Orchestrator',
    color: INDIGO,
    bio: 'Streamlining cross-chain operations and managing global partnerships across 30+ exchanges.',
    icon: 'network',
  },
  {
    name: 'Chief Security Officer',
    role: 'Guardian of the Vault',
    color: TEAL,
    bio: 'Ensuring maximum security through multi-sig protocols, real-time threat monitoring, and audits.',
    icon: 'lock',
  },
  {
    name: 'Lead Product Designer',
    role: 'UX Visionary',
    color: ROSE,
    bio: 'Crafting seamless Web3 experiences that bridge the gap between complexity and usability.',
    icon: 'palette',
  },
];

/* ─── Icon SVGs for each team member ─── */
const MemberIcon = ({ icon, color }: { icon: string; color: string }) => {
  const icons: Record<string, React.ReactNode> = {
    shield: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Shield body */}
        <path d="M32 6L10 16v16c0 14 10 22 22 28 12-6 22-14 22-28V16L32 6z" fill={`${color}15`} stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M32 10L14 18v14c0 12 8 19 18 24 10-5 18-12 18-24V18L32 10z" fill={`${color}08`} stroke={color} strokeWidth="0.5" opacity="0.5" />
        {/* Star in center */}
        <path d="M32 22l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill={`${color}30`} stroke={color} strokeWidth="1" strokeLinejoin="round" />
        {/* Accent lines */}
        <line x1="20" y1="24" x2="20" y2="36" stroke={color} strokeWidth="0.5" opacity="0.3" />
        <line x1="44" y1="24" x2="44" y2="36" stroke={color} strokeWidth="0.5" opacity="0.3" />
        {/* Top glow dot */}
        <circle cx="32" cy="6" r="2" fill={color} opacity="0.6" />
      </svg>
    ),
    code: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Terminal window */}
        <rect x="8" y="12" width="48" height="40" rx="4" fill={`${color}10`} stroke={color} strokeWidth="1.5" />
        <rect x="8" y="12" width="48" height="8" rx="4" fill={`${color}15`} />
        <circle cx="15" cy="16" r="1.5" fill={color} opacity="0.6" />
        <circle cx="21" cy="16" r="1.5" fill={color} opacity="0.4" />
        <circle cx="27" cy="16" r="1.5" fill={color} opacity="0.3" />
        {/* Code brackets */}
        <path d="M20 30l-6 6 6 6" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        <path d="M44 30l6 6-6 6" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        <line x1="28" y1="28" x2="36" y2="44" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        {/* Cursor blink */}
        <rect x="30" y="34" width="2" height="6" fill={color} opacity="0.7" />
      </svg>
    ),
    megaphone: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Megaphone body */}
        <path d="M12 26h8l20-12v36L20 38h-8z" fill={`${color}15`} stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="6" y="24" width="8" height="16" rx="3" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
        {/* Sound waves */}
        <path d="M44 22c4 4 6 8 6 10s-2 6-6 10" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8" />
        <path d="M48 16c6 6 10 12 10 16s-4 10-10 16" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
        <path d="M52 10c8 8 14 16 14 22s-6 14-14 22" stroke={color} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.25" />
        {/* Handle */}
        <rect x="16" y="40" width="4" height="12" rx="1" fill={`${color}30`} stroke={color} strokeWidth="1" />
        {/* Signal dots */}
        <circle cx="52" cy="26" r="1.5" fill={color} opacity="0.4" />
        <circle cx="56" cy="32" r="1.5" fill={color} opacity="0.3" />
      </svg>
    ),
    network: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Center hub */}
        <circle cx="32" cy="32" r="8" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
        <circle cx="32" cy="32" r="3" fill={color} opacity="0.7" />
        {/* Outer nodes + connections */}
        {[
          { x: 12, y: 12 }, { x: 52, y: 12 }, { x: 52, y: 52 },
          { x: 12, y: 52 }, { x: 32, y: 6 }, { x: 58, y: 32 },
          { x: 32, y: 58 }, { x: 6, y: 32 },
        ].map((n, i) => (
          <g key={i}>
            <line x1="32" y1="32" x2={n.x} y2={n.y} stroke={color} strokeWidth="0.8" opacity="0.2" strokeDasharray="2 3" />
            <circle cx={n.x} cy={n.y} r="4" fill={`${color}15`} stroke={color} strokeWidth="1" />
            <circle cx={n.x} cy={n.y} r="1.5" fill={color} opacity="0.6" />
          </g>
        ))}
        {/* Cross connections */}
        <line x1="12" y1="12" x2="52" y2="12" stroke={color} strokeWidth="0.4" opacity="0.1" />
        <line x1="52" y1="52" x2="12" y2="52" stroke={color} strokeWidth="0.4" opacity="0.1" />
        <line x1="12" y1="12" x2="12" y2="52" stroke={color} strokeWidth="0.4" opacity="0.1" />
        <line x1="52" y1="12" x2="52" y2="52" stroke={color} strokeWidth="0.4" opacity="0.1" />
      </svg>
    ),
    lock: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Lock body */}
        <rect x="16" y="28" width="32" height="26" rx="4" fill={`${color}15`} stroke={color} strokeWidth="1.5" />
        {/* Lock shackle */}
        <path d="M22 28V20c0-6 4-10 10-10s10 4 10 10v8" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
        {/* Keyhole */}
        <circle cx="32" cy="38" r="4" fill={`${color}25`} stroke={color} strokeWidth="1" />
        <rect x="30.5" y="40" width="3" height="8" rx="1" fill={color} opacity="0.4" />
        {/* Security lines */}
        <line x1="20" y1="33" x2="44" y2="33" stroke={color} strokeWidth="0.5" opacity="0.15" />
        <line x1="20" y1="48" x2="44" y2="48" stroke={color} strokeWidth="0.5" opacity="0.15" />
        {/* Shield check */}
        <circle cx="32" cy="38" r="1.5" fill={color} opacity="0.8" />
        {/* Corner dots */}
        <circle cx="20" cy="32" r="1" fill={color} opacity="0.3" />
        <circle cx="44" cy="32" r="1" fill={color} opacity="0.3" />
      </svg>
    ),
    palette: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Palette shape */}
        <path d="M32 8C18 8 6 18 6 32c0 8 4 14 10 18 2 1 4-1 4-3v-2c0-4 3-6 6-6h4c2 0 4-2 4-4 0-2 2-4 4-4 4 0 8-2 10-4 4-4 6-8 6-14C54 18 44 8 32 8z" fill={`${color}12`} stroke={color} strokeWidth="1.5" />
        {/* Color dots */}
        <circle cx="20" cy="22" r="4" fill={color} opacity="0.7" />
        <circle cx="32" cy="18" r="3.5" fill={CYAN} opacity="0.6" />
        <circle cx="42" cy="24" r="3.5" fill={INDIGO} opacity="0.6" />
        <circle cx="16" cy="34" r="3" fill={TEAL} opacity="0.5" />
        <circle cx="44" cy="34" r="3" fill={ROSE} opacity="0.5" />
        {/* Brush stroke */}
        <path d="M26 44c2-2 6-2 8 0" stroke={color} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  };
  return icons[icon] || null;
};

/* ─── Hero Illustration: Orbital Tech Constellation ─── */
const HeroTeamGraphic = () => (
  <div className="relative w-full max-w-2xl mx-auto h-[340px] md:h-[420px]">
    {/* Outer rotating ring with glow effect */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[360px] md:h-[360px]"
      animate={{ rotate: 360 }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="heroRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={BLUE} />
            <stop offset="50%" stopColor={CYAN} />
            <stop offset="100%" stopColor={INDIGO} />
          </linearGradient>
          <filter id="ringGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle cx="60" cy="60" r="56" fill="none" stroke="url(#heroRing)" strokeWidth="0.6" strokeDasharray="3 8" filter="url(#ringGlow)" />
        <circle cx="60" cy="60" r="48" fill="none" stroke="url(#heroRing)" strokeWidth="0.4" strokeDasharray="2 10" />
      </svg>
    </motion.div>

    {/* Inner counter-rotating ring with pulse */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[260px] md:h-[260px]"
      animate={{ rotate: -360, scale: [1, 1.02, 1] }}
      transition={{ rotate: { duration: 50, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="none" stroke={`${BLUE_GLOW}0.2)`} strokeWidth="0.8" strokeDasharray="6 4" />
      </svg>
    </motion.div>

    {/* Central Lottie Animation Badge */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* SVG Logo instead of Lottie */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="45" fill="rgba(152,245,255,0.1)" stroke="rgba(152,245,255,0.3)" strokeWidth="1"/>
        <circle cx="50" cy="50" r="35" fill="rgba(152,245,255,0.15)"/>
        <text x="50" y="55" textAnchor="middle" fill="#98F5FF" fontSize="20" fontWeight="900">ULGD</text>
      </svg>
    </motion.div>

    {/* Static center emblem overlay - Hexagonal tech badge */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full glow-pulse" style={{ '--glow-color': `${BLUE_GLOW}0.5)` } as React.CSSProperties}>
        <defs>
          <radialGradient id="emblemGlowB" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={`${BLUE_GLOW}0.25)`} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={BLUE} />
            <stop offset="100%" stopColor={CYAN} />
          </linearGradient>
          <filter id="hexGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#emblemGlowB)" />
        {/* Hexagon with glow */}
        <polygon points="50,15 78,32 78,68 50,85 22,68 22,32" fill="rgba(10,14,28,0.95)" stroke="url(#hexGrad)" strokeWidth="1.5" filter="url(#hexGlow)" />
        <polygon points="50,22 72,36 72,64 50,78 28,64 28,36" fill="none" stroke={`${BLUE_GLOW}0.2)`} strokeWidth="0.5" />
        {/* ULGD text */}
        <text x="50" y="48" textAnchor="middle" fill={BLUE_LIGHT} fontSize="10" fontWeight="900" fontFamily="Inter" letterSpacing="3">ULGD</text>
        <text x="50" y="60" textAnchor="middle" fill={`${BLUE_GLOW}0.6)`} fontSize="5.5" fontWeight="600" fontFamily="Inter" letterSpacing="1.5">ELITE TEAM</text>
        {/* Corner markers on hexagon with animation */}
        <circle cx="50" cy="15" r="2.5" fill={BLUE} opacity="0.8" />
        <circle cx="78" cy="32" r="2" fill={CYAN} opacity="0.6" />
        <circle cx="78" cy="68" r="2" fill={INDIGO} opacity="0.6" />
        <circle cx="50" cy="85" r="2.5" fill={BLUE} opacity="0.8" />
        <circle cx="22" cy="68" r="2" fill={CYAN} opacity="0.6" />
        <circle cx="22" cy="32" r="2" fill={INDIGO} opacity="0.6" />
      </svg>
    </div>

    {/* Orbiting member nodes */}
    {teamMembers.map((member, i) => {
      const angle = (i * 60) - 90;
      const rad = (angle * Math.PI) / 180;
      const x = 50 + (44 * Math.cos(rad));
      const y = 50 + (38 * Math.sin(rad));
      return (
        <motion.div
          key={i}
          className="absolute w-12 h-12 md:w-16 md:h-16"
          style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + i * 0.12, type: 'spring', stiffness: 200 }}
        >
          <motion.div
            className="w-full h-full rounded-xl p-1.5 backdrop-blur-sm"
            style={{ background: `${member.color}12`, border: `1px solid ${member.color}25`, boxShadow: `0 0 20px ${member.color}10` }}
            animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <MemberIcon icon={member.icon} color={member.color} />
          </motion.div>
        </motion.div>
      );
    })}

    {/* Floating particles */}
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={`hp-${i}`}
        className="absolute rounded-full"
        style={{
          width: i % 4 === 0 ? '3px' : '2px',
          height: i % 4 === 0 ? '3px' : '2px',
          background: i % 4 === 0 ? BLUE : i % 4 === 1 ? CYAN : i % 4 === 2 ? INDIGO : TEAL,
          left: `${5 + (i * 6.2)}%`,
          top: `${3 + (i * 6.4)}%`,
        }}
        animate={{
          y: [0, -25 - (i * 2), 0],
          x: [0, i % 2 === 0 ? 12 : -12, 0],
          opacity: [0.1, 0.55, 0.1],
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 4 + (i * 0.6),
          repeat: Infinity,
          repeatType: 'reverse',
          delay: i * 0.3,
        }}
      />
    ))}

    {/* Connecting data lines between nodes */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
      {teamMembers.map((member, i) => {
        const angle = (i * 60) - 90;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + (44 * Math.cos(rad));
        const y = 50 + (38 * Math.sin(rad));
        return (
          <line key={i} x1="50" y1="50" x2={x} y2={y} stroke={member.color} strokeWidth="0.15" strokeDasharray="1 2" opacity="0.3" />
        );
      })}
    </svg>
  </div>
);

/* ─── Section Graphic: Expertise Flow ─── */
const ExpertiseGraphic = () => (
  <svg viewBox="0 0 600 140" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="expertGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={`${BLUE_GLOW}0.2)`} />
        <stop offset="50%" stopColor={`rgba(0,212,255,0.12)`} />
        <stop offset="100%" stopColor={`rgba(123,97,255,0.2)`} />
      </linearGradient>
    </defs>
    {/* Data flow wave */}
    <path d="M0 70 Q100 20 200 70 T400 70 T600 70" fill="none" stroke="url(#expertGrad)" strokeWidth="2" />
    <path d="M0 75 Q100 25 200 75 T400 75 T600 75" fill="none" stroke={`${BLUE_GLOW}0.04)`} strokeWidth="35" />
    {/* Expertise nodes */}
    {[
      { x: 75, y: 48, label: 'SECURITY', color: BLUE },
      { x: 200, y: 60, label: 'PROTOCOL', color: CYAN },
      { x: 340, y: 48, label: 'SCALING', color: INDIGO },
      { x: 470, y: 58, label: 'DESIGN', color: TEAL },
    ].map((v, i) => (
      <g key={i}>
        {/* Hex node */}
        <polygon
          points={`${v.x},${v.y - 14} ${v.x + 12},${v.y - 7} ${v.x + 12},${v.y + 7} ${v.x},${v.y + 14} ${v.x - 12},${v.y + 7} ${v.x - 12},${v.y - 7}`}
          fill="rgba(10,14,28,0.85)"
          stroke={`${v.color}50`}
          strokeWidth="1"
        />
        <circle cx={v.x} cy={v.y} r="3" fill={v.color} opacity="0.6" />
        <text x={v.x} y={v.y + 28} textAnchor="middle" fill={v.color} fontSize="7" fontWeight="700" fontFamily="Inter" opacity="0.7">{v.label}</text>
      </g>
    ))}
    {/* Data dots flowing along path */}
    {Array.from({ length: 25 }).map((_, i) => (
      <circle key={i} cx={24 + i * 23} cy={70 + Math.sin(i * 0.7) * 12} r="0.8" fill={`${BLUE_GLOW}0.2)`} />
    ))}
  </svg>
);

/* ─── Stats ─── */
const stats = [
  { value: '200+', label: 'Contracts Audited', color: BLUE, icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { value: '100K+', label: 'Community Members', color: CYAN, icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { value: '30+', label: 'Exchange Listings', color: INDIGO, icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { value: '99.9%', label: 'Uptime Guarantee', color: TEAL, icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' },
];

/* ─── Main Team Page ─── */
export default function TeamPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen relative overflow-hidden">
      <MeshBackground variant="cool" />

      {/* Extra blue ambient glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full filter blur-[150px]" style={{ background: `${BLUE_GLOW}0.06)` }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full filter blur-[130px]" style={{ background: `rgba(0,212,255,0.04)` }} />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full filter blur-[120px]" style={{ background: `rgba(123,97,255,0.04)` }} />
      </div>

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative z-10 pt-20 pb-8 lg:pt-28 lg:pb-12 px-6">
        {/* Decorative side lines */}
        <div className="absolute left-8 top-32 bottom-32 w-px hidden lg:block" style={{ background: `linear-gradient(to bottom, transparent, ${BLUE_GLOW}0.2), transparent)` }} />
        <div className="absolute right-8 top-32 bottom-32 w-px hidden lg:block" style={{ background: `linear-gradient(to bottom, transparent, rgba(0,212,255,0.15), transparent)` }} />

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ border: `1px solid ${BLUE_GLOW}0.2)`, background: `${BLUE_GLOW}0.05)` }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: BLUE }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: BLUE_LIGHT }}>Meet The Team</span>
          </motion.div>

          <AnimatedText
            text="The Ulyg Elite Squad"
            el="h1"
            className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-4 gradient-text-gold text-glow"
          />
          <AnimatedText
            text="Engineers. Strategists. Innovators."
            el="div"
            className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight gradient-text-premium mt-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            A world-class team of blockchain architects, security experts, and growth strategists working around the clock to build the future of decentralized finance.
          </motion.p>
        </div>

        {/* Hero Constellation Graphic */}
        <motion.div style={{ y: parallaxY }}>
          <HeroTeamGraphic />
        </motion.div>
      </section>

      {/* ═══ EXPERTISE FLOW DIVIDER ═══ */}
      <section className="relative z-10 py-4 px-6 max-w-5xl mx-auto">
        <AnimatedOnScroll>
          <ExpertiseGraphic />
        </AnimatedOnScroll>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="relative z-10 py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <AnimatedOnScroll key={i}>
                <motion.div
                  className="card-premium rounded-2xl p-5 text-center relative overflow-hidden group"
                  whileHover={{ scale: 1.04, transition: { type: 'spring', stiffness: 400 } }}
                >
                  {/* Scan line on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                    <div className="w-full h-8 bg-gradient-to-b from-transparent to-transparent" style={{ background: `linear-gradient(to bottom, transparent, ${BLUE_GLOW}0.05), transparent)`, animation: 'scanLine 2s linear infinite' }} />
                  </div>
                  {/* Icon */}
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg flex items-center justify-center" style={{ background: `${stat.color}12` }}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={stat.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={stat.icon} />
                    </svg>
                  </div>
                  <div className="text-2xl md:text-3xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION HEADER ═══ */}
      <section className="relative z-10 py-8 px-6 text-center">
        <AnimatedOnScroll>
          <div className="section-divider max-w-md mx-auto mb-8" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ border: `1px solid rgba(0,212,255,0.2)`, background: `rgba(0,212,255,0.05)` }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: CYAN }}>Core Team</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight gradient-text-gold mb-3">
            The Masterminds
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm md:text-base">
            Each member brings deep expertise in their domain. Together, they architect the future of $ULGD.
          </p>
        </AnimatedOnScroll>
      </section>

      {/* ═══ TEAM GRID ═══ */}
      <section className="container mx-auto px-6 lg:px-8 pb-16 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, i) => (
            <AnimatedOnScroll key={i}>
              <motion.div
                className="card-premium rounded-2xl p-6 md:p-8 text-center relative overflow-hidden group"
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                {/* Hover radial glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${member.color}12 0%, transparent 60%)` }}
                />

                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-24" style={{ background: `linear-gradient(90deg, transparent, ${member.color}, transparent)` }} />

                {/* Avatar with icon */}
                <motion.div
                  className="w-24 h-24 md:w-28 md:h-28 rounded-2xl mx-auto mb-6 flex items-center justify-center relative"
                  style={{ background: `${member.color}06`, border: `1px solid ${member.color}18` }}
                  whileHover={{ rotate: [0, -3, 3, 0], transition: { duration: 0.5 } }}
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 rounded-2xl blur-2xl opacity-15 group-hover:opacity-35 transition-opacity duration-500" style={{ background: member.color }} />
                  {/* Orbiting ring */}
                  <motion.div
                    className="absolute inset-[-8px] rounded-2xl border border-dashed opacity-15 group-hover:opacity-35 transition-opacity"
                    style={{ borderColor: member.color }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                  {/* Icon */}
                  <div className="relative z-10 w-14 h-14 md:w-16 md:h-16">
                    <MemberIcon icon={member.icon} color={member.color} />
                  </div>
                  {/* Corner dots */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full" style={{ background: member.color, opacity: 0.35 }} />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full" style={{ background: member.color, opacity: 0.35 }} />
                </motion.div>

                {/* Member info */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 tracking-tight">{member.name}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: member.color }}>{member.role}</p>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{member.bio}</p>

                {/* Bottom decorative bar */}
                <div className="mt-5 flex items-center justify-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <motion.div
                      key={j}
                      className="rounded-full"
                      style={{
                        width: j === 2 ? '16px' : '4px',
                        height: '3px',
                        background: j === 2 ? member.color : `${member.color}25`,
                      }}
                      whileHover={{ width: '16px' }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatedOnScroll>
          ))}
        </div>
      </section>

      {/* ═══ JOIN THE TEAM CTA ═══ */}
      <section className="relative z-10 py-20 px-6">
        <AnimatedOnScroll>
          <div className="container mx-auto max-w-3xl text-center">
            <div className="section-divider max-w-md mx-auto mb-12" />

            {/* CTA Graphic with Lottie Animation */}
            <motion.div
              className="relative w-56 h-56 mx-auto mb-10"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            >
              {/* Overlay SVG decoration */}
              <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                <defs>
                  <radialGradient id="ctaGlowB" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={`${BLUE_GLOW}0.2)`} />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                  <linearGradient id="ctaLineB" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={BLUE} />
                    <stop offset="50%" stopColor={CYAN} />
                    <stop offset="100%" stopColor={INDIGO} />
                  </linearGradient>
                  <filter id="ctaGlowFilter">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <circle cx="100" cy="100" r="90" fill="url(#ctaGlowB)" />
                <motion.circle
                  cx="100" cy="100" r="75"
                  fill="none"
                  stroke="url(#ctaLineB)"
                  strokeWidth="0.6"
                  strokeDasharray="4 8"
                  filter="url(#ctaGlowFilter)"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: 'center' }}
                />
                <motion.circle
                  cx="100" cy="100" r="55"
                  fill="none"
                  stroke={`${BLUE_GLOW}0.15)`}
                  strokeWidth="1"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: 'center' }}
                />
                {/* Orbital dots with animation */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, j) => (
                  <motion.circle
                    key={j}
                    cx={100 + 78 * Math.cos((deg * Math.PI) / 180)}
                    cy={100 + 78 * Math.sin((deg * Math.PI) / 180)}
                    r="3"
                    fill={j % 3 === 0 ? `${BLUE_GLOW}0.5)` : j % 3 === 1 ? 'rgba(0,212,255,0.4)' : 'rgba(123,97,255,0.4)'}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: j * 0.2 }}
                  />
                ))}
              </svg>
              {/* Animated pulse rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: `2px solid ${BLUE_GLOW}0.15)` }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-[-15px] rounded-full"
                style={{ border: `1px solid rgba(0,212,255,0.1)` }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight gradient-text-gold mb-4">
              Join Our Mission
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8 text-sm md:text-base leading-relaxed">
              We are building the next generation of decentralized technology. Whether you are an engineer, a designer, or a visionary - the future needs you.
            </p>
            <motion.a
              href="/community"
              className="btn-premium inline-block shimmer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Join the Community
            </motion.a>
          </div>
        </AnimatedOnScroll>
      </section>

      {/* ═══ Floating corner decorations ═══ */}
      <div className="fixed top-20 left-4 w-32 h-32 pointer-events-none z-0 opacity-25 hidden lg:block">
        <motion.svg viewBox="0 0 100 100" className="w-full h-full" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}>
          <circle cx="50" cy="50" r="45" fill="none" stroke={`${BLUE_GLOW}0.12)`} strokeWidth="0.5" strokeDasharray="2 6" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(0,212,255,0.08)" strokeWidth="0.5" strokeDasharray="3 5" />
        </motion.svg>
      </div>
      <div className="fixed bottom-20 right-4 w-24 h-24 pointer-events-none z-0 opacity-20 hidden lg:block">
        <motion.svg viewBox="0 0 80 80" className="w-full h-full" animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}>
          {/* Hexagonal decoration */}
          <polygon points="40,5 70,22 70,58 40,75 10,58 10,22" fill="none" stroke={`${BLUE_GLOW}0.1)`} strokeWidth="0.5" strokeDasharray="3 4" />
          <polygon points="40,15 60,27 60,53 40,65 20,53 20,27" fill="none" stroke="rgba(123,97,255,0.08)" strokeWidth="0.5" strokeDasharray="2 5" />
        </motion.svg>
      </div>
    </div>
  );
}
