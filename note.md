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
// 加载 elementUI 样式
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



