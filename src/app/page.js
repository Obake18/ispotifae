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

const cores = ['#E8115B', '#55A891', '#F037A5'];

function PaginaTopAlbums() {
  return (
    <div className={`${styles.cardgen}`}>
      {topAlbums.map((album, index) => (
        <div
          key={index}
          className={`${styles['item-musical']} ${styles.card}`}
          style={{
            backgroundColor: cores[index],
            width: '432px',
            height: '162px',
            margin: '10px', // Adicionei uma margem de 10 pixels
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
    </div>
  );
}

export default PaginaMusical;
