<template>
  <div class="block">
    <el-carousel>
      <el-carousel-item v-for="item in banners" :key="item" trigger="click">
        <h3 class="small"><img :src="item.image" alt=""  class="image"/></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  banners: Array,
  default: () => []
})
</script>

<style  lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
  img {
    display: inline-block;
    width: 100%;
    height: 390px;
  }
}
</style>
