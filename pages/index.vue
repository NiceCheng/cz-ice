<template>
  <div id="app" class="app clearfix">
    <div class="main-wrapper">
      <pheader/>
      <psearch/>
      <indexpc/>
      <div class="footerpad"></div>
    </div>
    <div class="footer">
      {{visits}}
      <pfooter/>
    </div>
  </div>
</template>

<script>
import pheader from "../components/Pheader";
import psearch from "../components/search";
import pfooter from '../components/pfooter';
import indexpc from '../components/indexpc';

export default {
  name: 'app',
  middleware: 'wechat-auth',
  scrollToTop: true,
  components: {
    pheader,psearch,pfooter,indexpc
  },
  computed: {
    visits() {
      return this.$store.state.url
    }
  },
  async asyncData ({ app }) {
    
  }
}
</script>
<style lang="stylus">
.app
  min-height 100% 
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  overflow auto
  .main-wrapper
    min-height 100%
    padding-bottom 0
    .footerpad
      height 80px
      line-height 80px
  .footer
    position relative
    margin -80px auto 0 
    clear both 
</style>

