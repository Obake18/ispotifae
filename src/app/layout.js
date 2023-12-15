// components/CustomLayout.js
import React from 'react';

import styles from './globals.css';

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

function SearchBar() {
  return (
    <div className={'searchBar'}>
      <input type="text" placeholder="Buscar no Spotify" className={'input'} />
      <button className={'button'}>Buscar</button>
    </div>
  );
};


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

        <p>Ednaldo Pereira</p>
        {icon2 && <img src={`/icons/${icon2}`} alt="Capa" />}
        <div className='botoes'>
          <img className='botao' src={"icons/navs/Shuffle.svg"} alt="Shuffle" />
          <img className='botao' src={"icons/navs/Back.svg"} alt="Retroceder" />
          <img className='botao' src={"icons/navs/Play.svg"} alt="Play" />
          <img className='botao' src={"icons/navs/Forward.svg"} alt="Avançar" />
          <img className='botao' src={"icons/navs/Repeat.svg"} alt="Repeat" />



        </div>
        <div className='barrinha'>
          <img className='barraseek'
            src={"barraseek.svg"} alt='barraseek' />

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
    imagem: '/artistas/artist-1.jpg',
  },
  {
    id: 2,
    genero: 'Hip-Hop',
    tipo: 'Música',
    imagem: '/artistas/artist-2.jpg',
  },
  {
    id: 3,
    genero: 'Vocaloid',
    tipo: 'Música',
    imagem: '/artistas/artist-3.jpg',
  },
  {
    id: 4,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: '/artistas/artist-4.jpg',
  },
  {
    id: 5,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: '/artistas/artist-5.jpg',
  },
  {
    id: 6,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: '/artistas/artist-6.jpg',
  },
  {
    id: 7,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: '/artistas/artist-7.jpg',
  },
  {
    id: 8,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: '/artistas/artist-8.jpg',
  },
  {
    id: 9,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: '/artistas/artist-9.jpg',
  },
  {
    id: 10,
    genero: 'J-Pop',
    tipo: 'Música',
    imagem: '/artistas/artist-10.jpg',
  },
];


function Artistas() {
  return (
    <div className="artistas-container">
      {artistasData.map((artista) => (
        <div key={artista.id} className="artista-item">
          <img src={artista.imagem} alt={artista.genero} />
          <p>{artista.genero}</p>
          <p>{artista.tipo}</p>
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
        <>
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
              <Albuns generos={generosMusicais} />
            </div>
          </div>

          <div className='Fundo-2'>
            <Artistas artistasData={artistasData} />
          </div>

          <div>
            <Seekbar />
            <SearchBar />
          </div>
          {children}
        </>
      </body>
    </html>
  );
}
