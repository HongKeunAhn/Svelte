<script>
	import { onMount } from 'svelte';
	import Keuni from './Keuni.svelte';

	let keuni;

	onMount(() => {
		console.log(keuni);
		console.log(keuni.title);
	})
</script>

<Keuni title='Good~' bind:this={keuni}/>