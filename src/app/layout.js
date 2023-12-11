// components/CustomLayout.js
import React from 'react';
import Styles from './globals.css';

export const metadata = {
  title: 'Ispotifae',
  description: 'alguém me socorre',
};

function Secao({ children, icon }) {
  return (
    <p>
      {icon && <img src={`/icons/${icon}`} alt="Icon" style={{ marginRight: '5px' }} />}
      {children}
    </p>
  );
}


<<<<<<< HEAD
=======
export function Card({ children }) {
  const cardStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'fit-content',
    padding: '20px',
    backgroundColor: '#000000',
    color: '#ffffff', 
    borderRadius: '8px',
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
}

>>>>>>> b0f7f2b6209dd396dd4f12e2d0d5423ce6736c0f
export default function CustomLayout({ children, backgroundColor }) {
  const containerStyle = {
    backgroundColor: backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: '10px',
    color: '#000000',
    position: 'relative',
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body style={containerStyle}>
        <div className='Fundo'>
          <div className="container-nav">
            <Secao icon="casa.svg">Home</Secao>
            <Secao icon="Search.svg">Search</Secao>
            <Secao icon="library.svg">Your Library</Secao>
          </div>
          <div className="container-funcoes">
            <Secao icon="playlist.svg">Criar Playlist</Secao>
            <Secao icon="favorites.svg">Seus Favoritos</Secao>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
