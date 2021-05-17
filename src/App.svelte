<script>
	import axios from 'axios';

	let apiKey = '9d38c929';
	let title = '';
	let movies = null;
	let _error = null;
	let loading = false;

	async function searchMovies() {
		try {
			const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`);
			movies = response.data.Search;	
		} catch (error) {
			_error = error;
		}
	};
</script>

<input type="text" bind:value={title}>
<button on:click={searchMovies}>Search!</button>

{#if loading}
	<p style="color: royalblue;">Loading...</p>
{:else if movies}
	<ul>	
		{#each movies as movie}
			<li>{movie.Title}</li>
		{/each}	
	</ul>
{:else if _error}
	<p style="color: red;">{_error.message}</p>
{/if}