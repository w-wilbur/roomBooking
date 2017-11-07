import Vue from 'vue'
import Router from 'vue-router'
import signIn from '@/pages/sign-in'
import booking from '@/pages/booking-view'
import account from '@/pages/account'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
  		{
	    	path: '/',
	    	name: 'signIn',
	    	component: signIn
    	},
    	{
	    	path: '/booking',
	    	name: 'booking',
	    	component: booking
    	},
    	{
	    	path: '/account',
	    	name: 'account',
	    	component: account
    	}
  	]
})
