<template>
    <div>
        <button @click="promiseTest">测试</button>
    </div>
</template>
<script>
    export default {
        methods: {
            promiseTest(){
                new Promise(function(resolve,reject){
                    let num = 0
                    if(num){
                        resolve('yes')
                    }else{
                        reject('no')
                    }
                })
                .then(function(da){
                    window.console.log(da)
                })
                .then(function(){
                    window.console.log('=======')
                })
                .catch(function(da){
                    window.console.log(da)
                })
            }
        },
    }
</script>