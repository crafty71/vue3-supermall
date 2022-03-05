<template>
  <div class="slide-bar">
    <template v-for="(item, index) in slideBarList" :key="index">
      <button
        :class="currentIndex === index ? 'active' : ''"
        @click="slideBarItemClick(item, index)"
        class="slide-bar-item"
      >
        {{ item.title }}
      </button>
    </template>
  </div>
</template>

<script setup>

import { ref, defineProps, defineEmits } from 'vue'

const currentIndex = ref(0)
const emit = defineEmits(['slideBarItemClick'])

defineProps({
  slideBarList: {
    type: Array,
    default: () => []
  }
})

const slideBarItemClick = (item, index) => {
  const obj = {
    maitKey: item.maitKey,
    index
  }
  currentIndex.value = index
  emit('slideBarItemClick', obj)
  console.log(obj)
}

</script>

<style scoped>
.slide-bar {
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.slide-bar-height {
  position: fixed;
  top: 44px;
  right: 0;
  bottom: 49px;
  left: 0;
  overflow: hidden;
  width: 275px;
  background-color: #f6f6f6;
}

.slide-bar-item {
  font-size: 40px;
  line-height: 275px;
  width: 200px;
  height: 275px;
  user-select: none;
  text-align: center;
  color: #666666;
  border: 0;
  outline: none;
  background: none;
}

.slide-bar-item.active {
  font-weight: 700;
  color: #ff5777;
  border-left: 3px solid #ff5777;
  background-color: #ffffff;
}
</style>
