/*
 *
 * File Created: 2019-04-15 15:46:59, Monday
 * Author: chenzway
 * Email:  599031437@qq.com
 * -----
 * Last Modified: Thu Apr 18 2019
 * Modified By: PC-8676
 * -----
 */

//  getters 函数对象
const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes
};
export default getters
;
