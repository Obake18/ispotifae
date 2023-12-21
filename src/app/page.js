import React from 'react';
import styles from './page.module.css';


const dadosMusicais = [
  {
    canva: 'artistas/ado.jpg',
    album: 'Ado',
    artista: 'artista',
  },
  {
    canva: 'artistas/eve.jpg',
    album: 'Eve',
    artista: 'artista',
  },
  {
    canva: 'artistas/toc.jpg',
    album: 'The Oral Cigarretes',
    artista: 'artista',
  },
  {
    canva: 'artistas/akfg.jpg',
    album: 'Asian Kung Fu Generation',
    artista: 'artista',
  },
  {
    canva: 'artistas/bbm.jpg',
    album: 'Baby Metal',
    artista: 'artista',
  },
  
];

const topAlbums = [
  {
    canva: 'artistas/top1.jpg',
    album: 'Top Album 1',
  },
  {
    canva: 'artistas/top2.jpg',
    album: 'Top Album 2',
  },
  {
    canva: 'artistas/top3.jpg',
    album: 'Top Album 3',
  },
];

const coresTopAlbums = ['#E8115B', '#55A891', '#F037A5'];

const topGeneros = [
  {
    nomedotop: 'J-Pop',
    capadotop: 'generos/jpop.jpg',
  },
  {
    nomedotop: 'Rock',
    capadotop: 'generos/rock.jpg',
  },
  {
    nomedotop: 'Electronic',
    capadotop: 'generos/electronic.jpg',
  },
  {
    nomedotop: 'Hip-Hop',
    capadotop: 'generos/hiphop.jpg',
  },
  {
    nomedotop: 'Jazz',
    capadotop: 'generos/jazz.jpg',
  },
  {
    nomedotop: 'Reggae',
    capadotop: 'generos/reggae.jpg',
  },
  {
    nomedotop: 'Classical',
    capadotop: 'generos/classical.jpg',
  },
  {
    nomedotop: 'Country',
    capadotop: 'generos/country.jpg',
  },
  {
    nomedotop: 'Metal',
    capadotop: 'generos/metal.jpg',
  },
  {
    nomedotop: 'R&B',
    capadotop: 'generos/rnb.jpg',
  },
];

const coresTopGeneros = ['#FFD700', '#7FFF00', '#4682B4', '#FF6347', '#8A2BE2', '#00FA9A', '#FF4500', '#8B4513', '#2F4F4F', '#FF1493'];

function PaginaTopGeneros() {
  const cardsPorLinha = 2; 

  return (
    <div>
    <div className={`${styles['card-container']}`}>
      {topGeneros.map((genero, index) => (
        <div
          key={index}
          className={`${styles['item-musical']} ${styles.topjapan}`}
          style={{
            backgroundColor: coresTopGeneros[index],
            width: '200px',
            height: '200px',
            margin: '10px',
            borderRadius: '12px',
            display: 'inline-block',
          }}
        >
          <img className={styles.canva} src={genero.capadotop} alt={`Capa de ${genero.nomedotop}`} />
          <p className={styles.nomedotop}>{genero.nomedotop}</p>
        </div>
      ))}
    </div>

    </div>

  );
}




function PaginaTopAlbums() {
  return (
    <div className={`${styles.cardgen}`}>
      {topAlbums.map((album, index) => (
        <div
          key={index}
          className={`${styles['item-musical']} ${styles.card}`}
          style={{
            backgroundColor: coresTopAlbums[index],
            width: '332px',
            height: '162px',
            margin: '10px',
            borderRadius :'12px',
          }}
        >
          <img className={styles.canva} src={album.canva} alt={`Capa de ${album.album}`} />
          <p className={styles.album}>{album.album}</p>
        </div>
      ))}
    </div>
  );
}

function PaginaMusical() {
  return (
    <div className={styles.container}>
      <div className={styles['card-container']}>
        {dadosMusicais.map((musica, index) => (
          <div key={index} className={`${styles['item-musical']} ${styles.card}`}>
            <img className={styles.canva} src={musica.canva} alt={`Capa de ${musica.album}`} />
            <p className={styles.album}>{musica.album}</p>
            <p className={styles.artista}>{musica.artista}</p>
          </div>
        ))}
      </div>
      <PaginaTopAlbums />
      <PaginaTopGeneros />
    </div>
  );
}

export default PaginaMusical;
