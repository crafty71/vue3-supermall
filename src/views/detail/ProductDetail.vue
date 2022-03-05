<template>
  <Loading v-if="loading"/>
  <div v-else>
    <ProductDetailNavBar />
    <DetailSwiper :banners="topImages" />
    <div class="deatileList">
      <DetailBaseInfo :goods="goods" />
      <detail-shop-info :shop="shops" />
      <detail-images-info :images-info="detailsInfo" />
      <detail-param-info :param-info="paramsInfo" class="detail-set-scroll" />
      <detail-comment-info
        :comment-info="commentInfo"
        class="detail-set-scroll"
      />
      <goods-list
        :goods="recommendList"
        class="detail-set-scroll"
        @itemclick="itemclick"
      />
    </div>
  </div>
</template>

<script setup>
import ProductDetailNavBar from './children/ProductDetailNavBar.vue'
import DetailSwiper from './children/DetailSwiper.vue'
import DetailBaseInfo from './children/DetailBaseInfo.vue'
import DetailShopInfo from './children/DetailShopInfo.vue'
import DetailImagesInfo from './children/DetailImagesInfo'
import DetailParamInfo from './children/DetailParamInfo'
import DetailCommentInfo from './children/DetailCommentInfo'
import GoodsList from './children/GoodsList.vue'
import Loading from '@/components/Loading/index.vue'

// api
import {
  getProductDetail,
  getRecommend,
  Goods,
  GoodsParams,
  Shop
} from './api/api'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

// 请求详情数据
const id = ref()
const route = useRoute()
id.value = route.params.id
const topImages = ref()
const goods = ref()
const shops = ref()
const detailsInfo = ref()
const paramsInfo = ref()
const commentInfo = ref()
const loading = ref(true)
async function getProductDetailData (id) {
  const res = await getProductDetail(id.value)
  const data = res.result
  console.log(data)
  // 获取轮播图数据
  topImages.value = data.itemInfo.topImages

  // 获取商品数据,调用封装的ES6的class
  goods.value = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

  // 获取店铺数据
  shops.value = new Shop(data.shopInfo)
  console.log(new Shop(data.shopInfo))

  // 获取下面的图片展示数据
  detailsInfo.value = data.detailInfo

  // 获取尺寸数据
  paramsInfo.value = new GoodsParams(
    data.itemParams.info,
    data.itemParams.rule || {}
  )

  // 获取评论数据
  if (data.rate.cRate !== 0) {
    commentInfo.value = data.rate.list[0] || {}
  }
}

// 获取详情列表
const recommendList = ref()
async function getRecommendData () {
  const res = await getRecommend()
  console.log(res.data.list)
  recommendList.value = res.data.list
}

const itemclick = (id) => {
  console.log(id)
  const iid = ref(id)
  getProductDetailData(iid)
}
onMounted(() => {
  getProductDetailData(id)
  getRecommendData()
  loading.value = false
})
</script>

<style lang="less" scoped>
.deatileList {
  padding: 0 20px;
}
</style>
