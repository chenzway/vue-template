<template>
  <div class="test">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary" @click="handleTest">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      {{ name }}
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex';
export default {
  name: 'Test',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['token', 'name'])
  },
  methods: {
    handleTest() {
      this.$store.commit('user/SET_NAME', 'SET_NAME');
    }
  }

};
</script>

<style scoped lang="stylus">

</style>
