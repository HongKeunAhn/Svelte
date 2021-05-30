<script>
    // Getter & Setter
    // getContext & setContext

    import { getContext } from 'svelte';
    import Keuni2 from './Keuni2.svelte';
    import Lewis from './Lewis.svelte';
    import Evan from './Evan.svelte';

    const pm = getContext('pm');   
</script>

<h1>Class6 ({pm})</h1>
<div>
    <Keuni2 />
    <Lewis />
    <Evan />
</div>

<style> 
    h1 {
        font-size: 50px;
    }

    div {
        padding-left: 50px;
    }
</style>