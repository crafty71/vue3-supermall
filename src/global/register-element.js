import 'element-plus/dist/index.css'
import {
  ElButton,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElInput,
  ElIcon,
  ElTabs,
  ElTabPane,
  ElCarousel,
  ElCarouselItem,
  ElScrollbar,
  ElCol,
  ElRow
} from 'element-plus'

const components = [
  ElButton,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElInput,
  ElIcon,
  ElTabs,
  ElTabPane,
  ElCarousel,
  ElCarouselItem,
  ElScrollbar,
  ElCol,
  ElRow
]

export default function (app) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
