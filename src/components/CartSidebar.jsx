import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CartSidebar = ({
  openCart,
  setOpenCart,
  cart,
  removeFromCart,
  increaseQty,
  decreaseQty
}) => {
  const [address, setAddress] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("Efectivo");

  const total = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', '').replace('.', ''));
    return acc + price * item.quantity;
  }, 0);

  const formatPrice = (value) => {
    return value.toLocaleString('es-CO');
  };

    
const sendToWhatsApp = () => {
  const message = cart.map(item =>
    `• ${item.name} x${item.quantity} - ${item.price}` +
    (item.note ? ` (Nota: ${item.note})` : "")
  ).join('%0A');

  const url = `https://wa.me/573202467963?text=Hola, quiero pedir:%0A${message}%0A%0A📍 Dirección: ${address || "No especificada"}%0A💳 Método de pago: ${paymentMethod}%0A💰 Total: $${formatPrice(total)}`;

  window.open(url, '_blank');
};

  return (
    <AnimatePresence>
      {openCart && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenCart(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
              zIndex: 998
            }}
          />

          {/* SIDEBAR */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="glass"
            style={{
              position: 'fixed',
              right: 0,
              top: 0,
              width: '380px',
              height: '100vh',
              zIndex: 999,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              borderLeft: '1px solid var(--glass-border)'
            }}
          >
            {/* HEADER */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem' }}>
                Tu <span style={{ color: 'var(--primary)' }}>Pedido</span>
              </h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>
                Revisa tus productos antes de ordenar
              </p>
            </div>

            {/* ITEMS */}
            <div style={{ flex: 1, overflowY: 'auto', display: 'grid', gap: '1.5rem' }}>
              {cart.length === 0 ? (
                <p style={{ opacity: 0.6 }}>Tu carrito está vacío 🍣</p>
              ) : (
                cart.map(item => (
                  <div 
                    key={item.id} 
                    className="glass"
                    style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '10px',
                      borderRadius: '10px'
                    }}
                  >
                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                        borderRadius: '8px'
                      }}
                    />

                    {/* INFO */}
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                        {item.name}
                      </p>

                      <p style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>
                        {item.price}
                      </p>

                      {/* CONTROLES */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}>
                        <button onClick={() => decreaseQty(item.id)} className="btn glass">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQty(item.id)} className="btn glass">+</button>
                      </div>
                      <textarea
                        placeholder="Notas (sin cebolla, extra salsa...)"
                        style={{
                          width: '100%',
                          marginTop: '6px',
                          padding: '6px',
                          borderRadius: '6px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid var(--glass-border)',
                          color: 'white',
                          fontSize: '0.7rem',
                          resize: 'none'
                        }}
                        onChange={(e) => item.note = e.target.value}
                      />

                      <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        marginTop: '6px',
                        fontSize: '0.7rem',
                        color: '#ff4d4f',
                        background: 'rgba(255,77,79,0.08)',
                        border: '1px solid rgba(255,77,79,0.3)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(255,77,79,0.2)';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,77,79,0.08)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      Eliminar
                     </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.8rem', marginBottom: '0.5rem', opacity: 0.7 }}>
                Dirección de entrega
              </p>

              <input
                type="text"
                placeholder="Ej: Cra 16 #34a-10, Gualanday"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.7rem',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--glass-border)',
                  color: 'white',
                  fontSize: '0.8rem'
                }}
              />
            </div>

            {/* MÉTODO DE PAGO */}
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.8rem', marginBottom: '0.5rem', opacity: 0.7 }}>
                Método de pago
              </p>

              <div style={{ display: 'flex', gap: '8px' }}>
                {["Efectivo", "Transferencia", "Tarjeta"].map(method => (
                  <button
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    className="btn"
                    style={{
                      flex: 1,
                      padding: '0.6rem',
                      fontSize: '0.7rem',
                      borderRadius: '6px',
                      background:
                        paymentMethod === method
                          ? 'var(--primary)'
                          : 'rgba(255,255,255,0.05)',
                      color:
                        paymentMethod === method
                          ? 'black'
                          : 'white',
                      border: '1px solid var(--glass-border)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            {/* FOOTER */}
            <div style={{ marginTop: '2rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                fontSize: '1.2rem'
              }}>
                <span>Total</span>
                <strong style={{ color: 'var(--primary)' }}>
                  ${formatPrice(total)}
                </strong>
              </div>

              <button
                onClick={sendToWhatsApp}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Finalizar Pedido
              </button>

              <button
                onClick={() => setOpenCart(false)}
                className="btn glass"
                style={{ width: '100%', marginTop: '10px' }}
              >
                Seguir comprando
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;