<template>
    <div>
        <h1>Add Todo</h1>
        <form v-on:submit="AddTodo">
            <input type="text" name="title" placeholder="What todo you need to add?" v-model="title">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "AddTodo",
    data(){
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        AddTodo(event){
            event.preventDefault();
            const newTodo = {
                title: this.title,
                completed: false
            }

            this.addTodo(newTodo);

            this.title = ''
        }
    }
}
</script>

<style scoped>
    form{
        display: flex;
    }
    input[type="text"]{
        flex: 10;
        padding: 10px;
        border: 1px solid #41b883;
        outline: 0;
    }
    input[type="submit"]{
        flex: 2;
        background: #41b883;
        color: #fff;
        border: 1px solid #41b883;
        cursor: pointer;
    }
</style>