<template>
    <div class="ui-render-root">
        <layout>
            <template #left>
                <compnent-list></compnent-list>
            </template>
            <template #middle>
                <render-content :compList.sync="compList"></render-content>
            </template>
            <template #right>
                <component-config :compList="compList"></component-config>
            </template>
        </layout>
    </div>
</template>

<script>
    import Layout from "../../components/layout"
    import CompnentList from "./components/compnent-list"
    import RenderContent from "./components/render-content"
    import ComponentConfig from "./components/component-config/index"
    export default {
        name: "ui-render",
        components: {ComponentConfig, RenderContent, CompnentList, Layout},
        data(){
            return {
                compList: []
            }
        }
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
