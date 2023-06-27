// Import components
import React from 'react';      // Librairie pour créer les composants jsx
import ReactDOM from 'react-dom/client';    // librairie pour créer des pages web en react
// reactNative : librairie pour les mobiles
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

