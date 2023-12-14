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
    <div className='seekbar'>
      <div className='seekbar-info'>
        {capa && <img src={`/icons/${capa}`} alt="Capa" />}
        <p>Algo tocando</p>
        <p>Ednaldo Pereira</p>
        {icon2 && <img src={`/icons/${icon2}`} alt="Capa" />}
        <div className='botoes'>
          {/* Botão de Retroceder */}
          <img className='botao' src={"icons/navs/Back.svg"} alt="Retroceder" />

          {/* Botão de Play */}
          <img className='botao' src={"icons/navs/Play.svg"} alt="Play" />

          {/* Botão de Pause */}
          <img className='botao' src={"icons/navs/Bottom Nav/Shuffle.svg"} alt="Pause" />

          {/* Botão de Avançar */}
          <img className='botao' src={"icons/navs/Forward.svg"} alt="Avançar" />
        </div>
      </div>
    </div>


  );
}


const artistasData = [
  {
    id: 1,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: 'https://lastfm.freetls.fastly.net/i/u/300x300/0f8d5c7c9b3c4a1c8d6d8c8e2c8d5c8d.jpg',
  },
  {
    id: 2,
    genero: 'Hip-Hop',
    tipo: 'Música',
    imagem: 'https://i.scdn.co/image/ab67616d0000b273d1f9f9b7c5c2d7c3d3d7d7c5',
  },
  {
    id: 3,
    genero: 'Vocaloid',
    tipo: 'Música',
    imagem: 'https://i.scdn.co/image/ab67616d0000b273f9d5b7a8b7a9d5b7a8b7a9d5',
  },
  {
    id: 4,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: 'https://i.scdn.co/image/ab67616d0000b273c3b7d7c5c2d7d7c5c2d7d7c5',
  },
  {
    id: 5,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: 'https://i.scdn.co/image/ab67616d0000b273b7c5c2d7d7c5c2d7d7c5c2d7',
  },
  {
    id: 6,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: 'https://i.scdn.co/image/ab67616d0000b273c5c2d7d7c5c2d7d7c5c2d7d7',
  },
  {
    id: 7,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: 'https://i.scdn.co/image/ab67616d0000b273d7c5c2d7d7c5c2d7d7c5c2d7',
  },
  {
    id: 8,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: 'https://i.scdn.co/image/ab67616d0000b273c5c2d7d7c5c2d7d7c5c2d7d7',
  },
  {
    id: 9,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: 'https://i.scdn.co/image/ab67616d0000b273c5c2d7d7c5c2d7d7c5c2d7d7',
  },
  {
    id: 10,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: 'https://i.scdn.co/image/ab67616d0000b273c5c2d7d7c5c2d7d7c5c2d7d7',
  },
];

function Artistas() {
  return (
    <div className="artistas-container">
      {artistasData.map((artista) => (
        <div key={artista.id} className="artista-item">
          <img src={artista.imagem} alt={`Imagem de ${artista.genero}`} />
          <p>Gênero: {artista.genero}</p>
          <p>Tipo: {artista.tipo}</p>
        </div>
      ))}
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
        <div className='Fundo-2'>
          <Artistas>

          </Artistas>
        </div>

        <div>
          <Seekbar>
          </Seekbar>
        </div>
        {children}
      </body>
    </html>
  );
}
