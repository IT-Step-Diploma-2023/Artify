import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import 'normalize.css';
import './App.css';
import './utils/i8n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

