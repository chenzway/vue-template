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
    <h1>这里是父组件</h1>
    <child>
      <!-- 具名插槽 -->
      <p slot="frist">这里是父组件中的Child标签里的内容</p>
      <p slot="second">这里是第二个插槽</p>
      <!-- 绑定插槽数据 -->
      <template slot="three" slot-scope="abc">
        {{abc.data}}
      </template>
    </child>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from "vuex";
import Child from "./Child";
export default {
  name: "Test",
  data() {
    return {};
  },
  components: { Child },
  computed: {
    ...mapGetters(["token", "name"])
  },
  methods: {
    handleTest() {
      this.$store.commit("user/SET_NAME", "SET_NAME");
    }
  }
};
</script>

<style scoped lang="stylus"></style>
