<template>
  <el-row :gutter="20" v-infinite-scroll="load" class="goodlist">
    <el-col
      :span="12"
      v-for="(item, index) in goods"
      :key="index"
      class="infinite-list-item"
      ><div class="goodlist-item" @click="goodItemClick(item)">
        <img :src="item.show.img || item.image" alt="" />
        <div class="goods-info">
          <p>{{ item.title }}</p>
          <span class="price">¥{{ item.price }}</span>
          <span class="collect">{{ item.cfav }}</span>
        </div>
      </div></el-col
    >
  </el-row>
</template>

<script setup>
import { defineProps, ref, defineExpose, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

const count = ref(1)
const emit = defineEmits(['scroll'])
const load = () => {
  count.value += 1
  emit('scroll', count.value)
}
defineExpose({ count })

defineProps({
  goods: Array
})
const router = useRouter()
const goodItemClick = (item) => {
  router.push(`/detail/${item.iid}`)
}
</script>

<style lang="less" scoped>
.goodlist {
  padding: 0 20px;
  .goodlist-item {
    padding: 20px 0;
    img {
      display: blick;
      width: 100%;
      height: 896px;
    }
    .goods-info {
      font-size: 14px;
      overflow: hidden;
      margin-top: 4px;
      text-align: center;
      p {
        overflow: hidden;
        margin-bottom: 5px;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .price {
        margin-right: 30px;
        color: #ff5777;
      }
      .collect {
        position: relative;
      }
      .collect::before {
        position: absolute;
        top: 0px;
        left: -16px;
        width: 14px;
        height: 14px;
        content: '';
        background: url('@/assets/img/common/collect.svg') 0 0/14px 14px;
      }
    }
  }
}

.goods-list-item img.item-height {
  height: 250px;
}

.goods-list-item img.item-height2 {
  height: 180px;
}
</style>
