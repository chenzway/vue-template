/*
 *
 * File Created: 2019-04-15 15:40:27, Monday
 * Author: chenzway
 * Email:  599031437@qq.com
 * -----
 * Last Modified: 2019-04-15 15:55:49, Monday
 * Modified By: chenzway
 * -----
 */

// 导入相关组件与 模块
import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import getters from './getters';

// 注册
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user
  },
  getters
});

export default store;
