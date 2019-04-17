/*
 * File Created: 2019-04-17 15:53:13, Wednesday
 * Author: chenzway
 * Email:  599031437@qq.com
 *
 * 默认设置：配合 cookies 做持久缓存
 */

import variables from '@/styles/element-variables.scss';
import Cookies from 'js-cookie';
const getSidebarLogo = Cookies.get('sidebarLogo');
let sidebarLogo = '';
if (getSidebarLogo === 'false') {
  sidebarLogo = false;
} else {
  sidebarLogo = true;
}
console.log(typeof Boolean(getSidebarLogo));
console.log(Boolean(getSidebarLogo));

export default {
  theme: variables.theme,
  showSettings: Cookies.get('showSettings') || true,
  tagsView: Cookies.get('tagsView') || true,
  fixedHeader: Cookies.get('fixedHeader') || true,
  sidebarLogo: sidebarLogo
};
