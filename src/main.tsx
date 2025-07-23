
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '../apps/web/client/src/app/layout';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
