<template>
  <div>
    <router-view></router-view>
    <footer-guide></footer-guide>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from "@/components/FooterGuide/FooterGuide";
export default {
  components: {
    FooterGuide
  },
};
</script>

<style lang="stylus" scoped></style>
