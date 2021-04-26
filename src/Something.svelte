<script>
  import { onDestroy, onMount } from 'svelte';
  
  onMount(() => {
      console.log('onMounted!');
    //   const h1 = document.querySelector('h1');
    //   console.log(h1.innerText); 

      return () => {
          console.log('Destory in mount');
      }
  });

  onDestroy(() => {
    console.log('Before destroy~');
    const h1 = document.querySelector('h1');
      console.log(h1.innerText); 
  });

</script>

<h1>Something...</h1> 
 