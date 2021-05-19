<script>
import { each } from "svelte/internal";


	let fruits = [
		{ id: '1', name: 'Apple' },
		{ id: '2', name: 'Banana' },
		{ id: '3', name: 'Cherry' },
	];

	function assign(fruit) {

	fruit.name += '!';
	fruits = fruits;
	// $$invalidate(0. fruits);
	}
</script>

<main>
	<section>
		{#each fruits as fruit }
			<div on:click={() => assign(fruit)}>
				{fruit.name}
			</div>
		{/each}		
	</section>

	<section>
		{#each fruits as fruit (fruit.id) }
			<div on:click={() => fruit.name += '!'}>
				{fruit.name}
			</div>
		{/each}
		<!-- $$invalidate(0, each_value_1[fruit_index].name += "!")  -->
	</section>

	<section>
		{#each fruits as {id, name} (id) }
			<div on:click={() => name += '!'}>
				{name}
			</div>
		{/each}
		<!-- $$invalidate(0, each_value_1[fruit_index].name += "!")  -->	
	</section>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	section {
		border: 1px solid #ff3e00;
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>