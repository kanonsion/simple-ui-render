<template>
    <div class="compnent-list-root">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane
                v-for="item in config"
                :key="item.type"
                :label="item.label"
                :name="item.type">
                <div class="tab-item">
                    <p class="title">{{item.type}}</p>
                    <p class="des">{{item.label}}</p>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import config from './../config'
    import type from "../type"
    export default {
        name: "compnent-list",
        data(){
            return {
                activeName: type.table,
                config
            }
        },
        methods: {
            handleClick(val){
                this.$emit('update:type', val)
            }
        }
    }
</script>

<style scoped>
.compnent-list-root{
  padding: 10px;
}

::v-deep .el-tabs__content{
  width: 100%;
}

.tab-item{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  border: 1px dashed #DCDFE6;
  cursor: pointer;
}

.tab-item .title{
  color: #303133;
}

.tab-item .des{
  color: #909399;
  font-size: 14px;
}
</style>
