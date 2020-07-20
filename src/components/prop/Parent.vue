<template>
    <div class="parent">
        <h2>{{ msg }}</h2>
        <p>父组件接手到的内容：{{ username }}</p>
        <son ps-test="test=================" psMsg="父传子的内容:叫爸爸" @transfer="getUser"></son>  <!--绑定自定义事件transfer-->
    </div>
</template>
<script>
    import son from './PropTransfer'
    export default {
        name: 'parent',
        data () {
            return {
                msg: '父组件',
                username:'',
            }
        },
        components:{son},
        methods:{
            getUser(msg){
                this.username= msg
            }
        }
    }
</script>