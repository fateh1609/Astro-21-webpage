import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChakraIcon, LotusIcon } from './Icons';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Consulting the Stars...",
    "Aligning with Cosmic Energy...",
    "Synchronizing your Destiny...",
    "Decoding Sacred Patterns...",
    "Preparing the Portal..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1200);

    const handleLoad = () => {
      // Ensure a minimum visual impact time for brand awareness
      setTimeout(onLoadingComplete, 2800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearInterval(interval);
      };
    }
    return () => clearInterval(interval);
  }, [onLoadingComplete, messages.length]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[200] bg-astro-indigo flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Ambience - Perfectly Centered Radial Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <div className="w-[100vw] h-[100vw] max-w-[800px] max-h-[800px] bg-astro-saffron/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* Main Loader Content Container - Ensures Vertical/Horizontal Alignment */}
      <div className="flex flex-col items-center justify-center text-center relative z-10 w-full px-6">
        
        {/* Central Sacred Geometry Animation */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center mb-12">
          {/* Outer Rotating Ring (Lotus) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 text-astro-gold/20"
          >
            <LotusIcon className="w-full h-full" />
          </motion.div>

          {/* Inner Rotating Chakra */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 sm:w-24 sm:h-24 text-astro-saffron drop-shadow-[0_0_20px_rgba(255,153,51,0.6)]"
          >
            <ChakraIcon />
          </motion.div>

          {/* Pulsing Core Singularity */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-3 h-3 bg-astro-gold rounded-full blur-[2px]"
          />
        </div>

        {/* Dynamic Loading Text - Centered */}
        <div className="h-20 flex flex-col items-center justify-start">
          <motion.div
            key={messageIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-astro-gold text-lg sm:text-xl tracking-[0.2em] uppercase mb-6"
          >
            {messages[messageIndex]}
          </motion.div>
          
          {/* Progress Indicator - Centered Bar */}
          <div className="w-40 h-0.5 bg-white/5 relative overflow-hidden rounded-full">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-astro-saffron to-transparent w-full"
            />
          </div>
        </div>
      </div>

      {/* Footer Branding - Centered at Bottom */}
      <div className="absolute bottom-12 flex flex-col items-center text-center w-full px-6">
        <div className="flex items-center gap-3 mb-2 opacity-60">
          <div className="w-6 h-6 text-astro-saffron">
            <ChakraIcon />
          </div>
          <span className="font-serif text-astro-gold font-black tracking-[0.3em] text-sm uppercase">Astro21</span>
        </div>
        <div className="text-[9px] text-gray-600 tracking-[0.4em] font-bold uppercase">The Future of Vedic Wisdom</div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;