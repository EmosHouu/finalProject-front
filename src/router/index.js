// Composables
import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router'
import { useUserStore } from '@/store/user'
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/HomeView.vue'),
        meta: {
          title: 'JPGO'
        }
      },
      {
        path: 'register',
        name: 'Register',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/RegisterView.vue'),
        meta: {
          title: 'JPGO|註冊'
        }
      },
      {
        path: 'play',
        name: 'Play',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/PlayView.vue'),
        meta: {
          title: 'JPGO|揪團玩'
        }
      },
      {
        path: 'drive',
        name: 'Drive',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/DriveView.vue'),
        meta: {
          title: 'JPGO|揪團行'
        }
      },
      {
        path: 'buy',
        name: 'Buy',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/BuyView.vue'),
        meta: {
          title: 'JPGO|揪團買'
        }
      },
      {
        path: 'hotel',
        name: 'Hotel',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/HotelView.vue'),
        meta: {
          title: 'JPGO|揪團住'
        }
      },
      {
        path: 'actdetail/:id',
        name: 'ActDetail',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/ActDetail.vue'),
        meta: {
          title: 'JPGO|活動詳情'
        }
      },
      {
        path: 'news',
        name: 'News',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/NewsView.vue'),
        meta: {
          title: 'JPGO|好康報你知'
        }
      },
      {
        path: 'activity',
        name: 'Activity',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/ActivityView.vue'),
        meta: {
          title: 'JPGO|我要開團'
        }
      },
      {
        path: 'vip',
        name: 'VIP',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/VipView.vue'),
        meta: {
          title: 'JPGO|會員中心'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()

  if (from === START_LOCATION) {
    await user.getProfile()
  }

  if (user.isLogin && ['/register', '/login'].includes(to.path)) {
    // 如果有登入，要去註冊或登入頁，重新導向回首頁
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    // 如果要去的頁面要登入，但是沒登入，重新導向回登入頁
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    // 如果要去的頁面要管理員，但是不是管理員，重新導向回首頁
    next('/')
  } else {
    // 不重新導向
    next()
  }
})
// if (from === START_LOCATION) {
//   await user.getProfile()
// }

export default router
