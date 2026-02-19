"use client";

import { motion, type Variants } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import MeshBackground from '@/components/MeshBackground';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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


/* ---- Large Hero Graphic: Dog in Space Suit on Moon ---- */
const HeroGraphic = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <motion.div
      onClick={handleClick}
      animate={{ y: isClicked ? [0, -20, 0] : 0 }} // Up and down animation
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ cursor: 'pointer' }} // Indicate it's clickable
    >
      <DotLottieReact
        src="https://lottie.host/80a0680d-82d6-448e-8a0a-0158a25c1619/f2o0hTf4X2.json"
        loop
        autoplay
        className="w-full h-full pointer-events-none"
      />
    </motion.div>
  );
};
  // <img src="https://picsum.photos/520/520" alt="Hero Graphic" />
  // <svg viewBox="0 0 520 520" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
  //   <defs>
  //     <linearGradient id="hSuit" x1="0" y1="0" x2="0" y2="1">
  //       <stop offset="0%" stopColor="#98F5FF"/>
  //       <stop offset="100%" stopColor="#5CE0FF"/>
  //     </linearGradient>
  //     <linearGradient id="hVisor" x1="0" y1="0" x2="1" y2="1">
  //       <stop offset="0%" stopColor="#60a5fa"/>
  //       <stop offset="50%" stopColor="#3b82f6"/>
  //       <stop offset="100%" stopColor="#1d4ed8"/>
  //     </linearGradient>
  //     <linearGradient id="hFlame" x1="0" y1="0" x2="0" y2="1">
  //       <stop offset="0%" stopColor="#2ECBFF"/>
  //       <stop offset="50%" stopColor="#B8A9FF"/>
  //       <stop offset="100%" stopColor="#B8A9FF"/>
  //     </linearGradient>
  //     <radialGradient id="hGlow" cx="50%" cy="40%" r="50%">
  //       <stop offset="0%" stopColor="rgba(152,245,255,0.25)"/>
  //       <stop offset="100%" stopColor="transparent"/>
  //     </radialGradient>
  //     <radialGradient id="hMoon" cx="40%" cy="35%" r="60%">
  //       <stop offset="0%" stopColor="#3a3a4a"/>
  //       <stop offset="100%" stopColor="#1a1a24"/>
  //     </radialGradient>
  //     <filter id="hSoftGlow">
  //       <feGaussianBlur stdDeviation="6" result="blur"/>
  //       <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  //     </filter>
  //     <filter id="hStarGlow">
  //       <feGaussianBlur stdDeviation="2" result="blur"/>
  //       <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  //     </filter>
  //   </defs>
  //   {/* Space background glow */}
  //   <circle cx="260" cy="220" r="220" fill="url(#hGlow)"/>
  //   {/* Stars scattered */}
  //   {[[70,40,2.5],[430,55,2],[90,140,1.5],[450,170,2],[55,280,1.5],[460,300,1],[180,30,1],[380,35,2.5],[140,420,2],[400,440,1.5],[30,380,1],[490,380,2]].map(([cx,cy,r], i) => (
  //     <circle key={i} cx={cx} cy={cy} r={r} fill={i%3===0?"#98F5FF":i%3===1?"#B8A9FF":"#FFB8D9"} opacity={0.3+((i%4)*0.15)} filter="url(#hStarGlow)"/>
  //   ))}
  //   {/* Twinkling cross stars */}
  //   {[[120,80,"#98F5FF"],[400,120,"#B8A9FF"],[80,350,"#FFB8D9"]].map(([x,y,c], i) => (
  //     <g key={`cs${i}`}>
  //       <line x1={Number(x)-8} y1={Number(y)} x2={Number(x)+8} y2={Number(y)} stroke={String(c)} strokeWidth="1" opacity="0.4"/>
  //       <line x1={Number(x)} y1={Number(y)-8} x2={Number(x)} y2={Number(y)+8} stroke={String(c)} strokeWidth="1" opacity="0.4"/>
  //     </g>
  //   ))}
  //   {/* Moon surface */}
  //   <ellipse cx="260" cy="430" rx="200" ry="60" fill="url(#hMoon)"/>
  //   <circle cx="200" cy="420" r="15" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
  //   <circle cx="310" cy="435" r="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
  //   <circle cx="170" cy="440" r="8" fill="rgba(255,255,255,0.02)"/>
  //   <circle cx="350" cy="425" r="12" fill="rgba(255,255,255,0.015)"/>
  //   {/* ULGD Flag on moon */}
  //   <line x1="360" y1="310" x2="360" y2="410" stroke="#70D4E5" strokeWidth="2"/>
  //   <rect x="362" y="312" width="50" height="32" rx="2" fill="rgba(152,245,255,0.2)" stroke="#98F5FF" strokeWidth="1"/>
  //   <text x="387" y="333" textAnchor="middle" fill="#98F5FF" fontSize="11" fontWeight="800" fontFamily="Inter, sans-serif">ULGD</text>
  //   {/* Dog astronaut body */}
  //   <ellipse cx="220" cy="330" rx="55" ry="65" fill="url(#hSuit)" filter="url(#hSoftGlow)" opacity="0.9"/>
  //   {/* Suit details */}
  //   <rect x="195" y="360" width="20" height="35" rx="8" fill="#70D4E5" stroke="#5ABDC9" strokeWidth="1"/>
  //   <rect x="225" y="360" width="20" height="35" rx="8" fill="#70D4E5" stroke="#5ABDC9" strokeWidth="1"/>
  //   {/* Backpack/jetpack */}
  //   <rect x="172" y="300" width="20" height="45" rx="6" fill="#7DE8F5" stroke="#70D4E5" strokeWidth="1"/>
  //   <circle cx="182" cy="310" r="3" fill="#2ECBFF" opacity="0.8"/>
  //   <circle cx="182" cy="325" r="3" fill="#2ECBFF" opacity="0.6"/>
  //   {/* Jetpack flame */}
  //   <path d="M175 345 Q178 370 182 385 Q186 370 189 345 Z" fill="url(#hFlame)" opacity="0.7"/>
  //   <path d="M178 345 Q180 362 182 372 Q184 362 186 345 Z" fill="#98F5FF" opacity="0.5"/>
  //   {/* Helmet */}
  //   <circle cx="220" cy="270" r="50" fill="rgba(197,250,255,0.15)" stroke="rgba(152,245,255,0.5)" strokeWidth="2"/>
  //   {/* Visor */}
  //   <ellipse cx="220" cy="268" rx="38" ry="36" fill="url(#hVisor)" opacity="0.85"/>
  //   {/* Visor reflection */}
  //   <path d="M195 250 Q205 240 225 245" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
  //   {/* Dog face inside visor */}
  //   <ellipse cx="220" cy="272" rx="25" ry="22" fill="#C5FAFF"/>
  //   {/* Ears poking inside helmet */}
  //   <path d="M200 255 Q193 240 207 248 Z" fill="#7BB8C4"/>
  //   <path d="M240 255 Q247 240 233 248 Z" fill="#7BB8C4"/>
  //   {/* Eyes - wonky */}
  //   <circle cx="210" cy="265" r="5" fill="#fff"/><circle cx="212" cy="267" r="2" fill="#111"/>
  //   <circle cx="232" cy="268" r="6" fill="#fff"/><circle cx="230" cy="270" r="2" fill="#111"/>
  //   {/* Nose */}
  //   <ellipse cx="220" cy="280" rx="3.5" ry="3" fill="#111"/>
  //   {/* Mouth & tongue */}
  //   <path d="M210 288 Q220 296 230 288" stroke="#111" strokeWidth="1.2" fill="none"/>
  //   <path d="M220 288 Q223 295 221 300 Q218 297 220 289 Z" fill="#FF69B4"/>
  //   {/* Ugly spots */}
  //   <circle cx="207" cy="275" r="1.5" fill="#5E9BA8" opacity="0.6"/>
  //   <circle cx="233" cy="278" r="1" fill="#5E9BA8" opacity="0.6"/>
  //   {/* Arms */}
  //   <path d="M165 310 Q140 320 130 340" stroke="#70D4E5" strokeWidth="10" fill="none" strokeLinecap="round"/>
  //   <circle cx="128" cy="342" r="8" fill="#7DE8F5" stroke="#70D4E5" strokeWidth="1"/>
  //   <path d="M275 310 Q300 320 310 340" stroke="#70D4E5" strokeWidth="10" fill="none" strokeLinecap="round"/>
  //   <circle cx="312" cy="342" r="8" fill="#7DE8F5" stroke="#70D4E5" strokeWidth="1"/>
  //   {/* Waving hand holding coin */}
  //   <circle cx="128" cy="342" r="14" fill="rgba(152,245,255,0.2)" stroke="#98F5FF" strokeWidth="1.5"/>
  //   <text x="128" y="347" textAnchor="middle" fill="#98F5FF" fontSize="10" fontWeight="800" fontFamily="Inter">$</text>
  //   {/* Orbit ring around dog */}
  //   <ellipse cx="220" cy="320" rx="120" ry="30" fill="none" stroke="rgba(152,245,255,0.12)" strokeWidth="1" strokeDasharray="6 4"/>
  //   {/* Small orbiting token */}
  //   <circle cx="340" cy="315" r="8" fill="rgba(152,245,255,0.25)" stroke="#98F5FF" strokeWidth="1"/>
  //   <text x="340" y="318" textAnchor="middle" fill="#98F5FF" fontSize="7" fontWeight="700">U</text>
  //   {/* Nebula clouds */}
  //   <ellipse cx="80" cy="180" rx="50" ry="20" fill="rgba(184,169,255,0.06)"/>
  //   <ellipse cx="440" cy="220" rx="40" ry="15" fill="rgba(255,184,217,0.05)"/>
  // </svg>

/* ---- Feature Section Graphics ---- */
const SupplyGraphic = () => (
  <DotLottieReact
    src="https://lottie.host/9c333066-512c-473d-8380-6927d6d1d4d0/vQ9x5gQ103.lottie"
    loop
    autoplay
    className="w-full h-full"
  />
  // <img src="https://picsum.photos/120/120" alt="Supply Graphic" />
  // <svg viewBox="0 0 120 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
  //   <radialGradient id="sg1" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(152,245,255,0.2)"/><stop offset="100%" stopColor="transparent"/></radialGradient>
  //   <circle cx="60" cy="60" r="55" fill="url(#sg1)"/>
  //   <circle cx="60" cy="60" r="38" fill="rgba(17,17,24,0.8)" stroke="#98F5FF" strokeWidth="2"/>
  //   <text x="60" y="55" textAnchor="middle" fill="#98F5FF" fontSize="16" fontWeight="900" fontFamily="Inter">1B</text>
  //   <text x="60" y="72" textAnchor="middle" fill="rgba(152,245,255,0.5)" fontSize="7" fontFamily="Inter">TOKENS</text>
  //   {/* Stacked coins below */}
  //   <ellipse cx="60" cy="95" rx="18" ry="5" fill="rgba(152,245,255,0.15)" stroke="rgba(152,245,255,0.3)" strokeWidth="0.5"/>
  //   <ellipse cx="60" cy="90" rx="18" ry="5" fill="rgba(152,245,255,0.2)" stroke="rgba(152,245,255,0.3)" strokeWidth="0.5"/>
  //   <ellipse cx="60" cy="85" rx="18" ry="5" fill="rgba(152,245,255,0.25)" stroke="rgba(152,245,255,0.4)" strokeWidth="0.5"/>
  // </svg>
);

const ZeroTaxGraphic = () => (
  <DotLottieReact
    src="https://lottie.host/e06b9777-6d65-4f27-a06f-40e15998797f/fQ9x5gQ103.lottie"
    loop
    autoplay
    className="w-full h-full"
  />
  // <img src="https://picsum.photos/120/120" alt="Zero Tax Graphic" />
  // <svg viewBox="0 0 120 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
  //   <radialGradient id="zt1" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(168,255,212,0.2)"/><stop offset="100%" stopColor="transparent"/></radialGradient>
  //   <circle cx="60" cy="60" r="55" fill="url(#zt1)"/>
  //   <circle cx="60" cy="55" r="38" fill="rgba(17,17,24,0.8)" stroke="#A8FFD4" strokeWidth="2"/>
  //   <text x="60" y="50" textAnchor="middle" fill="#A8FFD4" fontSize="22" fontWeight="900" fontFamily="Inter">0%</text>
  //   <text x="60" y="67" textAnchor="middle" fill="rgba(168,255,212,0.5)" fontSize="7" fontFamily="Inter">BUY/SELL TAX</text>
  //   {/* Shield shape */}
  //   <path d="M60 80 L45 88 Q60 105 75 88 Z" fill="rgba(168,255,212,0.12)" stroke="rgba(168,255,212,0.3)" strokeWidth="0.8"/>
  //   <path d="M55 92 L58 96 L66 88" fill="none" stroke="#A8FFD4" strokeWidth="1.5" strokeLinecap="round"/>
  // </svg>
);

const CommunityGraphicSmall = () => (
  <DotLottieReact
    src="https://lottie.host/79010375-7f28-4394-a130-9b882f059293/c06g9pQ103.lottie"
    loop
    autoplay
    className="w-full h-full"
  />
  // <img src="https://picsum.photos/120/120" alt="Community Graphic" />
  // <svg viewBox="0 0 120 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
  //   <radialGradient id="cg1" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(184,169,255,0.2)"/><stop offset="100%" stopColor="transparent"/></radialGradient>
  //   <circle cx="60" cy="60" r="55" fill="url(#cg1)"/>
  //   {/* Central person */}
  //   <circle cx="60" cy="42" r="8" fill="rgba(184,169,255,0.3)" stroke="#B8A9FF" strokeWidth="1.2"/>
  //   <path d="M45 62 Q45 52 60 50 Q75 52 75 62" fill="rgba(184,169,255,0.2)" stroke="#B8A9FF" strokeWidth="1"/>
  //   {/* Left person */}
  //   <circle cx="30" cy="55" r="6" fill="rgba(152,245,255,0.25)" stroke="#5CE0FF" strokeWidth="0.8"/>
  //   <path d="M20 70 Q20 63 30 61 Q40 63 40 70" fill="rgba(152,245,255,0.15)" stroke="#5CE0FF" strokeWidth="0.8"/>
  //   {/* Right person */}
  //   <circle cx="90" cy="55" r="6" fill="rgba(255,184,217,0.25)" stroke="#FFB8D9" strokeWidth="0.8"/>
  //   <path d="M80 70 Q80 63 90 61 Q100 63 100 70" fill="rgba(255,184,217,0.15)" stroke="#FFB8D9" strokeWidth="0.8"/>
  //   {/* Connection lines */}
  //   <line x1="42" y1="50" x2="52" y2="48" stroke="rgba(152,245,255,0.2)" strokeWidth="0.8" strokeDasharray="2 2"/>
  //   <line x1="68" y1="48" x2="83" y2="50" stroke="rgba(255,184,217,0.2)" strokeWidth="0.8" strokeDasharray="2 2"/>
  //   {/* More tiny people at bottom */}
  //   {[[35,82],[50,88],[60,85],[70,88],[85,82]].map(([x,y],i)=>(
  //     <g key={i}><circle cx={x} cy={y-6} r="3" fill={`rgba(255,255,255,${0.08+i*0.02})`}/><path d={`M${x-4} ${y} Q${x-4} ${y-4} ${x} ${y-5} Q${x+4} ${y-4} ${x+4} ${y}`} fill={`rgba(255,255,255,${0.05+i*0.02})`}/></g>
  //   ))}
  //   <text x="60" y="108" textAnchor="middle" fill="rgba(184,169,255,0.5)" fontSize="6.5" fontFamily="Inter" fontWeight="600">COMMUNITY</text>
  // </svg>
);

/* ---- Stats Section Illustration ---- */
const StatsGraphic = () => (
  <DotLottieReact
    src="https://lottie.host/ebbf6774-6014-41d3-a442-9f37c35a828e/M5pW3gQ103.lottie"
    loop
    autoplay
    className="w-full h-full"
  />
  // <img src="https://picsum.photos/500/200" alt="Stats Graphic" />
  // <svg viewBox="0 0 500 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
  //   <defs>
  //     <linearGradient id="bar1" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#98F5FF"/><stop offset="100%" stopColor="rgba(152,245,255,0.3)"/></linearGradient>
  //     <linearGradient id="bar2" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#5CE0FF"/><stop offset="100%" stopColor="rgba(152,245,255,0.3)"/></linearGradient>
  //     <linearGradient id="bar3" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#B8A9FF"/><stop offset="100%" stopColor="rgba(184,169,255,0.3)"/></linearGradient>
  //   </defs>
  //   {/* Bars */}
  //   <rect x="80" y="60" width="40" height="120" rx="4" fill="url(#bar1)" opacity="0.4"/>
  //   <rect x="160" y="30" width="40" height="150" rx="4" fill="url(#bar2)" opacity="0.4"/>
  //   <rect x="240" y="80" width="40" height="100" rx="4" fill="url(#bar3)" opacity="0.4"/>
  //   <rect x="320" y="45" width="40" height="135" rx="4" fill="url(#bar1)" opacity="0.3"/>
  //   <rect x="400" y="20" width="40" height="160" rx="4" fill="url(#bar2)" opacity="0.35"/>
  //   {/* Trend line */}
  //   <path d="M100 65 L180 35 L260 85 L340 50 L420 25" fill="none" stroke="#98F5FF" strokeWidth="2" opacity="0.6" strokeLinecap="round"/>
  //   {/* Dots on line */}
  //   <circle cx="100" cy="65" r="4" fill="#98F5FF" opacity="0.8"/>
  //   <circle cx="180" cy="35" r="4" fill="#98F5FF" opacity="0.8"/>
  //   <circle cx="260" cy="85" r="4" fill="#98F5FF" opacity="0.8"/>
  //   <circle cx="340" cy="50" r="4" fill="#98F5FF" opacity="0.8"/>
  //   <circle cx="420" cy="25" r="4" fill="#98F5FF" opacity="0.8"/>
  //   {/* Arrow going up */}
  //   <path d="M430 30 L445 15 L440 25 L450 22" fill="none" stroke="#A8FFD4" strokeWidth="2" strokeLinecap="round"/>
  //   {/* Base line */}
  //   <line x1="60" y1="180" x2="460" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
  // </svg>
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
                    <DotLottieReact
                      src={`https://lottie.host/80a0680d-82d6-448e-8a0a-0158a25c1619/f2o0hTf4X2.json`}
                      loop
                      autoplay
                      className="w-full h-full pointer-events-none"
                    />        {/* <img src={`https://picsum.photos/${size}/${size}?random=${i}`} alt="Floating Hexagon" className="w-full h-full object-cover" /> */}
        {/* <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none"
            stroke={i % 3 === 0 ? "rgba(152,245,255,0.15)" : i % 3 === 1 ? "rgba(184,169,255,0.12)" : "rgba(255,184,217,0.1)"}
            strokeWidth="1"
          />
        </svg> */}
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
        <DotLottieReact
          src={`https://lottie.host/e06b9777-6d65-4f27-a06f-40e15998797f/fQ9x5gQ103.lottie`}
          loop
          autoplay
          className="w-full h-full"
        />
        {/* <img src={`https://picsum.photos/${size}/${size}?random=${i + 10}`} alt="Floating Diamond" className="w-full h-full object-cover" /> */}
        {/* <div className="w-full h-full border border-[rgba(152,245,255,0.08)] rotate-45" /> */}
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
          background: i % 2 === 0 ? "rgba(152,245,255,0.06)" : "rgba(184,169,255,0.05)",
          border: "1px solid rgba(152,245,255,0.1)"
        }}
        animate={{
          y: [0, -25 - i * 5, 0],
          x: [0, i % 2 === 0 ? 10 : -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
      >
        <DotLottieReact
          src={`https://lottie.host/79010375-7f28-4394-a130-9b882f059293/c06g9pQ103.lottie`}
          loop
          autoplay
          className="w-full h-full rounded-full"
        />
        {/* <img src={`https://picsum.photos/${size}/${size}?random=${i + 20}`} alt="Floating Circle" className="w-full h-full object-cover rounded-full" /> */}
      </motion.div>
    ))}
  </>
);

/* ---- Liquid Wave Divider ---- */
const LiquidWaveDivider = () => (
  <div className="relative z-10 w-full h-20 overflow-hidden">
    <DotLottieReact
      src="https://lottie.host/80a0680d-82d6-448e-8a0a-0158a25c1619/f2o0hTf4X2.json" // Placeholder Lottie URL
      loop
      autoplay
      className="w-full h-full"
    />
    {/* <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(152,245,255,0.15)" />
          <stop offset="50%" stopColor="rgba(184,169,255,0.1)" />
          <stop offset="100%" stopColor="rgba(152,245,255,0.15)" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,60 C150,20 350,100 500,60 L500,100 L0,100 Z"
        fill="url(#waveGrad)"
        animate={{
          d: [
            "M0,60 C150,20 350,100 500,60 L500,100 L0,100 Z",
            "M0,60 C150,100 350,20 500,60 L500,100 L0,100 Z",
            "M0,60 C150,20 350,100 500,60 L500,100 L0,100 Z"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,70 C200,40 300,90 500,70 L500,100 L0,100 Z"
        fill="rgba(92,224,255,0.05)"
        animate={{
          d: [
            "M0,70 C200,40 300,90 500,70 L500,100 L0,100 Z",
            "M0,70 C200,90 300,40 500,70 L500,100 L0,100 Z",
            "M0,70 C200,40 300,90 500,70 L500,100 L0,100 Z"
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </svg> */}
  </div>
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

      <MeshBackground variant="warm" />

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
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 gradient-text-gold text-glow leading-[0.95]"
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
                style={{ borderColor: 'rgba(92,224,255,0.4)', color: '#98F5FF' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(152,245,255,0.1)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                whileHover={{ scale: 1.05, borderColor: "rgba(152,245,255,0.6)" }}
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
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter gradient-text-gold mb-4">Why ULGD?</h2>
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
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#98F5FF' }}>{feat.title}</h3>
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
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ color: '#98F5FF', background: 'rgba(152,245,255,0.1)', border: '1px solid rgba(152,245,255,0.2)' }}>
                UGLYNOMICS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text-gold mb-4">The Ugly Truth in Numbers</h2>
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
                    <div className="text-xl font-bold" style={{ color: '#98F5FF' }}>{stat.val}</div>
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter gradient-text-gold mb-6">Ready to Get Ugly?</h2>
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
                  style={{ borderColor: 'rgba(184,169,255,0.4)', color: '#B8A9FF' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(184,169,255,0.1)' }}
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

      <div className="h-px bg-gradient-to-r from-transparent to-transparent" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(152,245,255,0.2), transparent)' }} />
    </motion.div>
  );
}
