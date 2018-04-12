import Vue from 'vue'
import Router from 'vue-router'


import Tab from '@views/Tab/tab'   
import User from './user/index' 
import Login from '@/views/login/login' 

Vue.use(Router)
 

const router = new Router({
	routes: [ 
    {
			path: '/login',
      name: 'Login',
      component: Login,
		},
		{
      path: '/',
      name: 'tab',
      component: Tab, 
      redirect: '/Login',
      children: [
        ...User, 
      ],
      // meta:{
      //         requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的,暂时设置为false，否则不能进入home
      //     }
    }
  ]
})


export default router;