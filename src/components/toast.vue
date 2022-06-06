<template>

<div id="toast" :class="isShown ? '' : 'hide'">
	<div>
		<img
			src="../crystal-ball.svg"
			alt="A crystal ball image"
		>
	</div>

	<div>
		<h1>Error</h1>
	</div>

	<div>
		<span>Deu ruim :D</span>
	</div>
</div>

</template>

<script setup>
import { isShown } from '../composables/toast'
</script>

<style scoped lang="scss">
#toast {
	width: 8rem;
	height: 2.5rem;
	border-radius: 40px;
	border: 2px solid #ea5825;
	color: #ea5825;

	position: fixed;
	bottom: 15vh;
	left: 50vw;
	transform: translateX(-50%);
	z-index: 3;

	display: grid;
	grid-template-columns: 30% 70%;
	grid-template-rows: repeat(2, 50%);
	grid-template-areas: "img ttl"
											 "img txt";

	background: rgba(0,0,0,0.28);
	font-family: Roboto, sans-serif;
	transition: bottom 2s cubic-bezier(0.7,0.7,0.7,0.7);

	& > div {
		display: flex;
		align-items: center;
		padding: 0 2px;

		h1, span {
			font-size: 0.75rem;
		}

		img {
			width: 70%;
			height: 70%;
			margin: 0 auto;
			transform: translateY(-2px);
			filter: hue-rotate(325deg) sepia(255);
		}

		&:first-of-type {
			grid-area: img;
		}

		&:nth-of-type(2) {
			grid-area: ttl;
		}

		&:last-of-type {
			grid-area: txt;
		}
	}

	&.hide {
		bottom: calc(0px - 15vh + 2.7rem);
	}
}
</style>
