<template>
  <div>
    <headerbar ref="myhead" id="head" v-show="$store.state.isFootbarShow">
      <ul>
        <li>登录</li>
        <li class="search">
          <a ref="myinput">
            <strong>
              <span ref="myglass" class="iconfont icon-fangdajing"></span>
              <input  type="text" :value="search"  ref="myword"/>
            </strong>
          </a>
        </li>
        <li>
          <span class="iconfont">&#xe6e9;</span>
        </li>
      </ul>
    </headerbar>
    <navbar ref="mynav" v-show="$store.state.isFootbarShow"></navbar>
    <router-view></router-view>
    <footerbar v-show="$store.state.isFootbarShow"></footerbar>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import footerbar from '@/components/Footerbar'
import headerbar from '@/components/Headerbar'
import axios from 'axios'
export default {
  data () {
    return {
      search: '',
      showbar: true
    }
  },
  components: {
    navbar,
    footerbar,
    headerbar
  },
  mounted () {
    axios.get('http://www.mei.com/appapi/search/searchDefault/v3').then(res => {
      this.search = res.data.words
    })
    // console.log(this.$refs.myinput)
    window.onscroll = this.appscroll
  },
  methods: {
    appscroll () {
      if (document.documentElement.scrollTop > 0) {
        this.$refs.mynav.$el.style.background = 'white'
        this.$refs.mynav.$el.style.color = 'black'
        this.$refs.myhead.$el.style.background = 'white'
        this.$refs.myhead.$el.style.color = 'black'
        this.$refs.myinput.style.background = '#eee'
        this.$refs.myglass.style.color = '#000'
        this.$refs.myword.style.color = '#000'
      } else {
        this.$refs.mynav.$el.style.background = null
        this.$refs.mynav.$el.style.color = ''
        this.$refs.myhead.$el.style.background = null
        this.$refs.myhead.$el.style.color = ''
        this.$refs.myinput.style.background = ''
        this.$refs.myglass.style.color = ''
        this.$refs.myword.style.color = ''
      }
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
div {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.32rem;
}
// ul {
//   list-style: none;
// }
// p{
//   font-size:.12rem;
// }
// a{
//   text-decoration: none;
// }
#head {
  ul {
    list-style: none;
    width: 100%;
    height: 0.86rem;
    li {
      float: left;
      height: 0.86rem;
      font-size: 0.28rem;
      line-height: 0.96rem;
    }
    li:nth-of-type(1) {
      padding: 0 0.26rem 0 0.26rem;
      width: 1.1rem;
      box-sizing: border-box;
    }
    .search {
      float: left;
      text-align: center;
      height: .68rem;
      line-height: .68rem;
      position: relative;
      a {
        display: inline-block;
        width: 5.34rem;
        height: 0.68rem;
        overflow: hidden;
        margin-top: 0.186667rem;
        color: hsla(0, 0%, 100%, 0.6);
        background-color: hsla(0, 0%, 100%, 0.3);
        strong {
          max-width: 7.2rem;
          overflow: hidden;
          display: inline-block;
          vertical-align: top;
          line-height: 0.606667rem;
          font-weight: 400;
          font-size: 0.373333rem;
          .iconfont {
            padding-right: 0.166667rem;
            font-size: 0.386667rem;
            color: #fff;
          }
          input {
            max-width: 7.2rem;
            height: 0.68rem;
            overflow: hidden;
            color: hsla(0, 0%, 100%, 0.6);
            background-color: hsla(0, 0%, 100%, 0);
            text-decoration: none;
            border: 0;
            font-size: 0.28rem;
          }
        }
      }
    }

    li:nth-of-type(3) {
      width: 1.05rem;
      text-align: center;
      .iconfont {
        font-size: 0.5rem;
      }
    }
  }
}
</style>
