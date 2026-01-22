
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 w-[95%] max-w-7xl ${scrolled ? 'top-4' : 'top-8'}`}>
        <div className={`glass rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-500 ${scrolled ? 'shadow-2xl py-3 bg-slate-900/80' : ''}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-900 shadow-[0_0_20px_rgba(245,158,11,0.4)] cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <i className="fa-solid fa-compass-drafting text-xl"></i>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-black tracking-tighter text-white block leading-none uppercase">SWIFTWAY</span>
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-amber-500 opacity-80">Architectural Power</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {['Portfolio', 'Expertise', 'Regions'].map((item) => (
              <button 
                key={item} 
                onClick={() => handleLinkClick(item.toLowerCase())}
                className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-amber-500 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:block bg-amber-500 text-slate-900 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-white transition-all active:scale-95 shadow-lg"
            >
              Project Inquiry
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white text-xl bg-white/5 rounded-xl border border-white/10"
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-slate-950/95 backdrop-blur-xl lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {['Portfolio', 'Expertise', 'Regions'].map((item, idx) => (
            <button
              key={item}
              onClick={() => handleLinkClick(item.toLowerCase())}
              className={`text-2xl font-black uppercase tracking-[0.4em] text-white transition-all duration-500 delay-[${idx * 100}ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick('contact')}
            className={`bg-amber-500 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all duration-500 delay-[400ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Project Inquiry
          </button>
          
          <div className="pt-12 flex flex-col items-center">
            <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Precision Integrated</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><i className="fa-brands fa-linkedin text-xl"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
