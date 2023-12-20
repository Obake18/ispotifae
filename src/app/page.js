import styles from './page.module.css';
// import React from 'react';

const dadosMusicais = [
  {
    nome: 'Nome da Música 1',
    canva: 'url_da_imagem_1',
    album: 'Nome do Álbum 1',
    artista: 'Nome do Artista 1',
  },
  {
    nome: 'Nome da Música 2',
    canva: 'url_da_imagem_2',
    album: 'Nome do Álbum 2',
    artista: 'Nome do Artista 2',
  },
  {
    nome: 'Nome da Música 3',
    canva: 'url_da_imagem_3',
    album: 'Nome do Álbum 3',
    artista: 'Nome do Artista 3',
  },
];

function PaginaMusical() {
  return (
    <div className={styles.container}>
      <h1>Músicas Populares</h1>
      <div className={styles['card-container']}>
        {dadosMusicais.map((musica, index) => (
          <div key={index} className={`${styles['item-musical']} ${styles.card}`}>
            <h3 className={styles.nome}>{musica.nome}</h3>
            <img className={styles.canva} src={musica.canva} alt={`Capa de ${musica.album}`} />
            <p className={styles.album}>Álbum: {musica.album}</p>
            <p className={styles.artista}>Artista: {musica.artista}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaginaMusical;