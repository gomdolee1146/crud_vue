import './assets/scss/global.scss';

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

import { createApp } from 'vue'
import App from './App.vue'

import { router } from './router/index.js'

const app = createApp(App)

app.use(VCalendar, {})
app.use(router) 
app.mount('#app')
