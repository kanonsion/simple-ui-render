<template>
    <div id="app">
        <ui-render></ui-render>
    </div>
</template>

<script>
    import UiRender from "./views/ui-render"
    export default {
        components: {
            UiRender
        },
        data(){
            return {
            }
        }
    }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
