<template>
  <div class="home">
    <!-- 标题栏 -->
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- 轮播图 -->
    <my-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tabControl
      :titles="tabControlTitles"
      @tabClick="tabClick"
      class="home-tab-control"
    />
    <GoodsList :goods="goods[curType].list" @scroll="scroll" />
    <el-backtop :bottom="100">
    <div
      style="
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
        border-radius: 50%;
      "
    >
      UP
    </div>
  </el-backtop>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// component
import navBar from '@/components/navbar/NavBar.vue'
import MySwiper from '@/components/swiper/MySwiper.vue'
import RecommendView from './children/RecommendView.vue'
import FeatureView from './children/FeatureView.vue'
import tabControl from '@/components/tabControl/tabControl.vue'
import GoodsList from '@/components/goods/GoodsList.vue'

// api
import { getHomeMultiData, getHomeGoodsData } from './homeapi'

const banners = ref()
const recommends = ref()
async function getHomeMultiDataList () {
  const res = await getHomeMultiData()
  console.log(res.data.recommend.list)
  banners.value = res.data.banner.list
  recommends.value = res.data.recommend.list
}

onMounted(() => {
  getHomeMultiDataList()
  getHomeGoodsDataList(curType.value)
})

const tabControlTitles = ref(['流行', '新款', '精选'])

const curType = ref('pop')
const tabClick = (index) => {
  console.log(index)
  if (index === 0) {
    curType.value = 'pop'
  } else if (index === 1) {
    curType.value = 'new'
  } else if (index === 2) {
    curType.value = 'sell'
  }
  console.log(curType.value)
  getHomeGoodsDataList(curType.value)
}

const goods = ref({
  pop: { page: 0, list: [] },
  new: { page: 0, list: [] },
  sell: { page: 0, list: [] }
})
// 2、请求商品数据
async function getHomeGoodsDataList (type) {
  try {
    const page = goods.value[type].page + 1
    const res = await getHomeGoodsData(type, page)
    goods.value[type].list.push(...res.data.list)
    goods.value[type].page += 1
  } catch (error) {
    console.log(error)
  }
}

const scroll = (count) => {
  console.log(count)
  goods.value[curType.value].page = count
  getHomeGoodsDataList(curType.value)
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  position: relative;
  .home-nav {
    font-weight: 700;
    font-size: 72px;
    color: white;
    background-color: #ff8198;
  }
  .home-tab-control {
    position: relative;
    z-index: 3;
    background-color: white;
  }
}
</style>
