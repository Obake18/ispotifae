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

function Seekbar({ capa, icon2}) {
  return (
    <div className='seekbar'>
      <div className='seekbar-info'>
        {capa && <img src={`/icons/${capa}`} alt="Capa" />}
        <p>Algo tocando</p>
        <p>Ednaldo Pereira</p>
        {icon2 && <img src={`/icons/${icon2}`} alt="Capa" />}
      </div>
      {/* Botão de Retroceder */}
      <img src={"icons/navs/Back.svg"} alt="Retroceder" />
      <div className='botoes'>
        {/* Botão de Play */}
        <img src={"icons/navs/Play.svg"} alt="Play" />

        {/* Botão de Pause */}
        <img src={"icons/navs/Bottom Nav/Shuffle.svg"} alt="Pause" />

        {/* Botão de Avançar */}
        <img src={"icons/navs/Forward.svg"} alt="Avançar" />


      </div>
    </div>
  );
}

const artistasData = [
  {
    id: 1,
    genero: 'Pop',
    tipo: 'Música',
    imagem: 'url_da_imagem_artista_1.jpg',
  },
  {
    id: 2,
    genero: 'Hip-Hop',
    tipo: 'Música',
    imagem: 'url_da_imagem_artista_2.jpg',
  },
  {
    id: 3,
    genero: 'Podcast',
    tipo: 'Podcast',
    imagem: 'url_da_imagem_artista_3.jpg',
  
  },
]
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
    'Game Music',￼Home

    ￼Search
    
    ￼Your Library
    
    ￼Criar Playlist
    
    ￼Seus Favoritos
    
    J-Pop
    Anime Soundtracks
    J-Rock
    Electronic
    Hip-Hop
    Enka
    Traditional Japanese
    Indie
    Kawaii Metal
    City Pop
    Visual Kei
    Kayokyoku
    Jazz
    Classical
    Folk
    Ska
    Reggae
    Punk
    Metal
    Techno
    House
    Trance
    Ambient
    Fusion
    World Music
    Experimental
    Noise
    Post-Rock
    Post-Punk
    Shibuya-Kei
    Electropop
    Art Pop
    Dream Pop
    Shoegaze
    Alternative Rock
    Emo
    Math Rock
    Post-Hardcore
    Hardcore Punk
    Gothic Rock
    Industrial
    New Wave
    Synthpop
    Disco
    Funk
    Soul
    R&B
    Blues
    Rockabilly
    Country
    Bluegrass
    Latin
    Hip-Hop Instrumental
    Beats
    Breakbeat
    Drum and Bass
    Dubstep
    Grime
    Trap
    Chiptune
    Game Music
    Idol Pop
    Anison
    Vocaloid
    Karaoke
    Taiko
    Shamisen
    Koto
    Shakuhachi
    Biwa
    Sanshin
    Okinawan Folk
    Ryukyu Classical
    Gagaku
    ￼
    Gênero: Pop
    
    Tipo: Música
    
    
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
          <Seekbar />
        </div>
        {children}
      </body>
    </html>
  );
}
