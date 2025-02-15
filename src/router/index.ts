import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },

    {
      path: '/',
      name: 'intial',
      component: () => import('@/views/initial/index.vue'),
    },

    {
      path: '/category/:id',
      name: 'category',
      component: () => import('@/views/category/index.vue'),
    },

    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/views/detail/index.vue'),
    },

    {
      path: '/address',
      name: 'address',
      component: () => import('@/views/address/index.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/components/common/notFound/notFound.vue'),
    },
  ],
})

export default router
