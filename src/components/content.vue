<template>

<img
	src="/favicon.svg"
	alt="An crystal ball image."
/>
<div id="titles">
	<h1>I shall reveal your{{"\n"}}Fate!</h1>
	<p>Click in the ASK button to get yout fate revealed.</p>
</div>
<form @submit="getAnswer" id="entry">
	<input
		type="text"
		placeholder="eg. 5.5k in first job as jr is real?"
		v-model="question"
	/>
	<button>ASK</button>
</form>

<div :class="answer.length ? '' : 'hide'" id="res">
	<p>{{question}}</p>
	<span>{{answer}}</span>
</div>

</template>

<script setup>
import { ref } from 'vue'
import { api } from '../services/api'
import { showToast } from '../composables/toast'

const endpoint = '/random'

async function getAnswer(event) {
	event.preventDefault()

	if(!question.value) {
		showToast()
		return;
	}

	const { data } = await api.get(endpoint).catch(err => {
		alert(err)
	})

	answer.value = data.content
	document
		.querySelector("#app input")
		.value = ""

	setTimeout(()=>{
		answer.value = ""
		question.value = ""
	}, 3000)

	return;
}

let question = ref("")
let answer = ref("")
</script>

<style scoped lang="scss">
#entry {
	display: flex;
	flex-direction: column;
	gap: 1.75rem;

	input {
		background: #f0f2f5;
		color: #4c4c4c;
		width: 35rem;
		max-width: 80vw;
		height: 2.75rem;
		text-indent:1.25rem;
		border-color: transparent;
		outline: 1px solid #c1c1c1;
	}

	button {
		width: 35rem;
		max-width: 80vw;
		height: 2.75rem;

		background: #7a33d6;
		border: 0;
		color: #f0f2f5;
	}
}

#titles {
	width: 35rem;
	max-width: 80vw;

	h1{
		font-weight: 600;
		color: #f0f2f5;
	}

	p {
		font-weight: 400;
		color: #969696;
		font-size: 0.95rem;
		line-height: 150%;
	}
}

#res {
	width: 35rem;
	max-width: 80vw;

	p {
		font-weight: 400;
		color: #969696;
		font-size: 0.95rem;
		line-height: 150%;
	}

	span {
		color: #f0f2f5;
		font-size: 1.25rem;
	}

	&.hide {
		opacity: 0;
	}
}
</style>
