<template>
    <div>
        <div class="banner">
                <img :src="data.main_image"/>
                <section>
                    <h3>{{data.main_title}}</h3>
                    <p>{{data.sub_title}}</p>
                    <p>{{data.description}}</p>
                </section>
        </div>
        <section id="loadbox"
        v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="0"
             infinite-scroll-immediate-check="false" >
            <div v-for="da in datalist" :key="da.categoryId" id="myload">
                <img :src="da.imageUrl"/>
                <div class="info">
                    <span>{{da.siloCategory}}直发</span>
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
      url: 'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000011&platform_code=PLATEFORM_H5'
    }).then(res => {
      this.data = res.data.banners[0]
      console.log(this.data.main_image)
    })

    axios({
      url: 'http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1562382790973&summary=9a2af66bd1b0487cd1678f9c452d7439&platform_code=H5'
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
        url: `http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=${this.current}&timestamp=1562382790973&summary=9a2af66bd1b0487cd1678f9c452d7439&platform_code=H5`
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
    margin-bottom: 0.40rem;
        section{
            position: absolute;
            left: 0;
            width: 100%;
            height: 3.00rem;
            top: 6.00rem;
            color: black;
            h3{
                width: 100%;
                text-align: center;
                font-size: .52rem;
                color:#fff;
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
            bottom: 0;
            height: 2rem;
            width: 100%;
            z-index: 1;
            background: linear-gradient(to top,rgba(125,125,125,0.5) 0%,rgba(226,226,226,0.0) 100%);
            span{
                margin-left:.1rem;
                background: white;
                color: black;
                text-align: left;
                font-size: 0.24rem;
            }
            p{
                color: white;
                font-size: 0.28rem;
                text-align: left;
                line-height: 0.40rem;
                font-size: 0.32rem;
                text-indent: .1rem;
            }
        }
}
}
</style>
