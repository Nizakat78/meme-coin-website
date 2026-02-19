"use client";

import AnimatedText from '@/components/AnimatedText';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import MeshBackground from '@/components/MeshBackground';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

/* ---- Floating Particles Animation ---- */
const FloatingParticles = () => (
  <>
    {[[3, 8, 18], [92, 12, 14], [8, 75, 16], [88, 70, 12], [48, 3, 10], [52, 92, 14], [25, 45, 8], [75, 55, 10]].map(([left, top, size], i) => (
      <motion.div
        key={`fp-${i}`}
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          background: i % 4 === 0 ? 'rgba(152,245,255,0.2)' : i % 4 === 1 ? 'rgba(92,224,255,0.15)' : i % 4 === 2 ? 'rgba(184,169,255,0.12)' : 'rgba(46,203,255,0.1)',
          boxShadow: `0 0 ${size * 2}px ${i % 4 === 0 ? 'rgba(152,245,255,0.4)' : i % 4 === 1 ? 'rgba(92,224,255,0.3)' : 'rgba(184,169,255,0.25)'}`,
        }}
        animate={{
          y: [0, -25 - i * 3, 0],
          x: [0, i % 2 === 0 ? 12 : -12, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5 + i * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.4,
        }}
      />
    ))}
  </>
);

const tokenData = [
  { name: 'Community Treasury', value: 40, color: '#98F5FF', desc: 'Fueling ugly art, meme contests, and community endeavors' },
  { name: 'Liquidity Pool', value: 30, color: '#5CE0FF', desc: 'Ensuring fluidity and tradability across the cosmos' },
  { name: 'Marketing & Dev', value: 20, color: '#2ECBFF', desc: 'Spreading the ULGD brand across the metaverse' },
  { name: 'Team & Advisors', value: 10, color: '#B8A9FF', desc: 'Sustaining the minds behind the revolution' },
];

/* Premium Tokenomics Chart SVG */
const TokenomicsChart = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="chartGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(152,245,255,0.15)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <circle cx="200" cy="200" r="180" fill="url(#chartGlow)"/>
    {/* Outer ring */}
    <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(152,245,255,0.08)" strokeWidth="1"/>
    <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(184,169,255,0.06)" strokeWidth="1" strokeDasharray="4 4"/>
    {/* Donut segments */}
    {/* 40% - Community - Gold */}
    <circle cx="200" cy="200" r="100" fill="none" stroke="#98F5FF" strokeWidth="35" strokeDasharray="251.3 377" strokeDashoffset="0" transform="rotate(-90, 200, 200)" opacity="0.9"/>
    {/* 30% - Liquidity - Orange */}
    <circle cx="200" cy="200" r="100" fill="none" stroke="#5CE0FF" strokeWidth="35" strokeDasharray="188.5 440" strokeDashoffset="-251.3" transform="rotate(-90, 200, 200)" opacity="0.85"/>
    {/* 20% - Marketing - Red-orange */}
    <circle cx="200" cy="200" r="100" fill="none" stroke="#2ECBFF" strokeWidth="35" strokeDasharray="125.7 503" strokeDashoffset="-439.8" transform="rotate(-90, 200, 200)" opacity="0.8"/>
    {/* 10% - Team - Red */}
    <circle cx="200" cy="200" r="100" fill="none" stroke="#B8A9FF" strokeWidth="35" strokeDasharray="62.8 565.5" strokeDashoffset="-565.5" transform="rotate(-90, 200, 200)" opacity="0.75"/>
    {/* Center */}
    <circle cx="200" cy="200" r="78" fill="#0a0a0f"/>
    <circle cx="200" cy="200" r="78" fill="none" stroke="rgba(152,245,255,0.15)" strokeWidth="1"/>
    <text x="200" y="190" textAnchor="middle" fill="#98F5FF" fontSize="32" fontWeight="800" fontFamily="Inter, sans-serif">1B</text>
    <text x="200" y="215" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="12" fontFamily="Inter, sans-serif">TOTAL SUPPLY</text>
  </svg>
);

export default function TokenomicsPage() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <MeshBackground variant="warm" />

      {/* Aurora Background */}
      <div className="aurora-bg absolute inset-0 pointer-events-none z-0" />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Hero Section */}
      <div className="text-center py-20 lg:py-28 relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <AnimatedText
            text="ULGD Tokenomics: The Ugly Truth"
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
            text="1 Billion ULGD Tokens - Fair Distribution"
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
          Our distribution is not just fair; it is beautifully ugly. Crafted for the pack, by the pack. No sneaky pre-sales, just pure community joy with maximum decentralization.
        </motion.p>

        {/* Animated decorative line */}
        <motion.div
          className="w-32 h-1 mx-auto mt-8 rounded-full"
          style={{ background: 'linear-gradient(90deg, #98F5FF, #5CE0FF, #2ECBFF)' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />
      </div>

      {/* Chart and Legend */}
      <div className="container mx-auto px-6 lg:px-8 pb-20 max-w-6xl relative z-10">
        <AnimatedOnScroll className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            {/* Background Lottie Animation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <DotLottieReact
                src="https://lottie.host/c5f23c16-9e62-4c67-9b91-05f7cf7a3d1e/WZy9wPbYdK.lottie"
                loop
                autoplay
                className="w-[500px] h-[500px]"
              />
            </div>

            <motion.div
              className="w-full max-w-sm holo-shine rounded-3xl p-6 relative"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <TokenomicsChart />
            </motion.div>
          </motion.div>

          <div>
            <motion.div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 neon-border"
              style={{ color: '#98F5FF', background: 'rgba(152,245,255,0.1)', border: '1px solid rgba(152,245,255,0.2)' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(152,245,255,0.3)' }}
            >
              DISTRIBUTION
            </motion.div>
            <h2 className="text-3xl font-bold mb-8 gradient-text-gold">The Ugly Pie Breakdown</h2>
            <div className="space-y-4">
              {tokenData.map((item, i) => (
                <motion.div
                  key={i}
                  className="card-premium holo-shine tilt-card rounded-xl p-4 flex items-center gap-4 relative overflow-hidden"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.12), type: "spring" }}
                  whileHover={{ x: 8, boxShadow: `0 10px 30px ${item.color}15`, transition: { duration: 0.3 } }}
                >
                  {/* Animated accent line on left */}
                  <motion.div
                    className="absolute left-0 top-0 w-1 h-full rounded-full"
                    style={{ background: item.color }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.5 + (i * 0.15), duration: 0.5 }}
                  />

                  <motion.div
                    className="w-4 h-4 rounded-full flex-shrink-0 ml-2"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 12px ${item.color}` }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-semibold text-white">{item.name}</span>
                      <motion.span
                        className="text-sm font-bold"
                        style={{ color: item.color }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 + (i * 0.1) }}
                      >
                        {item.value}%
                      </motion.span>
                    </div>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                    <div className="mt-2 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full relative"
                        style={{ backgroundColor: item.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ duration: 1.2, delay: 0.5 + (i * 0.15), ease: "easeOut" }}
                      >
                        {/* Animated shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 + (i * 0.2), repeatDelay: 3 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedOnScroll>

        {/* Key Details */}
        <AnimatedOnScroll className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text-gold">Key Details</h2>
            <motion.div
              className="w-24 h-0.5 mx-auto mb-10"
              style={{ background: 'linear-gradient(90deg, transparent, #98F5FF, transparent)' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { value: '1,000,000,000', label: 'Total Supply (Fixed & Finite)', color: '#98F5FF' },
              { value: 'ULGD', label: 'Ticker Symbol', color: '#5CE0FF' },
              { value: '0%', label: 'Buy/Sell Tax', color: '#2ECBFF' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="card-premium holo-shine tilt-card rounded-2xl p-6 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.15), duration: 0.6, type: "spring" }}
                whileHover={{ y: -8, boxShadow: `0 20px 40px ${item.color}15`, transition: { type: "spring", stiffness: 300 } }}
              >
                {/* Top accent line */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.15), duration: 0.6 }}
                />

                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${item.color}10, transparent 70%)` }}
                />

                <motion.h3
                  className="text-2xl font-bold mb-2 relative z-10"
                  style={{ color: item.color }}
                  animate={{ textShadow: [`0 0 10px ${item.color}00`, `0 0 20px ${item.color}40`, `0 0 10px ${item.color}00`] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                >
                  {item.value}
                </motion.h3>
                <p className="text-gray-500 text-sm relative z-10">{item.label}</p>

                {/* Corner decoration */}
                <motion.div
                  className="absolute bottom-2 right-2 w-8 h-8 opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 32 32" className="w-full h-full">
                    <polygon points="16,2 28,10 28,22 16,30 4,22 4,10" fill="none" stroke={item.color} strokeWidth="0.5" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Contract Address with animation */}
          <motion.div
            className="mt-12 card-premium rounded-xl p-6 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-gray-500 text-sm mb-2">Contract Address</p>
            <motion.div
              className="font-mono text-lg flex items-center justify-center gap-2"
              style={{ color: 'rgba(92,224,255,0.8)' }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              0x... (Coming Soon)
            </motion.div>
          </motion.div>
        </AnimatedOnScroll>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block card-premium rounded-3xl p-10 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Background Lottie */}
            <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
              <DotLottieReact
                src="https://lottie.host/9c333066-512c-473d-8380-6927d6d1d4d0/vQ9x5gQ103.lottie"
                loop
                autoplay
                className="w-64 h-64"
              />
            </div>

            <motion.div
              className="absolute inset-0 opacity-20"
              style={{ background: 'radial-gradient(circle at center, rgba(152,245,255,0.2), transparent 70%)' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-gold relative z-10">Ready to Join?</h3>
            <p className="text-gray-400 mb-6 relative z-10">Become part of the ULGD revolution today.</p>
            <motion.button
              className="btn-premium relative z-10"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(152,245,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get ULGD Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
