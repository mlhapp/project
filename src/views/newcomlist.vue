<template>
    <section>
    <newheadbar></newheadbar>
    <newnavbar></newnavbar>
    <router-view></router-view>
    </section>
</template>
<script>
import newheadbar from '@/views/newcomlist/newheadbar'
import newnavbar from '@/views/newcomlist/newnavbar'
export default {
  components: {
    newheadbar,
    newnavbar
  },
  beforeMount () {
    // bus.$emit('maizuo',false)
    this.$store.commit('delfootTabbar', false)
  },

  beforeDestroy () {
    this.$store.commit('showfootTabbar', true)
  }
}
</script>
<style lang="scss" scoped>
section{
    background: white;
}
</style>
