<template>
    <div>
        <div>{{configList}}</div>
    </div>
</template>

<script>
    export default {
        name: "table",
        props: {
            config: {
                type: Object,
                default: () => ({})
            }
        },
        computed:{
            configList(){
                console.log(Object.keys(this.config.config))
                return this.config.config
            }
        }
    }
</script>

<style scoped>

</style>
