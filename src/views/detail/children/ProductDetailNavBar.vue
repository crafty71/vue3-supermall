<template>
  <div class="product-detail-nav-bar">
    <nav-bar>
      <template v-slot:left>
        <div @click="backHomePage" class="back-img">
          <img alt="" src="@/assets/img/common/back.svg" />
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <span
            :class="{ active: index === currentIndex }"
            :key="index"
            @click="titleItemClick(index)"
            class="title-item"
            v-for="(item, index) in titles"
          >
            {{ item }}
          </span>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script setup>
import NavBar from '@/components/navbar/NavBar.vue'
import { ref, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

const titles = ref(['商品', '参数', '评论', '推荐'])
const currentIndex = ref(0)
const emit = defineEmits(['titleItemClick'])
const titleItemClick = (index) => {
  currentIndex.value = index
  emit('titleItemClick', index)
}
const router = useRouter()
const backHomePage = () => {
  router.go(-1)
}
</script>

<style scoped lang="less">
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  .title-item {
    font-size: 14px;
    flex: 1;
  }
  .active {
    color: #ff5777;
  }
}

.back-img {
  text-align: center;
  img {
    width: 22px;
    margin-top: 11px;
  }
}
</style>
