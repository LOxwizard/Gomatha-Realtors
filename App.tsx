import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Trees, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  ArrowLeft,
  DollarSign
} from 'lucide-react';
import { VENTURES, COMPANY_DETAILS } from './constants';
import { VentureStatus, Venture } from './types';

/* --- SHARED COMPONENTS --- */

const Logo = ({ className = "w-10 h-10", textColor = "text-navy" }: { className?: string, textColor?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative group">
      <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-lg">
        <path d="M20 70 L50 30 L80 70" fill="none" stroke="#d4af37" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 70 L50 50 L65 70" fill="none" stroke="#d4af37" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 80 L90 80" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
    <div className="flex flex-col -gap-1">
      <span className={`text-lg font-bold ${textColor} tracking-tight leading-none uppercase`}>Gomatha</span>
      <span className={`text-xs font-medium ${textColor} tracking-[0.2em] uppercase opacity-80`}>Realtors</span>
    </div>
  </div>
);

/**
 * NEW: Floating Enquiry Modal Component
 */
const EnquiryModal = ({ projectName, onClose }: { projectName: string, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Semi-transparent Backdrop */}
      <div 
        className="fixed inset-0 bg-navy/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white rounded-[40px] shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="p-8 md:p-14">
          <div className="flex justify-between items-start mb-10">
            <div>
              <span className="text-gold font-black text-[10px] uppercase tracking-[0.3em] block mb-2">Private Inquiry</span>
              <h3 className="text-3xl font-display text-navy leading-tight">{projectName}</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-3 bg-gray-50 hover:bg-red-50 hover:text-red-500 rounded-2xl transition-all duration-300 text-navy"
            >
              <X size={24} />
            </button>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Your Name</label>
                <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl text-navy focus:outline-none focus:ring-2 focus:ring-gold transition" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                <input type="tel" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl text-navy focus:outline-none focus:ring-2 focus:ring-gold transition" placeholder="+91" />
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Investment Requirements</label>
              <textarea 
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl text-navy focus:outline-none focus:ring-2 focus:ring-gold transition" 
                rows={4} 
                placeholder="Share your specific needs or questions..."
              ></textarea>
            </div>

            <button className="w-full py-6 bg-navy text-gold rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-navy-light transition shadow-2xl shadow-gold/10 border border-gold/30 flex items-center justify-center gap-3">
              Request Callback <ArrowRight size={18} />
            </button>
            
            <p className="text-[10px] text-center text-gray-400 uppercase font-bold tracking-widest opacity-60">
              Personal data is encrypted and secure.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

const ProjectDetailView = ({ venture, onBack }: { venture: Venture, onBack: () => void }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-navy overflow-y-auto">
      <div className="absolute inset-0 z-0">
        {venture.videoUrl ? (
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40 scale-105">
            <source src={venture.videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img src={venture.imageUrl} className="w-full h-full object-cover opacity-30" alt={venture.name} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/80"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="p-6 md:p-10 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hover:bg-gold hover:text-navy transition-all group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Ventures
          </button>
          <Logo textColor="text-white" />
        </div>

        <div className="flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="animate-fade-in-up">
                <span className="inline-block px-4 py-1.5 gold-gradient text-navy text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                  {venture.status} PROJECT
                </span>
                <h1 className="text-5xl md:text-7xl font-display text-white mb-6 leading-tight">
                  {venture.name}
                </h1>
                <div className="flex items-center gap-2 text-gold text-lg font-medium mb-8">
                  <MapPin size={20} />
                  {venture.location}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
                  {venture.description}
                </p>

                {venture.price && (
                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md inline-block mb-10">
                    <div className="text-xs uppercase tracking-widest text-gold font-bold mb-2 opacity-60">Launching Offer</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-6xl font-display text-white">₹{venture.price}</span>
                      <span className="text-gold font-medium">{venture.sqyds}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-navy/80 backdrop-blur-xl rounded-[40px] p-8 md:p-12 border border-white/10 shadow-2xl animate-fade-in-right">
                <h3 className="text-2xl font-display text-white mb-8 border-b border-white/10 pb-6">Layout Amenities</h3>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  {venture.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-300 group">
                      <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 pt-10 border-t border-white/10">
                  <button 
                    onClick={() => setIsEnquiryOpen(true)}
                    className="w-full py-5 gold-gradient text-navy font-black uppercase tracking-widest rounded-2xl hover:brightness-110 transition shadow-2xl shadow-gold/20 flex items-center justify-center gap-3"
                  >
                    Enquire Now <Phone size={18} />
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-6 font-medium tracking-wide">
                    * Limited plots available. Spot registration facility active.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RENDER MODAL HERE */}
      {isEnquiryOpen && (
        <EnquiryModal 
          projectName={venture.name} 
          onClose={() => setIsEnquiryOpen(false)} 
        />
      )}
    </div>
  );
};

/* --- MAIN LANDING SECTIONS --- */

const Navbar = ({ onLogoClick }: { onLogoClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <button onClick={onLogoClick} className="hover:opacity-80 transition">
            <Logo />
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-semibold text-gray-700 hover:text-gold transition">Home</a>
            <a href="#about" className="text-sm font-semibold text-gray-700 hover:text-gold transition">About</a>
            <a href="#ventures" className="text-sm font-semibold text-gray-700 hover:text-gold transition">Ventures</a>
            <a href="#contact" className="text-sm font-semibold text-gray-700 hover:text-gold transition">Contact</a>
            <a href="#contact" className="bg-navy text-gold px-6 py-2.5 rounded-full text-sm font-bold hover:bg-navy-light transition-all shadow-lg">Get in Touch</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4">
          <a href="#home" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-gold rounded-md">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-gold rounded-md">About</a>
          <a href="#ventures" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-gold rounded-md">Ventures</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-gold rounded-md">Contact</a>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ onExplore }: { onExplore: () => void }) => (
  <section id="home" className="relative h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Real Estate Banner" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent"></div>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
      <div className="max-w-2xl animate-fade-in-up">
        <span className="inline-block px-4 py-1.5 gold-gradient text-navy text-[10px] font-black uppercase tracking-widest rounded-full mb-6 shadow-xl">Established 2017</span>
        <h1 className="text-5xl md:text-7xl font-display leading-[1.1] mb-6">Hill View Living <br /><span className="text-gold">With Nature</span></h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg font-light leading-relaxed">Premium open plots and independent houses in Visakhapatnam. Your investment for today, security for tomorrow.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={onExplore} className="bg-gold text-navy px-8 py-4 rounded-full font-bold hover:bg-gold-light transition flex items-center justify-center gap-2 group shadow-xl">
            Explore Ventures <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#contact" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-navy transition flex items-center justify-center gap-2">Contact Sales</a>
        </div>
      </div>
    </div>
  </section>
);

const VentureCard = ({ venture, onClick }: { venture: Venture, onClick: () => void }) => (
  <div onClick={onClick} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group cursor-pointer">
    <div className="relative h-72 overflow-hidden">
      <img src={venture.imageUrl} alt={venture.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-6 right-6">
        <span className={`px-4 py-1.5 text-[10px] font-black uppercase rounded-full shadow-lg backdrop-blur-md border ${venture.status === VentureStatus.RUNNING ? 'bg-green-500/90 text-white border-green-400' : 'bg-navy/80 text-gold border-gold/30'}`}>
          {venture.status}
        </span>
      </div>
    </div>
    <div className="p-8">
      <div className="flex items-center gap-2 text-gold text-xs font-black uppercase tracking-widest mb-3"><MapPin className="w-4 h-4" />{venture.location.split(',')[0]}</div>
      <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{venture.name}</h3>
      <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed">{venture.description}</p>
      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price starting</span>
          <span className="text-lg font-bold text-navy">₹{venture.price}</span>
        </div>
        <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300">
          <ArrowRight size={20} />
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <section id="about" className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <div className="relative z-10 grid grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=400" alt="About 1" className="rounded-[40px] shadow-2xl mt-16 border-8 border-white" />
            <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=400" alt="About 2" className="rounded-[40px] shadow-2xl border-8 border-white" />
          </div>
          <div className="absolute bottom-10 right-10 bg-navy p-10 rounded-[32px] shadow-2xl z-20 flex items-center gap-6 border border-gold/30">
            <div className="text-6xl font-display font-bold text-gold">7+</div>
            <div className="text-xs text-gray-300 font-black uppercase tracking-[0.2em]">Ventures <br />Delivered</div>
          </div>
        </div>
        <div>
          <span className="text-gold font-black uppercase tracking-widest text-xs">Trusted Excellence Since 2017</span>
          <h2 className="text-4xl md:text-5xl font-display text-navy mt-4 mb-8 leading-tight">Building Your Legacy with <span className="text-gold">Integrity & Honor</span></h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">At Gomatha Realtors, we believe land is the most secure investment for your family's future.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {[
              { icon: ShieldCheck, title: 'Legal Guarantee', desc: '100% Clear Titles & Docs.' },
              { icon: Trees, title: 'Eco-Friendly', desc: 'Lush greenery & plantations.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-2">
                <div className="flex-shrink-0 w-14 h-14 bg-navy rounded-2xl flex items-center justify-center text-gold shadow-lg"><item.icon className="w-7 h-7" /></div>
                <div><h4 className="font-bold text-navy text-sm uppercase tracking-wider">{item.title}</h4><p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p></div>
              </div>
            ))}
          </div>
          <button className="gold-gradient text-navy px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:brightness-110 transition shadow-2xl shadow-gold/10 border border-gold/30">Download Profile</button>
        </div>
      </div>
    </div>
  </section>
);

const VenturesSection = ({ onProjectSelect }: { onProjectSelect: (v: Venture) => void }) => {
  const [filter, setFilter] = useState<VentureStatus | 'all'>('all');
  const filteredVentures = filter === 'all' ? VENTURES : VENTURES.filter(v => v.status === filter);

  return (
    <section id="ventures" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold font-black text-xs uppercase tracking-[0.3em]">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display text-navy mt-4 mb-6">Signature Masterpieces</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            {['all', VentureStatus.RUNNING, VentureStatus.COMPLETED].map((f) => (
              <button key={f} onClick={() => setFilter(f as any)} className={`px-10 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${filter === f ? 'bg-navy text-gold shadow-2xl ring-2 ring-gold/20' : 'bg-white text-navy border border-gray-200 hover:border-gold hover:text-gold'}`}>{f === 'all' ? 'All Projects' : f}</button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredVentures.map((venture) => (
            <VentureCard key={venture.id} venture={venture} onClick={() => onProjectSelect(venture)} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-navy text-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-display mb-10 text-white">Let's Secure Your <span className="text-gold italic">Legacy</span></h2>
          <div className="space-y-10">
            <div className="flex gap-8 group">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-[20px] flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-all duration-500"><Mail className="text-gold" /></div>
              <div><h4 className="text-xs font-black uppercase tracking-widest text-gold mb-2 opacity-60">General Enquiries</h4><p className="text-white text-lg font-bold">{COMPANY_DETAILS.email}</p></div>
            </div>
            <div className="flex gap-8 group">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-[20px] flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-all duration-500"><Phone className="text-gold" /></div>
              <div><h4 className="text-xs font-black uppercase tracking-widest text-gold mb-2 opacity-60">Property Hotline</h4><p className="text-white text-xl font-bold font-display">+91-9700477222</p></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[48px] p-8 md:p-14 shadow-2xl border border-gray-100">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div><label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Full Name</label><input type="text" className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl text-navy focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Your Name" /></div>
              <div><label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Number</label><input type="tel" className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl text-navy focus:outline-none focus:ring-2 focus:ring-gold" placeholder="+91" /></div>
            </div>
            <button className="w-full py-6 bg-navy text-gold rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-navy-light transition border border-gold/30">Submit Private Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-navy-dark text-gray-500 py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-16 items-start mb-20">
        <div className="col-span-1 md:col-span-2"><Logo textColor="text-white" className="mb-8" /><p className="text-sm opacity-60 max-w-sm">Premium real estate since 2017. Gated communities that balance luxury and nature.</p></div>
        <div><h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em]">Presence</h4><p className="text-xs leading-relaxed">NAD, Visakhapatnam<br />Seethammapeta Road, Vizag</p></div>
      </div>
      <div className="pt-10 border-t border-white/5 text-[10px] uppercase font-black tracking-[0.3em] text-center opacity-40">© {new Date().getFullYear()} Gomatha Realtors. Licensed DTCP Layouts.</div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-gold/30 selection:text-navy">
      <Navbar onLogoClick={() => setSelectedVenture(null)} />
      
      <main>
        <Hero onExplore={() => document.getElementById('ventures')?.scrollIntoView({ behavior: 'smooth' })} />
        <About />
        <VenturesSection onProjectSelect={setSelectedVenture} />
        
        {/* Statistics Banner */}
        <section className="bg-navy py-24 border-y border-gold/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            <div className="group"><div className="text-6xl font-display font-bold text-gold mb-4">7+</div><div className="text-[10px] uppercase font-black tracking-[0.4em] text-gray-400">Ventures</div></div>
            <div className="group"><div className="text-6xl font-display font-bold text-gold mb-4">3</div><div className="text-[10px] uppercase font-black tracking-[0.4em] text-gray-400">Running</div></div>
            <div className="group"><div className="text-6xl font-display font-bold text-gold mb-4">100%</div><div className="text-[10px] uppercase font-black tracking-[0.4em] text-gray-400">Vaasthu</div></div>
            <div className="group"><div className="text-6xl font-display font-bold text-gold mb-4">500+</div><div className="text-[10px] uppercase font-black tracking-[0.4em] text-gray-400">Investors</div></div>
          </div>
        </section>

        <Contact />
      </main>
      
      <Footer />

      {/* Full Screen Detail Overlay */}
      {selectedVenture && (
        <ProjectDetailView 
          venture={selectedVenture} 
          onBack={() => setSelectedVenture(null)} 
        />
      )}
      
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;