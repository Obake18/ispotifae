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

function Albuns({ generos }) {
  return (
    <div>
      <div className='generos'>
        {generos.map((genero, index) => (
          <li key={index}>{genero}</li>
        ))}
      </div>
    </div>
  );
}


function Seekbar({ capa, icon2 }) {
  return (
    <div>
      <div>
        {capa && <img src={`/icons/${capa}`} alt="Capa" />}
        <p>Algo tocando
        </p>
        <p>
          Ednaldo Pereira
        </p>
        {icon2 && <img src={`/icons/${icon2}`} alt="Capa" />}
      </div>
    </div>
  )
}


export default function CustomLayout({ children, backgroundColor }) {
  const containerStyle = {
    backgroundColor: backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: '0px',
    color: '#000000',
    position: 'relative',
  };

  const generosMusicais = [
    'J-Pop',
    'Anime Soundtracks',
    'J-Rock',
    'Electronic',
    'Hip-Hop',
    'Enka',
    'Traditional Japanese',
    'Indie',
    'Kawaii Metal',
    'City Pop',
    'Visual Kei',
    'Kayokyoku',
    'Jazz',
    'Classical',
    'Folk',
    'Ska',
    'Reggae',
    'Punk',
    'Metal',
    'Techno',
    'House',
    'Trance',
    'Ambient',
    'Fusion',
    'World Music',
    'Experimental',
    'Noise',
    'Post-Rock',
    'Post-Punk',
    'Shibuya-Kei',
    'Electropop',
    'Art Pop',
    'Dream Pop',
    'Shoegaze',
    'Alternative Rock',
    'Emo',
    'Math Rock',
    'Post-Hardcore',
    'Hardcore Punk',
    'Gothic Rock',
    'Industrial',
    'New Wave',
    'Synthpop',
    'Disco',
    'Funk',
    'Soul',
    'R&B',
    'Blues',
    'Rockabilly',
    'Country',
    'Bluegrass',
    'Latin',
    'Hip-Hop Instrumental',
    'Beats',
    'Breakbeat',
    'Drum and Bass',
    'Dubstep',
    'Grime',
    'Trap',
    'Chiptune',
    'Game Music',
    'Idol Pop',
    'Anison',
    'Vocaloid',
    'Karaoke',
    'Taiko',
    'Shamisen',
    'Koto',
    'Shakuhachi',
    'Biwa',
    'Sanshin',
    'Okinawan Folk',
    'Ryukyu Classical',
    'Gagaku',

  ];


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

          <div className="container-generos">
            {/* Renderiza a função Albuns com o vetor de gêneros */}
            <Albuns generos={generosMusicais} />
          </div>
        </div>

        <div>
          <Seekbar />
        </div>
        {children}
      </body>
    </html>
  );
}
