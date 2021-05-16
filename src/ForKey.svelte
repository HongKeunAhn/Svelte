<script>
  // let fruits = ['Apple', 'Banana', 'Cherry', 'Orange'];
  let fruits = [
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Banana' },
    { id: '3', name: 'Cherry' },
    { id: '4', name: 'Apple' },
  ];

  function deleteFirst() {
    fruits = fruits.slice(1); // ['Banana', 'Cherry', 'Orange']
  }
</script>

<main>
  <button on:click={deleteFirst}>Delete first fruit!</button>

  <ul>
    {#each fruits as fruit (fruit.id)}
      <li>{fruit.name}</li>
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

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
