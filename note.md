初始化 Vue 项目

```javascript
// 安装
vue craete vue-template
// 运行
npm run server
```

引入 element 等

```javascript
main.js
// 统一样式
import 'normalize.css/normalize.css';
// 引入
import Element from 'element-ui';
// 引入样式
import 'element-ui/lib/theme-chalk/index.css';
// 注册
Vue.use(Element, { size: 'medium' });

// 项目中的样式是在 element-variables.scss 中引入的
// css 加载 elementUI 样式
@import "~element-ui/packages/theme-chalk/src/index";

```

vue.config.js

```javascript
cnpm i @babel/register -D
cnpm i svg-sprite-loader script-ext-html-webpack-plugin -D
 // 配置 elementUI,
  elementUI: {
    name: 'chunk-elementUI',
    priority: 20,
    test: /[\\/]node_modules[\\/]element-ui[\\/]/
  },
```

Vue-router

1. 安装 `cnpm i vue-router -S`
2. main.js

```javascript
// 引入
import router from './router';

// 挂载
new Vue({
  render: h => h(App),
  // 注入路由
  router
}).$mount('#app');
```

3. router.js

```javascript
//  引入与注册
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// router 实例函数，传 `routes` 配置
const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

// 实例化路由
const router = createRouter();
```

Vuex

1. 安装`cnpm i vuex -S`
2. main.js

```javascript
import store from './store';
在 new Vue 中注入属性 store
```

3. store

```javascript
index.js
// 导入相关组件与 模块
import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import getters from './getters';

// 注册
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user
  },
  getters
});

export default store;



getter.js
const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
};

export default getters;



user.js
const state = {
  token: 'token',
  name: 'test',
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
};

const actions = {
  login({ commit }, val = 'hello') {
    commit('SET_TOKEN', val);
    commit('SET_NAME', val);
  }
};

// 默认导入为一个对象
export default {
  namespaced: true, // 使用命名空间
  state,
  mutations,
  actions
};



// 使用：
// 派发修改状态：
this.$store.dispatch('user/login').then(res => {
  console.log(res);
})

// 直接修改(没有异步的情况下)：
this.$store.commit('user/SET_NAME', 'SET_NAME');

// 获取 getters
import { mapGetters } from 'vuex';
// computed 属性中：
...mapGetters(['token','name']),
```
