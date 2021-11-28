<template>
    <div class="ui-render-root">
        <layout>
            <template #top>
                <div>top</div>
            </template>
            <template #left>
                <div>left</div>
            </template>
            <template #middle>
                <div>middle</div>
            </template>
            <template #right>
                <div>right</div>
            </template>
        </layout>
    </div>
</template>

<script>
    import Layout from "../../components/layout"
    export default {
        name: "ui-render",
        components: {Layout}
    }
</script>

<style scoped>

</style>
