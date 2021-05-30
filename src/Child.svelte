<script>
    import { createEventDispatcher } from 'svelte'; 
    
    const dispatch = createEventDispatcher();
</script>

<h2>Child!</h2>
<button on:click={() => 
    dispatch('myEvent', {
        myName: 'Keuni!'
        // event 생략 가능 
    })
}>
    Child Click!
</button>