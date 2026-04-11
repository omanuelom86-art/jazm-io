import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        sourcemap: false,
        minify: 'terser', // Terser can sometimes be more memory efficient or vice-versa, but let's try to reduce size
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
                },
            },
        },
        chunkSizeWarningLimit: 2000,
    },
})
