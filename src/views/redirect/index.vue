<script>
// 重定向组件
// 使用 Vue 生命周期函数获取路由中的 url 与 params 根据 vue-router 重定向
export default {
  beforeCreate() {
    const { params, query } = this.$route;
    const { path } = params;
    // 与 router.push() 使用方式差不多，替换掉当前的 history 记录
    this.$router.replace({ path: '/' + path, query });
  },
  render: function(h) {
    return h(); // avoid warning message
  }
};
</script>
