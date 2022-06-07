import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		VitePWA({
			registerType: 'autoUpdate',
			strategies: 'injectManifest',
			includeAssets: [
				'favicon.svg',
				'favicon.ico',
				'robots.txt',
				'apple-touch-icon.png'
			],  
      manifest: {
        name: 'Fate Reveal',
        short_name: 'FReveal',
        description: 'Let your fate be revealed through questions.',
        theme_color: '#03000D',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
					{
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      },
			workbox: {
				sourcemap: true
			}
		})
	]
})
