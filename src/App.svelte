<script>
	import { onMount } from 'svelte';
	let name = 'world';
	let isGreen = false;

	// onMount(() => {
	// 	const box = document.querySelector('.box');
	// 	box.addEventListener('click', () => {
	// 		isGreen = !isGreen;
	// 	});
	// });

	function enter() {
		name = 'enter';
	}

	function leave() {
		name = 'leave';
	}

</script>

<main>
	<h1>Hello {name}!</h1>
	<div class="box" 
		style="background-color: {isGreen ? '#1CC20E' : 'tomato'}"
		on:click={() => { isGreen = !isGreen}}
		on:mouseenter={enter}
		on:mouseleave={leave}
		>
		Box!
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.box {
		width: 300px;
		height: 150px;

		background-color: tomato;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>