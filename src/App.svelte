<script>
  let innerHTML = '';
  let textContent = 'Hello world!';
</script>

<main>
  <div contenteditable bind:innerHTML bind:textContent />

  <div>{innerHTML}</div>
  <div>{textContent}</div>
  <div>{@html innerHTML}</div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  div {
    border: 1px solid royalblue;
    margin-bottom: 10px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
