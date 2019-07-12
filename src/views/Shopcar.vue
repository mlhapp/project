<template>
  <div>
    <probar>
      <li class="probar">购物车</li>
    </probar>
    <div class=".a">
      <img src="../assets/shopcar.png" />
      <p>登录后可同步购物车内的商品~</p>
      <button @click="login">立即登录</button>
    </div>
  </div>
</template>
<script>
import probar from '@/components/Probar'
export default {
  beforeMount() {
    this.$store.commit("delfootTabbar", false);
  },
  beforeDestroy() {
    this.$store.commit("showfootTabbar", true);
  },
  methods: {
    login() {
      this.$router.push("/login");
    }
  },
  components: {
    probar
  }
};
</script>

<style lang="scss" scoped>
html{
    height:100%;

div {
    .probar {
    width: 5.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
 .a {
  height:100%;
  width:100%;
    img {
      display: block;
      margin: 3rem,auto
    }
    p {
      line-height: 1rem;
    }
    button {
      width: 2rem;
      height: 1.4rem;
      border: 0.04rem solid #999;
    }
  }
}
}
</style>

