<template>
  <div class="cart-bottom-bar">
    <div class="total-check">
      <img src="@/assets/img/cart/tick.svg" alt="" />
      <check-button
        :is-check="isSelectAll"
        @click="selectAllClick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计：￥{{ totalPrice }}</span>
    </div>
    <div class="calc" @click="onSubmit">去结算({{ calcCount }})</div>
  </div>
</template>

<script setup>
import CheckButton from '@/components/checkbutton/CheckButton.vue'
import { ElMessage, ElMessageBox } from 'element-plus'

import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const totalPrice = computed(() => {
  return store.state.cartGoods
    .filter((item) => {
      return item.isCheck === true
    })
    .reduce((prev, item) => {
      return prev + item.price * 1 * item.count
    }, 0)
    .toFixed(2)
})
const cal = ref(
  store.state.cartGoods.filter((item) => {
    return item.isCheck === true
  })
)
const calcCount = computed(() => {
  return cal.value.length
})

const isSelectAll = computed(() => {
  if (store.state.cartGoods.length === 0) {
    return false
  }
  return !store.state.cartGoods.filter((item) => !item.isCheck).length
})

const selectAllClick = () => {
  if (isSelectAll.value) {
    store.state.cartGoods.forEach((item) => (item.isCheck = false))
  } else {
    store.state.cartGoods.forEach((item) => (item.isCheck = true))
  }
}

// 按钮提交
// onSubmit() {
//   if (this.checkedLength === 0) {
//     this.$toast({
//       type: "fail",
//       message: `您还没有选中商品哦`,
//       forbidClick: true,
//       duration: 1500
//     });
//   } else {
//     this.$dialog
//       .confirm({
//         title: "温馨提示",
//         message: "您确定要提交订单吗?"
//       })
//       .then(() => {
//         this.$toast({
//           type: "success",
//           message: `提交 ${this.checkedLength} 条数据成功`,
//           forbidClick: true,
//           duration: 1500
//         });
//         // 提交数据清空对应购物车数据
//         setTimeout(() => {
//           this.clearCartList();
//           this.checkedAll = false;
//         }, 1500);
//       })
//       .catch(err => err);
//   }
// }

const onSubmit = () => {
  if (isSelectAll.value === false) {
    ElMessageBox.alert('您还没有选中任何商品', '提示', {
      confirmButtonText: '确定'
      // callback: (action) => {
      //   ElMessage({
      //     type: 'info',
      //     message: `action: ${action}`
      //   })
      // }
    })
  } else {
    console.log(123)
    ElMessageBox.alert('您确定要提交订单吗?', '提示', {
      confirmButtonText: '确定',
      callback: (action) => {
        ElMessage({
          type: 'info',
          message: '您的订单已提交'
        })
        window.location.reload()
      }
    })
  }
}
</script>

<style scoped>
.cart-bottom-bar {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 89px;
  background: #eeeeee;
  display: flex;
  line-height: 40px;
  text-align: center;
}
.total-check {
  width: 25%;
  display: flex;
  justify-content: center;
}
.total-price {
  width: 50%;
}
.calc {
  width: 25%;
  background-color: #ff5028;
  color: #fff;
}
</style>
