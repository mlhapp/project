<template>
    <article>
        <luheadbar></luheadbar>
        <div class="heading">
            <h2>新客专享价</h2>
        </div>
        <nav :class="totop?'myrelative':''">
            <ul>
                <li><a href="#bag">箱包</a></li>
                <li><a href="#wom">女装</a></li>
                <li><a href="#shoe">鞋履</a></li>
                <li><a href="#shenghuo">生活方式</a></li>
                <li><a href="#neiyi">贴身衣物</a></li>
            </ul>
        </nav>
        <div class="heading">
            <h3>箱包/新人专享价</h3>
        </div>
        <div id="bag">
            <ul class="content">
                <li v-for="data in baglist" :key="data.productId">
                    <img :src="data.picUrl"/>
                    <h6>{{data.brandName}}</h6>
                    <p>{{data.productName}}</p>
                    <p><span>新人价￥{{data.price}}</span><span>￥{{data.marketPrice}}</span><span>{{data.discount}}折</span></p>
                </li>
            </ul>
        </div>
        <div class="banners">
            <img :src="banners[0].picUrl">
        </div>
        <div class="lunav">
            <li v-for="data in onelist" :key="data.glsCode">
                <img :src="data.aliCloudUrl">
                <p>{{data.brandName}}</p>
                <p>￥{{data.price}}</p>
            </li>
        </div>
        <div class="heading">
            <h3>女装/新人专享价</h3>
        </div>
        <div id="wom">
            <ul class="content">
                <li v-for="data in womlist" :key="data.productId">
                    <img :src="data.picUrl"/>
                    <h6>{{data.brandName}}</h6>
                    <p>{{data.productName}}</p>
                    <p><span>新人价￥{{data.price}}</span><span>￥{{data.marketPrice}}</span><span>{{data.discount}}折</span></p>
                </li>
            </ul>
        </div>
        <div class="banners">
            <img :src="banners[1].picUrl">
        </div>
        <div class="lunav">
            <li v-for="data in twolist" :key="data.glsCode">
                <img :src="data.aliCloudUrl">
                <p>{{data.brandName}}</p>
                <p>￥{{data.price}}</p>
            </li>
        </div>
        <div class="heading">
            <h3>鞋履/新人专享价</h3>
        </div>
        <div id="shoe">
            <ul class="content">
                <li v-for="data in shoelist" :key="data.productId">
                    <img :src="data.picUrl"/>
                    <h6>{{data.brandName}}</h6>
                    <p>{{data.productName}}</p>
                    <p><span>新人价￥{{data.price}}</span><span>￥{{data.marketPrice}}</span><span>{{data.discount}}折</span></p>
                </li>
            </ul>
        </div>
        <div class="banners">
            <img :src="banners[2].picUrl">
        </div>
        <div class="lunav">
            <li v-for="data in therelist" :key="data.glsCode">
                <img :src="data.aliCloudUrl">
                <p>{{data.brandName}}</p>
                <p>￥{{data.price}}</p>
            </li>
        </div>
        <div class="heading">
            <h3>生活方式/新人专享价</h3>
        </div>
        <div id="shenghuo">
            <ul class="content">
                <li v-for="data in shenghuolist" :key="data.productId">
                    <img :src="data.picUrl"/>
                    <h6>{{data.brandName}}</h6>
                    <p>{{data.productName}}</p>
                    <p><span>新人价￥{{data.price}}</span><span>￥{{data.marketPrice}}</span><span>{{data.discount}}折</span></p>
                </li>
            </ul>
        </div>
        <div class="banners">
            <img :src="banners[3].picUrl">
        </div>
        <div class="lunav">
            <li v-for="data in fourlist" :key="data.glsCode">
                <img :src="data.aliCloudUrl">
                <p>{{data.brandName}}</p>
                <p>￥{{data.price}}</p>
            </li>
        </div>
        <div class="heading">
            <h3>贴身衣物/新人专享价</h3>
        </div>
        <div id="neiyi">
            <ul class="content">
                <li v-for="data in neiyilist" :key="data.productId">
                    <img :src="data.picUrl"/>
                    <h6>{{data.brandName}}</h6>
                    <p>{{data.productName}}</p>
                    <p><span>新人价￥{{data.price}}</span><span>￥{{data.marketPrice}}</span><span>{{data.discount}}折</span></p>
                </li>
            </ul>
        </div>
        <div class="banners">
            <img :src="banners[4].picUrl">
        </div>
        <div class="lunav">
            <li v-for="data in fivelist" :key="data.glsCode">
                <img :src="data.aliCloudUrl">
                <p>{{data.brandName}}</p>
                <p>￥{{data.price}}</p>
            </li>
        </div>
    </article>
</template>
<script>
import axios from 'axios'
import luheadbar from '@/components/Luheadbar'
export default {
  data () {
    return {
      banners: [],
      baglist: [],
      womlist: [],
      shoelist: [],
      shenghuolist: [],
      neiyilist: [],
      totop: false,
      onelist: [],
      twolist: [],
      therelist: [],
      fourlist: [],
      fivelist: []
    }
  },
  components: {
    luheadbar
  },
  beforeMount () {
    this.$store.commit('delfootTabbar', false)
  },
  mounted () {
    axios.get(`https://www.mei.com/appapi/raw/categoryList`).then(
      res => {
        this.banners = res.data.data
      })
    axios.get(`https://www.mei.com/appapi/raw/productList?categoryId=113&pageIndex=1&pageSize=8`).then(
      res => {
        //   console.log(res.data.data.products);
        this.baglist = res.data.data.products
      })
    axios.get(`https://www.mei.com/appapi/raw/productList?categoryId=674&pageIndex=1&pageSize=8`).then(
      res => {
        //   console.log(res.data.data.products);
        this.womlist = res.data.data.products
      })
    axios.get(`https://www.mei.com/appapi/raw/productList?categoryId=528&pageIndex=1&pageSize=8`).then(
      res => {
        //   console.log(res.data.data.products);
        this.shoelist = res.data.data.products
      })
    axios.get(`https://www.mei.com/appapi/raw/productList?categoryId=296&pageIndex=1&pageSize=8`).then(
      res => {
        //   console.log(res.data.data.products);
        this.shenghuolist = res.data.data.products
      })
    axios.get(`https://www.mei.com/appapi/raw/productList?categoryId=469&pageIndex=1&pageSize=8`).then(
      res => {
        //   console.log(res.data.data.products);
        this.neiyilist = res.data.data.products
      })
    axios.get(`https://www.mei.com/appapi/search/searchKey/v3?firstCategoryId=113&pageIndex=1`).then(
      res => {
        this.onelist = res.data.products
      })
    axios.get(`https://www.mei.com/appapi/search/searchKey/v3?firstCategoryId=674&pageIndex=1`).then(
      res => {
        this.twolist = res.data.products
      })
    axios.get(`https://www.mei.com/appapi/search/searchKey/v3?firstCategoryId=528&pageIndex=1`).then(
      res => {
        this.therelist = res.data.products
      })
    axios.get(`https://www.mei.com/appapi/search/searchKey/v3?firstCategoryId=296&pageIndex=1`).then(
      res => {
        this.fourlist = res.data.products
      })
    axios.get(`https://www.mei.com/appapi/search/searchKey/v3?firstCategoryId=469&pageIndex=1`).then(
      res => {
        this.fivelist = res.data.products
      })
    window.onscroll = this.luscroll
  },
  methods: {
    luscroll () {
      console.log('111')
      if (document.documentElement.scrollTop >= 430) {
        this.totop = true
      } else {
        this.totop = false
      }
    }
  },
  beforeDestroy () {
    this.$store.commit('showfootTabbar', true)
    window.onscroll = null
  }
}
</script>
<style lang="scss" scoped>
article{
    .heading{
        width: 100%;
        height:1.32rem;
        line-height: 1.32rem;
        color: black;
        box-sizing: border-box;
        padding: 0 0.3rem;
        h3{
            text-align: center;
        }
    }
    nav{
        width: 100%;
        height: 0.68rem;
        border-bottom: 0.02rem solid #ccc;
        ul{
            list-style: none;
            text-align: center;
            li{
                display: inline-block;
                padding:0 0.3rem;
                line-height: 0.68rem;
                a{
                    text-decoration: none;
                    color: #999;
                }
                a:hover{
                    color: black;
                    font-weight: 600;
                }
            }
        }
    }
    .content{
        width: 100%;
        overflow: hidden;
        zoom:1;
        li{
            width: 3.7rem;
            height: 6.2rem;
            padding: 0.2rem;
            box-sizing: border-box;
            float: left;
            list-style: none;
            img{
                width: 100%;
            }
            h6{
                font-size: 0.28rem;
            }
            p{
                white-space: nowrap;
                overflow: hidden;
                font-size: 0.20rem;
                span:first-of-type{
                color: red;
                }
            }
        }
    }
    .banners{
        width: 100%;
        padding: 0.2rem;
        box-sizing: border-box;
        height: 4.2rem;
        margin-bottom: 0.6rem;
        img{
            width: 100%;
        }
    }
    .lunav{
        width: 100%;
        height: 5rem;
        padding-left: 0.1rem;
        box-sizing: border-box;
        overflow: hidden;
        overflow-x: auto;
        white-space: nowrap;
        li{
          width: 4rem;height: 100%;margin-left:0.08rem;
          list-style: none;
          display: inline-block;
          background:#ddd;
            img{
              width: 100%;
            }
            p{
                text-align: center;
            }
        }
    }
}
    .myrelative{
    position: fixed;
    left: 0;
    top:0 ;
    background: white;
    }
</style>
