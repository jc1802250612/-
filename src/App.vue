<template>
  <div>
    <router-view></router-view>
    <footer-guide v-if="$route.meta.isShowFooter"></footer-guide>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from "@/components/FooterGuide/FooterGuide";


export default {
  async mounted () {
    this.$store.dispatch('getAddress')
  },
  components: {
    FooterGuide
  },
};
</script>

<style lang="stylus" scoped></style>
