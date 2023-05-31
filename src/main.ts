import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// eslint-disable-next-line unused-imports/no-unused-imports
import * as bootstrap from 'bootstrap'
import App from './App.vue'
import Home from './pages/index.vue'
import Hi from './pages/hi/index.vue'
import NotFound from './pages/notFound.vue'

import '~/scss/styles.scss'

const routes = [
  { path: '/', component: Home },
  { path: '/hi/:name', component: Hi },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.mount('#app')
