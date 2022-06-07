import { createApp } from 'vue'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register'

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
    }, 5000)
  }
})

createApp(App).mount('#app')
