import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, ShoppingCart} from "lucide-react";



const Navbar = ({ setOpenCart, cart }) => {
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
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  
        <img 
            src="public/logo.PNG.png" 
            alt="SushiBlock"
            style={{ 
            height: "45px",
            width: "45px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid var(--primary)",
            boxShadow: "0 0 10px rgba(241,180,52,0.5)"
            }}
        />

        <span style={{ fontSize: '1.3rem', fontWeight: 900 }}>
            SUSHI<span style={{ color: 'var(--primary)' }}>BLOCK</span>
        </span>

         </a>

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
        <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setOpenCart(true)}>
          <div 
            style={{
              padding: '10px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--glass-border)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(241,180,52,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <ShoppingCart size={20} color="var(--primary)" />

            {/* CONTADOR */}
            {cart.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: 'var(--primary)',
                color: 'black',
                borderRadius: '50%',
                fontSize: '10px',
                padding: '3px 6px',
                fontWeight: 'bold',
                boxShadow: '0 0 10px rgba(241,180,52,0.8)',
                zIndex: 2
              }}>
                {cart.length}
              </span>
            )}
          </div>
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

export default Navbar;