"use client";

import AnimatedText from '@/components/AnimatedText';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import MeshBackground from '@/components/MeshBackground';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

/* ---- Origin Story: Animated Portal/Emergence ---- */
const OriginGraphic = () => (
  <div className="relative w-full h-full">
    <DotLottieReact
      src="https://lottie.host/c5f23c16-9e62-4c67-9b91-05f7cf7a3d1e/WZy9wPbYdK.lottie"
      loop
      autoplay
      className="w-full h-full"
    />
    <div className="absolute inset-0 bg-gradient-radial from-[rgba(152,245,255,0.1)] to-transparent pointer-events-none" />
  </div>
);

/* ---- Pack/Community Illustration ---- */
const PackGraphic = () => (
  <div className="relative w-full h-full">
    <DotLottieReact
      src="https://lottie.host/79010375-7f28-4394-a130-9b882f059293/c06g9pQ103.lottie"
      loop
      autoplay
      className="w-full h-full"
    />
  </div>
);

/* ---- Authenticity/Unique Illustration ---- */
const AuthenticGraphic = () => (
  <div className="relative w-full h-full">
    <DotLottieReact
      src="https://lottie.host/1ff719c9-c35e-4f3e-b8be-def6e8e39d75/XaJmq8hP9z.lottie"
      loop
      autoplay
      className="w-full h-full"
    />
  </div>
);

/* ---- Rocket/Growth Illustration ---- */
const GrowthGraphic = () => (
  <div className="relative w-full h-full">
    <DotLottieReact
      src="https://lottie.host/aeba95e1-2e70-4f9e-99d0-9c1f30f7b1fb/rocket.lottie"
      loop
      autoplay
      className="w-full h-full"
    />
  </div>
);

/* ---- Floating Particles Background ---- */
const FloatingParticles = () => (
  <>
    {[[5, 10, 20], [90, 15, 16], [15, 80, 18], [85, 75, 14], [50, 5, 12], [45, 90, 15]].map(([left, top, size], i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          background: i % 3 === 0 ? 'rgba(152,245,255,0.15)' : i % 3 === 1 ? 'rgba(184,169,255,0.12)' : 'rgba(255,184,217,0.1)',
          boxShadow: `0 0 ${size * 2}px ${i % 3 === 0 ? 'rgba(152,245,255,0.3)' : i % 3 === 1 ? 'rgba(184,169,255,0.25)' : 'rgba(255,184,217,0.2)'}`,
        }}
        animate={{
          y: [0, -30 - i * 5, 0],
          x: [0, i % 2 === 0 ? 15 : -15, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.5,
        }}
      />
    ))}
  </>
);

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <MeshBackground variant="purple" />

      {/* Aurora Background */}
      <div className="aurora-bg absolute inset-0 pointer-events-none z-0" />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Hero */}
      <div className="text-center py-20 lg:py-28 relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <AnimatedText text="The Legend of Ulyg Dog" el="h1" className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 gradient-text-gold text-glow"/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <AnimatedText text="Authentic Meme Coin Revolution" el="div" className="text-xl md:text-2xl font-bold tracking-tight mb-4 gradient-text-premium mt-4"/>
        </motion.div>

        {/* Animated decorative line */}
        <motion.div
          className="w-32 h-1 mx-auto mt-8 rounded-full"
          style={{ background: 'linear-gradient(90deg, #98F5FF, #B8A9FF, #FFB8D9)' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 pb-20 max-w-6xl relative z-10">
        {/* ===== ORIGIN STORY with Large Lottie Graphic ===== */}
        <AnimatedOnScroll className="grid md:grid-cols-2 gap-12 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          >
            <motion.div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 neon-border"
              style={{ color: '#98F5FF', background: 'rgba(152,245,255,0.1)', border: '1px solid rgba(152,245,255,0.2)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(152,245,255,0.3)' }}
            >
              ORIGIN STORY
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-gold">From a Glitch to a Galaxy</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Born in the deepest corners of the mempool, Ulyg Dog was not coded -- he was manifested. A happy accident of stray packets and forgotten code that resulted in something so perfectly imperfect, it could only be destined for the moon.
            </p>
            <p className="text-gray-400 leading-relaxed">
              While other coins chased trends with slick logos, Ulyg Dog embraced his flaws. His crooked smile, his mismatched ears, his complete disregard for conventional aesthetics -- these became his badges of honor.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.85, rotateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
          >
            <motion.div
              className="w-full max-w-sm holo-shine rounded-3xl p-4"
              animate={{
                y: [0, -10, 0],
                rotateZ: [0, 1, -1, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <OriginGraphic />
            </motion.div>
          </motion.div>
        </AnimatedOnScroll>

        {/* ===== THE DOGMA - 3 Feature Cards with Large Graphics ===== */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedText text="The Ulyg Dogma" el="h2" className="text-3xl md:text-5xl font-bold tracking-tighter gradient-text-gold"/>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Three pillars that define the ULGD movement</p>
          <motion.div
            className="w-24 h-0.5 mx-auto mt-6"
            style={{ background: 'linear-gradient(90deg, transparent, #98F5FF, transparent)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <div className="space-y-24">
          {/* Feature 1: Pack */}
          <AnimatedOnScroll className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                className="w-full max-w-xs mx-auto rounded-2xl overflow-hidden"
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <PackGraphic />
              </motion.div>
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
            >
              <motion.div
                className="card-premium holo-shine tilt-card rounded-2xl p-8 relative overflow-hidden"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(152,245,255,0.15)' }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ background: 'linear-gradient(90deg, #98F5FF, #5CE0FF, #98F5FF)' }}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ color: '#98F5FF', background: 'rgba(152,245,255,0.1)', border: '1px solid rgba(152,245,255,0.2)' }}>PILLAR 01</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#98F5FF' }}>A Pack, Not an Army</h3>
                <p className="text-gray-400 leading-relaxed">We are a wonderfully weird, fiercely loyal pack of strays, artists, and degens who believe in the unifying power of the meme. Strength in numbers, character in imperfection.</p>
              </motion.div>
            </motion.div>
          </AnimatedOnScroll>

          {/* Feature 2: Authenticity */}
          <AnimatedOnScroll className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                className="card-premium holo-shine tilt-card rounded-2xl p-8 relative overflow-hidden"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(184,169,255,0.15)' }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ background: 'linear-gradient(90deg, #B8A9FF, #a090ff, #B8A9FF)' }}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ color: '#B8A9FF', background: 'rgba(184,169,255,0.1)', border: '1px solid rgba(184,169,255,0.2)' }}>PILLAR 02</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#B8A9FF' }}>Ugly is Authentic</h3>
                <p className="text-gray-400 leading-relaxed">Perfection is boring and often fake. We celebrate the glitches, the quirks, and the happy accidents. No filters, no pretense. Ugliness is a mark of character.</p>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
            >
              <motion.div
                className="w-full max-w-xs rounded-2xl overflow-hidden"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ duration: 5.5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <AuthenticGraphic />
              </motion.div>
            </motion.div>
          </AnimatedOnScroll>

          {/* Feature 3: Growth */}
          <AnimatedOnScroll className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                className="w-full max-w-xs mx-auto rounded-2xl overflow-hidden"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.03, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <GrowthGraphic />
              </motion.div>
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
            >
              <motion.div
                className="card-premium holo-shine tilt-card rounded-2xl p-8 relative overflow-hidden"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(255,184,217,0.15)' }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ background: 'linear-gradient(90deg, #FFB8D9, #ff90c0, #FFB8D9)' }}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                />
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ color: '#FFB8D9', background: 'rgba(255,184,217,0.1)', border: '1px solid rgba(255,184,217,0.2)' }}>PILLAR 03</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#FFB8D9' }}>Enjoy the Ride</h3>
                <p className="text-gray-400 leading-relaxed">We are aiming for the stars, but we are not in a frantic rush. Building a real community and a token with lasting value, one ugly step at a time.</p>
              </motion.div>
            </motion.div>
          </AnimatedOnScroll>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block card-premium rounded-3xl p-10 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{ background: 'radial-gradient(circle at center, rgba(152,245,255,0.2), transparent 70%)' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-gold relative z-10">Ready to Join the Pack?</h3>
            <p className="text-gray-400 mb-6 relative z-10">Be part of the most authentic meme coin community in the cryptoverse.</p>
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
