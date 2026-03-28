import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { MENU_ITEMS, MENU_CATEGORIES } from "../data/menuData";

const MenuSection = ({ addToCart }) => {
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
                  
                  <button onClick={() => addToCart(item)}
                    className="btn glass"
                    style={{ 
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

export default MenuSection;