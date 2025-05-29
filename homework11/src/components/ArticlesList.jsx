import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ArticlesList.module.css';

const articles = [
  { id: '1', title: 'Первая статья' },
  { id: '2', title: 'Вторая статья' },
];

const ArticlesList = () => (
  <div className={styles.container}>
    <h2>Список статей</h2>
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link to={`/article/${article.id}`}>{article.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ArticlesList;