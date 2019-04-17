/*
 * File Created: 2019-04-17 11:09:52, Wednesday
 * Author: chenzway
 * Email:  599031437@qq.com
 */

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';

// 引入 element 与项目的 多语言包
import elementEnLocale from 'element-ui/lib/locale/lang/en';
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN';
import elementEsLocale from 'element-ui/lib/locale/lang/es';
import enLocale from './en';
import zhLocale from './zh';
import esLocale from './es';

Vue.use(VueI18n); // 全局注入

// 解构赋值语言包
const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  es: {
    ...esLocale,
    ...elementEsLocale
  }
};

// 实例化并导出
// https://kazupon.github.io/vue-i18n/zh/api/#%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E9%80%89%E9%A1%B9
const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: Cookies.get('language') || 'zh',
  // set locale messages
  messages
});

export default i18n;
