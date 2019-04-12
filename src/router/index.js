/*
 *
 * File Created: 2019-04-12 18:56:29, Friday
 * Author: chenzway
 * Email:  599031437@qq.com
 * -----
 * Last Modified: 2019-04-12 18:58:08, Friday
 * Modified By: chenzway
 * -----
 */

// 引入与注册
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 创建常规路由
export const constantRoutes = [
  {
    path: '/test',
    component: () => import('@/views/test/Test')
  }
];

// 创建路由函数
const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
;

const router = createRouter();

export default router;
