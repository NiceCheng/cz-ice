<template>
  <div class="userinfo"></div>
</template>
<script>
import { urlParse } from '~/utils/util'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      fetchUser: 'fetchUser',
    })
  },
  mounted: function () {
    let query = urlParse()
    console.log(query);
    console.log(this.$store.state.url);
    this.$store.dispatch('fetchUser', query.opneId,query.token);
    this.focusHouse(1);
  },
  methods: {
    focusHouse (item) {
      // 路由跳转到house，附带查询参数id
      this.$router.push({ path: '/about', query: { id: item._id } })
    },
    focusCharacters (item) {
      // 路由跳转到character，附带查询参数id
      this.$router.push({ path: '/character', query: { id: item._id } })
    }
  },
}
</script>

