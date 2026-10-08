import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Habilita el acceso desde la red local
    port: 5173  // O el puerto que uses habitualmente
  }
});