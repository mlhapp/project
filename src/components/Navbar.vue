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
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
div {
  overflow: scroll;
  width: 100%;
  height: 0.96rem;
  margin: 0 auto;
  // padding-left: 0.2rem;
  box-sizing: border-box;
  font-size: 0.28rem;
  position: fixed;
  z-index: 2;
  margin-top: 0.96rem;
  color: white;
  ul {
    list-style: none;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    height: 0.86rem;
    line-height: 0.86rem;
  }
  li {
    width: .95rem;
    display: inline-block;
    height: 0.86rem;
    text-align: center;
  }
  li:nth-of-type(8) {
    width: 1.5rem;
  }
}
</style>


