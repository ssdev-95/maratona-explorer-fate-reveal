import { createApp } from 'vue'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register'

const updateInterval = 5000 // 24 * 60 * 60 *1000;
const updateSW = registerSW({
  onNeedRefresh() {
		console.log('refreshing..')
	},
  onOfflineReady() {
		alert('No connection available.')
	},
	onRegistered(r) {
    r && setInterval(() => {
      r.update()
    }, updateInterval)
  }
})

createApp(App).mount('#app')
