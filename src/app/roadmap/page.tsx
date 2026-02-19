"use client";

import AnimatedText from '@/components/AnimatedText';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import MeshBackground from '@/components/MeshBackground';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

/* ---- Floating Particles ---- */
const FloatingParticles = () => (
  <>
    {[[5, 10, 16], [90, 15, 12], [10, 80, 14], [85, 75, 10], [50, 5, 8]].map(([left, top, size], i) => (
      <motion.div
        key={`p-${i}`}
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          background: i % 3 === 0 ? 'rgba(152,245,255,0.2)' : i % 3 === 1 ? 'rgba(46,203,255,0.15)' : 'rgba(184,169,255,0.12)',
          boxShadow: `0 0 ${size * 2}px rgba(152,245,255,0.3)`,
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

const roadmapData = [
  { phase: 'Phase 1', title: 'The Incubation', desc: 'Launch the ULGD token, establish core smart contracts, and initiate the humble beginnings of our legendary journey. First memes birthed into existence.', status: 'Completed', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { phase: 'Phase 2', title: 'Stretching Our Paws', desc: 'Cultivate a thriving community across social platforms. Secure listings on key tracking sites and DEXes. Unleash community-driven marketing raids.', status: 'In Progress', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { phase: 'Phase 3', title: 'The Uglyverse Takes Shape', desc: 'Explore partnerships for creating the Ulygverse metaverse experience. Introduce exclusive NFT collections featuring Ulyg Dog and companions.', status: 'Upcoming', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
  { phase: 'Phase 4', title: 'Galactic Domination', desc: 'Target top-tier CEX listings. Develop further utility for ULGD within the Ulygverse and secure mainstream recognition. Ugly is the new beautiful.', status: 'Upcoming', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
];

const statusColors: Record<string, { bg: string; text: string; dot: string; border: string }> = {
  'Completed': { bg: 'bg-green-500/10', text: 'text-green-400', dot: 'bg-green-500', border: 'border-green-500/30' },
  'In Progress': { bg: 'bg-[rgba(152,245,255,0.1)]', text: 'text-[#98F5FF]', dot: 'bg-[#98F5FF]', border: 'border-[rgba(152,245,255,0.3)]' },
  'Upcoming': { bg: 'bg-gray-500/10', text: 'text-gray-400', dot: 'bg-gray-600', border: 'border-gray-600/30' },
};

export default function RoadmapPage() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <MeshBackground variant="cool" />

      {/* Aurora Background */}
      <div className="aurora-bg absolute inset-0 pointer-events-none z-0" />

      {/* Floating Particles */}
      <FloatingParticles />

      <div className="text-center py-20 lg:py-28 relative z-10 px-6">
        {/* Hero Lottie Animation */}
        <motion.div
          className="w-48 h-48 mx-auto mb-8 opacity-60"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <DotLottieReact
            src="https://lottie.host/aeba95e1-2e70-4f9e-99d0-9c1f30f7b1fb/rocket.lottie"
            loop
            autoplay
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <AnimatedText
            text="The Ulyg Odyssey"
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
            text="Journey to Galactic Domination"
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
          Our journey from a lone, ugly pup to leading the entire crypto pack. It is a long, winding road, but we are built for it.
        </motion.p>

        {/* Animated decorative line */}
        <motion.div
          className="w-32 h-1 mx-auto mt-8 rounded-full"
          style={{ background: 'linear-gradient(90deg, #98F5FF, #5CE0FF, #B8A9FF)' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 pb-20 max-w-4xl relative z-10">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:transform md:-translate-x-px" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(152,245,255,0.3), rgba(152,245,255,0.1), transparent)' }} />

          {roadmapData.map((item, i) => {
            const colors = statusColors[item.status];
            const isEven = i % 2 === 0;
            return (
              <AnimatedOnScroll key={i}>
                <motion.div
                  className={`relative flex items-start mb-12 md:mb-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: i * 0.15 } }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full transform -translate-x-1.5 mt-6 z-10" style={{ background: '#98F5FF' }}>
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: '#98F5FF' }} />
                  </div>

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      className="card-premium holo-shine tilt-card rounded-2xl p-6 relative overflow-hidden group"
                      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(152,245,255,0.1)', transition: { type: "spring", stiffness: 300 } }}
                    >
                      {/* Top animated line */}
                      <motion.div
                        className="absolute top-0 left-0 w-full h-0.5"
                        style={{ background: `linear-gradient(90deg, transparent, ${colors.dot.replace('bg-', '#').replace('[', '').replace(']', '')}, transparent)` }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                      />

                      {/* Background glow on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle at 50% 0%, rgba(152,245,255,0.08), transparent 70%)` }}
                      />

                      <div className="flex items-center gap-3 mb-3 relative z-10">
                        <motion.div
                          className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}
                          whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                        >
                          <svg className={`w-5 h-5 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                          </svg>
                        </motion.div>
                        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(152,245,255,0.6)' }}>{item.phase}</span>
                        <motion.span
                          className={`ml-auto text-xs px-3 py-1.5 rounded-full font-medium ${colors.bg} ${colors.text} border ${colors.border}`}
                          animate={item.status === 'In Progress' ? { scale: [1, 1.05, 1], opacity: [1, 0.8, 1] } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {item.status}
                        </motion.span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 relative z-10">{item.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed relative z-10">{item.desc}</p>

                      {/* Corner decoration */}
                      <motion.div
                        className="absolute bottom-3 right-3 w-6 h-6 opacity-20"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      >
                        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
                          <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" className={colors.text} />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatedOnScroll>
            );
          })}
        </div>
      </div>
    </div>
  );
}
