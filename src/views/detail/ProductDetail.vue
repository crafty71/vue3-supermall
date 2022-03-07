<template>
  <Loading v-if="loading" />
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
      <DetailBottomBar @addCrat="addCrat" />
    </div>
  </div>
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
import DetailBottomBar from './children/DetailBottomBar.vue'
import { ElMessage } from 'element-plus'

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
import { useStore } from 'vuex'
// import { SET_TABBAR_SHOW } from '@/store/types'

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
const store = useStore()
async function getProductDetailData (id) {
  const res = await getProductDetail(id.value)
  const data = res.result
  // 获取轮播图数据
  topImages.value = data.itemInfo.topImages

  // 获取商品数据,调用封装的ES6的class
  goods.value = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
  // 获取店铺数据
  shops.value = new Shop(data.shopInfo)

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
  recommendList.value = res.data.list
}

const itemclick = (id) => {
  const iid = ref(id)
  getProductDetailData(iid)
}

const addCrat = () => {
  // 获取购物车需要展示的信息，对象的形式
  const product = {}
  product.image = topImages.value[0]
  product.title = goods.value.title
  product.desc = goods.value.desc
  product.price = goods.value.nowPrice
  product.iid = id.value
  product.newPrice = goods.value.nowPrice
  // 将商品添加购物车里 vuex
  store.dispatch('addCart', product).then(() => {
    ElMessage({
      type: 'success',
      message: '商品已加入购物车'
    })
  })
}
onMounted(() => {
  getProductDetailData(id)
  getRecommendData()
  loading.value = false
  document.body.scrollTop = 0
  store.commit('setTabBarShow', {
    bol: false
  })
})
</script>

<style lang="less" scoped>
.deatileList {
  padding: 0 20px;
}
</style>
