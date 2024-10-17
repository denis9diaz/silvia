// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './js/Home';
import './styles/home.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
