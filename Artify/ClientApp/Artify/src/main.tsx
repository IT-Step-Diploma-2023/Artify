import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import './App.css'
import './utils/i8n.ts'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


