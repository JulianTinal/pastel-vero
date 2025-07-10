import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '/public/images/pastel1.jpg',
        '/public/images/pastel2.jpg',
        '/public/images/pastel3.jpg',
        '/public/images/pastel4.jpg',
        '/public/images/pastel5.jpg',
        '/public/images/pastel6.jpg',
        '/public/images/pastel7.jpg',
      ],
    },
  },
})
