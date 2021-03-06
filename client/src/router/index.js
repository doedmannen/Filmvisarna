import Vue from 'vue'
import Router from 'vue-router'
import AdminPage from '@/components/AdminPage'
import KontaktSida from '@/components/KontaktSida'
import BokningSida from '@/components/BokningSida'
import Kalendarium from '@/components/Kalendarium'
import MoviesPage from '@/components/MoviesPage'
import Startsida from '@/components/Startsida'
import Movie from '@/components/Movie'
import MinSida from '@/components/MinSida'
import Nothing from '@/components/nothing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/adminpage',
      name: 'AdminPage',
      component: AdminPage
    },
    {
      path: '/kontaktSida',
      name: 'KontaktSida',
      component: KontaktSida
    },
    {
      path: '/MinSida',
      name: 'MinSida',
      component: MinSida
    },
    {
      path: '/bokningSida',
      name: 'BokningSida',
      component: BokningSida
    },
    {
      path: '/filmSida',
      name: 'MoviesPage',
      component: MoviesPage
    },
    {
      path:'/',
      name: 'Startsida',
      component: Startsida
    },
    {
      path:'/kalendarium',
      name: 'Kalendarium',
      component: Kalendarium
    },
    {
      path: '/film',
      name: 'Movie',
      component: Movie
    },
    {
      path: '*',
      name: '404',
      component: Nothing
    }

  ]
})
