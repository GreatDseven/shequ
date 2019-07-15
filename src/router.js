import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Topic from './components/Topic.vue'
import User from './components/User.vue'
import CreatTopic from './components/CreatTopic.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/topic/creat',
      component: CreatTopic
    },
    {
      path: '/topic/:id',
      component: Topic
    },
    {
      path: '/user/:loginname',
      component: User
    }
  ],
  mode: 'history'
})
