import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>
    import ('../pages/home/Home')
const Category = () =>
    import ('../pages/category/Category')
const Cart = () =>
    import ('../pages/cart/Cart')
const Profile = () =>
    import ('../pages/profile/Profile')

Vue.use(Router)

export default new Router({
    routes: [{
        path: '',
        redirect: '/home'
    }, {
        path: '/Home',
        component: Home
    }, {
        path: '/category',
        component: Category
    }, {
        path: '/cart',
        component: Cart
    }, {
        path: '/profile',
        component: Profile
    }],
    mode: 'history'
})