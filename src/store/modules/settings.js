import defaultSettings from '@/settings';
const { showSettings, tagsView, fixedHeader, sidebarLogo, theme } = defaultSettings;

import { cookie } from '@/utils/cache';

const state = {
  theme,
  showSettings,
  tagsView,
  fixedHeader,
  sidebarLogo
};

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  }
};

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data);
    // HACK: 使用 cookie 存储 settings
    cookie.set(data.key, data.value);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

