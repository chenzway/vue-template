/*
 *
 * File Created: 2019-04-15 15:43:08, Monday
 * Author: chenzway
 * Email:  599031437@qq.com
 * -----
 * Last Modified: 2019-04-16 16:02:03, Tuesday
 * Modified By: chenzway
 * -----
 */

import { login } from '@/api/user';
import { setToken, cookie } from '@/utils/cache';

const state = {
  token: 'token',
  name: 'test',
  roles: []
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

const actions = {
  login({ commit }, userInfo) {
    const userName = userInfo.userName.trim();
    return new Promise((resolve, reject) => {
      login(userName, userInfo.pw)
        .then(r => {
          commit('SET_TOKEN', r.token);
          commit('SET_NAME', userName);
          setToken(r.token);
          cookie.set('name', userName);
          resolve(r);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

// 默认导入为一个对象
export default {
  namespaced: true, // 使用命名空间
  state,
  mutations,
  actions
};
