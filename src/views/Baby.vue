<template>
  <div>
    <swiper :key="dalist.length" class="swiper">
      <li v-for="data in dalist" :key="data.id" class="swiper-slide">
        <img :src="data.main_image" />
        <div class="swiperchil">
          <h3>{{data.main_title}}1111</h3>
          <p>{{data.sub_title}}</p>
          <p>{{data.description}}</p>
        </div>
      </li>
    </swiper>
    <newbar class="new">
      <li v-for="data in newlist" :key="data.categoryTwoId">
        <img :src="data.categoryImgStr" />
      </li>
    </newbar>
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
import Vue from 'vue'
import axios from 'axios'
import Swiper from 'swiper'
import swiper from '@/components/Swiper'
import newbar from '@/components/Newbar'
export default {
  components: {
    swiper,
    newbar
  },
  data () {
    return {
      datalist: [],
      loading: false,
      current: 1,
      dalist: [],
      newlist: []
    }
  },
  mounted () {
    axios
      .get(
        'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000005&platform_code=PLATEFORM_H5'
      )
      .then(res => {
        this.dalist = res.data.banners
      })

    axios({
      url:
        'http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000005&ids=2120000100000000146&timestamp=1562635089344&summary=53192309ead51d24554b8d3aee49306a&platform_code=H5'
    }).then(res => {
      console.log(res.data.resultList[0].data)
      this.newlist = res.data.resultList[0].data
    })

    axios({
      url:
        'http://www.mei.com/appapi/silo/eventForH5?categoryId=kids&pageIndex=1&timestamp=1562631582388&summary=564f8a23e31304eba758f05dda3a5878&platform_code=H5'
    }).then(item => {
      console.log(item.data.eventList)
      this.datalist = item.data.eventList
      this.totalPages = item.data.totalPages
    })
  },
  methods: {
    loadMore () {
      this.loading = true
      this.current++
      if (this.current === this.totalPages) {
        return
      }
      axios({
        url: `http://www.mei.com/appapi/silo/eventForH5?categoryId=kids&pageIndex=${this.current}&timestamp=1562631582388&summary=564f8a23e31304eba758f05dda3a5878&platform_code=H5`
      }).then(item => {
        this.datalist = [...this.datalist, ...item.data.eventList]
        this.loading = false
      })
    },
    detail (id) {
      this.$router.push(`/productlist/${id}`)
    }
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
.new {
  display: flex;
  justify-content:center;
  padding-bottom:.5rem;
  padding-top:.1rem;
  margin-left:-.08rem;
  li {
    width:1.236rem;
    list-style: none;
    margin-left:.18rem;
    img {
      width:1.236rem;
      display: block;

    }
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
        padding-top: 0.7rem;
         font-size: 0.32rem;
      }
    }
  }
}
</style>
