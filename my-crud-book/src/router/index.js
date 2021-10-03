import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Book from '@/components/Book'
import AboutMe from '@/components/AboutMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    }
  ]
})
