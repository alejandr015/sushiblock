import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  MapPin, 
  Clock, 
  Phone, 
  ChevronRight, 
  Star, 
  Menu as MenuIcon, 
  X,
  Award,
  Zap,
  ShoppingBag,
  ArrowRight,
  ChevronUp
} from 'lucide-react';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
      const percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
      setWidth(percent);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '3px',
      background: 'var(--primary)',
      width: `${width}%`,
      zIndex: 1000,
      transition: 'width 0.2s ease-out'
    }} />
  );
};

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="glass"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            zIndex: 99,
            cursor: 'pointer',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <ChevronUp size={24} color="var(--primary)" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// --- Data ---
const MENU_CATEGORIES = ['Todos', 'Signature Rolls', 'Clásicos', 'Bowls & Pokes'];

const MENU_ITEMS = [
  {
    id: 1,
    name: "Sushi Master Roll 2025",
    category: "Signature Rolls",
    price: "$32.000",
    description: "Nuestra creación ganadora. Salmón fresco, crema de queso, aguacate, tope de atún flameado y salsa acevichada especial.",
    image: "https://images.unsplash.com/photo-1559144490-8328294facd8?q=80&w=1974&auto=format&fit=crop",
    popular: true
  },
  {
    id: 2,
    name: "Vulcan Roll",
    category: "Signature Rolls",
    price: "$30.000",
    description: "Langostino crocante, aguacate, cubierto de salmón con topping de dinamita picante y cebollín.",
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=2070&auto=format&fit=crop",
    popular: true
  },
  {
    id: 3,
    name: "Philadelphia Classic",
    category: "Clásicos",
    price: "$26.000",
    description: "El clásico infalible. Salmón fresco, queso crema de la casa y ajonjolí tostado.",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1887&auto=format&fit=crop",
    popular: false
  },
  {
    id: 4,
    name: "Tiger Roll",
    category: "Clásicos",
    price: "$28.000",
    description: "Langostino apanado, pepino, aguacate y salsa anguila dulce.",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=2070&auto=format&fit=crop",
    popular: false
  },
  {
    id: 5,
    name: "Poke Salmon Block",
    category: "Bowls & Pokes",
    price: "$29.000",
    description: "Base de arroz premium, cubos de salmón marinados, edamames, mango, wakame y aderezo ponzu.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop",
    popular: true
  },
  {
    id: 6,
    name: "Ebi Tempura Bowl",
    category: "Bowls & Pokes",
    price: "$31.000",
    description: "Langostinos tempura sobre cama de arroz, aguacate, nori y nuestra salsa Fuji secreta.",
    image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=2070&auto=format&fit=crop",
    popular: false
  }
];

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'glass' : ''} style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      padding: scrolled ? '0.75rem 0' : '1.5rem 0',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
      transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 900, fontFamily: 'var(--font-serif)', letterSpacing: '-1.5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '4px', display: 'grid', placeItems: 'center' }}>
            <div style={{ width: '16px', height: '4px', background: 'black', borderRadius: '10px' }}></div>
          </div>
          SUSHI<span style={{ color: 'var(--primary)' }}>BLOCK</span>
        </a>
        
        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }} className="nav-links">
          {['Inicio', 'Nosotros', 'Menú', 'Ubicación'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}>
              {item}
            </a>
          ))}
          <a href="https://wa.me/573202467963" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.75rem' }}>
            PEDIR AHORA
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'block', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon color={isOpen ? 'transparent' : 'white'} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="glass"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              zIndex: 200,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem'
            }}
          >
            <div style={{ position: 'absolute', top: '2rem', right: '1.5rem', cursor: 'pointer' }} onClick={() => setIsOpen(false)}>
              <X size={32} />
            </div>
            {['Inicio', 'Nosotros', 'Menú', 'Ubicación'].map((item, i) => (
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} 
                style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-serif)' }}
              >
                {item}
              </motion.a>
            ))}
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href="https://wa.me/573202467963" 
              className="btn btn-primary" 
              style={{ padding: '1.25rem 3rem', fontSize: '1rem', marginTop: '2rem' }}
            >
              ORDENAR POR WHATSAPP
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="inicio" style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
    <motion.div 
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1
      }} 
    />
    
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            style={{ color: 'var(--primary)', fontWeight: 800, letterSpacing: '6px', textTransform: 'uppercase', fontSize: '0.7rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <div style={{ width: '40px', height: '1px', background: 'var(--primary)' }}></div>
            NEIVA, HUILA • COLOMBIA
          </motion.span>
          <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', lineHeight: 0.85, marginBottom: '2.5rem', letterSpacing: '-3px' }}>
            EL ARTE DEL <br />
            <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-sans)', fontWeight: 300, fontStyle: 'italic', marginLeft: '0.5rem' }}>SU SHI</span>
          </h1>
          <p style={{ maxWidth: '550px', fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', marginBottom: '3.5rem', lineHeight: 1.6, fontWeight: 300 }}>
            Ganadores del <span style={{ color: 'white', fontWeight: 600 }}>Sushi Master 2025</span>. Una experiencia gastronómica premium diseñada para elevar tus sentidos.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#menu" className="btn btn-primary" style={{ padding: '1.25rem 3rem', borderRadius: '100px' }}>
              EXPLORAR MENÚ <ArrowRight size={18} style={{ marginLeft: '12px' }} />
            </a>
            <a href="https://wa.me/573202467963" className="btn glass" style={{ padding: '1.25rem 3rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Phone size={18} style={{ marginRight: '12px' }} /> RESERVAS
            </a>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
    >
      <span style={{ fontSize: '0.6rem', letterSpacing: '4px', textTransform: 'uppercase', opacity: 0.5 }}>SCROLL</span>
      <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--primary), transparent)' }}></div>
    </motion.div>
  </section>
);

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const filteredItems = activeCategory === 'Todos' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section" style={{ backgroundColor: '#000', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', letterSpacing: '-1.5px' }}
          >
            NUESTRA <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-sans)', fontWeight: 800 }}>CARTA</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', fontWeight: 300 }}
          >
            Una curaduría de sabores tradicionales con giros contemporáneos.
          </motion.p>
        </div>

        {/* Categories */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '5rem',
          flexWrap: 'wrap'
        }}>
          {MENU_CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn ${activeCategory === cat ? 'btn-primary' : 'glass'}`}
              style={{ 
                fontSize: '0.7rem', 
                padding: '0.6rem 2rem', 
                borderRadius: '100px',
                border: activeCategory === cat ? 'none' : '1px solid rgba(255,255,255,0.15)',
                letterSpacing: '2px',
                opacity: activeCategory === cat ? 1 : 0.7,
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-3">
          <AnimatePresence mode='wait'>
            {filteredItems.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card"
                style={{ 
                  padding: 0, 
                  overflow: 'hidden', 
                  display: 'flex', 
                  flexDirection: 'column',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="card-img" />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8))' }}></div>
                  
                  {item.popular && (
                    <div className="glass" style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', padding: '6px 16px', borderRadius: '4px', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '2px', color: 'var(--primary)', border: '1px solid var(--primary)' }}>
                      MAS SOLICITADO
                    </div>
                  )}
                </div>
                
                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '-0.5px' }}>{item.name}</h3>
                    <div style={{ width: 'auto', height: '1px', flexGrow: 1, background: 'rgba(255,255,255,0.1)', margin: '0 1rem' }}></div>
                    <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.1rem' }}>{item.price}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', flexGrow: 1, lineHeight: 1.6, fontWeight: 300 }}>{item.description}</p>
                  
                  <button className="btn glass" style={{ 
                    width: '100%', 
                    padding: '0.875rem', 
                    fontSize: '0.75rem', 
                    borderRadius: '4px', 
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex',
                    gap: '10px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}>
                    <ShoppingBag size={14} /> AGREGAR AL PEDIDO
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'linear-gradient(to bottom, #000, #0a0a0a)' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ color: 'var(--primary)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '4px' }}>RESEÑAS</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '1rem' }}>Lo que dicen nuestros <span style={{ color: 'var(--primary)' }}>Clientes</span></h2>
      </div>
      
      <div className="grid grid-3">
        {[
          { name: "Andrés Rivera", role: "Foodie Local", text: "La mejor experiencia de sushi en Neiva. El Master Roll es simplemente de otro mundo." },
          { name: "Carolina Ortiz", role: "Cliente Frecuente", text: "Atención impecable y sabores que no encuentras en ningún otro lugar. 10/10." },
          { name: "Miguel Ángel", role: "Crítico Gastronómico", text: "Un balance perfecto entre técnica japonesa y creatividad colombiana. Un orgullo para el Huila." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass"
            style={{ padding: '2.5rem', borderRadius: 'var(--radius)' }}
          >
            <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="var(--primary)" color="var(--primary)" />)}
            </div>
            <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', lineHeight: 1.7 }}>"{item.text}"</p>
            <div>
              <p style={{ fontWeight: 700, fontSize: '1rem' }}>{item.name}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--primary)', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="nosotros" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
    {/* Decorative Background Element */}
    <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(241, 180, 52, 0.05) 0%, transparent 70%)', zIndex: 0 }}></div>
    
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--primary)', marginBottom: '2rem' }}>
            <div style={{ padding: '10px', background: 'rgba(241, 180, 52, 0.1)', borderRadius: '12px', border: '1px solid rgba(241, 180, 52, 0.2)' }}>
              <Award size={28} />
            </div>
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.7rem' }}>CULTURA DE EXCELENCIA</span>
          </div>
          
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1, marginBottom: '2rem' }}>
            LA VICTORIA DEL <br />
            <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-sans)', fontWeight: 800 }}>SUSHI MASTER</span>
          </h2>
          
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
            En 2025, desafiamos los límites de la gastronomía en Neiva. No solo ganamos un título; reafirmamos nuestra pasión por el ingrediente perfecto y la técnica milenaria fusionada con audacia moderna.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', borderTop: '1px solid var(--border)', paddingTop: '3rem' }}>
            <div>
              <h4 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 800 }}>01.</h4>
              <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'white', fontWeight: 600, marginBottom: '0.5rem' }}>CALIDAD SUPREMA</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.5 }}>Pesca del día seleccionada bajo los estándares más rigurosos.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 800 }}>02.</h4>
              <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'white', fontWeight: 600, marginBottom: '0.5rem' }}>ALTA TÉCNICA</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.5 }}>Nuestros Itamaes dominan el arte del corte y balance perfecto.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative' }}
        >
          {/* Decorative frame */}
          <div style={{ position: 'absolute', top: '-20px', left: '-20px', right: '20px', bottom: '20px', border: '1px solid var(--primary)', borderRadius: 'var(--radius)', opacity: 0.2, zIndex: 0 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden', borderRadius: 'var(--radius)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}>
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop" 
              alt="Sushi Masterpiece" 
              style={{ width: '100%', display: 'block' }}
            />
            {/* Floating Badge */}
            <div className="glass" style={{ position: 'absolute', bottom: '2rem', right: '2rem', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.6rem', letterSpacing: '2px', opacity: 0.7, marginBottom: '0.5rem' }}>CERTIFIED</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--primary)' }}>S. MASTER 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="section container">
    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Preguntas <span style={{ color: 'var(--primary)' }}>Frecuentes</span></h2>
    </div>
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '1.5rem' }}>
      {[
        { q: "¿Tienen servicio a domicilio?", a: "Sí, cubrimos toda el área urbana de Neiva. Puedes pedir a través de nuestro WhatsApp." },
        { q: "¿Cuál es el horario de atención?", a: "Abrimos todos los días de 12:00 PM a 10:00 PM." },
        { q: "¿Tienen opciones vegetarianas?", a: "Contamos con una selección de rolls y bowls diseñados especialmente para veggies." }
      ].map((item, i) => (
        <details key={i} className="glass" style={{ padding: '1.5rem', borderRadius: '8px', cursor: 'pointer' }}>
          <summary style={{ fontWeight: 600, fontSize: '1.1rem', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {item.q}
            <ChevronRight size={18} className="chevron" />
          </summary>
          <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.a}</p>
        </details>
      ))}
    </div>
  </section>
);

const Location = () => (
  <section id="ubicación" className="section" style={{ borderTop: '1px solid var(--border)' }}>
    <div className="container">
      <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
        <div>
          <span style={{ color: 'var(--primary)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase' }}>ENCONTRAMOS</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', margin: '1rem 0 3rem 0' }}>Visítanos en <br />el Corazón de Neiva</h2>
          
          <div style={{ display: 'grid', gap: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(241, 180, 52, 0.1)', borderRadius: '12px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(241, 180, 52, 0.2)', flexShrink: 0 }}>
                <MapPin color="var(--primary)" size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Ubicación Física</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.5 }}>Cra 16 # 34a - 10, <br />Barrio Gualanday, Neiva.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(241, 180, 52, 0.1)', borderRadius: '12px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(241, 180, 52, 0.2)', flexShrink: 0 }}>
                <Clock color="var(--primary)" size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Horario Estándar</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Lunes a Domingo: 12:00 PM - 10:00 PM</p>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem' }}>
            <a href="https://maps.google.com" target="_blank" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
              CÓMO LLEGAR <ChevronRight size={18} style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </div>
        
        <div style={{ height: '500px', borderRadius: 'var(--radius)', overflow: 'hidden', position: 'relative', border: '1px solid var(--border)' }}>
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033&auto=format&fit=crop" 
            alt="Map Abstract" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, filter: 'grayscale(100%)' }} 
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle, transparent 20%, #000 100%)' }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <div style={{ background: 'var(--primary)', width: '64px', height: '64px', borderRadius: '50%', display: 'grid', placeItems: 'center', margin: '0 auto 1.5rem auto', boxShadow: '0 0 30px rgba(241, 180, 52, 0.5)' }}>
              <MapPin size={32} color="black" />
            </div>
            <p style={{ fontWeight: 800, letterSpacing: '2px', fontSize: '0.9rem' }}>SUSHI BLOCK NEIVA</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="app">
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Testimonials />
      <Location />
      <FAQ />
      
      <footer style={{ backgroundColor: '#000', padding: '8rem 0 4rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid grid-4" style={{ marginBottom: '6rem', textAlign: 'left' }}>
            <div style={{ gridColumn: 'span 1.5' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', letterSpacing: '-1.5px' }}>SUSHI<span style={{ color: 'var(--primary)' }}>BLOCK</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '300px', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Redefiniendo el arte del sushi en Neiva. Ganadores del Sushi Master 2025.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Explorar</h4>
              <ul style={{ display: 'grid', gap: '0.75rem', opacity: 0.6, fontSize: '0.9rem' }}>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#menu">Menú</a></li>
                <li><a href="#ubicacion">Ubicación</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Contacto</h4>
              <ul style={{ display: 'grid', gap: '0.75rem', opacity: 0.6, fontSize: '0.9rem' }}>
                <li>+57 320 2467963</li>
                <li>Neiva, Huila</li>
                <li>@sushiblockneiva_</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Social</h4>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="https://instagram.com/sushiblockneiva_" className="footer-link"><Instagram size={20} /></a>
                <a href="https://wa.me/573202467963" className="footer-link"><Phone size={20} /></a>
              </div>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem', textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
              &copy; 2026 Sushi Block Neiva • Crafting Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
