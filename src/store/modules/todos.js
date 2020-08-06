import axios from 'axios'

const state = {
    todos: []
}

const getters = {
    allTodos: (state) => state.todos
}

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=100')

        commit('setTodos', response.data)
    },
    async addTodo({ commit }, todoItem) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', todoItem)

        commit('addTodo', response.data)
    },
    async deleteTodo({ commit }, id) {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        console.log(response)

        commit('deleteTodo', id)
    },
    async filterTodos({ commit }, event) {
        event.preventDefault();

        const value = parseInt(event.target.value)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${value}`)

        commit('setTodos', response.data)
    },
    async updateTodo({ commit }, todo) {
        todo.completed = !todo.completed;

        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);

        commit('updateTodo', response.data)
    }
}

const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    addTodo: (state, todo) => state.todos.unshift(todo),
    deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, todo) => { 
        const index = state.todos.findIndex(todoItem => todoItem.id === todo.id)

        if (index !== -1){
            state.todos.splice(index, 1, todo);
        }
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}