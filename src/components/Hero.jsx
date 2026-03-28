import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";


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


export default Hero