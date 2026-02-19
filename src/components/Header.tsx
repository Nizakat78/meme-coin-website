"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" style={{ borderBottom: '1px solid rgba(152,245,255,0.1)' }} />
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="relative h-10 w-10"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to right, rgba(152,245,255,0.3), rgba(92,224,255,0.3))' }} />
              <DotLottieReact
                src="https://lottie.host/80a0680d-82d6-448e-8a0a-0158a25c1619/f2o0hTf4X2.json" // Placeholder Lottie URL
                loop
                autoplay
                className="h-full w-full object-contain relative z-10"
              />
              {/* <img
                src="/graphics/ulgy-dog-logo.svg"
                alt="Ulyg Dog Logo"
                className="h-full w-full object-contain relative z-10"
              /> */}
            </motion.div>
            <span className="text-xl font-bold gradient-text-gold tracking-tight" style={{ color: '#98F5FF' }}>Ulyg Dog</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group hover:text-[#98F5FF]"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(152,245,255,0.05)' }} />
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
                style={{ background: '#98F5FF' }}
                className="w-full h-0.5 block rounded-full origin-left"
                animate={isOpen ? { rotate: 45, y: -1 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                style={{ background: '#98F5FF' }}
                className="w-full h-0.5 block rounded-full"
                animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                style={{ background: '#98F5FF' }}
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
            className="lg:hidden fixed inset-0 top-18 z-40"
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
                      className="block text-lg font-medium text-gray-300 hover:text-[#98F5FF] py-3 px-4 rounded-xl hover:bg-[rgba(152,245,255,0.05)] transition-all duration-300 border border-transparent hover:border-[rgba(152,245,255,0.1)]"
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
