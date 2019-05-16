<template>
  <div class="child">
    <h3>这里是子组件</h3>
    <slot name="second"></slot>
    <slot name="frist"></slot>
    <slot name="three" :data="data"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "child",
  data() {
    return {
      data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
    };
  }
};
</script>
