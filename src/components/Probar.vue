<template>
  <div>
    <ul class="bar">
      <li @click="back">
        <span class="iconfont">&#xe618;</span>
      </li>
      <slot class="li2"></slot>
      <li @click="menu">
        <span class="iconfont">&#xe509;</span>
      </li>
    </ul>
    <ul v-if = "isshow" class="menu">
      <li><a href="http://localhost:8080/"><span>首页</span></a></li>
      <li><a href=""><span>购物袋</span></a></li>
      <li><a href=""><span class="a">个人中心</span></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    menu () {
      if (this.isshow === false) {
        this.isshow = true
      } else {
        this.isshow = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.bar{
    list-style: none;
    display:flex;
    height:.88rem;
    line-height:.88rem;
    font-size:.32rem;
    font-weight: bold;
    width:100%;
    li{
        width:1.02rem;
        text-align: center;
        span{
          font-size:.4rem;
        }
    }
    .li2{
         text-align: center;
    }

}
.menu{
  position: absolute;
  list-style: none;
  right:0;
  width:2.3rem;
  text-align: center;
  z-index:99;
  li{
    height:1.15rem;
    background:hsla(0,0%,96%,.96);
    line-height: 1.15rem;
    width:100%;
    a{
      display: block;
      text-decoration: none;
      color: #000;
      height:100%;
      width:100%;
      span{
        display: block;
        height:1.13rem;
        width:1.7rem;
        border-bottom:.01rem solid #ccc;
        margin: 0 .3rem;
      }
      .a{
        border-bottom:0;
      }
    }
  }
}
</style>
