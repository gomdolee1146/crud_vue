import { createRouter, createWebHistory } from 'vue-router'

import ReadView from '../views/ReadView'
import CreateView from '../views/CreateView'
import DetailView from '../views/DetailView'

import CalendarView from '../views/CalendarView'

const routes = [
  { 
    path: '/',
    component: ReadView
  },
  { 
    path: '/create/:contentId?', 
    name: 'Create',
    component: CreateView 
  },
  { 
    path: '/detail/:contentId', 
    name: 'Detail',
    component: DetailView
  },
  { 
    path: '/calendar', 
    name: 'Calendar',
    component: CalendarView
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export {router}