import { ChevronRight } from "lucide-react";

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
);export default FAQ