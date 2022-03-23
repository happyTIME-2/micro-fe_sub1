import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/vue3' : '/'),
  routes
})

export default router