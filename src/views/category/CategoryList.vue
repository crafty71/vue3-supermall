<template>
  <NavBar class="category-nav-bar">
    <template v-slot:center>
      <div>商品分类</div>
    </template>
  </NavBar>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <slide-bar
          :slide-bar-list="categoryList"
          @slideBarItemClick="slideBarItemClick"
        />
      </div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light">
        <subcategory :CategoryList="subcategoryList" />
        <TabControl
          :titles="titleList"
          @tabClick="tabClick"
          ref="TabRef"
        />
        <GoodsList :goods="categoryDetailList"/>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted, ref, getCurrentInstance, watch } from 'vue'

import NavBar from '@/components/navbar/NavBar.vue'
import SlideBar from './children/SlideBar'
import Subcategory from './children/Subcategory.vue'
import TabControl from '@/components/tabControl/tabControl.vue'
import GoodsList from './children/GoodsList.vue'

// eslint-disable-next-line no-unused-vars
import { getCategory, getCategoryDetail, getSubcategory } from './api/category'

const categoryList = ref()
const currentIndex = ref(0)
const subcategoryList = ref()
const titleList = ['流行', '新款', '精选']
const curType = ref('pop')
const categoryDetailList = ref()
// const TabRef = ref(null)

const tabClick = (index) => {
  console.log(index)
  if (index === 0) {
    curType.value = 'pop'
  } else if (index === 1) {
    curType.value = 'new'
  } else if (index === 2) {
    curType.value = 'sell'
  }
}
// eslint-disable-next-line no-unused-vars
const currentInstance = getCurrentInstance()

async function getCategoryData () {
  const res = await getCategory()
  categoryList.value = res.data.category.list
  console.log(res)
}
// watch(count, (newValue, oldValue) => { //直接监听
// console.log("count改变了");
// });
watch(curType, () => {
  getCategoryDetailData(
    categoryList.value[currentIndex.value].miniWallkey,
    curType.value
  )
})
const slideBarItemClick = ({ maitKey, index }) => {
  // 防止反复请求
  if (currentIndex.value === index) return
  currentIndex.value = index
  // 每次切换分类初始化tabControl的下标
  currentInstance.ctx.$refs.TabRef.value = 0
  // 请求对应的推荐列表
  console.log(categoryList.value[currentIndex.value].miniWallkey)
  getCategoryDetailData(
    categoryList.value[currentIndex.value].miniWallkey,
    curType.value
  )
  getSubcategoryData(maitKey)
}

async function getSubcategoryData (key) {
  const res = await getSubcategory(key)
  console.log(res)
  subcategoryList.value = [...res.data.list]
}

async function getCategoryDetailData (key, type) {
  const res = await getCategoryDetail(key, type)
  console.log(res)
  categoryDetailList.value = [...res]
}

onMounted(() => {
  getCategoryData()
  getSubcategoryData('3627')
  getCategoryDetailData('10062603', 'pop')
})
</script>

<style lang="less" scoped>
.category-nav-bar {
  font-weight: 600;
  color: white;
  background-color: #ff8198;
}
</style>
