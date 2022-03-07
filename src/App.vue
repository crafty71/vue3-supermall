<template>
  <div class="shop-container">
    <router-view> </router-view>
  </div>
  <MainTabBar v-show="store.getters.tabBarShow" />
</template>

<script setup>
import MainTabBar from '@/components/maintabbar/MainTabBar.vue'
import { useStore } from 'vuex'

const store = useStore()
</script>

<style lang="less" scoped>
shop-container {
  width: 100%;
  overflow: hidden;
}
.nav-bar {
  position: sticky;
  top: 10px;
  z-index: 100;
}
</style>
