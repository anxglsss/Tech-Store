import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === 'production' ? 'Tech-Store' : '/',
	build: {
		outDir: 'dist',
	},
	plugins: [react()],
})
