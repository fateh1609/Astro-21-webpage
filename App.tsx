
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
  Award,
  Languages,
  Globe,
  Layout
} from 'lucide-react';
import StarField from './components/StarField.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
import { LotusIcon, ChakraIcon } from './components/Icons.tsx';

const DESTINATION_URL = "https://astro21.io";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [birthDate, setBirthDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'prediction' | 'shop' | 'pooja' | 'language'>('prediction');
  const [selectedLang, setSelectedLang] = useState('English');

  const handleAction = (type: 'prediction' | 'shop' | 'pooja' | 'language') => {
    setModalType(type);
    setShowModal(true);
  };

  const handleExternalRedirect = () => {
    window.location.assign(DESTINATION_URL);
  };

  const languages = ['English', 'हिन्दी', 'தமிழ்', 'తెలుగు', 'मराठी', 'বাংলা', 'ગુજરાતી'];

  return (
    <div className="min-h-screen text-white font-sans selection:bg-astro-saffron/30 overflow-x-hidden">
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
            aria-label="Change Language for Astro21"
            onClick={() => handleAction('language')}
            className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold text-gray-400 hover:text-astro-gold hover:border-astro-gold/30 transition-all"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{selectedLang}</span>
          </button>
          <button 
            aria-label="Enter Astro21 Astrology Portal"
            onClick={() => handleAction('prediction')}
            className="bg-gradient-to-r from-astro-saffron to-orange-600 text-white px-4 sm:px-6 py-2 rounded-full text-[10px] font-black saffron-glow transition-all duration-300 active:scale-95 uppercase tracking-tighter"
          >
            Enter Portal
          </button>
        </nav>
      </header>

      <main className="relative z-10 pt-28 pb-12">
        {/* Hero Section - SEO H1 Optimized for Best Astrologer */}
        <section className="px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-astro-saffron/10 border border-astro-saffron/30 px-4 py-1.5 rounded-full text-astro-saffron text-[10px] font-bold tracking-[0.2em] mb-6 uppercase">
              <Award className="w-3 h-3" /> Best Vedic Astrology Portal in India
            </div>
            <h1 className="font-serif text-4xl md:text-6xl mb-4 leading-[1.1] tracking-tight">
              Instant Vedic Solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-astro-saffron to-astro-gold italic">To Your Life Problems</span>
            </h1>
            <p className="text-gray-400 text-base max-w-[340px] mx-auto font-light leading-relaxed">
              Experience ancient wisdom through <strong>Astro21 Kundli GPT</strong>. Get deep life insights in <span className="text-astro-saffron font-medium">10+ Regional Languages</span> instantly.
            </p>
          </motion.div>

          {/* Sacred Visualizer (Aesthetic Centering) */}
          <div className="relative w-64 h-64 flex items-center justify-center mb-8 scale-90 sm:scale-100" aria-hidden="true">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 text-astro-saffron/10"
            >
              <LotusIcon className="w-full h-full" />
            </motion.div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
               <div className="w-56 h-56 rounded-full border border-astro-gold/20 animate-pulse" />
            </div>

            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.08, 1]
              }}
              transition={{ 
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-32 h-32 text-astro-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <ChakraIcon />
            </motion.div>
          </div>

          {/* High Conversion Quick Start Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={!isLoading ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="w-full max-w-md glass-card p-1 rounded-[2.5rem] relative overflow-hidden group mb-16 shadow-2xl"
          >
             <div className="bg-astro-indigo/40 rounded-[2.4rem] p-6 sm:p-8">
                <form onSubmit={(e) => { e.preventDefault(); handleAction('prediction'); }} className="space-y-4">
                  <div className="flex items-center justify-between px-2 mb-2">
                    <span className="text-[10px] font-bold text-astro-gold/50 uppercase tracking-widest tracking-tighter">Verified Astrologer Access</span>
                    <span className="text-[10px] font-bold text-astro-saffron uppercase tracking-tighter">Reports at ₹21*</span>
                  </div>
                  <div className="relative">
                    <label htmlFor="birthDateInput" className="sr-only">Enter Birth Date for Astrology Prediction</label>
                    <input
                      id="birthDateInput"
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full bg-black/60 border border-astro-gold/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-astro-saffron/50 transition-all text-white appearance-none text-lg font-medium"
                      required
                    />
                    <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-astro-gold/30 pointer-events-none" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-astro-saffron to-orange-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 saffron-glow transition-all active:scale-[0.98] uppercase tracking-wide"
                  >
                    Unlock My Future <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
             </div>
          </motion.div>
        </section>

        {/* Online Pooja Section - SEO H2 Optimized for Pooja keywords */}
        <section className="px-6 py-12 space-y-8 max-w-4xl mx-auto">
          <div>
            <div className="flex items-center justify-between mb-6 px-2">
              <h2 className="font-serif text-2xl sm:text-3xl text-white">Best Online Pooja Services</h2>
              <button onClick={() => handleAction('pooja')} className="text-astro-gold text-xs font-bold uppercase tracking-widest flex items-center gap-1 group">
                View All Rituals <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mb-6 px-2 leading-relaxed">Book authentic <strong>Live Online Pooja</strong> rituals in Haridwar, Banaras, and Rishikesh. Experience personalized Sankalp from any location through the Astro21 unified platform.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article 
                className="relative h-64 sm:h-72 rounded-[2rem] overflow-hidden glass-card group cursor-pointer border-astro-gold/20 shadow-xl"
                onClick={() => handleAction('pooja')}
              >
                <img 
                  src="https://media.istockphoto.com/id/1241318411/photo/divine-ganga-aarti-yagna-at-rishikesh.jpg?s=612x612&w=0&k=20&c=6kyI1QsjTSVMlcv7jews6kKzPndDet7ItLs6G-gUkaA=" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
                  alt="Authentic Live Ganga Aarti Ritual Haridwar Booking via Astro21" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-astro-saffron mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-[12px] font-black uppercase tracking-[0.2em]">Haridwar Rituals</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">Live Ganga Aarti</h3>
                  <p className="text-gray-300 text-[11px] font-medium tracking-wide">Personalized name Sankalp & Live Video stream.</p>
                </div>
                <div className="absolute top-4 right-4 bg-astro-saffron text-white text-[10px] font-black px-4 py-1.5 rounded-full animate-pulse shadow-lg">LIVE</div>
              </article>

              <article 
                className="relative h-64 sm:h-72 rounded-[2rem] overflow-hidden glass-card group cursor-pointer border-astro-gold/20 shadow-xl"
                onClick={() => handleAction('pooja')}
              >
                <img 
                  src="https://www.varanasitourspackage.com/blogs/wp-content/uploads/2018/12/kashi-vishwanath.jpg" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
                  alt="Kashi Vishwanath Rudrabhishek Online Pooja Banaras via Astro21" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-astro-saffron mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-[12px] font-black uppercase tracking-[0.2em]">Kashi Services</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">Online Rudrabhishek</h3>
                  <p className="text-gray-300 text-[11px] font-medium tracking-wide">Sacred Banaras rituals with authentic Vedic Acharyas.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Vedic Marketplace - SEO H2 Optimized for Gemstones */}
        <section className="px-6 py-12 space-y-8 max-w-4xl mx-auto">
          <div>
            <div className="flex items-center justify-between mb-6 px-2">
              <h2 className="font-serif text-2xl sm:text-3xl text-white">Authentic Vedic Sangrah</h2>
              <button onClick={() => handleAction('shop')} className="text-astro-gold text-xs font-bold uppercase tracking-widest flex items-center gap-1 group">
                Enter Store <ShoppingBag className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mb-8 px-2 leading-relaxed">Your <strong>trusted one-stop shop</strong> for authentic 100% lab-certified gemstones (Pukhraj, Neelam), original Rudraksha, and energized spiritual instruments.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { 
                  name: 'Certified Pukhraj', 
                  type: 'Yellow Sapphire', 
                  img: 'https://cdn-image.blitzshopdeck.in/ShopdeckCatalogue/tr:f-webp,w-600,fo-auto/6481c21f1b4a80d3f7d48fc1/media/7.25_Ratti__Ceylone_Yellow_Sapphire_Gemstone_Original_Certified_Pukhraj_Stone_Natural_for_Men___Women_6RJTXLL36T_2024-02-12_1.webp' 
                },
                { 
                  name: 'Original Rudraksha', 
                  type: '5-Mukhi Sacred Bead', 
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNLE27pmV2wpDkkObjRZWgeDkQd_0IINljg&s' 
                },
                { 
                  name: 'Shree Yantra', 
                  type: 'Energized Instrument', 
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCuhDHPPTcZ4Q3lOFegttv-ml7L0-mfroFIA&s' 
                },
                { 
                  name: 'Premium Kesar', 
                  type: 'Organic Kashmiri Saffron', 
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnCo_skIY7TyYlUkiCQfpl_B2f6e3D_zSsQ&s' 
                }
              ].map((item, i) => (
                <article 
                  key={i}
                  className="glass-card rounded-[2.2rem] p-4 flex flex-col items-center text-center group cursor-pointer border-astro-gold/10 hover:border-astro-gold/40 transition-all shadow-xl"
                  onClick={() => handleAction('shop')}
                >
                  <div className="w-full aspect-square rounded-[1.6rem] overflow-hidden mb-4 bg-black/40 border border-astro-gold/5 p-1">
                    <img 
                      src={item.img} 
                      className="w-full h-full object-cover rounded-[1.4rem] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                      alt={`Original ${item.name} Gemstone available on Astro21 Store`} 
                    />
                  </div>
                  <span className="text-[9px] font-black text-astro-saffron uppercase tracking-[0.2em] mb-1">{item.type}</span>
                  <h3 className="text-[11px] font-bold text-white mb-2 leading-tight h-8 flex items-center">{item.name}</h3>
                  <div className="w-12 h-0.5 bg-astro-gold/20 rounded-full mb-2" />
                  <span className="text-[9px] font-bold text-astro-gold/60 uppercase">Authenticated</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Ecosystem - SEO Context for Service richness */}
        <section className="px-6 py-12 space-y-6 max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-white mb-2 uppercase tracking-tight">The Astro21 Ecosystem</h2>
            <div className="w-16 h-0.5 bg-astro-saffron mx-auto rounded-full mb-4" />
          </div>

          {[
            { 
              id: '1', 
              title: 'Online Astrologer Portal', 
              desc: 'Premium AI Kundli predictions providing instant Vedic solutions to life problems.', 
              icon: <Sparkles className="w-6 h-6" />,
              price: '₹21*'
            },
            { 
              id: '2', 
              title: 'Virtual Ritual Booking', 
              desc: 'Join holy Ganga Poojas at Kashi & Haridwar via our interactive live platform.', 
              icon: <Flame className="w-6 h-6" />,
              price: 'Book'
            },
            { 
              id: '3', 
              title: 'Vedic Gemstone Store', 
              desc: 'Premium one-stop shop for certified birthstones and energised spiritual relics.', 
              icon: <Gem className="w-6 h-6" />,
              price: 'Enter'
            },
            { 
              id: '4', 
              title: 'Multilingual Support', 
              desc: 'Access your future predictions in Hindi, Tamil, Telugu, and 10+ mother tongues.', 
              icon: <Languages className="w-6 h-6" />,
              price: 'Native'
            },
          ].map((feature) => (
            <article
              key={feature.id}
              onClick={() => handleAction(feature.id === '4' ? 'language' : feature.id === '2' ? 'pooja' : feature.id === '3' ? 'shop' : 'prediction')}
              className="glass-card p-6 rounded-[2rem] flex items-center gap-5 hover:border-astro-gold/30 transition-all duration-500 group cursor-pointer shadow-lg"
            >
              <div className="bg-gradient-to-br from-astro-saffron/20 to-transparent p-4 rounded-2xl text-astro-saffron border border-astro-saffron/10 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-bold text-white leading-tight">{feature.title}</h3>
                  <span className="text-[9px] font-black text-astro-gold border border-astro-gold/20 px-2 py-0.5 rounded-full uppercase tracking-tighter">{feature.price}</span>
                </div>
                <p className="text-gray-400 text-[11px] leading-tight">{feature.desc}</p>
              </div>
            </article>
          ))}
        </section>

        {/* Trust signals & Social Proof */}
        <section className="px-6 py-16 text-center">
          <ShieldCheck className="w-12 h-12 text-astro-gold mx-auto mb-6 opacity-60" />
          <h2 className="text-astro-gold font-serif text-2xl mb-2">Verified Vedic Lineage</h2>
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mb-8">Guided by Top Astrologers & Certified Acharyas</p>
          
          <div className="flex justify-center -space-x-3 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=astro-guru-${i}`}
                className="w-10 h-10 rounded-full border-2 border-astro-indigo bg-black shadow-lg"
                alt="Verified Top Astrologer Avatar"
              />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-astro-indigo bg-astro-saffron flex items-center justify-center text-[9px] font-black z-10 shadow-lg">
              10K+
            </div>
          </div>
          <p className="text-gray-400 text-xs italic">Trusted by 10,000+ seekers on the <strong>Astro21</strong> Platform.</p>
        </section>

        {/* Footer with SEO Navigation */}
        <footer className="px-6 py-16 border-t border-astro-gold/10 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-astro-gold to-transparent opacity-30" />
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-8 text-astro-saffron/40">
              <ChakraIcon />
            </div>
            <span className="font-serif text-2xl font-bold tracking-[0.3em] text-astro-gold/40 uppercase">Astro21</span>
          </div>
          <p className="text-astro-gold/40 text-[11px] leading-relaxed italic max-w-xs mx-auto mb-10 font-serif" aria-label="Sacred Mantra">
            ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । <br />
            मृत्योर्मा अमृतं गमय ॥
          </p>
          <nav className="flex flex-wrap justify-center gap-6 mb-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-astro-gold transition-colors">Astrologer Directory</a>
            <a href="#" className="hover:text-astro-gold transition-colors">Pooja Services</a>
            <a href="#" className="hover:text-astro-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-astro-gold transition-colors">Terms of Use</a>
          </nav>
          <p className="text-gray-600 text-[9px] uppercase tracking-[0.2em] font-medium leading-loose">
            © 2025 Astro21 Technologies. <br />
            <span className="text-astro-saffron/50">India's Leading Unified Vedic Platform for the Global Seeker.</span>
          </p>
        </footer>
      </main>

      {/* Unified Multi-Modal Bottom Sheet */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-md glass-card rounded-t-[3rem] sm:rounded-[3rem] p-8 shadow-2xl border-t border-astro-saffron/40"
            >
              <button 
                aria-label="Close Information Modal"
                onClick={() => setShowModal(false)}
                className="absolute top-8 right-8 p-2 rounded-full bg-white/5 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-astro-saffron/10 rounded-3xl flex items-center justify-center text-astro-saffron mb-6 border border-astro-saffron/20 shadow-inner">
                  {modalType === 'prediction' && <Sparkles className="w-8 h-8" />}
                  {modalType === 'shop' && <ShoppingBag className="w-8 h-8" />}
                  {modalType === 'pooja' && <Flame className="w-8 h-8" />}
                  {modalType === 'language' && <Languages className="w-8 h-8" />}
                </div>
                
                <h2 className="font-serif text-2xl text-white mb-2">
                  {modalType === 'prediction' && 'Divine Clarity Awaits'}
                  {modalType === 'shop' && 'Vedic Marketplace Store'}
                  {modalType === 'pooja' && 'Live Ritual Portal'}
                  {modalType === 'language' && 'Regional Native Support'}
                </h2>
                
                <p className="text-gray-400 text-sm mb-8 px-4 leading-relaxed">
                  {modalType === 'prediction' && 'Enter the Astro21 portal to unlock detailed AI Kundli reports and get instant guidance from the best astrologers.'}
                  {modalType === 'shop' && 'Access our marketplace for lab-certified gems, original Rudraksha and energized Vedic tools.'}
                  {modalType === 'pooja' && 'Book live Poojas in Kashi & Haridwar with personalized name Sankalp performed by verified Acharyas.'}
                  {modalType === 'language' && 'Experience the world of Vedic wisdom in your own mother tongue with support for 10+ languages.'}
                </p>

                {modalType === 'language' ? (
                  <div className="grid grid-cols-2 gap-3 w-full mb-10">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedLang(lang);
                          setShowModal(false);
                        }}
                        className={`py-3 rounded-2xl text-[11px] font-bold uppercase transition-all tracking-wider ${
                          selectedLang === lang 
                            ? 'bg-gradient-to-r from-astro-saffron to-orange-600 text-white saffron-glow shadow-lg' 
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-astro-indigo to-black rounded-[2.5rem] p-6 mb-10 border border-astro-gold/20 w-full shadow-inner relative overflow-hidden group">
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-astro-saffron/10 rounded-full blur-3xl" />
                    <p className="text-astro-saffron font-black text-[10px] uppercase tracking-widest mb-2">Astro21 Exclusive</p>
                    <p className="text-white text-lg font-medium leading-tight">
                      {modalType === 'prediction' && 'Full Destiny Chart Access'}
                      {modalType === 'shop' && 'Digital Lab Authenticity Proof'}
                      {modalType === 'pooja' && 'Secure Live Temple Stream'}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-3">
                      <span className="text-astro-gold text-2xl font-black">
                        Starting from ₹21*
                      </span>
                    </div>
                  </div>
                )}
                
                <button 
                  className="w-full bg-gradient-to-r from-astro-saffron to-orange-600 text-white py-5 rounded-2xl font-black saffron-glow text-lg uppercase tracking-tight active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3"
                  onClick={handleExternalRedirect}
                >
                  Enter Portal Now <Layout className="w-5 h-5" />
                </button>
                <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mt-5">Verified • Secured • Authentic Vedic Wisdom</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
