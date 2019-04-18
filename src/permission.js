import router from './router';
import store from './store';
import { Message } from 'element-ui';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { getToken } from '@/utils/auth'; // get token from cookie

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ['/login', '/auth-redirect']; // no redirect whitelist

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
