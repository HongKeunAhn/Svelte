<script>
	import { lifecycle, delayRender } from './lifecycle';
	import Something from './Something.svelte';

	let done = delayRender();
	lifecycle();
</script>

<main>
	{#if $done}
		
	<h1>Hello Lifecycle!</h1>
	{/if}

	<Something />
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