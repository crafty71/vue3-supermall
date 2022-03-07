<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <!-- <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/home_active.svg"
        alt=""
        slot="item-active-icon"
      /> -->
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/home.svg" alt="" />
      </template>
      <template v-slot:item-active-icon>
        <img src="@/assets/img/tabbar/home_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/category.svg" alt="" />
      </template>
      <template v-slot:item-active-icon>
        <img src="@/assets/img/tabbar/category_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/shopcart.svg" alt="" />
      </template>
      <template v-slot:item-active-icon>
        <img src="@/assets/img/tabbar/shopcart_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/profile.svg" alt="" />
      </template>
      <template v-slot:item-active-icon>
        <img src="@/assets/img/tabbar/profile_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar.vue'
import TabBarItem from '@/components/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped></style>
