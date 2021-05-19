<script>
	// let promise = new Promise(resolve => resolve('Click Button!'));
	let promise = Promise.resolve('Click Button!');

	function fetchName() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('Keuni');
			}, 0);
		});
	}

	function onFetchNameBtnClick() {
		promise = fetchName();
	}
</script>

<main>
	<button on:click={onFetchNameBtnClick}>
		Fetch name!
	</button>

	{#await promise then name}
	<!-- 이행(Fulfilled) -->
		<h1>{name}</h1>
	{/await}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>