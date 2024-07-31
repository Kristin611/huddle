import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'

export default ({ mode }) => {
  // Load environment variables from the client folder
  const env = loadEnv(mode, '../client')

  console.log('VITE_API_URL:', env.VITE_API_URL); // For debugging

  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
      proxy: mode === 'development' ? {
        '/api': {
          target: env.VITE_API_URL,
          secure: false,
          changeOrigin: true
        }
      } : {}
    },
  });
};

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
  
//   //server proxy to prevent cross origin errors 3000 vs 3001
//   server: {
//     port: 3000,
//     open: true,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3001',
//         secure: false,
//         changeOrigin: true
//       }
//     }
//   },
// })
