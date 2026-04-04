import React, { useState, useEffect } from 'react';
import { 
  Building2, MapPin, Phone, Mail, CheckCircle2, Trees, 
  ShieldCheck, Zap, ArrowRight, Menu, X, Facebook, 
  Instagram, Linkedin, ArrowLeft, Loader2, MessageCircle,
  Download, Image as ImageIcon, FileText, Award, Users, Target
} from 'lucide-react';

enum VentureStatus {
  RUNNING = "RUNNING",
  COMPLETED = "COMPLETED"
}

interface Venture {
  id: number;
  name: string;
  location: string;
  description: string;
  price: string;
  sqyds: string;
  status: VentureStatus;
  imageUrl: string;
  brochureUrl: string; 
  layoutUrl: string; 
  gallery: string[];   
  features: string[];
  videoUrl?: string;
}

const VENTURES: Venture[] = [
  {
    id: 1,
    name: "Bitra Colony",
    location: "Venkannapalem, Chodavaram, Visakhapatnam",
    description: "An elite gated community offering a 360° hill view and premium VUDA approved infrastructure for a peaceful lifestyle in Visakhapatnam.",
    price: "8,500",
    sqyds: "per Sq. Yd",
    status: VentureStatus.RUNNING,
    imageUrl: "/Bitra-Colony/Bitra-Colony.jpg",
    videoUrl: "/Bitra-Colony/Bitra-Colony.mp4",
    brochureUrl: "/brochures/Bitra-Colony Brochure.pdf", 
    layoutUrl: "/Bitra-Colony/Bitra_Colony_Layout-copy.pdf",
    gallery: ["/Bitra-Colony/1.jpg", "/Bitra-Colony/2.jpg", "/Bitra-Colony/3.jpg", "/Bitra-Colony/4.jpg", "/Bitra-Colony/5.jpg", "/Bitra-Colony/6.jpg", "/Bitra-Colony/7.jpg", "/Bitra-Colony/8.jpg", "/Bitra-Colony/9.jpg", "/Bitra-Colony/10.jpg", "/Bitra-Colony/11.jpg"],
    features: ["40 & 33 Feet BT Roads", "Gated Community", "360° Hill View", "Drainage System", "Electricity"]
  },
  {
    id: 2,
    name: "Siri Chandana Gardens",
    location: "Singamdorapalem, K.Kotapadu, Visakhapatnam",
    description: "A sustainable real estate investment featuring White Sandalwood and Mahogany plantations with high returns in the heart of Vizag.",
    price: "5,999",
    sqyds: "per Sq. Yd",
    status: VentureStatus.RUNNING,
    imageUrl: "/Siri-Chandana-Gardens/Siri-Chandana-Gardens.jpg",
    brochureUrl: "/brochures/Siri_Chandana_Gardens Brochure.pdf",
    layoutUrl: "/Siri-Chandana-Gardens/Siri_Chandana_Gardens_Layout-copy.pdf",
    gallery: ["/Siri-Chandana-Gardens/1.jpg", "/Siri-Chandana-Gardens/2.jpg", "/Siri-Chandana-Gardens/3.jpg", "/Siri-Chandana-Gardens/4.jpg", "/Siri-Chandana-Gardens/5.jpg", "/Siri-Chandana-Gardens/6.jpg", "/Siri-Chandana-Gardens/7.jpg", "/Siri-Chandana-Gardens/8.jpg", "/Siri-Chandana-Gardens/9.jpg", "/Siri-Chandana-Gardens/10.jpg"],
    features: ["White Sandal Plantation", "Mahogany Plantation", "100% Vasthu", "24/7 Security"]
  },
  {
    id: 3,
    name: "Kubera Phase-1",
    location: "Chintalapalem, Pendurthi, Visakhapatnam",
    description: "Strategically located DTCP approved plots near Pendurthi Junction, offering excellent connectivity and growth potential for Vizag investors.",
    price: "11,999",
    sqyds: "per Sq. Yd",
    status: VentureStatus.RUNNING,
    imageUrl: "/Kubera Phase-1/Kubera_Phase-1(main).jpg",
    videoUrl: "/Kubera Phase-1/kubera-vid.mp4",
    brochureUrl: "/brochures/Kubera Phase-1 Brochure.pdf",
    layoutUrl: "/Kubera Phase-1/Kubera Phase-1 Layout-copy.pdf",
    gallery: ["/Kubera Phase-1/1.jpg", "/Kubera Phase-1/2.jpg", "/Kubera Phase-1/3.jpg", "/Kubera Phase-1/4.jpg", "/Kubera Phase-1/5.jpg", "/Kubera Phase-1/6.jpg", "/Kubera Phase-1/7.jpg", "/Kubera Phase-1/9.jpg", "/Kubera Phase-1/10.jpg","/Kubera Phase-1/11.jpg","/Kubera Phase-1/12.jpg"],
    features: ["Near Pendurthi Junction", "Black Top Roads", "Street Lights"]
  },
  {
    id: 4,
    name: "Siri Lake View Gardens",
    location: "K.Kotapadu, Visakhapatnam",
    description: "A serene residential gated community project offering a peaceful lake view and modern amenities near Visakhapatnam city.",
    price: "5,999",
    sqyds: "per Sq. Yd",
    status: VentureStatus.RUNNING,
    imageUrl: "/Siri-Lake-View-Gardens/siri-lake-view.jpg",
    brochureUrl: "/brochures/Siri_Lake_View_Gardens Brochure.pdf",
    layoutUrl: "/Siri-Lake-View-Gardens/Siri_Lake_View_Gardens_Layout-copy.pdf",
    gallery: ["/Siri-Lake-View-Gardens/1.jpg", "/Siri-Lake-View-Gardens/2.jpg", "/Siri-Lake-View-Gardens/3.jpg", "/Siri-Lake-View-Gardens/4.jpg", "/Siri-Lake-View-Gardens/5.jpg", "/Siri-Lake-View-Gardens/6.jpg", "/Siri-Lake-View-Gardens/7.jpg", "/Siri-Lake-View-Gardens/8.jpg", "/Siri-Lake-View-Gardens/9.jpg", "/Siri-Lake-View-Gardens/10.jpg"],
    features: ["25 Feet Wide Roads", "Clear Title", "Ready for Construction"]
  }
];

const COMPANY_DETAILS = {
  phone: "+91 9700477222",
  whatsapp: "919700477222",
  email: "gomatharealtors@gmail.com",
  address: "NAD Junction, Visakhapatnam",
  facebook: "https://www.facebook.com/share/1HwruVzmrU/",
  instagram: "https://instagram.com/gomathrealtors_official_",
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxE1OzO9XbH2Qrf6PKmHRFDI7woJVH_7M2OohSuL654WpBrNVV5HnRD_xnj19T_7hJV/exec'
};

const openWhatsApp = (msg: string) => {
  window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
};

const Logo = () => (
  <div className="flex items-center gap-3 group">
    <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white/5 p-1 border border-white/10 group-hover:border-gold/50 transition-all duration-300">
      <img 
        src="/Gomatha-Logo.png" 
        alt="Gomatha Realtors Logo" 
        className="h-full w-full object-contain brightness-110"
      />
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-xl font-bold text-white uppercase tracking-tight leading-none group-hover:text-gold transition-colors">Gomatha</span>
      <span className="text-[10px] font-medium text-gold tracking-[0.25em] uppercase opacity-80 mt-1">Realtors</span>
    </div>
  </div>
);

const EnquiryModal = ({ projectName, onClose }: { projectName: string, onClose: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = { 
      projectName, 
      name: formData.get('name'), 
      phone: formData.get('phone'), 
      message: formData.get('message') 
    };

    try {
      await fetch(COMPANY_DETAILS.SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: JSON.stringify(data) });
      setSubmitted(true);
      setTimeout(() => onClose(), 3000);
    } catch (error) {
      alert("Error. Please try again.");
    } finally { setLoading(false); }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-xl bg-[#050a18] border border-white/10 rounded-[40px] shadow-2xl overflow-hidden animate-fade-in-up p-8 md:p-14 text-white">
        {submitted ? (
          <div className="text-center py-10 animate-fade-in-up">
            <CheckCircle2 size={60} className="text-gold mx-auto mb-4" />
            <h3 className="text-3xl font-bold">Inquiry Received</h3>
            <p className="text-gray-400 mt-2">Thank you! Our team will contact you shortly.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-2xl font-bold text-white">Inquiry: {projectName}</h3>
              <button onClick={onClose} className="text-white/50 hover:text-white"><X size={24} /></button>
            </div>
            
            <button 
              onClick={() => openWhatsApp(`Hi Gomatha Realtors, I am interested in your project: ${projectName}. Please share more details.`)}
              className="w-full mb-6 py-4 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:brightness-105 transition shadow-lg"
            >
              <MessageCircle size={20} /> Contact via WhatsApp
            </button>

            <div className="relative mb-6 text-center">
               <hr className="border-white/10" />
               <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050a18] px-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">Or Email Us</span>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input name="name" required className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-gold text-white" placeholder="Full Name" />
              <input name="phone" required className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-gold text-white" placeholder="Phone Number" />
              <textarea name="message" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-gold text-white" rows={3} placeholder="Tell us your requirements..."></textarea>
              <button disabled={loading} className="w-full py-5 bg-gold text-navy font-bold uppercase rounded-xl hover:brightness-110 transition flex items-center justify-center gap-2">
                {loading ? <Loader2 className="animate-spin" /> : "Submit Inquiry"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const ProjectDetailView = ({ venture, onBack }: { venture: Venture, onBack: () => void }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050a18] overflow-y-auto animate-fade-in">
      <div className="absolute inset-0 z-0 h-[60vh]">
        <img src={venture.imageUrl} className="w-full h-full object-cover opacity-40" alt={`${venture.name} - Premium Plots in Visakhapatnam`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a18] via-[#050a18]/40 to-transparent"></div>
      </div>

      <div className="relative z-10 p-6 md:p-10 max-w-7xl mx-auto w-full">
        <button onClick={onBack} className="text-gold font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-12 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hover:bg-gold hover:text-navy transition">
          <ArrowLeft size={16} /> Back to Ventures
        </button>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <span className="px-4 py-1 gold-gradient text-navy text-[10px] font-black uppercase rounded-full mb-6 inline-block">{venture.status}</span>
            <h1 className="text-6xl text-white font-display font-bold mb-6 leading-tight">{venture.name}</h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">{venture.description}</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsEnquiryOpen(true)} className="px-10 py-5 gold-gradient text-navy font-bold rounded-2xl shadow-2xl hover:brightness-110 transition">Enquire Now</button>
              <a href={venture.brochureUrl} download className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl flex items-center gap-3 hover:bg-white/10 transition"><Download size={20} /> Brochure</a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-[40px] p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-display text-white mb-6 border-b border-white/10 pb-4">Highlights</h3>
              <div className="grid gap-4">
                {venture.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-300"><CheckCircle2 size={16} className="text-gold" /> <span className="text-sm">{f}</span></div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-4xl font-display text-white">₹{venture.price} <span className="text-gold text-sm">{venture.sqyds}</span></div>
              </div>
            </div>
            <a href={venture.layoutUrl} download className="w-full py-6 bg-[#0a1128] border border-white/10 text-gold font-bold uppercase rounded-[40px] hover:bg-white/5 transition flex items-center justify-center gap-3">
              Download Layout Copy <Download size={18} />
            </a>
          </div>
        </div>

        {venture.videoUrl && (
          <div className="mt-24">
            <h2 className="text-4xl text-white font-display font-bold mb-10">Project Walkthrough</h2>
            <div className="aspect-video w-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-black">
              <video 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src={venture.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        <div className="mt-24">
          <h2 className="text-4xl text-white font-display font-bold mb-10">Site Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venture.gallery.map((img, i) => (
              <div key={i} className="aspect-video rounded-[32px] overflow-hidden border border-white/10 group">
                <img src={img} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" alt={`Gomatha Realtors ${venture.name} site view ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {isEnquiryOpen && <EnquiryModal projectName={venture.name} onClose={() => setIsEnquiryOpen(false)} />}
    </div>
  );
};

const App: React.FC = () => {
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);
  const [contactLoading, setContactLoading] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  /* --- LOGIC TO HANDLE REFRESH --- */
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#venture-')) {
        const id = parseInt(hash.replace('#venture-', ''));
        const venture = VENTURES.find(v => v.id === id);
        if (venture) {
          setSelectedVenture(venture);
        }
      } else {
        setSelectedVenture(null);
      }
    };

    // Run on initial load
    handleHashChange();

    // Listen for manual hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openVenture = (v: Venture) => {
    window.location.hash = `venture-${v.id}`;
    setSelectedVenture(v);
  };

  const closeVenture = () => {
    window.location.hash = '';
    setSelectedVenture(null);
    window.scrollTo(0, 0);
  };

  const scrollToTop = () => {
    closeVenture();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = { 
      projectName: "General Website Inquiry", 
      name: formData.get('name'), 
      phone: formData.get('phone'), 
      message: "Visitor submitted through footer contact form." 
    };

    try {
      await fetch(COMPANY_DETAILS.SCRIPT_URL, { 
        method: 'POST', 
        mode: 'no-cors', 
        body: JSON.stringify(data) 
      });
      setContactSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setContactSubmitted(false), 4000);
    } catch (error) {
      alert("Submission failed. Please try again or use WhatsApp.");
    } finally {
      setContactLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050a18] text-gray-300 selection:bg-gold/30 selection:text-white">
      <nav className="fixed w-full z-50 bg-[#050a18]/80 backdrop-blur-lg border-b border-white/5 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
          <button onClick={scrollToTop} className="hover:opacity-80 transition-opacity">
            <Logo />
          </button>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <a href="#home" className="text-white hover:text-gold transition">Home</a>
            <a href="#about" className="text-white hover:text-gold transition">About</a>
            <a href="#ventures" className="text-white hover:text-gold transition">Ventures</a>
            <a href="#contact" className="bg-gold text-navy px-6 py-2.5 rounded-full font-bold hover:brightness-110 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="relative h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-50" alt="Gomatha Realtors - Hill View Gated Communities Visakhapatnam" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050a18] via-[#050a18]/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl animate-fade-in-up">
              <span className="px-4 py-1.5 gold-gradient text-navy text-[10px] font-black uppercase rounded-full shadow-xl">Established 2017</span>
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight my-6 text-white tracking-tight">Project Kubera <br /><span className="text-gold">And More</span></h1>
              <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">Premium VUDA & DTCP approved open plots in Visakhapatnam. Your secure land investment for today, safety for tomorrow.</p>
              <button onClick={() => document.getElementById('ventures')?.scrollIntoView({behavior:'smooth'})} className="bg-gold text-navy px-8 py-4 rounded-full font-bold flex items-center gap-2 group hover:scale-105 transition">
                Explore Ventures <ArrowRight className="group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="py-32 bg-[#0a1128] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="/Gomatha Logo.png" className="rounded-[40px] shadow-2xl opacity-80" alt="Gomatha Realtors Visakhapatnam Office" />
              <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-[32px] text-navy shadow-2xl">
                <div className="text-4xl font-bold">7+</div><div className="text-[10px] uppercase font-black">Ventures Delivered</div>
              </div>
            </div>
            <div>
              <span className="text-gold font-black uppercase tracking-widest text-xs">Trusted Excellence Since 2017</span>
              <h2 className="text-5xl font-display text-white my-6 font-bold">Building Your Legacy with <span className="text-gold">Integrity</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Gomatha Realtors is a premier real estate development firm specializing in <strong>VUDA and DTCP approved open plots in Visakhapatnam</strong>. Since 2017, we have transformed untouched landscapes into high-value <strong>gated communities</strong> with clear titles, 100% Vasthu compliance, and premium infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div><ShieldCheck className="text-gold mb-2" /><h4 className="font-bold text-white text-sm uppercase">Legal Guarantee</h4></div>
                <div><Trees className="text-gold mb-2" /><h4 className="font-bold text-white text-sm uppercase">Eco-Friendly</h4></div>
              </div>
            </div>
          </div>
        </section>

        <section id="ventures" className="py-32 bg-[#050a18]">
          <div className="max-w-7xl mx-auto px-4 text-center mb-20">
            <span className="text-gold font-black uppercase text-xs tracking-[0.3em]">Signature Portfolio</span>
            <h2 className="text-5xl font-display text-white mt-4 font-bold">Masterpiece Developments</h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
            {VENTURES.map(v => (
              <div key={v.id} onClick={() => openVenture(v)} className="bg-white/5 rounded-[40px] overflow-hidden border border-white/5 hover:border-gold/50 transition-all cursor-pointer group">
                <div className="h-80 relative overflow-hidden">
                  <img src={v.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80" alt={`Gomatha Realtors ${v.name} - Open Plots in Vizag`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a18] to-transparent opacity-60" />
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-2 text-gold text-[10px] font-black uppercase mb-4"><MapPin size={14}/> {v.location}</div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-gold transition mb-4">{v.name}</h3>
                  <div className="flex justify-between items-center pt-6 border-t border-white/5">
                    <div className="text-xl font-bold text-white">₹{v.price} <span className="text-sm font-serif text-yellow-600">per Sq. Yd</span></div>
                    <div className="w-12 h-12 bg-white/5 text-gold rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition"><ArrowRight size={20}/></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-32 bg-[#0a1128] relative">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl font-display font-bold text-white mb-10 tracking-tight">Secure Your <br /><span className="text-gold italic">Future Investment</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6"><Mail className="text-gold" /> <div><p className="text-xs uppercase font-bold text-gold opacity-60">Email</p><p className="text-white text-lg">{COMPANY_DETAILS.email}</p></div></div>
                <div className="flex gap-6"><Phone className="text-gold" /> <div><p className="text-xs uppercase font-bold text-gold opacity-60">Call Us</p><p className="text-white text-2xl font-bold">{COMPANY_DETAILS.phone}</p></div></div>
                
                <div className="pt-6">
                  <p className="text-xs uppercase font-bold text-gold opacity-60 mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    <a href={COMPANY_DETAILS.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group">
                      <Facebook size={20} />
                    </a>
                    <a href={COMPANY_DETAILS.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:border-transparent transition-all duration-300 group">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#050a18] border border-white/10 rounded-[48px] p-12 shadow-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              
              <button 
                type="button"
                onClick={() => openWhatsApp("Hi Gomatha Realtors, I'd like to inquire about your current properties.")}
                className="w-full mb-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:brightness-105 transition shadow-lg"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </button>

              <div className="relative mb-8 text-center">
                 <hr className="border-white/10" />
                 <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050a18] px-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">Or Message Us</span>
              </div>

              <form className="space-y-6" onSubmit={handleContactSubmit}>
                 <input name="name" required className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-gold" placeholder="Your Name" />
                 <input name="phone" required className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-gold" placeholder="Phone Number" />
                 <button type="submit" disabled={contactLoading} className="w-full py-6 bg-gold text-navy font-bold uppercase rounded-2xl shadow-xl hover:brightness-110 transition flex items-center justify-center gap-2">
                    {contactLoading ? <Loader2 className="animate-spin" /> : "Send Form"}
                 </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 bg-[#050a18] border-t border-white/5 text-center text-gray-500">
        <button onClick={scrollToTop} className="mb-8">
          <Logo />
        </button>
        <p className="text-[10px] uppercase font-black tracking-[0.4em] opacity-40">© {new Date().getFullYear()} Gomatha Realtors. Licensed DTCP & VUDA Layouts.</p>
      </footer>

      {contactSubmitted && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fade-in">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setContactSubmitted(false)} />
          <div className="relative bg-[#050a18] border border-gold/30 p-10 rounded-[40px] shadow-2xl text-center max-w-sm w-full animate-fade-in-up">
            <button onClick={() => setContactSubmitted(false)} className="absolute top-6 right-6 text-white/30 hover:text-white"><X size={20}/></button>
            <CheckCircle2 size={60} className="text-gold mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400">Our team will reach out to you shortly.</p>
          </div>
        </div>
      )}

      {selectedVenture && <ProjectDetailView venture={selectedVenture} onBack={closeVenture} />}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .gold-gradient { background: linear-gradient(135deg, #d4af37 0%, #f1d592 50%, #d4af37 100%); }
        .font-display { font-family: 'Playfair Display', serif; }
        .bg-navy { background-color: #0a1128; }
        .bg-navy-dark { background-color: #050a18; }
        .text-navy { color: #0a1128; }
      `}</style>
    </div>
  );
};

export default App;