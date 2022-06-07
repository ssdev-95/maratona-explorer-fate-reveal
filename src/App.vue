<template>
	<Content />
</template>

<script setup>
import Content from './components/content.vue'
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
	width: 100vw;
	min-height: 100vh;
	padding: 18vh 0;

	display: flex;
	flex-direction: column;

	align-items:  center;
	justify-content: flex-start;
	gap: 2rem;

	background: #03000D;
	text-align: center;
	font-family: Roboto, sans-serif;
}
</style>
