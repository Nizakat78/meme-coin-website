"use client";

import AnimatedText from '@/components/AnimatedText';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import MeshBackground from '@/components/MeshBackground';
import { motion } from 'framer-motion';

const sections = [
  {
    num: '01',
    title: 'Introduction: The Problem with Perfection',
    content: [
      'In a digital age obsessed with curated perfection, flawless aesthetics, and AI-generated ideal forms, we have spotted a critical void: the glorious absence of genuine ugliness. Perfection is a mirage, a fragile bubble ready to burst. Ulyg Dog ($ULGD) is the sledgehammer.',
      'This document lays the foundation for a new era, asserting that profound value emerges not from pristine beauty, but from authentic, undeniable, and utterly magnificent ugliness. Welcome to Uglynomics.',
    ],
  },
  {
    num: '02',
    title: 'The ULYG Protocol: Proof-of-Character (PoC)',
    content: [
      'The ULGD ecosystem operates on an innovative consensus mechanism: Proof-of-Character (PoC). Unlike archaic Proof-of-Work or wealth-centric Proof-of-Stake, PoC rewards raw character, unyielding authenticity, and the sheer audacity to be ugly in a world of endless filters.',
      '"Why fit in when you were born to stand out... with a droopy ear and an underbite?" -- The Book of Ugly, Chapter 1, Verse 3',
      'Transaction validation hinges on the collective vibe of our community. If a transaction reeks of corporate slickness or lacks the necessary ugly charm, it is collectively rejected.',
    ],
  },
  {
    num: '03',
    title: 'Uglinomics: A New Economic Model',
    content: [
      'The total supply of ULGD is eternally capped at 1 Billion tokens, a testament to every soul who has ever felt like an outlier. Our distribution model is designed to be as genuinely fair and decentralized as possible:',
    ],
    list: [
      '40% Community Treasury -- Fueling ugly art, legendary meme competitions, and community endeavors',
      '30% Liquidity Pool -- Ensuring our ugliness remains highly fluid and tradable',
      '20% Marketing & Outreach -- Plastering the ULGD brand across the metaverse',
      '10% Core Team -- Sustaining the brilliant minds behind the revolution',
    ],
  },
  {
    num: '04',
    title: 'Conclusion: The Beautifully Ugly Future',
    content: [
      'Ulyg Dog transcends the mere definition of a meme coin. It embodies a philosophy, a vibrant movement. It stands as a defiant declaration that true value is profoundly subjective, and that immense strength lies hidden within imperfection.',
      'By committing to ULGD, you are not merely acquiring a digital asset; you are investing in a cultural paradigm shift. The future is here. It is gloriously ugly. And it is undeniably beautiful.',
    ],
  },
];

/* Whitepaper Graphic SVG */
const WhitepaperGraphic = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="wpGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(152,245,255,0.1)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <circle cx="200" cy="125" r="110" fill="url(#wpGlow)"/>
    {/* Document shape */}
    <rect x="140" y="40" width="120" height="160" rx="6" fill="rgba(17,17,24,0.8)" stroke="rgba(152,245,255,0.2)" strokeWidth="1.5"/>
    {/* Folded corner */}
    <path d="M230 40 L260 70 L230 70 Z" fill="rgba(10,10,15,1)" stroke="rgba(152,245,255,0.2)" strokeWidth="1"/>
    {/* Text lines */}
    {[60, 80, 100, 120, 140, 160].map((y, i) => (
      <rect key={i} x="155" y={y} width={70 - (i % 3) * 15} height="3" rx="1.5" fill={`rgba(152,245,255,${0.08 + (i * 0.02)})`}/>
    ))}
    {/* ULGD seal */}
    <circle cx="200" cy="175" r="12" fill="rgba(152,245,255,0.1)" stroke="rgba(152,245,255,0.3)" strokeWidth="1"/>
    <text x="200" y="179" textAnchor="middle" fill="rgba(152,245,255,0.5)" fontSize="8" fontWeight="700" fontFamily="Inter">ULGD</text>
    {/* Decorations */}
    <circle cx="100" cy="60" r="3" fill="rgba(152,245,255,0.15)"/>
    <circle cx="300" cy="80" r="2" fill="rgba(184,169,255,0.15)"/>
    <circle cx="90" cy="190" r="2.5" fill="rgba(255,184,217,0.12)"/>
    <circle cx="310" cy="170" r="2" fill="rgba(152,245,255,0.1)"/>
  </svg>
);

export default function WhitepaperPage() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <MeshBackground variant="cool" />

      <div className="text-center py-20 lg:py-28 relative z-10 px-6">
        <AnimatedText
          text="The Ulyg Paper: Unveiling Destiny"
          el="h1"
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 gradient-text-gold text-glow"
        />
        <AnimatedText
          text="ULGD Whitepaper & Uglinomics"
          el="div"
          className="text-xl md:text-2xl font-bold tracking-tight mb-4 gradient-text-premium mt-4"
        />
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed">
          A revolutionary exploration into the fundamental economic principles of Uglynomics. Discover how our Proof-of-Character protocol creates value through imperfection.
        </p>
      </div>

      {/* Whitepaper Graphic */}
      <div className="container mx-auto px-6 max-w-sm relative z-10 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <WhitepaperGraphic />
        </motion.div>
      </div>

      {/* Sections */}
      <div className="container mx-auto px-6 lg:px-8 pb-20 max-w-3xl relative z-10">
        <div className="space-y-6">
          {sections.map((section, i) => (
            <AnimatedOnScroll key={i}>
              <motion.div
                className="card-premium rounded-2xl p-6 md:p-8"
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold" style={{ color: 'rgba(92,224,255,0.5)' }}>{section.num}</span>
                  <h2 className="text-xl md:text-2xl font-bold gradient-text-gold">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((p, j) => (
                    <p key={j} className="text-gray-400 leading-relaxed">{p}</p>
                  ))}
                  {section.list && (
                    <ul className="space-y-2 mt-4">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: 'rgba(92,224,255,0.5)' }} />
                          <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
