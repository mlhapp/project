<template>
  <div>
    <ul>
      <router-link to="/recomment" tag="li">推荐</router-link>
      <router-link to="/overseas" tag="li">海外</router-link>
      <router-link to="/woman" tag="li">女士</router-link>
      <router-link to="/man" tag="li">男士</router-link>
      <router-link to="/makeup" tag="li">美妆</router-link>
      <router-link to="/household" tag="li">家居</router-link>
      <router-link to="/baby" tag="li">婴童</router-link>
      <router-link to="/comesoon" tag="li">即将上新</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
  },

  methods: {

  }
}
</script>
<style lang="scss" scoped>
div {
  overflow: scroll;
  width: 100%;
  height: 0.96rem;
  margin: 0 auto;
  padding-left: 0.2rem;
  box-sizing: border-box;
  font-size: 0.28rem;
  position: fixed;
  z-index: 2;
  margin-top: 0.96rem;
  color: #fff;
  ul {
    list-style: none;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    line-height: 0.96rem;
  }
  li {
    width: 1rem;
    display: inline-block;
  }
}
</style>
