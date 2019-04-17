/*
 * File Created: 2019-04-17 11:39:44, Wednesday
 * Author: chenzway
 * Email:  599031437@qq.com
 *
 * cookie， localStorage, sessionStorage 操作方法
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
  remove(k) {
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
  remove(k) {
    window.localStorage.removeItem(Space + k);
  }
};
export { setToken, cookie, session, local };
