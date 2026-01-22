
import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIAssistant from './components/AIAssistant';
import { SERVICES, PROJECTS, TESTIMONIALS, SERVICE_AREAS } from './constants';

const App: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [projectType, setProjectType] = useState('Full House Renovation');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
    }, 1200);
  };

  const onNavigate = useCallback((sectionId: string, type?: string) => {
    if (type) {
      setProjectType(type);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const projectOptions = [
    "Full House Renovation",
    "Gourmet Kitchen Remodeling",
    "Luxury Bathroom Remodeling",
    "Master Suite Renovation",
    "Basement & Media Room Build-out",
    "Custom Home Addition",
    "Historic Structural Restoration",
    "Attic Conversion & Skylights",
    "Deck & Luxury Outdoor Living",
    "Garage Build or Conversion",
    "Roofing & Siding Overhaul",
    "Master Electrical: Full Rewire",
    "Smart Home & Grid Modernization",
    "Commercial Retail Build-out",
    "Industrial Electrical Infrastructure",
    "Forensic Structural Repair"
  ];

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={onNavigate} />
      
      <Hero onNavigate={onNavigate} />

      {/* Expertise Section */}
      <section id="expertise" className="py-24 sm:py-32 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Core Expertise</h2>
              <p className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">Unified <br />Systems.</p>
            </div>
            <div className="h-px flex-1 bg-white/10 mx-10 hidden md:block mb-8"></div>
            <p className="text-slate-400 text-sm max-w-xs mb-6 font-medium">
              We eliminate the gap between architectural vision and electrical reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="group p-8 sm:p-10 rounded-[2.5rem] glass transition-all hover:bg-amber-500 hover:border-amber-400 cursor-default"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-amber-500 text-2xl mb-8 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-slate-900 transition-colors uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 group-hover:text-slate-800 transition-colors">{service.description}</p>
                <button 
                  onClick={() => onNavigate('contact', service.title.includes('Electrical') ? 'Master Electrical: Full Rewire' : 'Full House Renovation')}
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-500 group-hover:text-slate-900 transition-colors"
                >
                  Inquiry Now <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 sm:py-32 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-40 self-start">
               <h2 className="text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Portfolio</h2>
               <p className="text-4xl sm:text-5xl font-black mb-8 leading-tight uppercase tracking-tighter">Iconic Results.</p>
               <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                 Every project is a case study in engineering precision. We don't just remodel; we optimize infrastructure for the next century.
               </p>
               <div className="space-y-6">
                 {[
                   { name: 'Luxury Residential', formVal: 'Full House Renovation' },
                   { name: 'Gourmet Kitchens', formVal: 'Gourmet Kitchen Remodeling' },
                   { name: 'Designer Bathrooms', formVal: 'Luxury Bathroom Remodeling' },
                   { name: 'Commercial Assets', formVal: 'Commercial Retail Build-out' }
                 ].map((cat) => (
                   <button 
                    key={cat.name} 
                    onClick={() => onNavigate('contact', cat.formVal)}
                    className="w-full flex items-center justify-between py-5 border-b border-slate-100 group hover:border-amber-500 transition-all text-left"
                   >
                     <span className="text-lg font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900">{cat.name}</span>
                     <i className="fa-solid fa-arrow-right text-xs opacity-0 group-hover:opacity-100 transition-all text-amber-600"></i>
                   </button>
                 ))}
               </div>
            </div>
            <div className="lg:col-span-8 space-y-16">
              {PROJECTS.map((project) => (
                <div key={project.id} className="group relative rounded-[3rem] overflow-hidden shadow-2xl h-[400px] sm:h-[550px]">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-95"></div>
                  <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 sm:right-12 right-8 flex justify-between items-end text-white">
                    <div className="max-w-md">
                      <span className="text-amber-500 font-black text-[10px] uppercase tracking-[0.3em] block mb-3">{project.category}</span>
                      <h4 className="text-3xl sm:text-4xl font-black mb-3 uppercase tracking-tight">{project.title}</h4>
                      <p className="text-slate-400 text-[10px] sm:text-sm font-bold uppercase tracking-widest"><i className="fa-solid fa-location-dot mr-2"></i>{project.location}</p>
                    </div>
                    <button 
                      onClick={() => onNavigate('contact', project.category === 'Kitchen' ? 'Gourmet Kitchen Remodeling' : project.category === 'Bath' ? 'Luxury Bathroom Remodeling' : 'Full House Renovation')}
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-500 rounded-full flex items-center justify-center text-slate-900 shadow-xl transition-transform hover:scale-110"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standard Section */}
      <section id="standard" className="py-24 sm:py-32 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden grayscale contrast-125">
               <img src="https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=1000" alt="Swiftway Workflow" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 glass p-8 sm:p-10 rounded-[2.5rem] max-w-[280px] sm:max-w-[340px] shadow-2xl">
               <p className="text-white font-black text-lg sm:text-xl mb-4 sm:mb-6 uppercase leading-tight tracking-tighter">The Integrated Workflow.</p>
               <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                 Traditional contracting separates structural work from electrical engineering. Swiftway unites them, ensuring your architectural vision is powered by a master-grade electrical backbone.
               </p>
               <button 
                 onClick={() => onNavigate('contact', 'Smart Home & Grid Modernization')}
                 className="inline-block mt-4 text-amber-500 font-black uppercase tracking-widest text-[10px] border-b border-amber-500 pb-1"
               >
                 Request technical brief
               </button>
             </div>
          </div>
          <div className="space-y-12">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">The Engineering <br /><span className="text-amber-500">Standard.</span></h2>
            <div className="space-y-10">
              {[
                { title: "Unified Command", text: "One firm, one point of contact. Our lead project managers are dual-certified in GC and Electrical systems.", icon: "fa-shield-halved" },
                { title: "Precision Design", text: "We utilize advanced grid mapping to ensure your home's power infrastructure matches its aesthetic luxury.", icon: "fa-microchip" },
                { title: "Philly Integrity", text: "Specialized expertise in Rowhome structural loads and historic Philly district compliance.", icon: "fa-landmark-dome" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 sm:gap-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-500 flex-shrink-0 flex items-center justify-center text-slate-900 text-xl sm:text-2xl shadow-[0_10px_20px_rgba(245,158,11,0.2)]">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-white mb-2 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section id="regions" className="py-24 bg-slate-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-amber-500 font-black uppercase tracking-[0.5em] text-[10px] mb-4">Operational Regions</h2>
            <p className="text-white font-black text-2xl sm:text-3xl uppercase">Greater Philadelphia Sphere</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {SERVICE_AREAS.map(area => (
              <button 
                key={area} 
                onClick={() => onNavigate('contact', 'Full House Renovation')}
                className="glass px-6 py-4 sm:px-10 sm:py-6 rounded-2xl text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:border-amber-500 transition-all"
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="glass p-8 sm:p-12 lg:p-24 rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 translate-x-20 hidden lg:block"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <div className="space-y-6 sm:space-y-12">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter">
                  Initiate <br /> 
                  <span className="text-amber-500 font-serif italic normal-case block mt-2">Precision.</span>
                </h2>
                <p className="text-slate-400 text-lg sm:text-xl max-w-md font-medium leading-relaxed">
                  Our senior project engineers review all inquiries within one business day. Experience the engineering standard of Philly.
                </p>
                <div className="space-y-4 sm:space-y-8 pt-4">
                  <a href="tel:6107178383" className="flex items-center gap-4 sm:gap-6 text-white font-black uppercase tracking-widest text-xs sm:text-sm hover:text-amber-500 transition-colors">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-amber-500 shadow-xl flex-shrink-0"><i className="fa-solid fa-phone"></i></div>
                    +1 (610) 717-8383
                  </a>
                  <a href="mailto:inquiry@swiftway.solutions" className="flex items-center gap-4 sm:gap-6 text-white font-black uppercase tracking-widest text-xs sm:text-sm hover:text-amber-500 transition-colors">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-amber-500 shadow-xl flex-shrink-0"><i className="fa-solid fa-envelope"></i></div>
                    inquiry@swiftway.solutions
                  </a>
                  <div className="flex items-center gap-4 sm:gap-6 text-white font-black uppercase tracking-widest text-xs sm:text-sm">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-amber-500 shadow-xl flex-shrink-0"><i className="fa-solid fa-location-dot"></i></div>
                    1320 Providence Rd, Secane, PA
                  </div>
                </div>
              </div>

              <div>
                {formStatus === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 bg-white/5 rounded-3xl border border-green-500/20">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center text-4xl sm:text-5xl mb-8"><i className="fa-solid fa-check"></i></div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 uppercase tracking-tighter">Inquiry Logged</h3>
                    <p className="text-slate-400 mb-10 font-medium">A project engineer will contact you shortly.</p>
                    <button onClick={() => setFormStatus('idle')} className="text-amber-500 font-black uppercase tracking-widest text-xs border-b-2 border-amber-500 pb-1">Reset Form</button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-2">Full Name</label>
                        <input required className="w-full glass bg-white/5 border-white/10 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-4 sm:py-6 text-white focus:border-amber-500 focus:bg-white/10 outline-none transition-all placeholder:text-slate-700 text-sm sm:text-base" placeholder="JOHN DOE" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-2">Property Neighborhood</label>
                        <input required className="w-full glass bg-white/5 border-white/10 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-4 sm:py-6 text-white focus:border-amber-500 focus:bg-white/10 outline-none transition-all placeholder:text-slate-700 text-sm sm:text-base" placeholder="SECANE, PA" />
                      </div>
                      <div className="space-y-2 relative">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-2">Project Specification</label>
                        <select 
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="w-full appearance-none glass bg-slate-900 border-white/10 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-4 sm:py-6 text-white focus:border-amber-500 outline-none transition-all uppercase font-bold text-[10px] sm:text-xs tracking-widest cursor-pointer"
                        >
                           {projectOptions.map(opt => (
                             <option key={opt} value={opt} className="bg-slate-900">{opt}</option>
                           ))}
                        </select>
                        <div className="absolute right-6 top-[70%] -translate-y-1/2 pointer-events-none text-amber-500">
                          <i className="fa-solid fa-chevron-down text-[10px]"></i>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-2">Brief Scope</label>
                        <textarea required rows={4} className="w-full glass bg-white/5 border-white/10 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-4 sm:py-6 text-white focus:border-amber-500 focus:bg-white/10 outline-none transition-all placeholder:text-slate-700 text-sm sm:text-base resize-none" placeholder="DESCRIBE YOUR VISION..."></textarea>
                      </div>
                    </div>
                    <button type="submit" className="w-full bg-amber-500 text-slate-900 py-5 sm:py-7 rounded-xl sm:rounded-2xl font-black text-lg sm:text-xl hover:bg-white transition-all shadow-2xl active:scale-[0.98] uppercase tracking-tighter mt-4 flex items-center justify-center gap-3">
                      Request Technical Review
                      <i className="fa-solid fa-arrow-right text-sm"></i>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-950 text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4 grayscale opacity-70">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-950 font-black text-xl">S</div>
            <span className="font-black text-white tracking-tighter text-2xl uppercase">SWIFTWAY</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-[10px] font-black uppercase tracking-[0.4em] items-center">
             <span className="text-amber-500">PA #215001-EL</span>
             <span className="text-amber-500">NJ #340912-GC</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]">© 2026 Swiftway Solutions LLC.</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mt-1">1320 Providence Rd, Secane, PA</p>
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
