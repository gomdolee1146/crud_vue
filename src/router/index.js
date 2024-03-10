// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// Vue.use(VueRouter)

import ReadComponent from '../components/ReadComponent'
import CreateComponent from '../components/CreateComponent'
import DetailComponent from '../components/DetailComponent'
import TestComponent from '../components/TestComponent'

const routes = [
  { 
    path: '/', 
    component: ReadComponent
  },
  { 
    path: '/create/:contentId?', 
    name: 'Create',
    component: CreateComponent
  },
  { 
    path: '/detail/:contentId', 
    name: 'Detail',
    component: DetailComponent
  },
  { 
    path: '/calendar', 
    name: 'Calendar',
    component: TestComponent
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export {router}