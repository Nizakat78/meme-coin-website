"use client";

import AnimatedText from '@/components/AnimatedText';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import MeshBackground from '@/components/MeshBackground';
import { motion } from 'framer-motion';

const memes = [
  { title: 'To the Moon!', creator: '@degen_dave', accent: '#98F5FF' },
  { title: 'HODL the Ugly', creator: '@diamond_paws', accent: '#5CE0FF' },
  { title: 'So ugly, so beautiful', creator: '@crypto_cat_lady', accent: '#2ECBFF' },
  { title: 'This is the way', creator: '@elon_musk_fan_69', accent: '#B8A9FF' },
  { title: 'Invest in Ugly', creator: '@chad_trader', accent: '#FFB8D9' },
  { title: '100% ULGD Portfolio', creator: '@ulgy_stan', accent: '#A8FFD4' },
];

/* Per-card unique mini SVG illustration */
const MemeArt = ({ index, accent }: { index: number; accent: string }) => {
  const patterns = [
    // Rocket
    <svg key={0} viewBox="0 0 200 200" className="w-full h-full"><defs><radialGradient id={`mg${index}`} cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor={`${accent}30`}/><stop offset="100%" stopColor="transparent"/></radialGradient></defs><circle cx="100" cy="100" r="80" fill={`url(#mg${index})`}/><path d="M100 40c0 0-20 30-20 80h40c0-50-20-80-20-80z" fill={`${accent}40`} stroke={accent} strokeWidth="1"/><circle cx="100" cy="90" r="12" fill={`${accent}20`} stroke={accent} strokeWidth="1"/><path d="M85 120l-12 25h12z M115 120l12 25h-12z" fill={`${accent}30`}/><path d="M90 120q10 20 20 0" fill={`${accent}50`}/></svg>,
    // Diamond
    <svg key={1} viewBox="0 0 200 200" className="w-full h-full"><defs><radialGradient id={`mg${index}`} cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor={`${accent}30`}/><stop offset="100%" stopColor="transparent"/></radialGradient></defs><circle cx="100" cy="100" r="80" fill={`url(#mg${index})`}/><path d="M100 30 L160 80 L100 170 L40 80 Z" fill={`${accent}15`} stroke={accent} strokeWidth="1.5"/><path d="M40 80 H160 M100 30 L80 80 M100 30 L120 80 M80 80 L100 170 M120 80 L100 170" fill="none" stroke={`${accent}50`} strokeWidth="0.5"/></svg>,
    // Crown
    <svg key={2} viewBox="0 0 200 200" className="w-full h-full"><defs><radialGradient id={`mg${index}`} cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor={`${accent}30`}/><stop offset="100%" stopColor="transparent"/></radialGradient></defs><circle cx="100" cy="100" r="80" fill={`url(#mg${index})`}/><path d="M50 120 L60 60 L100 90 L140 60 L150 120 Z" fill={`${accent}20`} stroke={accent} strokeWidth="1.5"/><rect x="50" y="120" width="100" height="15" rx="3" fill={`${accent}30`} stroke={accent} strokeWidth="1"/><circle cx="60" cy="60" r="4" fill={accent}/><circle cx="100" cy="90" r="4" fill={accent}/><circle cx="140" cy="60" r="4" fill={accent}/></svg>,
    // Star field
    <svg key={3} viewBox="0 0 200 200" className="w-full h-full"><defs><radialGradient id={`mg${index}`} cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor={`${accent}30`}/><stop offset="100%" stopColor="transparent"/></radialGradient></defs><circle cx="100" cy="100" r="80" fill={`url(#mg${index})`}/><path d="M100 40l8 25h26l-21 15 8 25-21-15-21 15 8-25-21-15h26z" fill={`${accent}25`} stroke={accent} strokeWidth="1"/><circle cx="50" cy="60" r="2" fill={`${accent}60`}/><circle cx="150" cy="70" r="1.5" fill={`${accent}50`}/><circle cx="60" cy="150" r="2" fill={`${accent}40`}/><circle cx="140" cy="140" r="1.5" fill={`${accent}60`}/></svg>,
    // Dog face
    <svg key={4} viewBox="0 0 200 200" className="w-full h-full"><defs><radialGradient id={`mg${index}`} cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor={`${accent}30`}/><stop offset="100%" stopColor="transparent"/></radialGradient></defs><circle cx="100" cy="100" r="80" fill={`url(#mg${index})`}/><ellipse cx="100" cy="105" rx="35" ry="40" fill="#C5FAFF80" stroke={accent} strokeWidth="1"/><circle cx="85" cy="95" r="6" fill="#fff8" stroke={accent} strokeWidth="0.5"/><circle cx="87" cy="97" r="2" fill="#333"/><circle cx="115" cy="98" r="7" fill="#fff8" stroke={accent} strokeWidth="0.5"/><circle cx="113" cy="100" r="2" fill="#333"/><ellipse cx="100" cy="112" rx="4" ry="3" fill="#333"/><path d="M90 122 Q100 130 110 122" stroke="#333" strokeWidth="1" fill="none"/></svg>,
    // Coins
    <svg key={5} viewBox="0 0 200 200" className="w-full h-full"><defs><radialGradient id={`mg${index}`} cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor={`${accent}30`}/><stop offset="100%" stopColor="transparent"/></radialGradient></defs><circle cx="100" cy="100" r="80" fill={`url(#mg${index})`}/><ellipse cx="80" cy="110" rx="28" ry="28" fill={`${accent}15`} stroke={accent} strokeWidth="1.5"/><text x="80" y="115" textAnchor="middle" fill={accent} fontSize="14" fontWeight="700">U</text><ellipse cx="120" cy="90" rx="28" ry="28" fill={`${accent}10`} stroke={`${accent}80`} strokeWidth="1"/><text x="120" y="95" textAnchor="middle" fill={`${accent}80`} fontSize="14" fontWeight="700">$</text></svg>,
  ];
  return patterns[index % patterns.length];
};

export default function GalleryPage() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <MeshBackground variant="purple" />

      <div className="text-center py-20 lg:py-28 relative z-10 px-6">
        <AnimatedText
          text="The Ulyg Meme Vault"
          el="h1"
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 gradient-text-gold text-glow"
        />
        <AnimatedText
          text="ULGD Meme Collection"
          el="div"
          className="text-xl md:text-2xl font-bold tracking-tight mb-4 gradient-text-premium mt-4"
        />
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed">
          A curated collection of the most epic, cringe-worthy, and ultimately glorious Ulyg Dog memes from our community.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-8 pb-20 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memes.map((meme, i) => (
            <AnimatedOnScroll key={i}>
              <motion.div
                className="card-premium rounded-2xl overflow-hidden group"
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="h-56 flex items-center justify-center p-6 relative" style={{ background: `linear-gradient(135deg, ${meme.accent}08, ${meme.accent}03)` }}>
                  <MemeArt index={i} accent={meme.accent} />
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: `${meme.accent}20`, color: meme.accent, border: `1px solid ${meme.accent}30` }}>
                    {i + 1}
                  </div>
                </div>
                <div className="p-5 border-t" style={{ borderColor: `${meme.accent}15` }}>
                  <h3 className="text-lg font-bold text-white mb-1">{meme.title}</h3>
                  <p className="text-xs font-medium" style={{ color: `${meme.accent}cc` }}>{meme.creator}</p>
                </div>
              </motion.div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
