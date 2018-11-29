import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Help from '../components/Help'
import shoppingCart from '../components/shoppingCart'
import Male from '../components/male'
import Account from '../components/help/account'
import Order from '../components/help/order'
import Size from '../components/help/size'
import Payment from '../components/help/payment'
import Return from '../components/help/return'
import Exchange from '../components/help/exchange'
import Delivery from '../components/help/delivery'
import Contact from '../components/help/contact'
import Details from '../components/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home', name: 'Home', component: Home},
    {path: '/home/account', name: 'Account', component: Account},
    {path: '/home/order', name: 'Order', component: Order},
    {path: '/home/size', name: 'Size', component: Size},
    {path: '/home/payment', name: 'Payment', component: Payment},
    {path: '/home/return', name: 'Return', component: Return},
    {path: '/home/exchange', name: 'Exchange', component: Exchange},
    {path: '/home/delivery', name: 'Delivery', component: Delivery},
    {path: '/home/contact', name: 'Contact', component: Contact},
    {path: '/help', name: 'Help', component: Help},
    {path: '/shoppingcart', name: 'shoppingCart', component: shoppingCart},
    {path: '/male', name: 'Male', component: Male},
    {path: '/details', name: 'Details', component: Details}
  ],
  //跳转后回到页面顶端
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0}
    }
  }
})
