<template>
    <div>
        <slot say="111" :user="user"></slot>

        <header>
            <slot name="header">默认</slot>
        </header>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "child",
        data(){
            return{
                user:{name:'hom'}
            }
        }
    }
</script>

<style scoped>

</style>