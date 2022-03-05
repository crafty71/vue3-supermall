<template>
  <!-- <router-view />
  <TabBar/> -->
  <div class="shop-container">
    <router-view >
    </router-view>
    <!-- 控制tabBar显示和隐藏 -->
    <div class="nav-bar"><TabBar/></div>
  </div>
</template>

<script setup>
import TabBar from '@/components/tabbar/TabBar.vue'
</script>

<style lang="less" scoped>

shop-container {
  height: 80%;
}
.nav-bar {
  position: sticky;
  bottom: 0px;
  z-index: 100;
}
</style>
