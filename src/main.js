/*
 *
 * File Created: 2019-04-11 16:07:19, Thursday
 * Author: chenzway
 * Email:  599031437@qq.com
 * -----
 * Last Modified: 2019-04-11 18:38:41, Thursday
 * Modified By: chenzway
 * -----
 */

import Vue from 'vue';
import 'normalize.css/normalize.css';

// 引入与设置 elementUI
import Element from 'element-ui';
import './styles/element-variables.scss';
import '@/styles/index.scss'; // global css
Vue.use(Element, { size: 'medium' });
/* Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
}); */

import App from './App.vue';

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
