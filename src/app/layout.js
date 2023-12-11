// components/CustomLayout.js
import React from 'react';
import {card} from "./card.js";
import './globals.css';

export const metadata = {
  title: 'Ispotifae',
  description: 'alguem me socorre',
};

function Secao({ children, icon }) {
  return (
    <p>
      {icon && <img src={`/icons/${icon}`} alt="Icon" style={{ marginRight: '5px' }} />}
      {children}
    </p>
  );
}


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

export default function CustomLayout({ children, backgroundColor }) {
  const containerStyle = {
    backgroundColor: backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: '10px',
    color: '#ffffff',
    position: 'relative',
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body style={containerStyle}>
        <Card>
          <div className="container-nav">
            <Secao icon="casa.svg">Home</Secao>
            <Secao icon="Search.svg">Search</Secao>
            <Secao icon="library.svg">Your Library</Secao>
          </div>
          <div className="container-funcoes">
            <Secao icon="playlist.svg">Criar Playlist</Secao>
            <Secao icon="favorites.svg">Seus Favoritos</Secao>
          </div>
        </Card>
        {children}
      </body>
    </html>
  );
}
