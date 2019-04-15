/*
 *
 * File Created: 2018-12-11 11:22:43, Tuesday
 * Author: chenzway
 * Email:  chenzway@163.com
 * -----
 * Last Modified: 2019-04-15 16:59:31, Monday
 * Modified By: chenzway
 * -----
 *  cookie， localStorage, sessionStorage 操作方法
 */
import Cookies from 'js-cookie';
const Space = 'base_';

// const expires = 1/2520
const expires = 1 / 12;
function setToken(token) {
  return Cookies.set(Space + 'token', token, { expires });
}

const cookie = {
  get(k) {
    return Cookies.get(Space + k);
  },
  set(k, v, expires = 365) {
    return Cookies.set(Space + k, v, { expires });
  },
  remove(k) {
    return Cookies.remove(Space + k);
  }
};

const session = {
  get(k) {
    return JSON.parse(window.sessionStorage.getItem(Space + k)) || null;
  },
  set(k, v) {
    window.sessionStorage.setItem(Space + k, JSON.stringify(v));
  },
  del(k) {
    window.sessionStorage.removeItem(Space + k);
  }
};

const local = {
  get(k) {
    return JSON.parse(window.localStorage.getItem(Space + k)) || null;
  },
  set(k, v) {
    window.localStorage.setItem(Space + k, JSON.stringify(v));
  },
  del(k) {
    window.localStorage.removeItem(Space + k);
  }
};
export { setToken, cookie, session, local };
