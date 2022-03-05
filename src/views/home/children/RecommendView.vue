<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  recommends: {
    type: Object,
    default: () => {}
  }
})
</script>

<style scoped lang="less">
.recommend {
  display: flex;
  padding: 15px 0;
  border-bottom: 10px solid #eeeeee;

  .recommend-item {
    flex: 1;
    a {
      color: #000;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      text-decoration: none;
      img {
        width: 70px;
        height: 70px;
      }
      p {
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
}
</style>
