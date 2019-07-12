<template>
    <div>
        <hotheadbar></hotheadbar>
        <hotnavbar></hotnavbar>
        <router-view></router-view>
    </div>
</template>
<script>
import hotheadbar from '@/views/hotcomlist/hotheadbar'
import hotnavbar from '@/views/hotcomlist/hotnavbar'
export default {
  components: {
    hotheadbar,
    hotnavbar
  },
  beforeMount () {
    this.$store.commit('delfootTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('showfootTabbar', true)
  }
}
</script>
<style lang="scss" scoped>
div{
    background: white;
}
</style>
