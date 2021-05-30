<script>
    import { getContext, setContext } from 'svelte';
    import Anderson from './Anderson.svelte';

    const pocketMoney = 10000;
    // pm은 그냥 이름으로 아무거나 명명해도 된다.
    setContext('pm', pocketMoney);

    const pm = getContext('pm');
</script>

<h1 style='color: red;'>
    Keuni({pm})
</h1>
<ul>
    <li>
        <Anderson />
    </li>
</ul>