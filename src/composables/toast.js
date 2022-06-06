import { ref, watch } from 'vue'

export const isShown = ref(false)

export function showToast() {
	isShown.value = true
}

function hideToast() {
	setTimeout(()=>{
		isShown.value = false
	}, 3000)
}

watch(isShown, hideToast)
