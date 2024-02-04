// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

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
        path: 'news',
        name: 'News',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/NewsView.vue'),
        meta: {
          title: 'JPGO|好康報你知'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // 使用路由的meta字段来设置document.title
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  } else {
    // 如果没有设置title，可以给一个默认标题
    document.title = 'JPGO'
  }
  next()
})

export default router
