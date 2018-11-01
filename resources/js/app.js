
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.moment = require('moment')
window.Vue = require('vue')

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy, {
    defaultIconPack: 'mdi',
    defaultContainerElement: 'body'
});

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './routes'

let router = new VueRouter({ routes });

import Vuex from 'vuex'

Vue.use(Vuex)

import store from './store';

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
    router,
    store,
    components: {
        'navigation': require('./components/layout/navigation')
    }
}).$mount('#app')
