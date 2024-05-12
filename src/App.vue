<script setup>
import zhTw from 'element-plus/dist/locale/zh-tw.mjs'
</script>

<template>
  <div>
    <!-- App.vue只需要留一個路由出口 -->
    <el-config-provider :locale="zhTw">
      <RouterView></RouterView>
    </el-config-provider>
  </div>
</template>

<style scoped></style>
@/stores/modules/user
