<script>
	let name = 'world';
	let age = 85;

	function assign() {
		name = 'Keu.ni',
		age = 30
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2 class={age < 85 ? 'active' : null}>
		{age}
	</h2>
	<img src="" alt={name}>
	<input type="text" bind:value={name}>
	<button on:click={assign}>Assign</button>
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
	
	.active {
		color: #41E382;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>