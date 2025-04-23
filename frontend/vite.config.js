// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // permite acesso externo
    allowedHosts: true // permite qualquer host, inclusive do Ngrok
  },
});
