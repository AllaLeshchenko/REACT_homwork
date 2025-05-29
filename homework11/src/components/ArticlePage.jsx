import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styles from '../styles/ArticlePage.module.css';

const articles = {
  '1': { title: 'Статья 1', content: 'Содержимое первой статьи' },
  '2': { title: 'Статья 2', content: 'Содержимое второй статьи' },
};

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const article = articles[id];

  if (!article) return <p>Статья не найдена</p>;

  const currentPath = location.pathname; // Получаем текущий путь, например "/article/2"

  return (
    <div className={styles.container}>
      <h2>{article.title}</h2>
      <p>{article.content}</p>

      {/* Выводим текущий путь */}
      <p>Текущий путь: <code>{currentPath}</code></p>

      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};

export default ArticlePage;