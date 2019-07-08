<template>
  <div>
    <!-- <div class="banner" v-for="data in bannerlist" :key="data.id">
                <img :src="data.main_image"/>
                <section>
                    <h3>{{data.main_title}}1111</h3>
                    <p>{{data.sub_title}}</p>
                    <p>{{data.description}}</p>
                </section>
    </div>-->
    <mt-swipe :auto="3000">
      <div class="banner" v-for="data in bannerlist" :key="data.id">
        <mt-swipe-item>
          <img :src="data.main_image" />
          <section>
            <h3>{{data.main_title}}1111</h3>
            <p>{{data.sub_title}}</p>
            <p>{{data.description}}</p>
          </section>
        </mt-swipe-item>
        <mt-swipe-item class="banner" v-for="data in bannerlist" :key="data.id">
          <img :src="data.main_image" />
          <section>
            <h3>{{data.main_title}}1111</h3>
            <p>{{data.sub_title}}</p>
            <p>{{data.description}}</p>
          </section>
        </mt-swipe-item>
      </div>
    </mt-swipe>
    <section
      id="loadbox"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false"
    >
      <div v-for="da in datalist" :key="da.eventId" id="myload">
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
      datalist: [],
      loading: false,
      current: 1,
      bannerlist: []
    }
  },
  mounted () {
    axios({
      url:
        'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000004&platform_code=PLATEFORM_H5'
    }).then(res => {
      this.bannerlist.push(res.data.banners[0])
      this.bannerlist.push(res.data.banners[1])

      // console.log(this.bannerlist);
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
      this.loading = true
      this.current++
      if (this.current === this.totalPages) {
        return
      }
      axios({
        url: `http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=${this.current}&timestamp=1562399132063&summary=947fcd93bba0f031c9ad568d2385a5c7&platform_code=H5`
      }).then(item => {
        this.datalist = [...this.datalist, ...item.data.eventList]
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 9.2rem;
  position: relative;
  margin-bottom: 0.4rem;
  section {
    position: absolute;
    left: 0;
    width: 100%;
    height: 3rem;
    top: 6rem;
    color: black;
    h3 {
      width: 100%;
      text-align: center;
    }
    p {
      width: 100%;
      text-align: center;
    }
  }
  img {
    width: 100%;
    height: 100%;
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
        font-size: 0.32rem;
      }
      p:nth-of-type(1) {
        padding-top: 0.6rem;
      }
    }
  }
}
</style>
