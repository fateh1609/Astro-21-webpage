import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Send, User, ChevronLeft } from 'lucide-react';
import { ChakraIcon } from './Icons';

interface EncryptedChatProps {
  onClose: () => void;
}

const EncryptedChat: React.FC<EncryptedChatProps> = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Pranam. Your connection to the Sanctuary is now secured via Sacred End-to-End Encryption.", type: 'system' },
    { id: 2, text: "Welcome to Astro21. How can our Acharyas guide your path today?", type: 'guru' }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { id: Date.now(), text: input, type: 'user' }]);
    setInput("");
    
    // Simulated sacred response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "Your query has been received in the inner sanctum. An Acharya will resonate with you shortly.", 
        type: 'guru' 
      }]);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[110] bg-astro-indigo flex flex-col"
    >
      {/* Header */}
      <div className="bg-astro-indigo/90 backdrop-blur-xl border-b border-astro-gold/20 p-4 flex items-center justify-between">
        <button onClick={onClose} className="p-2 text-gray-400 hover:text-white transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-astro-saffron" />
            <span className="font-serif text-astro-gold font-bold uppercase tracking-wider text-sm">Sacred Sanctuary</span>
          </div>
          <span className="text-[9px] text-green-500 font-bold uppercase tracking-widest animate-pulse flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Encrypted Tunnel Active
          </span>
        </div>
        <div className="w-10 h-10 bg-astro-saffron/10 rounded-full flex items-center justify-center border border-astro-saffron/20">
          <ChakraIcon className="w-6 h-6 text-astro-saffron" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={msg.id}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] rounded-2xl p-4 text-sm font-light ${
              msg.type === 'user' 
                ? 'bg-astro-saffron/20 border border-astro-saffron/30 text-white rounded-tr-none' 
                : msg.type === 'system'
                ? 'bg-white/5 border border-white/10 text-gray-400 text-center w-full italic text-xs'
                : 'bg-astro-gold/10 border border-astro-gold/20 text-gray-200 rounded-tl-none'
            }`}>
              {msg.type === 'guru' && (
                <div className="flex items-center gap-1 text-[9px] font-bold text-astro-gold uppercase mb-1 tracking-tighter">
                  <User className="w-2.5 h-2.5" /> Sanctuary Acharya
                </div>
              )}
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="p-6 bg-astro-indigo/80 backdrop-blur-xl border-t border-astro-gold/10">
        <form onSubmit={handleSend} className="relative flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your spiritual query..."
            className="flex-1 bg-black/40 border border-astro-gold/20 rounded-full py-4 px-6 text-white text-sm focus:outline-none focus:border-astro-saffron transition-all"
          />
          <button 
            type="submit"
            className="w-12 h-12 bg-astro-saffron rounded-full flex items-center justify-center saffron-glow active:scale-95 transition-all text-white"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
        <div className="mt-4 flex items-center justify-center gap-2 opacity-30">
          <Lock className="w-3 h-3 text-astro-gold" />
          <span className="text-[9px] font-bold text-astro-gold uppercase tracking-[0.2em]">Sacred Shastra Security Protocol</span>
        </div>
      </div>
    </motion.div>
  );
};

export default EncryptedChat;