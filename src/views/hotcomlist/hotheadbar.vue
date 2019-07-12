<template>
    <main>
        <div class="banner">
            <img src="https://gjusp.alicdn.com/img/img1562666682467-3973282357.jpg">
        </div>
        <div class="content">
            <section class="myswiperbox">
                <div class="title">
                    <h6 class="l">周三上新<span>512款</span></h6>
                    <p class="r">查看更多</p>
                </div>
                <div class="swiper-container myswiper" :key="datalist.length">
                    <div  class="swiper-wrapper">
                        <li v-for="data in datalist" :key="data.gls_code" class="swiper-slide">
                            <div class="headertitle">
                                <p>直降</p>
                                <p>{{data.priceDiff}}元</p>
                            </div>
                            <img :src="data.imageUrl"/>
                            <div class="swiperchil">
                            <p>{{data.brand_name}}</p>
                            <p>￥{{data.price}}</p>
                            <p>￥{{data.market_price}}</p>
                            </div>
                        </li>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </section>
            <section class="common">
                <div class="combox">
                    <div class="onebox">
                        <h6>{{titlelist.mainTitle}}<span>{{titlelist.total}}款</span></h6>
                        <p>{{titlelist.subTitle}}</p>
                        <img :src="titlelist.columnImg">
                    </div>
                    <li v-for="data in comlist" :key="data.glsCode">
                        <img :src="data.imageUrl"/>
                        <p>{{data.brandName}}</p>
                        <p>￥{{data.price}}</p>
                        <p>￥{{data.marketPrice}}</p>
                    </li>
                </div>
            </section>
            <section class="common">
                <div class="combox">
                    <div class="onebox">
                        <h6>{{titleone.mainTitle}}<span>{{titleone.total}}款</span></h6>
                        <p>{{titleone.subTitle}}</p>
                        <img :src="titleone.columnImg">
                    </div>
                    <li v-for="data in comone" :key="data.glsCode">
                        <img :src="data.imageUrl"/>
                        <p>{{data.brandName}}</p>
                        <p>￥{{data.price}}</p>
                        <p>￥{{data.marketPrice}}</p>
                    </li>
                </div>
            </section>
            <section class="common">
                <div class="combox">
                    <div class="onebox">
                        <h6>{{titletwo.mainTitle}}<span>{{titletwo.total}}款</span></h6>
                        <p>{{titletwo.subTitle}}</p>
                        <img :src="titletwo.columnImg">
                    </div>
                    <li v-for="data in comtwo" :key="data.glsCode">
                        <img :src="data.imageUrl"/>
                        <p>{{data.brandName}}</p>
                        <p>￥{{data.price}}</p>
                        <p>￥{{data.marketPrice}}</p>
                    </li>
                </div>
            </section>
            <section class="common">
                <div class="combox">
                    <div class="onebox">
                        <h6>{{titlethere.mainTitle}}<span>{{titlethere.total}}款</span></h6>
                        <p>{{titlethere.subTitle}}</p>
                        <img :src="titlethere.columnImg">
                    </div>
                    <li v-for="data in comthere" :key="data.glsCode">
                        <img :src="data.imageUrl"/>
                        <p>{{data.brandName}}</p>
                        <p>￥{{data.price}}</p>
                        <p>￥{{data.marketPrice}}</p>
                    </li>
                </div>
            </section>
            <section class="common">
                <div class="combox">
                    <div class="onebox">
                        <h6>{{titlefour.mainTitle}}<span>{{titlefour.total}}款</span></h6>
                        <p>{{titlefour.subTitle}}</p>
                        <img :src="titlefour.columnImg">
                    </div>
                    <li v-for="data in comfour" :key="data.glsCode">
                        <img :src="data.imageUrl"/>
                        <p>{{data.brandName}}</p>
                        <p>￥{{data.price}}</p>
                        <p>￥{{data.marketPrice}}</p>
                    </li>
                </div>
            </section>
            <section class="common">
                <div class="combox">
                    <div class="onebox">
                        <h6>{{titlefive.mainTitle}}<span>{{titlefive.total}}款</span></h6>
                        <p>{{titlefive.subTitle}}</p>
                        <img :src="titlefive.columnImg">
                    </div>
                    <li v-for="data in comfive" :key="data.glsCode">
                        <img :src="data.imageUrl"/>
                        <p>{{data.brandName}}</p>
                        <p>￥{{data.price}}</p>
                        <p>￥{{data.marketPrice}}</p>
                    </li>
                </div>
            </section>
            <section class="common">
                <div class="combox">
                    <div class="onebox">
                        <h6>{{titlesix.mainTitle}}<span>{{titlesix.total}}款</span></h6>
                        <p>{{titlesix.subTitle}}</p>
                        <img :src="titlesix.columnImg">
                    </div>
                    <li v-for="data in comsix" :key="data.glsCode">
                        <img :src="data.imageUrl"/>
                        <p>{{data.brandName}}</p>
                        <p>￥{{data.price}}</p>
                        <p>￥{{data.marketPrice}}</p>
                    </li>
                </div>
            </section>
        </div>
    </main>
</template>
<script>
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      datalist: [],
      comlist: [],
      titlelist: [],
      titleone: [],
      titletwo: [],
      titlethere: [],
      titlefour: [],
      titlefive: [],
      titlesix: [],
      comone: [],
      comtwo: [],
      comthere: [],
      comfour: [],
      comfive: [],
      comsix: []
    }
  },
  mounted () {
    axios.get(
      'https://www.mei.com/appapi/clearance/clearanceNewArrival/v3'
    ).then(res => {
      //   console.log(res.data.result.categoryProductList);
      this.datalist = res.data.result.categoryProductList
    })
    axios.get(
      'https://www.mei.com/appapi/clearance/cmsDetailInfo/v3?cmsId=2120000100000000662'
    ).then(res => {
      //   console.log(res.data.cmsDto.productDtos);
      this.comlist = res.data.cmsDto.productDtos
      this.titlelist = res.data.cmsDto
    })
    axios.get(
      'https://www.mei.com/appapi/clearance/cmsDetailInfo/v3?cmsId=2035000100000000011'
    ).then(res => {
      this.comone = res.data.cmsDto.productDtos
      this.titleone = res.data.cmsDto
    })
    axios.get(
      'https://www.mei.com/appapi/clearance/cmsDetailInfo/v3?cmsId=2040000100000000746'
    ).then(res => {
      this.comtwo = res.data.cmsDto.productDtos
      this.titletwo = res.data.cmsDto
    })
    axios.get(
      'https://www.mei.com/appapi/clearance/cmsDetailInfo/v3?cmsId=2041000100000000652'
    ).then(res => {
      this.comthere = res.data.cmsDto.productDtos
      this.titlethere = res.data.cmsDto
    })
    axios.get(
      'https://www.mei.com/appapi/clearance/cmsDetailInfo/v3?cmsId=2041000100000000651'
    ).then(res => {
      this.comfour = res.data.cmsDto.productDtos
      this.titlefour = res.data.cmsDto
    })
    axios.get(
      'https://www.mei.com/appapi/clearance/cmsDetailInfo/v3?cmsId=2120000100000000751'
    ).then(res => {
      this.comfive = res.data.cmsDto.productDtos
      this.titlefive = res.data.cmsDto
    })
    axios.get(
      'https://www.mei.com/appapi/clearance/cmsDetailInfo/v3?cmsId=2042000100000000571'
    ).then(res => {
      this.comsix = res.data.cmsDto.productDtos
      this.titlesix = res.data.cmsDto
    })
    this.$nextTick(() => {
      new Swiper('.myswiper', {
        slidesPerView: 3,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        spaceBetween: 10,
        freeMode: true,
        loop: true,
        autoplay: {
          delay: 2000
        }
      })
    })
  }
}
</script>
<style lang="scss" scoped>
main{
    .banner{
        background: #B74446;
        img{
            width: 100%;
        }
    }
    .content{
        background: #B74446;
        padding: 0.2rem 0;
        .myswiperbox{
            margin:0 0.2rem 0.2rem;
            border-radius: 0.2rem;
            height: 6.08rem;
            background: white;
            .title{
            height: 0.8rem;
            padding: 0.2rem 0.2rem 0;
            .l{
                float: left;
                font-size: 0.38rem;
                color: black;
                span{
                font-size: 0.28rem;
                color: #777;margin-left: 0.2rem;padding-left: 0.2rem;
                border-left: 0.02rem solid #777;
                }
            }
            .r{
                float: right;border: 0.02rem solid black;border-radius: 0.08rem;
            }
            }
            .swiper-container{
            height: 4.8rem;
            li{
                height: 4rem;
                width: 2rem;
                margin: 0.2rem;
                .headertitle{
                    height: 0.6rem;
                    width: 1rem;
                    background:  #B74446;
                    p{font-size: 0.24rem;color:white;}
                }
                img{
                    width: 100%;
                }
                p{
                  font-size: 0.24rem; color: #777;text-align: center;
                  width: 100%;overflow: hidden;white-space:nowrap;
                }
            }
            .swiper-pagination{
                width: 100%;
                text-align: center;
                height: 0.3rem;
                position: absolute;
                bottom: 0.1rem;
            }
            }
        }
        .common{
            .combox{
                height: 8.12rem;
                border-radius: 0.2rem;
                background: white;
                margin:0 0.2rem 0.2rem;
                .onebox{
                    float: left;
                    border-radius: 0.2rem 0 0 0;
                    width: 2.3rem;
                    height: 50%;
                    position: relative;
                    h6{
                        font-size: 0.32rem;color:white;
                        margin-top: 0.2rem;
                        position: absolute;
                        top: 0;z-index:15;
                        span{
                            font-size: 0.24rem;color: #aaa;
                        }
                    }
                    p{
                       font-size: 0.24rem;color:white;
                       position: absolute;
                        top: 0.6rem;z-index: 15;
                    }
                    img{
                        position: absolute;top: 0;
                        width: 100%;
                        border-radius: 0.2rem 0 0 0;
                        display: block;
                        height: 100%;
                    }
                }
                li{
                    width: 2rem;
                    margin-right: 0.1rem;
                    float: left;
                    list-style: none;
                    height: 50%;
                    padding-left: 0.2rem;
                    img{
                        width: 90%;
                        margin: 0.2rem;
                    }
                    p{
                    font-size: 0.24rem; color: #777;text-align: center;
                    width: 100%;overflow: hidden;white-space:nowrap;
                    }
                }
            }
        }
    }
}
</style>
