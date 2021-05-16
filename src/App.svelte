<script>
  // import Fruits from './Fruits.svelte';
  import Box from './Box.svelte';
</script>

<main>
  <!-- <h2>App.svelte</h2>
  <ul class="fruits">
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
  </ul>

  <Fruits /> -->

  <!-- <div class="box" /> -->
  <Box />
</main>

<style>
  :global(body) {
    padding: 60px;
  }
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  /* :global(.fruits) {
    color: red;
  } */

  :global(.box) {
    width: 100px;
    height: 100px;
    background: tomato;
    border-radius: 10px;
    animation: zoom 0.4s infinite alternate;
  }

  @keyframes -global-zoom {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
