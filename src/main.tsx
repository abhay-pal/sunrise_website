import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { renderServiceRoute } from './servicePages';

const routeElement = renderServiceRoute(window.location.pathname);

createRoot(document.getElementById('root')!).render(
  <StrictMode>{routeElement ?? <App />}</StrictMode>,
);
