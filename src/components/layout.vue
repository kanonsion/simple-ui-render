<template>
    <div class="layout-root">
        <slot class="top" name="top"></slot>
        <div class="content">
            <div class="left">
                <slot name="left"></slot>
            </div>
            <div class="middle">
                <slot name="middle"></slot>
            </div>
            <div class="right">
                <slot name="right"></slot>
            </div>
        </div>
        <slot class="bottom" name="bottom"></slot>
    </div>
</template>

<script>
    export default {
        name: "layout"
    }
</script>

<style scoped>
.layout-root{
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.top{
  height: 50px;
}

.content{
  flex: 1;
  display: flex;
}

.content .left{
  width: 50px;
}

.content .middle{
  flex: 1;
}

.content .right{
  width: 50px;
}

.bottom{
  height: 50px;
}
</style>
