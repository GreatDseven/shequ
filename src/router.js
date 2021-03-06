import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Topic from './components/Topic.vue'
import User from './components/User.vue'
import CreatTopic from './components/CreatTopic.vue'
import { PUBLICURL } from './constants'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: PUBLICURL + '/',
      component: Home
    },
    {
      path: PUBLICURL + '/topic/creat',
      component: CreatTopic
    },
    {
      path: PUBLICURL + '/topic/:id',
      component: Topic
    },
    {
      path: PUBLICURL + '/user/:loginname',
      component: User
    }
  ],
  mode: 'history'
})
