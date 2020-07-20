<template>
    <div class="son">
        <router-link to="/parent">父组件</router-link>
        <p>{{ sonMsg }}</p>
        <p>子组件接收到内容：{{ psMsg }}</p>
        <p>测试父传子内容:{{psTest}}</p>
        <!--<input type="text" v-model="user" @change="setUser">-->
        <button @click="setUser">传值</button>
    </div>
</template>
<script>
    export default {
        name: "son",
        data(){
            return {
                sonMsg:'子组件',
                user:'111111111111111111112'
            }
        },
        props:['psMsg','psTest'],
        methods:{
            setUser:function(){
                this.$emit('transfer',this.user)//将值绑定到transfer上传递过去
            }
        },
        created() {
            this.$on('transfer',(args) =>{
                // eslint-disable-next-line no-console
                console.log(`传递的参数 ${args}`)
            })
        }
    }
</script>