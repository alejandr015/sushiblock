import { motion } from "framer-motion";
import { Star } from "lucide-react";

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


export default Testimonials