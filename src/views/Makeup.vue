<template>
    <div>
        <div class="banner">
                <img :src="data[0].main_image"/>
                <section>
                    <h3>{{data[0].main_title}}</h3>
                    <p>{{data[0].sub_title}}</p>
                    <p>{{data[0].description}}</p>
                </section>
        </div>
        <section id="loadbox"
        v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="0"
             infinite-scroll-immediate-check="false" >
            <div v-for="da in datalist" :key="da.eventId" id="myload">
                <img :src="da.imageUrl"/>
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
      data: [],
      datalist: [],
      loading: false,
      current: 1
    }
  },
  mounted () {
    axios({
      url: 'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000003&platform_code=PLATEFORM_H5'
    }).then(res => {
      console.log(res.data.banners[0])
      this.data.push(res.data.banners[0])
    })

    axios({
      url: 'http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=1&timestamp=1562398651366&summary=fb275853678d0e0f5fc1447aaeaf4a7c&platform_code=H5'
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
        url: `http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=${this.current}&timestamp=1562398651366&summary=fb275853678d0e0f5fc1447aaeaf4a7c&platform_code=H5`
      }).then(item => {
        this.datalist = [...this.datalist, ...item.data.eventList]
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.banner{
    width: 100%;
    height: 9.2rem;
    position: relative;
    margin-bottom: 0.4rem;
        section{
            position: absolute;
            left: 0;
            width: 100%;
            height: 3rem;
            top: 6rem;
            color: black;
            h3{
                width: 100%;
                font-size: .52rem;
                color:#fff;
                text-align: center;
                margin:0 0 .06rem;
            }
            p{
                width: 100%;
                text-align: center;
                font-size:.28rem;
                color:#fff;
            }
        }
         img{
         width: 100%;
        }
}
#loadbox{
    width: 100%;
    #myload{
    position: relative;
    margin:0 .3rem .2rem .3rem;
       img{
            width: 100%;
            display: block;
        }
        .info{
            position: absolute;
            left: 0;
            bottom:0;
            height: 2rem;
            width: 100%;
            z-index: 1;
            background: linear-gradient(to top,rgba(125,125,125,0.5) 0%,rgba(226,226,226,0.0) 100%);
            p{
                color: white;
                font-size: .28rem;
                text-align: left;
                line-height: .4rem;
                font-size: .32rem;
                text-indent: .1rem;
            }
            p:nth-of-type(1){
               padding-top: .7rem;
            }
        }
}
}
</style>
