// components/Card.js
import React from 'react';

export default function Card({ children }) {
  const cardStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'fit-content',
    padding: '20px',
    backgroundColor: '#333333', // Cinza escuro
    color: '#ffffff', // Texto branco
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
}
