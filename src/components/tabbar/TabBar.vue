<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    :router="true"
  >
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="/category">商品</el-menu-item>
    <el-menu-item index="/cart">购物车</el-menu-item>
    <el-menu-item index="/profile">我的</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="less">
.el-menu--horizontal {
  display: flex;
  justify-content: space-between;
}
</style>
