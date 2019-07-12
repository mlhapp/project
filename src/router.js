import Vue from 'vue'
import Router from 'vue-router'

import Recomment from '@/views/Recomment'
import Overseas from '@/views/Overseas'
import Woman from '@/views/Woman'
import Man from '@/views/Man'
import Makeup from '@/views/Makeup'
import Household from '@/views/Household'
import Baby from '@/views/Baby'
import Comesoon from '@/views/Comesoon'
import Productlist from '@/views/Productlist'
import Brand from '@/views/Brand'
import CaretPosition from '@/views/Brand/CaretPosition'
import List from '@/views/List'
import Listmore from '@/views/Listmore'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/recomment',
      component: Recomment
    },
    {
      path: '/productlist/:id',
      component: Productlist
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/listmore/:id/:id1/:more',
      component: Listmore,
      name:'ListM',
      props:true
    },
    {
      path: '/brand/:id',
      component: Brand,
      children:[
        {
          path: '/brand/:id/categories/:id',
          component:CaretPosition
        }
      ]
    },
    {
      path: '/overseas',
      component: Overseas
    },
    {
      path: '/woman',
      component: Woman
    },
    {
      path: '/man',
      component: Man
    },
    {
      path: '/makeup',
      component: Makeup
    },
    {
      path: '/household',
      component: Household
    },
    {
      path: '/baby',
      component: Baby
    },
    {
      path: '/comesoon',
      component: Comesoon
    },
    {
      path: '/',
      component: Recomment
    }
  ]
})
