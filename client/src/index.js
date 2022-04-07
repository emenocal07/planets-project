import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


createRoot(
  document.getElementById('root')
).render(
  <Router>

    <App />

  </Router>
)
