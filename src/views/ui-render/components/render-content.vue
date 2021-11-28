<template>
    <div class="render-content-root">
        <div class="toolbar"></div>
        <div class="main-content">
            <div class="content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "render-content"
    }
</script>

<style scoped>
.render-content-root{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.toolbar{
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #ebeef5;
}

.main-content{
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.content{
  width: 800px;
  height: 600px;
  overflow: auto;
  border: 1px dashed #DCDFE6;
}
</style>
