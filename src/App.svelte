<script>
  let active = false;
  let color = {
    t: 'tomato',
    w: '#FFF',
  };
  let letterSpacing = 'letter-spacing: 5px;';
</script>

<main>
  <button
    on:click={() => {
      active = !active;
    }}>Toggle!</button
  >

  <!-- <div class={active ? 'hello' : ''}>Hello</div> -->
  <!-- class - 스벨트에서 제공하는 스벨트 지시어 -->
  <div class:hello={active}>Hellow</div>

  <h2 style="background-color: {color.t}; color: {color.w}; {letterSpacing}">Keuni</h2>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  div {
    width: 120px;
    height: 200px;
    background-color: royalblue;
    border-radius: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
    transition: 0.4s;
  }
  .hello {
    width: 250px;
    background-color: tomato;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
