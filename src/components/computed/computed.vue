<template>
    <div>
        <input type="text" v-model="msg">
        <div>{{show}}</div>      
        <button @click='change'>click</button>  
    </div>
</template>

<script>
    export default {
        name: "computed",
        data(){
            return{
                msg:'test',
                name:'请输入',
                num:'100'        
            }
        },
        methods: {
            change(){
                this.$store.commit('increment')
                window.console.log(this.$store.state.count)
            }
        },
        computed:{
            show:{
                get(){
                    return this.$store.state.count
                },
                set(val){
                    this.num = val
                }
            },
            show1(){
                if(this.name){
                    return this.name
                }else{
                    return this.msg
                }
            }
        }
    }
</script>

<style scoped>

</style>