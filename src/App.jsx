import { useState, useEffect } from "react";
import { Instagram, Phone } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuSection from "./components/menuSection";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import CartSidebar from "./components/CartSidebar";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";


const App = () => {
      const [cart, setCart] = useState([]);
    const [openCart, setOpenCart] = useState(false);
    const addToCart = (product) => {
    setCart(prev => {
    const existing = prev.find(item => item.id === product.id);

    if (existing) {
        return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
  setCart(prev => prev.filter(item => item.id !== id));
};

const increaseQty = (id) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decreaseQty = (id) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0)
  );
};

  return (
    <div className="app">
      <ScrollProgress />
      <BackToTop />
      <Navbar setOpenCart={setOpenCart} cart={cart} />
      <MenuSection addToCart={addToCart} />
      <Hero />
      <About />
      <Testimonials />
      <Location />
      <FAQ />
      <CartSidebar 
        openCart={openCart}
        setOpenCart={setOpenCart}
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
      />
      
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
