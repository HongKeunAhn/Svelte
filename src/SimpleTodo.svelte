<script>
    import Todo from './Todo.svelte';

    let title = '';
    let todos = [];
    let id = 0;

    function createTodo() {
        todos.push({
            // 속성 이름과 변수 이름이 같은 경우 생략 가능 
            id,
            title,
        });

        // 스벨트는 할당을 통해서 반응성을 유지해야 해서 자기 자신에게 자신을 선언하는 경우가 더러 있다.
        todos = todos;
        title = '';
        id += 1;
    }
</script>

<input type="text" 
    bind:value={title}
    on:keydown={(e) => {e.key === 'Enter' && createTodo()}} />
<button on:click={createTodo}>Create Todo</button>

{#each todos as todo }
    <Todo {todo} />
{/each}
