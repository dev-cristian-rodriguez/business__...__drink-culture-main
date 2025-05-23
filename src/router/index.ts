import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/account',
      name: 'account',
      component: () => import('@/views/account/index.vue'),
    },

    {
      path: '/',
      name: 'initial',
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
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: () => import('@/views/shoppingCart/index.vue'),
    },

    {
      path: '/purchases',
      name: 'purchases',
      component: () => import('@/views/purchases/index.vue'),
    },

    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('@/views/favorites/index.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/components/common/notFound/index.vue'),
    },
  ],
})

export default router
