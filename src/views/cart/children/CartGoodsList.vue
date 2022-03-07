<template>
  <div class="cart-goods-list">
    <cart-goods-list-item
      :product="item"
      v-for="(item, i) in cartGoodsList"
      :key="i"
    ></cart-goods-list-item>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import CartGoodsListItem from './CartGoodsListItem'

const store = useStore()
const cartGoodsList = ref(store.getters.cartGoodsList)

</script>

<style scoped></style>
