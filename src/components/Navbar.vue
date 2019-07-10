<template>
  <div>
    <ul>
      <router-link to="/recomment" tag="li" activeClass="active">推荐</router-link>
      <router-link to="/overseas" tag="li" activeClass="active">海外</router-link>
      <router-link to="/woman" tag="li" activeClass="active">女士</router-link>
      <router-link to="/man" tag="li" activeClass="active">男士</router-link>
      <router-link to="/makeup" tag="li" activeClass="active">美妆</router-link>
      <router-link to="/household" tag="li" activeClass="active">家居</router-link>
      <router-link to="/baby" tag="li" activeClass="active">婴童</router-link>
      <router-link to="/comesoon" tag="li" activeClass="active">即将上新</router-link>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  }
  // mounted(){
  //   axios.get('http://www.mei.com/appapi/silo/navigationAll/v3?timestamp=1562660236304&summary=06a9d7dc7198b24dd427b30c801648be').then(res=>{
  //     this.datalist = res.data.lists
  //   })
  // },
  // methods:{
  //   page(id){
  //      this.$router.push('/silo/${id}')
  //   }
  // }
}
</script>
<style scoped>
div {
  overflow: scroll;
  width: 100%;
  height: 0.87rem;
  margin: 0 auto;
  padding-left: 0.1rem;
  box-sizing: border-box;
  font-size: 0.28rem;
  position: fixed;
  z-index: 2;
  margin-top: 0.86rem;
  color: white;
}
  ul {
    list-style: none;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    height: 0.87rem;
    line-height: 0.87rem;
  }
  li {
      width: 0.95rem;
      display: inline-block;
      text-align: center;
      height: 0.87rem;
      line-height: 0.7rem;
      position: relative;
      box-sizing: border-box;
  }
  li::after {
    width: 0.276333rem;
    height: 0.040333rem;
    transition: all 0.5s ease 0s;
    transform: scale(0);
    content: "";
    position: absolute;
    bottom: 0.26667rem;
    left: 50%;
    text-align: center;
    margin-left: -0.136667rem;
    opacity: 1;
    background-color: #fff;
  }

  li:nth-of-type(8) {
    width: 1.4rem;
  }

  .active::after {
      opacity: 1;
      transform: scale(1);
    }</style>
