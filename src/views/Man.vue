<template>
  <div>
    <div class="banner" @click="banner(data.link_url.slice(-19))">
      <img :src="data.main_image" />
      <section>
        <h3>{{data.main_title}}</h3>
        <p>{{data.sub_title}}</p>
        <p>{{data.description}}</p>
      </section>
    </div>
    <section
      id="loadbox"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false"
    >
      <div v-for="da in datalist" :key="da.eventId" id="myload" @click ="detail(da.eventId)">
        <img :src="da.imageUrl" />
        <div class="info">
          <p>{{da.englishName}}</p>
          <p>{{da.chineseName}}</p>
          <p>{{da.discountText}}</p>
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
      data: null,
      datalist: [],
      loading: false,
      current: 1
    }
  },
  mounted () {
    axios({
      url:
        'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000002&platform_code=PLATEFORM_H5'
    }).then(res => {
      // console.log(res.data.banners[0])
      this.data = res.data.banners[0]
    })

    axios({
      url:
        'http://www.mei.com/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1562398420805&summary=4fcd617d7dba3b0b17937c60541bfaf7&platform_code=H5'
    }).then(item => {
      console.log(item.data.eventList)
      this.datalist = item.data.eventList
      this.totalPages = item.data.totalPages
    })
  },
  methods: {
    loadMore () {
      if (this.current === this.totalPages) {
        return
      }
      this.loading = true
      this.current++
      axios({
        url: `http://www.mei.com/appapi/silo/eventForH5?categoryId=men&pageIndex=${this.current}&timestamp=1562398420805&summary=4fcd617d7dba3b0b17937c60541bfaf7&platform_code=H5`
      }).then(item => {
        this.datalist = [...this.datalist, ...item.data.eventList]
        this.loading = false
      })
    },
    detail (id) {
      this.$router.push(`/productlist/${id}`)
    },
    banner (id) {
      this.$router.push(`/brand/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 9rem;
  position: relative;
  margin-bottom: 0.4rem;
  section {
    position: absolute;
    left: 0;
    width: 100%;
    height: 3rem;
    top: 6.3rem;
    color: black;
    h3 {
      width: 100%;
      text-align: center;
      font-size: 0.52rem;
      margin: 0 0 0.06rem;
      color: #fff;
    }
    p {
      width: 100%;
      text-align: center;
      font-size: 0.28rem;
      color: #fff;
    }
  }
  img {
    width: 100%;
  }
}
#loadbox {
  width: 100%;
  #myload {
    position: relative;
   margin:0 .3rem .2rem .3rem;
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
        text-indent: .1rem;
      }
      p:nth-of-type(1) {
        padding-top: 0.7rem;
        font-size: 0.32rem;
      }
    }
  }
}
</style>
