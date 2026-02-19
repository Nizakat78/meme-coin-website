"use client";

import AnimatedText from '@/components/AnimatedText';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import FaqAccordion from '@/components/FaqAccordion';
import MeshBackground from '@/components/MeshBackground';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

/* ---- Floating Particles ---- */
const FloatingParticles = () => (
  <>
    {[[3, 10, 12], [92, 15, 8], [10, 75, 10], [85, 70, 6], [50, 5, 8]].map(([left, top, size], i) => (
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
          y: [0, -18 - i * 3, 0],
          x: [0, i % 2 === 0 ? 8 : -8, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5 + i * 1.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.25,
        }}
      />
    ))}
  </>
);

const faqItems = [
  {
    question: "What is Ulyg Dog ($ULGD)?",
    answer: "Ulyg Dog is a defiant meme coin on the Ethereum blockchain, celebrating all things wonderfully imperfect. Think of it as a movement for the authentic, the slightly chaotic, and those with a strong sense of pack loyalty. It is inspired by a ridiculously charming, albeit ugly, dog."
  },
  {
    question: "Is this a guaranteed investment opportunity?",
    answer: "While we are aiming for galactic adventures, ULGD is built on community and character, not just quick flips. It is more of a journey where the real treasure is the community we build along the way. This is not financial advice -- always do your own research."
  },
  {
    question: "What is Uglynomics?",
    answer: "Uglynomics is our revolutionary economic philosophy outlined in the Ulyg Paper. It is our belief that true, lasting value springs from authenticity and imperfection, not from bland, polished perfection. A total supply of 1 billion tokens, 0% tax, and fair distribution."
  },
  {
    question: "How do I join the Ulyg Pack?",
    answer: "Acquire some $ULGD tokens, then join our vibrant communities on Twitter, Telegram, and Discord. Unleash your inner meme-making beast. That is it -- you are officially part of the most loyal and fantastic pack in crypto."
  },
  {
    question: "When will the Ulygverse launch?",
    answer: "Our meme engineers are working to manifest the Ulygverse -- an immersive digital playground where ugliness reigns supreme. Keep an eye on our roadmap for updates. It will be ready when it reaches peak levels of magnificent imperfection."
  },
];

/* FAQ Lottie Graphic */
const FaqGraphic = () => (
  <div className="relative w-full h-full">
    <DotLottieReact
      src="https://lottie.host/1ff719c9-c35e-4f3e-b8be-def6e8e39d75/XaJmq8hP9z.lottie"
      loop
      autoplay
      className="w-full h-full"
    />
    <div className="absolute inset-0 bg-gradient-radial from-[rgba(152,245,255,0.1)] to-transparent pointer-events-none" />
  </div>
);

export default function FaqPage() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <MeshBackground variant="cool" />

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
            text="Burning Questions? Ulyg Answers."
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
            text="ULGD FAQ & Support"
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
          Everything you need to know about the Ulyg Dog ecosystem and how to get involved.
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

      {/* FAQ Lottie Graphic */}
      <div className="container mx-auto px-6 max-w-xs relative z-10 mb-6">
        <motion.div
          className="holo-shine rounded-3xl p-4"
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaqGraphic />
          </motion.div>
        </motion.div>
      </div>

      {/* FAQ Accordion */}
      <div className="container mx-auto px-6 lg:px-8 pb-20 max-w-3xl relative z-10">
        <AnimatedOnScroll>
          <motion.div
            className="card-premium holo-shine rounded-2xl p-6 md:p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Top animated line */}
            <motion.div
              className="absolute top-0 left-0 w-full h-0.5"
              style={{ background: 'linear-gradient(90deg, transparent, #98F5FF, transparent)' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
            <FaqAccordion items={faqItems} />
          </motion.div>
        </AnimatedOnScroll>
      </div>
    </div>
  );
}
