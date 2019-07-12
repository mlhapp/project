<template>
  <div>
    <swiper :key="bannerlist.length" class="swiper">
      <li v-for="data in bannerlist" :key="data.id" class="swiper-slide"  @click="banner(data.link_url.slice(-19))">
        <img :src="data.main_image" />
        <div class="swiperchil">
          <h3>{{data.main_title}}</h3>
          <p>{{data.sub_title}}</p>
          <p>{{data.description}}</p>
        </div>
      </li>
    </swiper>
    <div>
      <a href>
        <img :src="imgsrc" alt class="img1" />
      </a>
    </div>
    <section
      id="loadbox"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false"
    >
      <div v-for="da in datalist" :key="da.eventId" id="myload" @click="detail(da.eventId)">
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
import swiper from '@/components/Swiper'
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      current: 1,
      bannerlist: [],
      imgsrc: ''
    }
  },
  mounted () {
    axios({
      url:
        'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000004&platform_code=PLATEFORM_H5'
    }).then(res => {
      this.bannerlist = res.data.banners
      console.log(this.bannerlist)
    })
    axios(
      'http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000004&ids=2121000100000000291&timestamp=1562632079435&summary=b1aaa8b059a2fbdcf71f72719ec6c039&platform_code=H5'
    ).then(res => {
      this.imgsrc = res.data.resultList[0].data[0].imageUrl
    })
    axios({
      url:
        'http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1562399132063&summary=947fcd93bba0f031c9ad568d2385a5c7&platform_code=H5'
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
        url: `http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=${this.current}&timestamp=1562399132063&summary=947fcd93bba0f031c9ad568d2385a5c7&platform_code=H5`
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
  },
  components: {
    swiper
  }
}
</script>
<style lang="scss" scoped>
.swiper {
  height: 9rem;
  list-style: none;
  position: relative;
    .swiperchil {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2rem;
      top: 6.3rem;
      color: black;
      h3 {
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 0.52rem;
        margin: 0 0 0.06rem;
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
      display: block;
    }
  }
.img1 {
  width: 100%;
  display: block;
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
      // padding: 0.1rem;
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
        padding-top: 0.6rem;
        font-size: 0.32rem;
      }
    }
  }
}
</style>
