<template>
  <div>
    <headerbar ref="myheader"></headerbar>
    <navbar ref="mycolor"></navbar>
    <router-view></router-view>
    <footerbar></footerbar>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import footerbar from '@/components/Footerbar'
import headerbar from '@/components/Headerbar'
export default {
  data () {
    return {}
  },
  components: {
    navbar,
    footerbar,
    headerbar
  },
  mounted () {
    window.onscroll = this.handlescoll
  },
  methods: {
    handlescoll () {
      console.log(this.$refs.myheader.$el)
      if (
        document.documentElement.scrollTop > 0
      ) {
        this.$refs.myheader.$el.style.background = 'white'
        this.$refs.mycolor.$el.style.background = 'white'
        this.$refs.myheader.$el.style.color = 'black'
        this.$refs.mycolor.$el.style.color = 'black'
      } else {
        this.$refs.myheader.$el.style.background = null
        this.$refs.myheader.$el.style.color = 'white'
        this.$refs.mycolor.$el.style.background = null
        this.$refs.mycolor.$el.style.color = 'white'
      }
    }
  }
  // beforeDestroy() {
  //   window.onscroll = null;
  // }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  div {
    height: 100%;
    font-size: 0.32rem;
  }
}
</style>
