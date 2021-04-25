<script>
	let fruits = ['Apple', 'Mango', 'Orange', 'Melon', 'Kiwi', 'Lemon'];
</script>

<main>
	<h2>Fruits</h2>
	<ul>
		{#each fruits as fruit }
			<li>{fruit}</li>
		{/each}
	</ul>

	<h2>Fruits Reverse</h2>
	<ul>
		<!-- 전개 연산자 사용 (복사본 생성)
		...['Apple', 'Mango', 'Orange', 'Melon', 'Kiwi', 'Lemon']
		>'Apple', 'Mango', 'Orange', 'Melon', 'Kiwi', 'Lemon'
		>['Apple', 'Mango', 'Orange', 'Melon', 'Kiwi', 'Lemon']
		-->
		{#each [...fruits].reverse() as fruit }
			<li>{fruit}</li>
		{/each}
	</ul>

	<h2>Fruits slice -2</h2>
	<ul>
		{#each fruits.slice(-2) as fruit }
			<li>{fruit}</li>
		{/each}
	</ul>
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