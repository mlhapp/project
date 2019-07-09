<template>
<div>
    <headerbar ref="myhead" id="head">
      <ul>
      <li>登录</li>
      <li>
        <input type="text"  :value="search" ref="myinput"/>
      </li>
      <li><span class="iconfont">&#xe6e9;</span></li>
      </ul>
    </headerbar>
    <navbar ref="mynav"></navbar>
    <router-view></router-view>
    <footerbar></footerbar>
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
       search: ''
    }
  },
  components: {
    navbar,
    footerbar,
    headerbar
  },
   mounted(){
     axios.get('http://www.mei.com/appapi/search/searchDefault/v3').then(res => {
      this.search = res.data.words
    })
    console.log(this.$refs.myinput);
    window.onscroll = this.appscroll
  },
   methods: {
    appscroll () {
      if (document.documentElement.scrollTop > 0 ) {
         this.$refs.mynav.$el.style.background = "white"
         this.$refs.mynav.$el.style.color = "black"
         this.$refs.myhead.$el.style.background = "white" 
         this.$refs.myhead.$el.style.color = "black" 
         this.$refs.myinput.style.background = "#eee"
         this.$refs.myinput.style.color = "#999"
      }else{
        this.$refs.mynav.$el.style.background = null
        this.$refs.mynav.$el.style.color = ""
        this.$refs.myhead.$el.style.background = null
        this.$refs.myhead.$el.style.color = ""
        this.$refs.myinput.style.background = ''
        this.$refs.myinput.style.color = ""
      } 
    }
  },
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
div{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.32rem;
}
#head{
ul { 
  list-style: none;
  width: 100%;
  height: .96rem;  
  li {
    float: left;
    height:.96rem;
    font-size: 0.28rem;
    line-height: .96rem;
  }
  li:nth-of-type(1) {
    padding: 0 0.26rem 0 0.26rem;
    width: 1.1rem;
    box-sizing: border-box;
  }
  li:nth-of-type(2){
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
      width: 1.05rem;
      text-align: center;
      .iconfont{
        font-size: .5rem
      }
    }
}
}
</style>
