/*
 *
 * File Created: 2019-04-15 15:46:59, Monday
 * Author: chenzway
 * Email:  599031437@qq.com
 * -----
 * Last Modified: 2019-04-15 15:50:02, Monday
 * Modified By: chenzway
 * -----
 */

//  getters 函数对象
const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles
};

export default getters;
