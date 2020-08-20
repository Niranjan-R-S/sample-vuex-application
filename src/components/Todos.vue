<template>
    <div>
        <div>
            <span>Double click to mark as complete</span>
            <span>
                <span class="incomplete-box"></span> = Incomplete
            </span>
            <span>
                <span class="complete-box"></span> = Complete
            </span>
        </div>
        <div class="todos">
            <div v-bind:key="todo.id" 
                v-for="todo in allTodos" 
                class="todo"
                v-bind:class="{'is-complete': todo.completed}"
                v-on:dblclick="updateTodo(todo)">
                {{todo.title}}
                <button v-on:click="deleteTodo(todo.id)" class="del">x</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Todos",
    computed: mapGetters(["allTodos"]),
    methods: {
        ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"])
    },
    created(){
        this.fetchTodos();
    }
}
</script>

<style scoped>
    .todos{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        padding: 10px;
    }
    .todo{
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
    .del{
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
    }
    .incomplete-box{
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #41b883;
    }
    .complete-box{
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #35495e;
    }
    .is-complete{
        background: #35495e;
        color: #fff;
    }
</style>