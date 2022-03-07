<template>
  <div class="tabBarItem" @click="tabBarItemClick(link)">
    <div v-if="!route.path.indexOf(link) !== -1">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-active-icon"></slot>
    </div>
    <div
      :style="route.path.indexOf(link) !== -1 ? { color: this.textColor } : {}"
    >
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'

defineProps({
  link: String,
  textColor: {
    type: String,
    default: '#ff8198'
  }
})
const route = useRoute()
const router = useRouter()
const tabBarItemClick = (link) => router.replace(link)
</script>

<style scoped>
.active {
  color: red;
}
.tabBarItem {
  flex: 1;
  font-size: 14px;
  margin-top: 2px;
}

.tabBarItem img {
  height: 26px;
  width: 26px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
