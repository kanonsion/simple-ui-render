<template>
    <div>
        <div v-for="(item, index) in compList" :key="index">
            <component :is="componentList[item.type]" :config="item"></component>
        </div>
    </div>
</template>

<script>
    import type from '@/views/ui-render/type'
    import table from "./components/table"

    export default {
        name: "component-config",
        data(){
            return {
                componentList: {
                    [type.table]: table
                }
            }
        },
        props: {
            compList: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>

</style>
