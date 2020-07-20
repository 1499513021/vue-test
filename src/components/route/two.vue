<template>
    <div>
        <div>{{name}}</div>
        二级页面
        <router-link :to="{path:'/one',query: {name: id}}">一级页面</router-link>
        <router-link :to="'/one?name='+id">一级页面</router-link>
    </div>
</template>

<script>
    export default {
        name: "two",
        data(){
            return{
                id:'222',
                name: ''
            }
        },
        created() {
            if(this.$route.params.id){
                this.name = this.$route.params.id
            }
        }
    }
</script>

<style scoped>

</style>