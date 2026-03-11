"use client";

import AnimatedText from '@/components/AnimatedText';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import MeshBackground from '@/components/MeshBackground';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* ---- Floating Particles ---- */
const FloatingParticles = () => (
  <>
    {[[5, 15, 14], [90, 12, 10], [8, 78, 12], [88, 72, 8], [48, 8, 10]].map(([left, top, size], i) => (
      <motion.div
        key={`p-${i}`}
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          background: i % 3 === 0 ? 'rgba(152,245,255,0.2)' : i % 3 === 1 ? 'rgba(184,169,255,0.15)' : 'rgba(92,224,255,0.12)',
          boxShadow: `0 0 ${size * 2}px rgba(184,169,255,0.3)`,
        }}
        animate={{
          y: [0, -20 - i * 3, 0],
          x: [0, i % 2 === 0 ? 10 : -10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5 + i * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.3,
        }}
      />
    ))}
  </>
);

const socialLinks = [
  {
    name: 'Twitter (X)',
    desc: 'Follow for the latest updates, memes, and community announcements',
    link: 'https://twitter.com',
    color: '#98F5FF',
    icon: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    name: 'Telegram',
    desc: 'Join the real-time chat with thousands of ULGD holders worldwide',
    link: 'https://telegram.org',
    color: '#5CE0FF',
    icon: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
  },
  {
    name: 'Discord',
    desc: 'Dive into channels for memes, alpha, dev updates, and community events',
    link: 'https://discord.com',
    color: '#2ECBFF',
    icon: 'M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z',
  },
];

/* Community Graphic - SVG Illustration */
const CommunityGraphic = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <radialGradient id="commGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(152,245,255,0.2)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
      <linearGradient id="commGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#98F5FF"/>
        <stop offset="50%" stopColor="#5CE0FF"/>
        <stop offset="100%" stopColor="#B8A9FF"/>
      </linearGradient>
    </defs>
    
    {/* Background glow */}
    <circle cx="200" cy="150" r="120" fill="url(#commGlow)"/>
    
    {/* Central network hub */}
    <circle cx="200" cy="150" r="30" fill="rgba(152,245,255,0.15)" stroke="url(#commGrad)" strokeWidth="2"/>
    <circle cx="200" cy="150" r="15" fill="url(#commGrad)"/>
    
    {/* Outer connected nodes */}
    {[0, 72, 144, 216, 288].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = 200 + 80 * Math.cos(rad);
      const y = 150 + 80 * Math.sin(rad);
      return (
        <g key={i}>
          {/* Connection line */}
          <line x1="200" y1="150" x2={x} y2={y} stroke="rgba(152,245,255,0.3)" strokeWidth="1.5" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite"/>
          </line>
          {/* Node circle */}
          <circle cx={x} cy={y} r="18" fill="rgba(152,245,255,0.1)" stroke={`rgba(152,245,255,${0.3 + (i * 0.1)})`} strokeWidth="1.5"/>
          <circle cx={x} cy={y} r="8" fill={`rgba(152,245,255,${0.4 + (i * 0.1)})`}>
            <animate attributeName="r" values="8;10;8" dur={`${2 + i * 0.5}s`} repeatCount="indefinite"/>
          </circle>
          {/* User icon in node */}
          <circle cx={x} cy={y - 2} r="3" fill="white" opacity="0.8"/>
          <path d={`M ${x - 5} ${y + 8} Q ${x} ${y + 3} ${x + 5} ${y + 8}`} fill="none" stroke="white" strokeWidth="1.5" opacity="0.8"/>
        </g>
      );
    })}
    
    {/* Orbiting ring */}
    <ellipse cx="200" cy="150" rx="100" ry="40" fill="none" stroke="rgba(152,245,255,0.15)" strokeWidth="1" transform="rotate(-30, 200, 150)">
      <animateTransform attributeName="transform" type="rotate" from="-30 200 150" to="330 200 150" dur="20s" repeatCount="indefinite"/>
    </ellipse>
    
    {/* Floating particles */}
    {[60, 140, 260, 340].map((cx, i) => (
      <circle key={i} cx={cx} cy={100 + (i % 2) * 40} r="2" fill="rgba(152,245,255,0.6)">
        <animate attributeName="cy" values={`${100 + (i % 2) * 40};${80 + (i % 2) * 30};${100 + (i % 2) * 40}`} dur={`${3 + i}s`} repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur={`${2 + i * 0.5}s`} repeatCount="indefinite"/>
      </circle>
    ))}
    
    {/* Text label */}
    <text x="200" y="260" textAnchor="middle" fill="rgba(152,245,255,0.6)" fontSize="12" fontFamily="Inter" letterSpacing="2">COMMUNITY</text>
  </svg>
);

export default function CommunityPage() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <MeshBackground variant="purple" />

      {/* Aurora Background */}
      <div className="aurora-bg absolute inset-0 pointer-events-none z-0" />

      {/* Floating Particles */}
      <FloatingParticles />

      <div className="text-center py-20 lg:py-28 relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <AnimatedText
            text="Join the Ulyg Pack"
            el="h1"
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 gradient-text-gold text-glow"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <AnimatedText
            text="Connect with the ULGD Community"
            el="div"
            className="text-xl md:text-2xl font-bold tracking-tight mb-4 gradient-text-premium mt-4"
          />
        </motion.div>
        <motion.p
          className="text-lg text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Our community is where the magic happens. Join thousands of ULGD holders connecting across multiple platforms.
        </motion.p>

        {/* Animated decorative line */}
        <motion.div
          className="w-32 h-1 mx-auto mt-8 rounded-full"
          style={{ background: 'linear-gradient(90deg, #98F5FF, #B8A9FF, #FFB8D9)' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />
      </div>

      {/* Community Network Graphic */}
      <div className="container mx-auto px-6 max-w-md relative z-10 mb-10">
        <motion.div
          className="holo-shine rounded-3xl p-4 card-premium"
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <CommunityGraphic />
          </motion.div>
        </motion.div>
      </div>

      {/* Social Cards */}
      <div className="container mx-auto px-6 lg:px-8 pb-20 max-w-5xl relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {socialLinks.map((social, i) => (
            <AnimatedOnScroll key={i}>
              <Link href={social.link} target="_blank">
                <motion.div
                  className="card-premium rounded-2xl p-8 text-center h-full group cursor-pointer"
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center relative" style={{ background: `${social.color}10`, border: `1px solid ${social.color}25` }}>
                      <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `${social.color}15` }} />
                      <svg className="w-7 h-7 relative z-10" viewBox="0 0 24 24" fill={social.color}>
                        <path d={social.icon} />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{social.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{social.desc}</p>
                  <span className="text-xs font-semibold transition-colors" style={{ color: 'rgba(152,245,255,0.6)' }}>
                    Join the Pack
                  </span>
                </motion.div>
              </Link>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
