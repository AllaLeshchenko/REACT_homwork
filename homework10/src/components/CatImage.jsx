
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

function CatImage() {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCatImage = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setImageUrl(response.data[0].url);
    } catch (error) {
      console.error('Ошибка при загрузке изображения:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
   <div className={styles.container}>
    <div className={styles.card}>
      <h1 className={styles.title}>Random Cat Image 🐱</h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <img src={imageUrl} alt="Кошка" className={styles.image} />
      )}
      <button className={styles.button} onClick={fetchCatImage}>
        Load New Image
      </button>
    </div>
  </div>
  );
}

export default CatImage;