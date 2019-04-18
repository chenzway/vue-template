/*
 *
 * File Created: 2019-04-15 15:43:08, Monday
 * Author: chenzway
 * Email:  599031437@qq.com
 * -----
 */

import { login } from '@/api/user';
import { setToken, cookie } from '@/utils/cache';
import router, { resetRouter } from '@/router';

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
  },

  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '');
      commit('SET_NAME', '');
      commit('SET_ROLES', []);
      cookie.remove('token');
      cookie.remove('name');
      resetRouter();
      resolve();
    });
  },

  setRoles({ commit, state }, roles) {
    commit('SET_ROLES', roles);
  }
};

// 默认导入为一个对象
export default {
  namespaced: true, // 使用命名空间
  state,
  mutations,
  actions
};
