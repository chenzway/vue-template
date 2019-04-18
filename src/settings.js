/*
 * File Created: 2019-04-17 15:53:13, Wednesday
 * Author: chenzway
 * Email:  599031437@qq.com
 *
 * 默认设置：配合 cookie 做持久缓存
 */

import variables from '@/styles/element-variables.scss';
import { cookie } from '@/utils/cache';

function conversionType(v) {
  const val = cookie.get(v);
  let value = '';
  if (val === 'false') {
    value = false;
  } else {
    value = true;
  }
  return value;
}

const showSettings = conversionType('showSettings');
const tagsView = conversionType('tagsView');
const fixedHeader = conversionType('fixedHeader');
const sidebarLogo = conversionType('sidebarLogo');

export default {
  theme: cookie.get('theme') || variables.theme,
  showSettings,
  tagsView,
  fixedHeader,
  sidebarLogo
};
