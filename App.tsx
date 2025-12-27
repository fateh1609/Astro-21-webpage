
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StarField from './components/StarField.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
import { ChakraIcon, LotusIcon } from './components/Icons.tsx';
import { ArrowRight, Globe, ShieldCheck, Sparkles, Award } from 'lucide-react';

const DESTINATION_URL = "https://astro21.io";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial brand synchronization phase
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnterPortal = () => {
    // Immediate high-speed redirection on user intent
    window.location.assign(DESTINATION_URL);
  };

  return (
    <div className="min-h-[100dvh] text-white font-sans selection:bg-astro-saffron/40 overflow-x-hidden bg-astro-indigo flex flex-col items-center justify-between relative">
      <StarField />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="portal-home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full flex flex-col items-center flex-grow"
          >
            {/* Minimal High-Trust Header */}
            <header className="w-full max-w-7xl mx-auto p-6 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 text-astro-saffron drop-shadow-[0_0_12px_rgba(255,153,51,0.6)] animate-pulse-slow">
                  <ChakraIcon />
                </div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.4em] text-astro-gold uppercase select-none">Astro-21</span>
              </div>
              
              <div className="flex items-center gap-4 text-[9px] sm:text-[10px] font-black text-gray-500 uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-astro-gold" /> Global Nodes</span>
                <div className="w-px h-3 bg-white/10" />
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-astro-saffron" /> Secure SSL</span>
              </div>
            </header>

            {/* Central Portal Hero */}
            <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 text-center w-full">
              <div className="relative mb-12 group">
                {/* Sacred Aura */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-astro-saffron/5 blur-[100px] rounded-full group-hover:bg-astro-saffron/10 transition-colors duration-1000" />
                
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 1.2, ease: "backOut" }}
                  className="relative w-56 h-56 sm:w-72 sm:h-72 mx-auto flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 text-astro-gold/10"
                  >
                    <LotusIcon className="w-full h-full" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 sm:w-40 sm:h-40 text-astro-saffron drop-shadow-[0_0_25px_rgba(255,153,51,0.5)] cursor-pointer"
                  >
                    <ChakraIcon />
                  </motion.div>
                  
                  {/* Floating Elements */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-astro-gold rounded-full"
                      animate={{
                        y: [0, -40, 0],
                        opacity: [0, 0.5, 0],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                      style={{
                        left: `${50 + 40 * Math.cos(i * 45 * Math.PI / 180)}%`,
                        top: `${50 + 40 * Math.sin(i * 45 * Math.PI / 180)}%`
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-10"
              >
                <div className="inline-flex items-center gap-2 bg-astro-saffron/10 border border-astro-saffron/20 px-4 py-1.5 rounded-full text-astro-saffron text-[10px] font-black tracking-[0.2em] mb-6 uppercase">
                  <Award className="w-3.5 h-3.5" /> Established in Vedic Tradition
                </div>
                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl mb-6 leading-[1.05] tracking-tight">
                  Decode Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-astro-saffron via-astro-gold to-white italic">Cosmic Code</span>
                </h1>
                <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto font-light leading-relaxed">
                  Join 10,000+ seekers on the world's most advanced Vedic Futurism platform. 
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="w-full max-w-sm"
              >
                <button
                  onClick={handleEnterPortal}
                  className="w-full group relative bg-gradient-to-r from-astro-saffron via-orange-600 to-red-600 text-white py-6 rounded-3xl font-black text-xl saffron-glow transition-all active:scale-[0.98] uppercase tracking-widest flex items-center justify-center gap-4 overflow-hidden border border-white/20"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-3">
                    Enter Portal <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </button>
                
                <div className="flex items-center justify-center gap-8 mt-10">
                  <div className="text-center">
                    <div className="text-astro-gold text-xl font-black font-serif">10K+</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Seekers</div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <div className="text-astro-gold text-xl font-black font-serif">24/7</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Insights</div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <div className="text-astro-gold text-xl font-black font-serif">4.9★</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Rating</div>
                  </div>
                </div>
              </motion.div>
            </main>

            {/* High-Quality Deployment Footer */}
            <footer className="w-full p-8 border-t border-astro-gold/10 text-center bg-black/20 backdrop-blur-xl">
              <div className="max-w-7xl mx-auto flex flex-col items-center">
                <p className="text-astro-gold/30 text-[13px] leading-relaxed italic max-w-xs mx-auto mb-8 font-serif sm:text-sm">
                  ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । <br />
                  मृत्योर्मा अमृतं गमय ॥
                </p>
                <div className="flex flex-wrap justify-center gap-8 mb-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                  <a href="#" className="hover:text-astro-saffron transition-colors">Privacy</a>
                  <a href="#" className="hover:text-astro-saffron transition-colors">Terms</a>
                  <a href="#" className="hover:text-astro-saffron transition-colors">Guidelines</a>
                  <a href="#" className="hover:text-astro-saffron transition-colors">Contact</a>
                </div>
                <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8">
                  <span className="text-gray-600 text-[9px] uppercase tracking-[0.3em] font-medium">
                    © 2025 Astro-21 Technologies • Estd. in Dharma
                  </span>
                  <div className="flex items-center gap-4">
                    <Sparkles className="w-4 h-4 text-astro-gold/40" />
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Unified Vedic Web Ecosystem</span>
                  </div>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Deployment Fallback Link (Accessibility) */}
      <a href={DESTINATION_URL} className="sr-only focus:not-sr-only fixed bottom-4 right-4 bg-white text-black p-4 z-[1000] rounded-lg">
        Skip to official website astro21.io
      </a>
    </div>
  );
};

export default App;
