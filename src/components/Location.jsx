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


export default Location