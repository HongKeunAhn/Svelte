<script>
	let text = '';
</script>

<main>
	<h1>{text}</h1>
	<input type="text" 
		value={text}
		on:input={(e) => {text = e.target.value}} />
	<input type="text"
		bind:value={text}
	/>

	<button on:click={() => {text = 'Keu.ni'}}>Click</button>
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