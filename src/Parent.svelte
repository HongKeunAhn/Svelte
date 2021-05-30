<script>
    import Child from './Child.svelte';
</script>

<h2>Parent!</h2>
<button on:click>
    Parent Click!
</button>

<Child on:myEvent />
<!-- =. {}를 생략하면 바로 위 부모한테 이벤트를 올려준다. -->