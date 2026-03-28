import { motion } from "framer-motion";
import { Award } from "lucide-react";

const  About = () => (
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

export default About