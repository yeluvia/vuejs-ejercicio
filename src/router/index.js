import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

//Componentes
const Lenguajes = () => import('@/views/resources/Lenguajes')
const Programadores = () => import('@/views/resources/Programadores')
const Pl = () => import('@/views/resources/Pl')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'lenguajes',
          meta: {
            label: 'Lenguajes'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Lenguajes',
              component: Lenguajes
            },
          ]
        },
        {
          path: 'programadores',
          meta: {
            label: 'Programadores'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Programadores',
              component: Programadores
            },
          ]
        },
        {
          path: 'pl',
          meta: {
            label: 'Programadores de lenguajes'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Programadores de lenguajes',
              component: Pl
            },
          ]
        },
      ]
    },
  ]
}

