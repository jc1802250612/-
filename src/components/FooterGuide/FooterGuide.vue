<template>
  <div class="footer-guide">
    <span class="guide-item "
          :class="{ on: $route.path === '/msite' }"
          @click="goto('/msite')">
      <span>
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide-item"
          :class="{ on: $route.path === '/search' }"
          @click="goto('/search')">
      <span>
        <i class="iconfont icon-search2"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide-item"
          :class="{ on: $route.path === '/order' }"
          @click="goto('/order')">
      <span>
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="guide-item"
          :class="{ on: $route.path === '/profile' }"
          @click="goto('/profile')">
      <span>
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    goto (path) {
      //方案一:点击当前项，没有任何效果
      if (path !== this.$route.path) { this.$router.replace(path); } else { window.location = path }
      //方案二:点击当前项进行刷新

    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins.styl';

.footer-guide {
  background-color: #ffffff;
  top-border-1px(#cccccc);
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;

  .guide-item {
    &.on {
      color: $green;
    }

    width: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;

    span {
      i {
        font-size: 22px;
      }

      margin-top: 3px;
      font-size: 12px;
    }
  }
}
</style>
