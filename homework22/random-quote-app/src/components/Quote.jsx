import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../features/quote/quoteSlice';
import styles from './Quote.module.css';

const Quote = () => {
  const dispatch = useDispatch();
  const { text, author, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchQuote());
  };

  return (
    <div className={styles.container}>
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'failed' && <p className={styles.error}>Ошибка: {error}</p>}
      {status === 'succeeded' && (
        <div className={styles.quoteBox}>
          <p className={styles.text}>"{text}"</p>
          <p className={styles.author}>— {author}</p>
        </div>
      )}
      <button onClick={handleNewQuote} className={styles.button}>
        Новая цитата
      </button>
    </div>
  );
};

export default Quote;
