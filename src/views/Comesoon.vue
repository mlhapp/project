<template>
  <div>
    <div class="nullbox"></div>
    <div class="title">
      <h4>
        距离开场还剩
        <span>10</span>小时
      </h4>
      <p>{{data.tips}}</p>
    </div>
    <section id="loadbox">
      <div v-for="da in datalist" :key="da.categoryId" id="myload" @click="detail(da.categoryId)">
        <img :src="da.imageTmallUrl" />
        <div class="info">
          <p>{{da.englishName}}</p>
          <p>{{da.chineseName}}</p>
          <p>{{da.discount}}</p>
          <span>开售提醒</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      data: []
    }
  },
  mounted () {
    axios({
      url:
        'http://www.mei.com/appapi/upcoming/index/v3?platform_code=H5&timestamp=1562637782913&summary=f7a42d4f0a62fa42ad12ae198f8a2d4d'
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.lists[0].events
      this.data = res.data
    })
    if ((document.documentElement.scrollTop = 0)) {
      document.documentElement.scrollTop = 1
    }
  },
  methods: {
    detail (id) {
      this.$router.push(`/productlist/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.nullbox {
  width: 100%;
  height: 1.92rem;
  background: #aaa;
}
.title {
  padding: 0 0.2rem;
  h4 {
    font-weight: 200;
    font-size: 0.4rem;
    span {
      color: red;
    }
  }
  p {
    line-height: 0.4rem;
    font-size: 0.24rem;
  }
}
#loadbox {
  width: 100%;
  #myload {
    position: relative;
    margin: 0 0.3rem 0.2rem 0.3rem;
    img {
      width: 100%;
      display: block;
    }
    .info {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2rem;
      width: 100%;
      z-index: 1;
      background: linear-gradient(
        to top,
        rgba(125, 125, 125, 0.5) 0%,
        rgba(226, 226, 226, 0) 100%
      );
      p {
        color: white;
        font-size: 0.28rem;
        text-align: left;
        line-height: 0.4rem;
        font-size: 0.28rem;
        text-indent: 0.1rem;
      }
      p:nth-of-type(1) {
        padding-top: 0.7rem;
        font-size: 0.32rem;
      }
      span{
          background:white;
          font-size: .24rem;
          display: inline-block;
          height:.36rem;
          width: 1.2rem;
          text-align: center;
          position: absolute;
          bottom:.2rem;
          right:.3rem;
      }
    }
  }
}
</style>
