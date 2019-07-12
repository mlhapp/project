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
import Search from '@/views/Search'
import Login from '@/views/Login'
import Shopcar from '@/views/Shopcar'


import Productlist from '@/views/Productlist'
import Brand from '@/views/Brand'
import CaretPosition from '@/views/Brand/CaretPosition'
import List from '@/views/List'
import Listmore from '@/views/Listmore'

import Luxury from '@/views/Luxury'
import newcomlist from '@/views/newcomlist'
import hotcomlist from '@/views/hotcomlist'
import newall from '@/views/newcomlist/newall'
import newwoman from '@/views/newcomlist/newwoman'
import newman from '@/views/newcomlist/newman'
import newbag from '@/views/newcomlist/newbag'
import newshoe from '@/views/newcomlist/newshoe'
import newshipin from '@/views/newcomlist/newshipin'
import newyintong from '@/views/newcomlist/newyintong'
import newneiyi from '@/views/newcomlist/newneiyi'
import hotall from '@/views/hotcomlist/hotall'
import hotman from '@/views/hotcomlist/hotman'
import hotwoman from '@/views/hotcomlist/hotwoman'
import hotshoe from '@/views/hotcomlist/hotshoe'
import hotbag from '@/views/hotcomlist/hotbag'
import hotshenghuo from '@/views/hotcomlist/hotshenghuo'
import hotmeizhuang from '@/views/hotcomlist/hotmeizhuang'
import hotneiyi from '@/views/hotcomlist/hotneiyi'
import hotshipin from '@/views/hotcomlist/hotshipin'
import Productdetail from '@/views/Productdetail'


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
      path: '/listmore/:id/:id1/:more/:more1',
      component: Listmore,
      name: 'ListM',
      props: true
    },
    {
      path: '/brand/:id',
      component: Brand,
      children: [
        {
          path: '/brand/:id/categories/:id',
          component: CaretPosition
        }
      ]
    },
    {
      path: '/newcomlist',
      component: newcomlist,
      children: [
        {
          path: '/newcomlist/newall',
          component: newall
        },
        {
          path: '/newcomlist/newwoman',
          component: newwoman
        },
        {
          path: '/newcomlist/newman',
          component: newman
        },
        {
          path: '/newcomlist/newbag',
          component: newbag
        },
        {
          path: '/newcomlist/newshoe',
          component: newshoe
        },
        {
          path: '/newcomlist/newshipin',
          component: newshipin
        },
        {
          path: '/newcomlist/newyintong',
          component: newyintong
        },
        {
          path: '/newcomlist/newneiyi',
          component: newneiyi
        }
      ]
    },
    {
      path: '/hotcomlist',
      component: hotcomlist,
      children: [
        {
          path: '/hotcomlist/hotall',
          component: hotall
        },
        {
          path: '/hotcomlist/hotwoman',
          component: hotwoman
        },
        {
          path: '/hotcomlist/hotman',
          component: hotman
        },
        {
          path: '/hotcomlist/hotbag',
          component: hotbag
        },
        {
          path: '/hotcomlist/hotshoe',
          component: hotshoe
        },
        {
          path: '/hotcomlist/hotshipin',
          component: hotshipin
        },
        {
          path: '/hotcomlist/hotshenghuo',
          component: hotshenghuo
        },
        {
          path: '/hotcomlist/hotneiyi',
          component: hotneiyi
        },
        {
          path: '/hotcomlist/hotmeizhuang',
          component: hotmeizhuang
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
      path: '/luxury',
      component: Luxury
    },
    {
      path: '/productdetail/:id',
      component: Productdetail
    },
    {
      path:'/search',
      component: Search
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shopcar',
      component: Shopcar
    },
    {
      path: '/',
      component: Recomment
    }

  ]
})
