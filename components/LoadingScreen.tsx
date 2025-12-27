
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChakraIcon, LotusIcon } from './Icons.tsx';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Consulting the Stars...",
    "Aligning with Cosmic Energy...",
    "Decoding Sacred Patterns...",
    "Synchronizing Your Destiny...",
    "Opening the Portal..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 500);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[200] bg-astro-indigo flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-astro-saffron/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="relative w-48 h-48 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 text-astro-gold/20"
        >
          <LotusIcon className="w-full h-full" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 text-astro-saffron drop-shadow-[0_0_15px_rgba(255,153,51,0.5)]"
        >
          <ChakraIcon />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-4 h-4 bg-astro-gold rounded-full blur-[2px]"
        />
      </div>

      <div className="mt-12 text-center h-20">
        <motion.div
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="font-serif text-astro-gold text-lg tracking-widest uppercase mb-4"
        >
          {messages[messageIndex]}
        </motion.div>
        
        <div className="w-48 h-px bg-white/10 mx-auto relative overflow-hidden rounded-full">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-astro-saffron to-transparent w-full"
          />
        </div>
      </div>

      <div className="absolute bottom-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-5 h-5 text-astro-saffron">
            <ChakraIcon />
          </div>
          <span className="font-serif text-astro-gold font-bold tracking-[0.4em] text-sm uppercase">Astro-21</span>
        </div>
        <div className="text-[10px] text-gray-500 tracking-[0.2em] font-medium uppercase">Authentic Vedic AI</div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
