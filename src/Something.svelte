<script>
    import { delayRender } from './lifecycle';

    let done = delayRender(1000);
</script>

{#if $done}   
    <h2>Something..</h2>
{/if}