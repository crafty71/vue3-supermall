<template>
  <div class="category-detail">
    <el-row  v-for="(item, index) in CategoryList" :key="index">
      <el-col :span="8">
        <div
          class="category-detail-item"
        >
          <a :href="item.link"><img :src="item.image" alt="" /></a>
          <p>{{ item.title }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  CategoryList: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped lang="less">
.category-detail {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  .category-detail-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 450px;
    height: 300px;
    margin-bottom: 10px;
    img {
      width: 184px;
      margin-bottom: 7px;
    }
    p {
      font-size: 36px;
    }
  }
}
</style>
