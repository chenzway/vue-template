<template>
  <div class="login-container">
    <h3>Vue-template</h3>
    <p>请输入帐号密码登录</p>
    <el-form ref="form" :model="loginForm">
      <el-form-item>
        <el-input v-model="loginForm.userName" placeholder="用户名" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.pw" type="password" placeholder="密码" auto-complete="new-password" />
      </el-form-item>
      <el-button type="primary" :loading="loading" class="btn-block" @click="login">登 录</el-button>
    </el-form>
    <span class="text">Vue-template © Chen</span>
  </div>
</template>

<script type="text/ecmascript-6">
import { local } from '@/utils/cache';
import { auth_rules_page } from '@/api/user';
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        userName: 'test001',
        pw: '123456'
      },
      loading: false
    };
  },
  methods: {
    async login() {
      this.loading = true;
      const res = await this.$store.dispatch('user/login', this.loginForm);
      if (res) {
        const result = await auth_rules_page();
        const auth = ['test'];
        result.recordList.forEach(v => {
          auth.push(v.functionurl);
        });
        local.set('auth', auth);
        this.$router.push({ path: '/' });
      }
      this.loading = false;
    }
  }
};
</script>

<style scoped lang="stylus">
.login-container
  position absolute
  left 0
  right 0
  width 360px
  padding 0 35px 35px 35px
  margin 40px auto 120px auto
  text-align center
  .btn-block
    width 100%
    margin-bottom 30px
  .text
    display inline-block
    margin-bottom 10px
</style>
