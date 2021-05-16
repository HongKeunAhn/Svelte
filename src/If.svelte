<script>
  let count = 0;
</script>

<main>
  <button
    on:click={() => {
      count += 1;
    }}>증가!</button
  >
  <button
    on:click={() => {
      count -= 1;
    }}>감소!</button
  >

  <h2>{count}</h2>

  <section>
    <h2>if</h2>
    {#if count > 3}
      <div>count &gt; 3</div>
    {/if}
  </section>

  <section>
    <h2>if else</h2>
    {#if count > 3}
      <div>count &gt; 3</div>
    {:else}
      <div>count &lt;= 3</div>
    {/if}
  </section>

  <section>
    <h2>if else if</h2>
    {#if count > 3}
      <div>count &gt; 3</div>
    {:else if count === 3}
      <div>count === 3</div>
    {:else}
      <div>count &lt; 3</div>
    {/if}
  </section>

  <section>
    <h2>다중 블록</h2>
    {#if count > 3}
      {#if count === 5}
        count === 5
      {:else}
        count &gt; 3
      {/if}
    {/if}
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
    border: 1px solid tomato;
    padding: 5px;
    margin-bottom: 10px;
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
