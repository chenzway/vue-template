/*
 *
 * File Created: 2019-04-12 18:56:29, Friday
 * Author: chenzway
 * Email:  599031437@qq.com
 * -----
 * Last Modified: 2019-04-17 10:59:37, Wednesday
 * Modified By: chenzway
 * -----
 */

// 引入与注册
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Layout from '@/layout';

// 创建常规路由
export const constantRoutes = [
  {
    path: '/test',
    component: () => import('@/views/test/Test')
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login')
  },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/Home'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  }
];

export const asyncRoutes = [
  /** modules **/
  // nestedRouter,
  { path: '*', redirect: '/404', hidden: true }
];

// router 实例函数，传 `routes` 配置
const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

// 实例化路由
const router = createRouter();

export default router;
