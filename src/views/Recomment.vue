<template>
  <div>
    <swiper :key="datalist.length" class="swiper" >
      <li v-for="data in datalist" :key="data.id" class="swiper-slide" @click="handliclick(data.id)">
        <img :src="data.main_image" />
            <div class="swiperchil">
            <h3>{{data.main_title}}</h3>
            <p>{{data.sub_title}}</p>
            <p>{{data.description}}</p>
            </div>
      </li>
    </swiper>
        <div class="newlist">
                <aside @click=" handclick">
                <div class="title">
                <h5>每日新品
                    <span>09:00上新</span>
                </h5>
                </div>
                <div v-for="data in hotlist" :key="data.id" class="commod">
                    <img :src="data.picUrl">
                </div>
                </aside>
                <aside @click="handleclick">
                <div class="title">
                <h5>清仓特卖
                    <span>周三上新</span>
                </h5>
                </div>
                <div v-for="data in shoulist" :key="data.id" class="commod">
                     <img :src="data.picUrl">
                </div>
                </aside>
        </div>
        <div id="loadbox">
            <h3>今日上新</h3>
            <div v-for="da in list" :key="da.eventId" class="myload" @click="detail(da.eventId)">
                <img :src="da.imageUrl"/>
                <div class="info">
                    <p>{{da.englishName}}</p>
                    <p class="p1">{{da.chineseName}}</p>
                    <p class="p1">{{da.discountText}}</p>
                </div>
            </div>
            <h3>热卖品牌</h3>
            <div v-for="dat in dalist" :key="dat.eventId" class="myload" @click="detail(dat.eventId)">
                <img :src="dat.imageUrl"/>
                <div class="info">
                    <p>{{dat.englishName}}</p>
                    <p class="p1">{{dat.chineseName}}</p>
                    <p class="p1">{{dat.discountText}}</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import swiper from '@/components/Swiper'
import axios from 'axios'
// import Vue from 'vue'
export default {
  components: {
    swiper
  },
  data () {
    return {
      datalist: [],
      list: [],
      dalist: [],
      hotlist: [],
      shoulist: []
    }
  },
  mounted () {
    axios
      .get(
        'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5'
      )
      .then(res => {
        this.datalist = res.data.banners
        // console.log(this.datalist);
      })

    axios
      .get(
        'http://www.mei.com/appapi/ninenew/operational/v1?credential='
      )
      .then(res => {
        // console.log(res.data.show2[0].products)
        this.hotlist = res.data.show2[0].products
        this.shoulist = res.data.show2[1].products
      })

    axios({
      url: 'http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1562548371235&summary=c7126ea73c7652fafff1d79ede9f1c60&platform_code=H5'
    }).then(res => {
    //    console.log(res.data.lists[0].events)
      this.list = res.data.lists[0].events
      this.dalist = res.data.lists[1].events
    })
  },
  methods: {
    // detail (id) {
    //   this.$router.push(`/productlist/${id}`)
    // }
    handclick () {
      this.$router.push('/newcomlist')
    },
    handleclick () {
      this.$router.push('/hotcomlist')
    },
    detail (id) {
      this.$router.push(`/productlist/${id}`)
    },
    handliclick (data) {
      if (data === '20181111111111') {
        this.$router.push('/luxury')
      } else {
        this.$router.push('/brand/3616200100000000853')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper {
  height: 9rem;
  list-style: none;
  position: relative;
  margin-bottom: 0.4rem;
  .swiperchil{
            position: absolute;
            left: 0;
            width: 100%;
            height: 3.0rem;
            top: 6.3rem;
            color: black;
            h3{
                width: 100%;
                text-align: center;
                color:#fff;
                font-size: .52rem;
                margin:0 0 .06rem;
            }
            p{
                width: 100%;
                text-align: center;
                font-size:.28rem;
                color:#fff;
            }

        }
  img {
    width: 100%;
  }
}
.newlist{
    width: 100%;
    height: 3.8rem;
    padding: 0.3rem 0.2rem;
    box-sizing: border-box;
    aside{
        width:3.46rem;
        float: left;
        margin: 0.04rem;
        background: #f8f8f8;
        height: 3.2rem;
        .title{
            height: 0.45rem;
            width: 80%;
            padding: 0.24rem 0.2rem 0.2rem;
            line-height: 0.45rem;
            h5{
                font-size: 0.34rem;
            }
            span{
                display: inline;
                font-size: 0.22rem;
                color:#666;
            }
        }
        .commod{
            // padding: 0 0.20rem 0.32rem;
            img{
               width:1.4rem;
               display: block;
               float: left;
               margin: 0 0.1rem;
            }
        }
    }
}
#loadbox{
    width: 100%;
    h3{
        width: 100%;
        line-height: 0.68rem;
        height: 0.68rem;
    }
    .myload{
    width: 100%;
    position: relative;
    box-sizing: border-box;
    padding:0 0.3rem 0.20rem 0.3rem;
       img{
            width:100%;
            height:4.14rem;
            display: block;
        }
        .info{
            position: absolute;
            left: 0.3rem;
            bottom: 0.20rem;
            height: 1.3rem;
            width: 92%;
            z-index: 1;
            background: linear-gradient(to top,rgba(125,125,125,0.5) 0%,rgba(226,226,226,0.0) 100%);
            p{
                color: white;
                font-size: 0.28rem;
                text-align: left;
                line-height: 0.40rem;
                font-size: 0.32rem;
                text-indent: 0.1rem;
            }
             .p1{
              font-size: .28rem;
            }
        }
    }
}
</style>
