import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ArticlesList from './components/ArticlesList';
import ArticlePage from './components/ArticlePage';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ArticlesList />} />
      <Route path="/article/:id" element={<ArticlePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
