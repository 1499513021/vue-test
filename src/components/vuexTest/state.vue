<template>
    <div>
        <button @click="increment">+</button>
        <div>{{count}}</div>
        <button @click="decrement">-</button>
        <div>{{getCount}}</div>
        <div>====================</div>
        <button @click="getter">getter</button>
        <div>{{item}}</div>
    </div>
</template>

<script>
    export default {
        name: "state",
        data(){
            return{
                num:[3],
                item:[]
            }
        },
        methods:{
            increment(){
                this.$store.commit('increment',3)//第一个参数是mutations的方法 必选，第二个是传递的值 可选
            },
            decrement(){
                this.$store.commit('decrement')
            },
            getter(){
                this.item = this.$store.getters.getTodoById(2)
            }
        },
        computed:{
            count(){
                return this.$store.state.count
            },
            getCount(){
                return this.$store.getters.doneTodo
            }

        }
    }
</script>

<style scoped>

</style>