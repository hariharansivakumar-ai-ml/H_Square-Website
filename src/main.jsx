import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Handle dynamic import (chunk load) errors gracefully.
// This typically happens when a new build is deployed and users on older sessions click lazy-loaded routes
// attempting to fetch old hashed chunk JS/CSS files that have been cleaned up/deleted on the server.
window.addEventListener('error', (event) => {
  const errorText = event.message || '';
  const isChunkError = 
    errorText.includes('Failed to fetch dynamically imported module') ||
    errorText.includes('Unable to prepend CSS chunk') ||
    errorText.includes('Importing a module script failed') ||
    errorText.includes('error loading dynamically imported module') ||
    errorText.includes('ChunkLoadError') ||
    (event.target && (event.target.tagName === 'SCRIPT' || event.target.tagName === 'LINK') && 
     (event.target.src || event.target.href || '').includes('/assets/'));

  if (isChunkError) {
    const chunkReloadKey = 'chunk-reload-timestamp';
    const lastReload = sessionStorage.getItem(chunkReloadKey);
    const now = Date.now();

    // Limit reload frequency to avoid infinite reload loop if offline or truly missing
    if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
      sessionStorage.setItem(chunkReloadKey, now.toString());
      console.warn('Chunk/asset load failure detected. Forcing page reload...');
      window.location.reload();
    }
  }
}, true); // Capture phase is required to intercept script/style load failures

window.addEventListener('unhandledrejection', (event) => {
  const errorText = event.reason?.message || '';
  const isChunkError = 
    errorText.includes('Failed to fetch dynamically imported module') ||
    errorText.includes('Importing a module script failed') ||
    errorText.includes('error loading dynamically imported module') ||
    errorText.includes('ChunkLoadError');

  if (isChunkError) {
    const chunkReloadKey = 'chunk-reload-timestamp';
    const lastReload = sessionStorage.getItem(chunkReloadKey);
    const now = Date.now();

    if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
      sessionStorage.setItem(chunkReloadKey, now.toString());
      console.warn('Unhandled chunk rejection detected. Forcing page reload...');
      window.location.reload();
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
