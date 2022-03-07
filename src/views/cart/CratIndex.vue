<template>
  <Navbar class="cart-nav" />
  <cart-goods-list></cart-goods-list>
  <cart-bottom-bar></cart-bottom-bar>
</template>

<script setup>
import Navbar from './children/CartNavBar.vue'
import CartGoodsList from './children/CartGoodsList.vue'
import CartBottomBar from './children/CartBottomBar'
</script>

<style lang="less" scoped>
.cart-nav {
  font-weight: 700;
  font-size: 72px;
  color: white;
  background-color: #ff8198;
}
</style>
