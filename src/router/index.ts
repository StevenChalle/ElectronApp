
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home/Home.vue'
import NotFound from '@/views/NotFound/NotFound.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'DefaultLayout' }
}, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { layout: 'EmptyLayout' }
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
