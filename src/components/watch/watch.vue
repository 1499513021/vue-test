<template>
    <div>
        <input type="text" v-model="msg">
        <div>{{test}}</div>
    </div>
</template>

<script>
    export default {
        name: "watch",
        data(){
            return{
                msg:'aa',
                test:''
            }
        },
        watch:{
            msg(newval,oldval){
                if(newval === oldval){
                    this.test = ''
                }else{
                    this.test = newval
                }

            }
        }
    }
</script>

<style scoped>

</style>