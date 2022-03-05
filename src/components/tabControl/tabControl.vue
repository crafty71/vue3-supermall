<template>
  <div class="tab-control">
    <div
      :class="{ active: index === curIndex }"
      @click="tabControlClick(index)"
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="index"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits, defineExpose } from 'vue'

defineProps({
  titles: {
    type: Array,
    default: () => []
  }
})

const emitIndex = defineEmits(['tabClick'])
const curIndex = ref(0)
defineExpose(curIndex)
const tabControlClick = (index) => {
  console.log(index)
  if ((curIndex.value === index)) return
  curIndex.value = index
  emitIndex('tabClick', index)
}
</script>

<style scoped lang="less">
.tab-control {
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  text-align: center;
  .tab-control-item {
    flex: 1;
    span {
      font-size: 15px;
      padding: 5px;
    }
  }
}
.active {
  color: #ff5777;
}

.active {
  span {
    border-bottom: 2px solid #ff5777;
  }
}
</style>
