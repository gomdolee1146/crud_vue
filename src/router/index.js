// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// Vue.use(VueRouter)

import ReadComponent from '../components/ReadComponent'
import CreateComponent from '../components/CreateComponent'
import DetailComponent from '../components/DetailComponent'

import TDashboard from '../components/template/TDashboard'
import TCalendar from '../components/template/TCalendar'
import TMessage from '../components/template/TMessage'

import TMypage from '../components/template/TMypage'
import TLogout from '../components/template/TLogout'

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
    component: TCalendar
  },
  { 
    path: '/dashboard', 
    name: 'Dashboard',
    component: TDashboard
  },
  { 
    path: '/message', 
    name: 'Message',
    component: TMessage
  },
  { 
    path: '/mypage', 
    name: 'Mypage',
    component: TMypage
  },
  { 
    path: '/logout', 
    name: 'Logout',
    component: TLogout
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export {router}