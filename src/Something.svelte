<script>
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from 'svelte';

  let name = 'Something..';
  let h1;

  function moreDot() {
    name += '.';
  }

  beforeUpdate(() => {
    // console.log('Before update!');
    console.log('beforeUpdate', h1 && h1.innerText); // undefind
  });

  afterUpdate(() => {
    // console.log('After Update!');
    console.log('afterUpdate', h1.innerText);
  });

  onMount(() => {
    console.log('onMounted!');
    h1 = document.querySelector('h1');
  });

  onDestroy(() => {
    // console.log('Before destroy~');
    const h1 = document.querySelector('h1');
    console.log('onDestroy', h1.innerText);
  });
</script>

<h1 on:click={moreDot}>{name}</h1>
