"use client";

import AnimatedText from '@/components/AnimatedText';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import MeshBackground from '@/components/MeshBackground';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

/* ---- Floating Particles ---- */
const FloatingParticles = () => (
  <>
    {[[3, 12, 14], [92, 18, 10], [8, 78, 12], [88, 70, 8], [45, 8, 10], [55, 88, 12]].map(([left, top, size], i) => (
      <motion.div
        key={`fp-${i}`}
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          background: i % 3 === 0 ? 'rgba(152,245,255,0.2)' : i % 3 === 1 ? 'rgba(92,224,255,0.15)' : 'rgba(46,203,255,0.12)',
          boxShadow: `0 0 ${size * 2}px rgba(152,245,255,0.3)`,
        }}
        animate={{
          y: [0, -25 - i * 3, 0],
          x: [0, i % 2 === 0 ? 12 : -12, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 6 + i * 1.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.4,
        }}
      />
    ))}
  </>
);

const steps = [
  {
    num: '01',
    title: 'Get a Decentralized Wallet',
    desc: 'Grab yourself a trusty decentralized wallet. MetaMask, Trust Wallet, or Coinbase Wallet are great choices for holding your precious ULGD tokens. Keep those seed phrases safe.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    gradient: 'from-[rgba(152,245,255,0.1)] to-[rgba(92,224,255,0.05)]',
    color: '#98F5FF',
  },
  {
    num: '02',
    title: 'Acquire Some ETH',
    desc: 'ULGD is an ERC-20 token on the Ethereum blockchain. You will need some Ethereum (ETH) to cover transaction fees (gas) and to swap for ULGD. Buy ETH on any major exchange.',
    icon: 'M12 1.75l-6.25 10.5L12 16l6.25-3.75L12 1.75zM5.75 13.5L12 22.25l6.25-8.75L12 17.25z',
    gradient: 'from-[rgba(92,224,255,0.1)] to-[rgba(46,203,255,0.05)]',
    color: '#5CE0FF',
  },
  {
    num: '03',
    title: 'Swap on a DEX',
    desc: 'Head over to Uniswap or another decentralized exchange. Connect your wallet, paste the official ULGD contract address into the swap interface. Approve, confirm, and you are officially ULGY.',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    gradient: 'from-[rgba(46,203,255,0.1)] to-[rgba(184,169,255,0.05)]',
    color: '#2ECBFF',
  },
];

/* Premium Lottie Animation Graphic */
const BuyGuideGraphic = () => (
  <div className="relative w-full h-full">
    <DotLottieReact
      src="https://lottie.host/9c333066-512c-473d-8380-6927d6d1d4d0/vQ9x5gQ103.lottie"
      loop
      autoplay
      className="w-full h-full"
    />
    <div className="absolute inset-0 bg-gradient-radial from-[rgba(152,245,255,0.1)] to-transparent pointer-events-none" />
  </div>
);

export default function HowToBuyPage() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <MeshBackground variant="warm" />

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
            text="Your ULGY Purchase Guide"
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
            text="How to Buy ULGD Tokens"
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
          Ready to embrace the ugly? Here is your simple, step-by-step guide to becoming a proud ULGD hodler.
        </motion.p>

        {/* Animated decorative line */}
        <motion.div
          className="w-32 h-1 mx-auto mt-8 rounded-full"
          style={{ background: 'linear-gradient(90deg, #98F5FF, #5CE0FF, #2ECBFF)' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />

        <div className="flex justify-center mt-10">
          <motion.div
            className="w-full max-w-md holo-shine rounded-3xl p-4"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <BuyGuideGraphic />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 pb-20 max-w-4xl relative z-10">
        <div className="space-y-6">
          {steps.map((step, i) => (
            <AnimatedOnScroll key={i}>
              <motion.div
                className={`card-premium holo-shine tilt-card rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br ${step.gradient} group`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
                whileHover={{ y: -6, boxShadow: `0 20px 40px ${step.color}15`, transition: { type: "spring", stiffness: 300 } }}
              >
                {/* Left accent line */}
                <motion.div
                  className="absolute left-0 top-0 w-1 h-full rounded-full"
                  style={{ background: step.color }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                />

                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 0% 50%, ${step.color}10, transparent 50%)` }}
                />

                <div className="flex items-start gap-6 relative z-10">
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
                      style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05, transition: { duration: 0.5 } }}
                    >
                      {/* Animated ring */}
                      <motion.div
                        className="absolute inset-[-4px] rounded-2xl border border-dashed opacity-30"
                        style={{ borderColor: step.color }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      />
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke={step.color} strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.span
                        className="text-sm font-mono font-bold px-2 py-0.5 rounded"
                        style={{ color: step.color, background: `${step.color}15` }}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      >
                        {step.num}
                      </motion.span>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Corner number decoration */}
                <div
                  className="absolute bottom-4 right-4 text-6xl font-black opacity-5"
                  style={{ color: step.color }}
                >
                  {step.num}
                </div>
              </motion.div>
            </AnimatedOnScroll>
          ))}
        </div>

        <AnimatedOnScroll className="text-center mt-16">
          <Link href="https://app.uniswap.org/" target="_blank">
            <motion.button
              className="btn-premium text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go to Uniswap
            </motion.button>
          </Link>
          <p className="mt-6 text-gray-600 text-sm">
            Contract Address: <span className="font-mono" style={{ color: 'rgba(92,224,255,0.6)' }}>0x... (Coming Soon)</span>
          </p>
        </AnimatedOnScroll>
      </div>
    </div>
  );
}
