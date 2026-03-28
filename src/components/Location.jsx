import { MapPin, Clock, ChevronRight } from "lucide-react";

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
        
        <div style={{ height: '500px', borderRadius: 'var(--radius)', overflow: 'hidden', position: 'relative', border: '1px solid var(--border)', background: '#111' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6617!2d-75.289!3d2.937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b749!2sCra.%2016%20%2334a-10%2C%20Neiva%2C%20Huila!5e0!3m2!1sen!2sco!4v1700000000000!5m2!1sen!2sco" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) opacity(0.6)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'radial-gradient(circle, transparent 20%, #000 120%)' }}></div>
        </div>
      </div>
    </div>
  </section>
);


export default Location