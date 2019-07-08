<template>
  <div>
    <ul>
      <li>登录</li>
      <li>
        <input ref="inp" type="text" :value="search" />
      </li>
      <li>icon</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      search: ''
    }
  },
  mounted () {
    axios.get('http://www.mei.com/appapi/search/searchDefault/v3').then(res => {
      this.search = res.data.words
      //  window.onscroll = this.scoll;
    })
  },
  methods: {
    // scoll() {
    //     if (
    //       document.documentElement.scrollTop > 0
    //     ) {
    //       this.$refs.inp.style.background = "rgba(255,0,0,0);";
    //       this.$refs.inp.style.color = "black";
    //     } else {
    //       this.$refs.inp.style.background = "hsla(0, 0%, 100%, 0.3)";
    //       this.$refs.inp.style.color = 'hsla(0, 0%, 100%, 0.6)';
    //     }
    //   }
  }
}
</script>

<style lang="scss" scoped>
div {
  width:100%;
  height:.96rem;
  position: fixed;
  z-index: 2;
  color: #fff;
  ul {
    list-style: none;
    width: 100%;
    height: 0.96rem;
    top: 0;
    left: 0;
    li {
      float: left;
      height: 0.96rem;
      font-size: 0.28rem;
      line-height: 0.96rem;
    }
    li:nth-of-type(1) {
      padding: 0 0.26rem 0 0.26rem;
      width: 1.1rem;
      box-sizing: border-box;
    }
    li:nth-of-type(2) {
      input {
        width: 5.34rem;
        height: 0.68rem;
        overflow: hidden;
        color: hsla(0, 0%, 100%, 0.6);
        background-color: hsla(0, 0%, 100%, 0.3);
        text-decoration: none;
        border: 0;
        font-size: 0.28rem;
        text-align: center;
      }
    }
    li:nth-of-type(3) {
      width: 0.98rem;
      text-align: center;
    }
  }
}
</style>
