import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command == "serve") {
    return {
      plugins: [react(), mkcert()],
      server: {
        port: 5000,
        https: true,
        strictPort: true,
        // proxy: {
        //   '/api': {
        //     target: 'https://localhost:3000',
        //     changeOrigin: true,
        //     secure: false,
        //     rewrite: (path) => path.replace(/^\/api/, 'api'),
        //     ws: true
        //   },
        // },
      },
    }
  }
  else {
    return {
      plugins: [react(), mkcert()],
      // server: {
      //   // port: 5000,
      //   https: true,
      //   // strictPort: true,
      //   proxy: {
      //     '/api': {
      //       target: 'https://my-designo.azurewebsites.net',
      //       changeOrigin: true,
      //       secure: false,
      //       rewrite: (path) => path.replace(/^\/api/, 'api'),
      //       ws: true
      //     },
      //   },
      // },
    }
  }
});
