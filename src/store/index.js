/*
 *
 * File Created: 2019-04-15 15:40:27, Monday
 * Author: chenzway
 * Email:  599031437@qq.com
 * -----
 * Last Modified: 2019-04-16 16:01:36, Tuesday
 * Modified By: chenzway
 * -----
 */

// 导入相关组件与 模块
import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import app from './modules/app';
import settings from './modules/settings';
import tagsView from './modules/tagsView';
import permission from './modules/permission';
import getters from './getters';

// 注册
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    app,
    settings,
    permission,
    tagsView
  },
  getters
});

export default store;
