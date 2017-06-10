import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import HotelList from '@/components/HotelList'
import HotelDetail from '@/components/HotelDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hotel',
      name: 'Hello',
      component: HotelList
    }, {
      path: '/',
      name: 'Hotel',
      component: HotelList
    },
    {
      path:'/hotel/:id',
      name: 'HotelDetail',
      component: HotelDetail
    }
  ]
})
