import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
            count:1,
            todos: [
                { id: 1, text: '...', done: true },
                { id: 2, text: '...', done: false }
            ]
    },
    mutations:{
        increment: state => state.count++,
        decrement: state => state.count--
    },
    getters: {
        doneTodo: state => {
            return state.count>3?20:10
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    }
})