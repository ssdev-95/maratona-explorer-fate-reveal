<template>

<div id="spinner">
	<div />
</div>

</template>

<style scoped lang="scss">
$gradient: linear-gradient(90deg,#58c2e3,#7a33d6,#eb5f34);
$smooth: cubic-bezier(0.7,0.7,0.7,0.7);

#spinner {
	width: 35px;
	height: 35px;
	border-radius: 40px;

	position: relative;

	display: flex;

	& > div {
		height: inherit;
		width: inherit;
		border-radius: inherit;

		background: $gradient;

		position: relative;

		animation: Rotate 2s infinite $smooth;

		&::after {
			content: "";
			background: #7a33d6;

			height: 80%;
			width: 80%;
			border-radius: inherit;

			position: absolute;
			top: 10%;
			left: 10%;
		}
	}
}

@keyframes Rotate {
	0%{
		transform: rotate(0deg);
	}

	25% {
		transform: rotate(90deg);
	}

	50% {
		transform: rotate(180deg);
	}

	75% {
		transform: rotate(270deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
