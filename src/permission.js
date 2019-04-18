/*
 * File Created: 2019-04-18 10:56:50, Thursday
 * Author: chenzway
 * Email:  599031437@qq.com
 */

import router from './router';
import store from './store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { cookie } from '@/utils/cache';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start();
  // determine whether the user has logged in
  const accessRoutes = await store.dispatch(
    'permission/generateRoutes',
    'admin'
  );
  router.addRoutes(accessRoutes);
  next();
  return false;
});

router.afterEach(() => {
  NProgress.done();
});
