<template>
    <child>
        <template v-slot:default="user">
            {{user.say}}
        </template>
        <template v-slot:footer>22</template>
    </child>
</template>

<script>
    import Child from './child'
    export default {
        name: "slots",
        components: {
            Child
        }
    }
</script>

<style scoped>

</style>