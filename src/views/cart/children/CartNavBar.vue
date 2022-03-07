<template>
  <div class="nav-bar">
    <nav-bar>
      <!-- <div slot="navBarCenter">购物车({{ cartLength }})</div> -->
      <template v-slot:center>
        <div>购物车({{ cartLength }})</div>
      </template>
    </nav-bar>
  </div>
</template>

<script setup>
import NavBar from '@/components/navbar/NavBar.vue'
import { ref } from 'vue'

import { useStore } from 'vuex'
const store = useStore()
const cartLength = ref(store.getters.cartLength)
</script>

<style scoped></style>
