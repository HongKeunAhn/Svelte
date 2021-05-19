<script>
	import axios from 'axios';

	let apiKey = '9d38c929';
	let title = '';
	let promise = new Promise((resolve) => {
		resolve([]);
	});

	function searchMovies() {
		return new Promise( async (resolve, reject) => {
			try {
			const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`);
			resolve(response.data.Search);
		} catch (error) {
			reject(error);
		} finally {
			console.log('Done!');
		}
		});
	};
</script>

<input type="text" bind:value={title}>
<button on:click={() => {
	promise = searchMovies();
}}>Search!</button>


{#await promise}
	<p style="color: royalblue;">Loading...</p>
{:then movies}
	<ul>	
		{#each movies as movie}
			<li>{movie.Title}</li>
		{/each}	
	</ul>
{:catch _error}
	<p style="color: red;">{_error.message}</p>
{/await}