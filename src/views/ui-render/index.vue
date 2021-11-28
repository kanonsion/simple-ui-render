<template>
    <div class="ui-render-root">
        <layout>
            <template #left>
                <compnent-list></compnent-list>
            </template>
            <template #middle>
                <render-content></render-content>
            </template>
            <template #right>
                <component-config></component-config>
            </template>
        </layout>
    </div>
</template>

<script>
    import Layout from "../../components/layout"
    import CompnentList from "./components/compnent-list"
    import RenderContent from "./components/render-content"
    import ComponentConfig from "./components/component-config"
    export default {
        name: "ui-render",
        components: {ComponentConfig, RenderContent, CompnentList, Layout}
    }
</script>

<style scoped>
::v-deep .content .left{
  width: 300px;
  border-right: 1px solid #ebeef5;
}

::v-deep .content .right{
  width: 300px;
  border-left: 1px solid #ebeef5;
}
</style>
