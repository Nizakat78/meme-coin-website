"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/tokenomics', label: 'Tokenomics' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/how-to-buy', label: 'How to Buy' },
  { href: '/whitepaper', label: 'Whitepaper' },
  { href: '/faq', label: 'FAQ' },
];

const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
      </svg>
    ),
  },
  {
    name: 'Telegram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    name: 'Discord',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
  },
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black" style={{ borderTop: '1px solid rgba(152,245,255,0.1)' }}>
      {/* Subtle gradient top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(152,245,255,0.3), transparent)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="h-10 w-10 relative">
                <div className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, rgba(152,245,255,0.2), rgba(92,224,255,0.2))' }} />
                <div className="h-full w-full object-contain relative z-10">
                  <LogoSVG />
                </div>
              </div>
              <span className="text-xl font-bold gradient-text-green">Ulyg Dog</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              The ugliest, most authentic meme coin on the blockchain. Built for the community, by the community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(74,222,128,0.8)' }}>Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-[#4ade80] text-sm transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(74,222,128,0.8)' }}>Join the Pack</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-[#4ade80] hover:border-[rgba(74,222,128,0.3)] transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-600 text-xs mt-4">
              Contract: 0x... (Coming Soon)
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {currentYear} Ulyg Dog (ULGD). All Rights Reserved.
          </p>
          <p className="text-xs text-gray-700">
            Not financial advice. DYOR.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
