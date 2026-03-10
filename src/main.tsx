import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { renderServiceRoute } from './servicePages';
import { WhatsAppModalProvider } from './components/WhatsAppModalProvider';

const routeElement = renderServiceRoute(window.location.pathname);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WhatsAppModalProvider>{routeElement ?? <App />}</WhatsAppModalProvider>
  </StrictMode>,
);
