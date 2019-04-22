/*
 *
 * File Created: 2019-04-15 17:20:17, Monday
 * Author: chenzway
 * Email:  599031437@qq.com
 * -----
 * Last Modified: Mon Apr 22 2019
 * Modified By: PC-8676
 * -----
 */

import { $request } from '@/utils/request';
import sha1 from 'sha1';

function login(user_name, pw) {
  return $request('user/login', 'POST', {
    user_name,
    signature: sha1(pw),
    domain: 'Cors' + new Date().valueOf()
  });
}

function logout() {
  return $request('user/logout');
}

function auth_rules_page(num_per_page = 1000) {
  return $request('user/auth_rules_page', 'POST', { num_per_page });
}

export { login, logout, auth_rules_page };

