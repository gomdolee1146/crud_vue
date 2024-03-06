// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// Vue.use(VueRouter)

import ReadComponent from '../components/ReadComponent'
import CreateComponent from '../components/CreateComponent'

const routes = [
 { path: '/read', component:ReadComponent},
 { path: '/create', component:CreateComponent},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export {router}