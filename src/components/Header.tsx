"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/tokenomics', label: 'Tokenomics' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/how-to-buy', label: 'How to Buy' },
  { href: '/community', label: 'Community' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/whitepaper', label: 'Whitepaper' },
  { href: '/team', label: 'Team' },
  { href: '/faq', label: 'FAQ' },
];

/* SVG Logo Component */
const LogoSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <g transform="translate(5, 5) scale(0.9)">
      {/* Head */}
      <ellipse cx="50" cy="55" rx="40" ry="45" fill="#C5FAFF" stroke="#7BB8C4" strokeWidth="1" />
      {/* Left Ear */}
      <path d="M 20 30 Q 10 10 30 20 Z" fill="#7BB8C4" stroke="#5E9BA8" strokeWidth="0.5" />
      {/* Right Ear */}
      <path d="M 80 30 Q 90 10 70 20 Z" fill="#7BB8C4" stroke="#5E9BA8" strokeWidth="0.5" />
      {/* Left Eye (wonky) */}
      <circle cx="35" cy="50" r="6" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
      <circle cx="37" cy="52" r="2" fill="#000000" />
      {/* Right Eye (different size) */}
      <circle cx="65" cy="55" r="7" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
      <circle cx="63" cy="57" r="2" fill="#000000" />
      {/* Nose */}
      <ellipse cx="50" cy="70" rx="5" ry="4" fill="#000000" />
      {/* Mouth */}
      <path d="M 35 85 Q 50 95 65 85" stroke="#000000" strokeWidth="1.5" fill="none" />
      {/* Tongue sticking out */}
      <path d="M 50 85 Q 55 95 52 100 Q 47 97 50 87 Z" fill="#FF69B4" />
      {/* Ugly spots */}
      <circle cx="40" cy="65" r="1.5" fill="#5E9BA8" />
      <circle cx="60" cy="70" r="1" fill="#5E9BA8" />
    </g>
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" style={{ borderBottom: '1px solid rgba(152,245,255,0.1)' }} />
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="relative h-10 w-10"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to right, rgba(74,222,128,0.3), rgba(34,211,191,0.3))' }} />
              <div className="h-full w-full object-contain relative z-10">
                <LogoSVG />
              </div>
            </motion.div>
            <span className="text-xl font-bold gradient-text-green tracking-tight" style={{ color: '#4ade80' }}>Ulyg Dog</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group hover:text-[#4ade80]"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(74,222,128,0.05)' }} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                style={{ background: '#4ade80' }}
                className="w-full h-0.5 block rounded-full origin-left"
                animate={isOpen ? { rotate: 45, y: -1 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                style={{ background: '#4ade80' }}
                className="w-full h-0.5 block rounded-full"
                animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                style={{ background: '#4ade80' }}
                className="w-full h-0.5 block rounded-full origin-left"
                animate={isOpen ? { rotate: -45, y: 1 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-20 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />
            <motion.div
              className="relative z-10 container mx-auto px-6 py-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -30, opacity: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-lg font-medium text-gray-300 hover:text-[#4ade80] py-3 px-4 rounded-xl hover:bg-[rgba(74,222,128,0.05)] transition-all duration-300 border border-transparent hover:border-[rgba(74,222,128,0.1)]"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
