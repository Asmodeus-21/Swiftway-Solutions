
import React from 'react';

interface HeroProps {
  onNavigate: (sectionId: string, projectType?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const tickerItems = [
    { label: "Master Electrician: #PA-EL215001", section: "expertise" },
    { label: "Service: Grid Modernization", section: "expertise" },
    { label: "Service: Premium Structural Renovations", section: "portfolio" },
    { label: "Bonded & Insured: $2M Coverage", section: "regions" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden hero-gradient">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full">
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.3em]">Master Electrical Engineering</span>
            <div className="w-1 h-1 rounded-full bg-slate-500"></div>
            <span className="text-slate-300 text-[10px] font-bold uppercase tracking-[0.3em]">Licensed PA / NJ</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
            PRECISION BUILT. <br />
            <span className="font-serif italic text-amber-500 normal-case text-glow">Powerfully Designed.</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
            Swiftway Solutions fuses master-grade electrical engineering with elite architectural contracting. 
            We orchestrate complex renovations where every circuit and stone is placed with absolute intent.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <button 
              onClick={() => onNavigate('contact', 'Full Architectural Renovation')}
              className="group relative bg-amber-500 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg transition-all hover:pr-14 hover:bg-white shadow-[0_20px_40px_rgba(245,158,11,0.2)]"
            >
              Schedule Consultation
              <i className="fa-solid fa-arrow-right absolute right-6 opacity-0 group-hover:opacity-100 transition-all"></i>
            </button>
            <div className="flex flex-col gap-1">
               <p className="text-xs font-black text-amber-500 uppercase tracking-widest">The Gold Standard</p>
               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Philly's Premier Infrastructure Firm</p>
            </div>
          </div>
        </div>

        {/* Visual Content / Featured Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative z-10 animate-float">
            <div className="glass p-2 rounded-[2.5rem] shadow-2xl">
              <div className="relative rounded-[2rem] overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Architecture" 
                  className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="glass p-6 rounded-2xl border-white/10">
                      <p className="text-amber-500 font-black text-[10px] uppercase tracking-widest mb-1">Current Signature Project</p>
                      <p className="text-white font-black text-2xl uppercase tracking-tight">The Chestnut Hill Estate</p>
                      <p className="text-slate-400 text-sm mt-2">Full Grid Modernization & Structural Restoration</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Accent elements */}
            <div className="absolute -top-6 -right-6 glass p-6 rounded-3xl shadow-xl border-amber-500/20">
               <div className="text-white text-xl font-black">100%</div>
               <div className="text-[10px] text-amber-500 font-black uppercase tracking-widest mt-1">Code Compliance</div>
            </div>
          </div>

          <div className="absolute inset-0 translate-x-12 translate-y-12 border-2 border-slate-800 rounded-[3rem] -z-10 opacity-30"></div>
        </div>
      </div>

      {/* Trust Ticker - Explicitly using buttons for better click handling */}
      <div className="absolute bottom-0 w-full bg-slate-900/50 backdrop-blur-md border-t border-white/5 py-5 overflow-hidden group z-20">
        <div className="animate-infinite-scroll">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center px-10">
              {tickerItems.map((item, idx) => (
                <button 
                  key={`${i}-${idx}`}
                  type="button"
                  onClick={() => onNavigate(item.section)}
                  className="flex items-center gap-3 text-slate-400 text-[9px] font-black uppercase tracking-[0.5em] hover:text-amber-500 transition-colors whitespace-nowrap outline-none focus:ring-0"
                >
                  <i className="fa-solid fa-square text-[4px] text-amber-500"></i>
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
