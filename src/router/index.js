import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login'
import Homr from '../components/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: Homr
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  if(to.path === '/login') return next();
  const tokenstr = window.sessionStorage.getItem('token');
  if(!tokenstr) return next('/login')
  next()
})

export default router
