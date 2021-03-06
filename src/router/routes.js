// 所有路由配置的数组
import Msite from '@/pages/Msite/Msite.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Order from '@/pages/Order/Order.vue'
import Search from '@/pages/Search/Search.vue'
import Login from '@/pages/Login/Login.vue'


export default [
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/login',
    component: Login
  }
]