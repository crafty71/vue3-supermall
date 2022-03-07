import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global/index.js'
import 'normalize.css'
import './assets/css/index.less'
import 'amfe-flexible'
import { ElInfiniteScroll } from 'element-plus/es'
import * as Icons from '@element-plus/icons-vue/dist'

const app = createApp(App)

// 注册Icons 全局组件
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key])
})

// 注册element-plus/其他
app.use(globalRegister)
app.use(store)
app.use(ElInfiniteScroll)
// path: /user => user
app.use(router)

app.mount('#app')
