import React, { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
      const percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
      setWidth(percent);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '3px',
      background: 'var(--primary)',
      width: `${width}%`,
      zIndex: 1000,
      transition: 'width 0.2s ease-out'
    }} />
  );
};


export default ScrollProgress