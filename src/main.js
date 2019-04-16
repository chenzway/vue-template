/*
 *
 * File Created: 2019-04-11 16:07:19, Thursday
 * Author: chenzway
 * Email:  599031437@qq.com
 * -----
 * Last Modified: 2019-04-16 15:49:32, Tuesday
 * Modified By: chenzway
 * -----
 */

import Vue from 'vue';
import 'normalize.css/normalize.css';

// 引入与设置 elementUI
import Element from 'element-ui';
import './styles/element-variables.scss';
import '@/styles/index.scss'; // global css

import 'normalize.css/normalize.css';

import App from './App.vue';
import store from './store';
import router from './router';

import i18n from './lang'; // 多语言
import './permission'; // 权限控制

Vue.use(Element, { size: 'medium', i18n: (key, value) => i18n.t(key, value) });
/* Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
}); */

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router,
  i18n
}).$mount('#app');
