import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    host: '0.0.0.0',
    allowedHosts: [
      'cdf5daf2-f3e3-4480-b69a-69923b47b49f-00-1usnewrxec5v9.sisko.replit.dev'
    ]
  }
})