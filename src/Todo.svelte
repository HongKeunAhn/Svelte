<script>
    import { createEventDispatcher } from 'svelte';

    // export let todos;
    export let todo;
    // export let index;

    const dispatch = createEventDispatcher();

    function deleteTodo() {
        // todos.splice(index, 1);
        // todos = todos;
        // console.log(todos);

        // Class-4
        dispatch('deleteMe', {
            todoId: todo.id
        });
        // 자식 컴포넌트에서 부모 컴포넌트로 'deleteMe'라는 이벤트를 올려준다. -> 신기하군
        // todo.id를 인자로 넣는 이유는 어떤놈이 이벤트 요청을 했는지 구분하기 위해!!
        // 마치 react의 action 같다.

    }
</script>

<div>
    <input type="checkbox" bind:value={todo.done} />
    {todo.title}
    <button on:click={deleteTodo}>X</button>
</div>