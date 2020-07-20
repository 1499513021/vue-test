<template>
    <div>
        <div>{{name}}</div>
        一级页面
        <router-link :to="'/two/'+id">二级页面</router-link>
    </div>
</template>

<script>
    export default {
        name: "one",
        data(){
            return{
                id:'1111',
                name:''
            }
        },
        created() {
            if(this.$route.query.name){
                this.name = this.$route.query.name
            }
        }
    }
</script>

<style scoped>

</style>