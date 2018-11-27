import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Help from '../components/Help'
import shoppingCart from '../components/shoppingCart'
import Male from '../components/male'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home', name: 'Home', component: Home},
    {path: '/help', name: 'Help', component: Help},
    {path: '/shoppingcart', name: 'shoppingCart', component: shoppingCart},
    {path: '/male', name: 'Male', component: Male}
  ]
})
