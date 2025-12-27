import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  X, 
  Calendar, 
  ShieldCheck, 
  Gem,
  ShoppingBag,
  MapPin,
  Flame,
  Languages,
  Globe,
  Layout,
  MessageSquareLock,
  Eye,
  Zap,
  ShoppingBasket,
  Anchor
} from 'lucide-react';
import StarField from './components/StarField';
import LoadingScreen from './components/LoadingScreen';
import { LotusIcon, ChakraIcon } from './components/Icons';
import { getSacredInsight } from './services/geminiService';
import EncryptedChat from './components/EncryptedChat';

const DESTINATION_URL = "https://astro21.io";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [birthDate, setBirthDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'insight' | 'shop' | 'pooja' | 'language' | 'chat'>('insight');
  const [selectedLang, setSelectedLang] = useState('English');
  const [sacredInsight, setSacredInsight] = useState<string | null>(null);
  const [isAligning, setIsAligning] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleAction = (type: 'insight' | 'shop' | 'pooja' | 'language' | 'chat') => {
    setModalType(type);
    if (type === 'chat') {
      setShowChat(true);
    } else {
      setShowModal(true);
    }
  };

  const handleAlignDestiny = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate) return;
    
    setIsAligning(true);
    setSacredInsight(null);
    handleAction('insight');
    
    const result = await getSacredInsight(birthDate);
    setSacredInsight(result);
    setIsAligning(false);
  };

  const handleExternalRedirect = () => {
    window.location.assign(DESTINATION_URL);
  };

  const languages = ['English', 'हिन्दी', 'தமிழ்', 'తెలుగు', 'मराठी', 'বাংলা', 'ગુજરાતી'];

  return (
    <div className="min-h-screen text-white font-sans selection:bg-astro-saffron/30 overflow-x-hidden bg-astro-indigo">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loader" onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <StarField />

      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-astro-indigo/80 backdrop-blur-xl border-b border-astro-gold/10 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 text-astro-saffron drop-shadow-[0_0_8px_rgba(255,153,51,0.5)]">
            <ChakraIcon />
          </div>
          <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-astro-gold uppercase">Astro21</span>
        </div>
        
        <nav className="flex items-center gap-3">
          <button 
            aria-label="Sanctuary Language"
            onClick={() => handleAction('language')}
            className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold text-gray-400 hover:text-astro-gold transition-all"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{selectedLang}</span>
          </button>
          <button 
            onClick={handleExternalRedirect}
            className="bg-gradient-to-r from-astro-saffron to-orange-600 text-white px-5 py-2 rounded-full text-[10px] font-black saffron-glow uppercase tracking-tighter"
          >
            Get App
          </button>
        </nav>
      </header>

      <main className="relative z-10 pt-28 pb-12">
        {/* HERO SECTION */}
        <section className="px-6 flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="font-serif text-4xl md:text-6xl mb-4 leading-[1.1] tracking-tight">
              Decode Your Cosmic Code <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-astro-saffron to-astro-gold italic font-bold">Starting at Rs 21*</span>
            </h1>
            <p className="text-gray-400 text-base max-w-[340px] mx-auto font-light leading-relaxed">
              Experience the future of Vedic wisdom. Discover your divine path through <strong>Sacred Geometry</strong>.
            </p>
          </motion.div>

          {/* Central Animated Element */}
          <div className="relative w-64 h-64 flex items-center justify-center mb-8 scale-90 sm:scale-100" aria-hidden="true">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 text-astro-saffron/10"
            >
              <LotusIcon className="w-full h-full" />
            </motion.div>
            
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-32 h-32 text-astro-saffron drop-shadow-[0_0_25px_rgba(255,153,51,0.6)]"
            >
              <ChakraIcon />
            </motion.div>
          </div>

          {/* Chat-like Input Field */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={!isLoading ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="w-full max-w-md glass-card p-1 rounded-[2.5rem] relative overflow-hidden group shadow-2xl"
          >
             <div className="bg-astro-indigo/40 rounded-[2.4rem] p-6 sm:p-8">
                <form onSubmit={handleAlignDestiny} className="space-y-4">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-[11px] font-bold text-astro-gold uppercase tracking-[0.2em] opacity-60 italic">What is your birth date?</span>
                  </div>
                  <div className="relative">
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full bg-black/60 border border-astro-gold/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-astro-saffron/50 transition-all text-white appearance-none text-lg font-medium text-center"
                      required
                    />
                    <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-astro-gold/30 pointer-events-none" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-astro-saffron to-orange-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 saffron-glow transition-all active:scale-[0.98] uppercase tracking-wide"
                  >
                    Start Alignment <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
             </div>
          </motion.div>
        </section>

        {/* 1. FEATURE LIST SECTION */}
        <section className="px-6 py-12 max-w-xl mx-auto space-y-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl text-astro-gold uppercase tracking-widest">Sacred Offerings</h2>
            <div className="w-12 h-0.5 bg-astro-saffron mx-auto mt-2 opacity-50 rounded-full" />
            <p className="text-[10px] text-astro-gold/60 uppercase tracking-[0.2em] mt-3 font-bold italic">Sacred Wisdom starting at Rs 21*</p>
          </div>

          {[
            { id: 'kundli', title: 'Sacred Kundli', desc: 'Deep alignment of your Janma Patrika using high-precision sacred geometry.', icon: <Eye className="w-6 h-6" /> },
            { id: 'dosha', title: 'Dosha Analysis', desc: 'Identify and balance spiritual blockages through traditional Vedic methods.', icon: <Zap className="w-6 h-6" /> },
            { id: 'future', title: 'Future Alignment', desc: 'Glimpse your soul\'s trajectory through the lens of timeless cosmic laws.', icon: <Sparkles className="w-6 h-6" /> },
            { id: 'chat-feature', title: 'Secured Sanctuary Chat', desc: 'End-to-end encrypted consultations with verified Sanctuary Acharyas.', icon: <MessageSquareLock className="w-6 h-6" /> },
          ].map((feature) => (
            <motion.article
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              key={feature.id}
              onClick={() => feature.id === 'chat-feature' ? handleAction('chat') : handleAction('insight')}
              className="glass-card p-6 rounded-[2.2rem] flex items-center gap-5 group cursor-pointer border-astro-gold/10 hover:border-astro-gold/40 transition-all duration-500 shadow-xl"
            >
              <div className="bg-gradient-to-br from-astro-indigo to-black p-4 rounded-2xl text-astro-gold border border-astro-gold/20 group-hover:scale-110 transition-transform shadow-inner">
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1 tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">{feature.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-astro-gold/30 group-hover:text-astro-saffron group-hover:translate-x-1 transition-all" />
            </motion.article>
          ))}
        </section>

        {/* 2. POOJAS SECTION - HARIDWAR & KASHI */}
        <section className="px-6 py-12 space-y-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-6 text-center">
            <h2 className="font-serif text-3xl text-white uppercase tracking-wide">Live Temple Rituals</h2>
            <div className="w-12 h-0.5 bg-astro-saffron my-2 opacity-50 rounded-full" />
            <span className="text-astro-gold text-[10px] font-black uppercase tracking-[0.2em]">Starting at Rs 21*</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="relative h-64 sm:h-72 rounded-[3rem] overflow-hidden glass-card group cursor-pointer border-astro-gold/20 shadow-xl" onClick={() => handleAction('pooja')}>
              <img 
                src="https://media.istockphoto.com/id/1241318411/photo/divine-ganga-aarti-yagna-at-rishikesh.jpg?s=612x612&w=0&k=20&c=6kyI1QsjTSVMlcv7jews6kKzPndDet7ItLs6G-gUkaA=" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms]" 
                alt="Haridwar Pooja" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 text-astro-saffron mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Haridwar Sanctuary</span>
                </div>
                <h3 className="text-2xl font-serif text-white tracking-wide">Live Ganga Aarti</h3>
                <p className="text-gray-300 text-[10px] uppercase font-bold tracking-widest mt-1 opacity-60">Personalized Sankalp • Starting at Rs 21*</p>
              </div>
            </article>

            <article className="relative h-64 sm:h-72 rounded-[3rem] overflow-hidden glass-card group cursor-pointer border-astro-gold/20 shadow-xl" onClick={() => handleAction('pooja')}>
              <img 
                src="https://www.varanasitourspackage.com/blogs/wp-content/uploads/2018/12/kashi-vishwanath.jpg" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms]" 
                alt="Kashi Pooja" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 text-astro-saffron mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Kashi Vishwanath</span>
                </div>
                <h3 className="text-2xl font-serif text-white tracking-wide">Online Rudrabhishek</h3>
                <p className="text-gray-300 text-[10px] uppercase font-bold tracking-widest mt-1 opacity-60">Direct From Banaras • Starting at Rs 21*</p>
              </div>
            </article>
          </div>
        </section>

        {/* 3. VEDIC SHOP SECTION (4 ITEMS) */}
        <section className="px-6 py-16 max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="font-serif text-2xl text-white uppercase tracking-wider">Vedic Store</h2>
            <div className="w-12 h-0.5 bg-astro-saffron my-2 opacity-50 rounded-full" />
            <span className="text-astro-gold text-[10px] font-black uppercase tracking-[0.2em]">Essentials starting at Rs 21*</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 'gem', title: 'Certified Gemstones', icon: <Gem className="w-5 h-5" />, price: 'Starting at Rs 21*' },
              { id: 'rudraksha', title: 'Natural Rudraksha', icon: <Anchor className="w-5 h-5" />, price: 'Starting at Rs 21*' },
              { id: 'yantra', title: 'Energized Yantras', icon: <ChakraIcon className="w-5 h-5" />, price: 'Starting at Rs 21*' },
              { id: 'essentials', title: 'Spiritual Essentials', icon: <ShoppingBasket className="w-5 h-5" />, price: 'Starting at Rs 21*' },
            ].map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -5 }}
                onClick={() => handleAction('shop')}
                className="glass-card p-5 rounded-[2rem] flex flex-col items-center text-center cursor-pointer border-astro-gold/10 hover:border-astro-saffron/30 transition-all shadow-lg"
              >
                <div className="w-12 h-12 bg-astro-saffron/10 rounded-2xl flex items-center justify-center text-astro-saffron mb-4 shadow-inner">
                  {item.icon}
                </div>
                <h4 className="text-[11px] font-bold text-white uppercase tracking-tight mb-2 leading-tight">{item.title}</h4>
                <span className="text-[10px] font-black text-astro-gold opacity-80 uppercase tracking-tighter">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. TRUST / FOOTER SECTIONS */}
        <section className="px-6 py-20 text-center">
          <div className="inline-block glass-card px-8 py-6 rounded-[2.5rem] border border-astro-gold/20 shadow-2xl">
            <h2 className="text-astro-gold font-serif text-xl mb-4 tracking-[0.2em] uppercase">Trusted by 10,000+ Seekers</h2>
            <div className="flex justify-center -space-x-4 mb-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img
                  key={i}
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=seeker-${i}`}
                  className="w-14 h-14 rounded-full border-2 border-astro-indigo bg-black shadow-lg"
                  alt="Verified Seeker"
                />
              ))}
              <div className="w-14 h-14 rounded-full border-2 border-astro-indigo bg-astro-saffron flex items-center justify-center text-[11px] font-black z-10 shadow-lg">
                +10k
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 opacity-60">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Authenticated Pathseekers</span>
            </div>
          </div>
        </section>

        <footer className="px-6 py-20 text-center border-t border-astro-gold/10 bg-black/20">
          <div className="flex items-center justify-center gap-3 mb-8 opacity-40">
            <ChakraIcon className="w-7 h-7 text-astro-saffron" />
            <span className="font-serif text-2xl font-bold tracking-[0.4em] text-astro-gold uppercase">Astro21</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8 mb-12 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
            <button onClick={handleExternalRedirect} className="hover:text-astro-gold transition-colors">Sanctuary Rules</button>
            <button onClick={handleExternalRedirect} className="hover:text-astro-gold transition-colors">Vedic Wisdom</button>
            <button onClick={handleExternalRedirect} className="hover:text-astro-gold transition-colors">Temple Support</button>
            <button onClick={handleExternalRedirect} className="hover:text-astro-gold transition-colors">Secured Privacy</button>
          </nav>
          
          <p className="text-astro-gold/40 text-[12px] leading-relaxed italic max-w-xs mx-auto mb-10 font-serif">
            ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । <br />
            मृत्योर्मा अमृतं गमय ॥
          </p>
          
          <p className="text-gray-600 text-[9px] uppercase tracking-[0.3em] font-bold leading-loose">
            © 2025 Astro21 Sanctuary. <br />
            <span className="text-astro-saffron/50">Vedic Wisdom starting at Rs 21*. Channeled for the Global Seeker.</span>
          </p>
        </footer>
      </main>

      {/* Unified Modals */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowModal(false)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              exit={{ y: "100%" }} 
              transition={{ type: "spring", damping: 30, stiffness: 300 }} 
              className="relative w-full max-w-md glass-card rounded-t-[3rem] sm:rounded-[3rem] p-8 shadow-2xl border-t border-astro-saffron/40 overflow-hidden"
            >
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-astro-saffron/10 rounded-full blur-3xl pointer-events-none" />
              <button onClick={() => setShowModal(false)} className="absolute top-8 right-8 p-2 rounded-full bg-white/5 text-gray-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-astro-saffron/10 rounded-3xl flex items-center justify-center text-astro-saffron mb-6 border border-astro-saffron/20 shadow-inner">
                  {modalType === 'insight' && <Sparkles className="w-8 h-8" />}
                  {modalType === 'shop' && <ShoppingBasket className="w-8 h-8" />}
                  {modalType === 'pooja' && <Flame className="w-8 h-8" />}
                  {modalType === 'language' && <Languages className="w-8 h-8" />}
                </div>
                
                <h2 className="font-serif text-2xl text-white mb-2 uppercase tracking-[0.1em]">
                  {modalType === 'insight' ? 'Cosmic Insight' : modalType === 'shop' ? 'Vedic Store' : modalType === 'pooja' ? 'Sacred Ritual' : 'Language'}
                </h2>
                <span className="text-astro-gold text-[10px] font-black uppercase tracking-[0.2em] mb-6 font-bold">Starting at Rs 21*</span>
                
                {modalType === 'insight' && (
                  <div className="w-full mb-8">
                    {isAligning ? (
                      <div className="py-8 flex flex-col items-center gap-4">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-10 h-10 text-astro-saffron">
                          <ChakraIcon />
                        </motion.div>
                        <p className="text-astro-gold font-serif italic text-sm animate-pulse tracking-wide">Consulting the Akashic Records...</p>
                      </div>
                    ) : sacredInsight ? (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/5 border border-astro-gold/20 rounded-3xl p-6 italic text-gray-300 text-sm leading-relaxed font-serif shadow-inner">
                        "{sacredInsight}"
                      </motion.div>
                    ) : (
                      <p className="text-gray-400 text-sm font-light leading-relaxed">Align your destiny starting at Rs 21*.</p>
                    )}
                  </div>
                )}

                {modalType === 'language' && (
                  <div className="grid grid-cols-2 gap-3 w-full mb-10 mt-4">
                    {languages.map((lang) => (
                      <button 
                        key={lang} 
                        onClick={() => { setSelectedLang(lang); setShowModal(false); }} 
                        className={`py-3 rounded-2xl text-[10px] font-black uppercase transition-all tracking-wider ${selectedLang === lang ? 'bg-astro-saffron text-white shadow-lg saffron-glow' : 'bg-white/5 text-gray-400 border border-white/5'}`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}

                {(modalType === 'shop' || modalType === 'pooja') && (
                  <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
                    Enter the full sanctuary portal to finalize your booking and access exclusive member pricing starting at Rs 21*.
                  </p>
                )}
                
                <button 
                  className="w-full bg-gradient-to-r from-astro-saffron to-orange-600 text-white py-5 rounded-2xl font-black saffron-glow text-lg uppercase tracking-tight active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3" 
                  onClick={handleExternalRedirect}
                >
                  Enter Full Sanctuary <Layout className="w-5 h-5" />
                </button>
                <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mt-6">Verified • Secured • Authentic Vedic Path</p>
              </div>
            </motion.div>
          </div>
        )}

        {showChat && (
          <EncryptedChat onClose={() => setShowChat(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;