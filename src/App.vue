<template>
  <div id="app">
    <div id="nav">
      <router-link to="/recomment">推荐</router-link> |
      <router-link to="/overseas">海外</router-link>
      <router-link to="/woman">女士</router-link>
      <router-link to="/man">男士</router-link>
      <router-link to="/makeup">美妆</router-link>
      <router-link to="/household">家居</router-link>
      <router-link to="/baby">婴童</router-link>
      <router-link to="/comesoon">即将上新</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
