/*
 * File Created: 2019-04-18 10:56:50, Thursday
 * Author: chenzway
 * Email:  599031437@qq.com
 */

import router from './router';
import store from './store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { cookie, local } from '@/utils/cache';

NProgress.configure({ showSpinner: false });

router.beforeEach(async(to, from, next) => {
  NProgress.start();
  const hasToken = cookie.get('token');
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        next();
      } else {
        const roles = local.get('auth') || ['test'];
        store.dispatch('user/setRoles', roles);
        const accessRoutes = await store.dispatch('permission/generateRoutes', roles);

        router.addRoutes(accessRoutes);
        next({ ...to, replace: true });
        NProgress.done();
      }
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next('/login');
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
