<template>
    <div>
        <div>
            <h3>Filter Todos :
                <select v-on:change="filterTodos">
                    <option value="100">100</option>
                    <option value="50">50</option>
                    <option value="20">20</option>
                    <option value="10">10</option>
                </select>
            </h3>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "FilterTodos",
    methods: {
        ...mapActions(["filterTodos"])
    }
}
</script>