import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
import { writable } from 'svelte/store';

export function lifecycle() {
    onMount(() => {
        console.log('Mounted!');
    });
    
    onDestroy(() => {
        console.log('Before destroy!');
    });
    
    beforeUpdate(() => {
        console.log('Before update!');
    });
    
    afterUpdate(() => {
        console.log('After update!');
    });
}

export function delayRender(delay = 3000) {
    /** render는 쓰기 가능한 객체이고 기본값으로 false를 가진다. */
    let render = writable(false);
    onMount(() => {
        setTimeout(() => {
            render.set(true);
            console.log(render); // set, update, subscribe
        }, delay);
    });
    return render;
}