<template>
  <div v-if="detalinfo">
    <!-- 头 -->
    <probar id="topbar">
      <div class="title">
        <span>{{detalinfo.brand}}</span>
        <span>￥ {{detalinfo.price}}</span>
      </div>
    </probar>

    <!-- 大盒子 -->
    <div id="productdetail-swiper-pagination">
      <!-- 轮播 -->
      <div class="product-show-box">
        <swiper class="swiper-height" id="swiper-detail">
          <div v-for="images in images" class="swiper-slide" id="swiper-detail" :key="images.id">
            <img :src="images.bigImgUrl" class="poster" />
          </div>
        </swiper>
      </div>
      <!-- 产品价格信息 -->
      <div class="product-base">
        <!-- 名字 -->
        <div class="product-title">
          <h1>{{detalinfo.name}}</h1>
        </div>
        <!-- 价格 -->
        <div class="product-price detail-tags">
          <del>￥ {{detalinfo.marketPrice}}</del>
          <strong>￥ {{detalinfo.price}}</strong>
          <span class="new-labels">
            <a>{{detalinfo.newTagList[0].tag}}</a>
          </span>
          <span class="new-labels">
            <a>{{detalinfo.newTagList[1].tag}}</a>
          </span>
        </div>
      </div>
      <!-- 预计发货时间 -->
      <div class="delivery">
        <img src="https://cdn12.mei.com/product/20170828/20170828142347026.jpg" alt class="flag" />
        <strong>{{detalinfo.warehouse_name}}</strong>
        <span>
          <em class="iconfont mei-time"></em>
          {{detalinfo.deliver_date}}
        </span>
      </div>
      <!-- 闪购、服务、尺码 -->
      <div class="other-info-block">
        <section>
          <!-- 闪购 -->
          <!-- <div class="other-info-item" style="height:58.97px">
            <div>
              <div>
                <span>闪购</span>
                <div></div>
              </div>
            </div>
          </div>-->
          <!-- 服务 -->
          <div class="other-info-item">
            <div class="service-labels">
              <div class="click-area clearfix">
                <a>▶</a>
                <span>服务</span>
                <div class="labels">
                  <span class="label-item" v-for="detalinfo in labels" :key="detalinfo.id">
                    <em>{{detalinfo.label_title}}</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- 尺码 -->
          <div class="other-info-item">
            <div class="color-size-list">
              <div class="size-list">
                <div class="title">尺码</div>
                <div class="size">
                  <span
                    class="size-item selected"
                    v-for="detalinfo in sizeLabel"
                    :key="detalinfo.id"
                  >{{detalinfo.sizeLabel}}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- 商品参数 -->
        <div class="block-desc">
          <h3 class="block-heading">商品参数</h3>
          <div class="block-info">
            <div>
              <ul class="params-list clearfix">
                <li v-for="heading in heading" :key="heading.id">
                  <label>{{heading.name}}</label>
                  <span>{{heading.value}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 商品详情 -->
        <div class="block-desc">
          <h3 class="block-heading">商品详情</h3>
          <div class="block-info">
            <div class="images">
              <div class="pic">
                <img v-for="product in product" :key="product.id" :src="product.bigImgUrl" />
              </div>
              <p class="tip">{{detalinfo.description.message}}</p>
            </div>
          </div>
        </div>
        <!-- 退货提示 -->
        <div class="block-desc clearfix">
          <h3 class="block-heading">退货提示</h3>
          <div class="block-info">
            <p>{{detalinfo.returnNote}}</p>
          </div>
        </div>
        <!-- 包装清单 -->
        <div class="block-desc">
          <h3 class="block-heading">包装清单</h3>
          <div class="block-info">
            <img :src="detalinfo.packageURL" />
            <p class="tip">{{detalinfo.packageText}}</p>
          </div>
        </div>
        <!-- 品牌主页 -->
        <div class="block-desc">
          <h3 class="block-heading">
            <!-- TODO: -->
            <a href="`/brand/${this.detalinfo.brandLogoId}`">
              <strong class="brand-name">{{detalinfo.brand}}</strong>
              <span>品牌主页 ▶</span>
            </a>
          </h3>
          <div class="block-info">
            <div class="show-more">
              <!-- TODO: -->
              <a href="/brand/3616200100000000201">
                <img :src="detalinfo.brandImg" />
              </a>
              <div>
                <!-- TODO: -->
                <a href="/brand/3616200100000000201">
                  <p>{{detalinfo.brand_story}}</p>
                </a>
              </div>
            </div>
            <div class="more">
              <a>
                <span>more</span>
              </a>
            </div>
          </div>
        </div>
        <!-- 海外直发小贴士 TODO:-->
        <div class="block-desc">
          <h3 class="block-heading">
            <span class="crossborder-tips-heading">海外直发小贴士</span>
          </h3>
          <div class="block-info">
            <p>
              <span>魅力惠海外直发商品非质量问题不支持退货哦。</span>
            </p>
            <p>海外直发商品，根据海关要求需做入境申报，需要您配合上传身份信息以便及时通关送达。</p>
            <p>海外直发商品均从境外仓发货，预计10-15个工作日送达，请耐心等待，如有疑问，请联系客服，进行订单查询。</p>
            <p>海外直发商品均为魅力惠海外优选，不提供发票，可能无中文标签。</p>
            <p>海外直发商品下单当日，如需取消订单，请联系客服。次日开始，订单无法取消，敬请谅解。</p>
            <p>收到物流公司的被税短信后与物流公司核实并缴税，将缴税凭证发至客服，客服根据缴税凭证金额退款，如有疑问，请联系客服咨询。</p>
          </div>
        </div>
        <!-- 海外直发小贴士 -->
        <div class="block-desc">
          <div class="block-info">
            <div>
              <img :src="detalinfo.overseas_tip_url" class="service-tips" />
            </div>
          </div>
        </div>
        <!-- 售后服务内容 -->
        <div class="block-desc">
          <div class="block-info">
            <div>
              <div>
                <img :src="detalinfo.postSellUrls" />
              </div>
            </div>
          </div>
        </div>
        <!-- 用户评论 TODO:-->
        <div class="block-desc">
          <h3 class="block-heading">
            用户评论
            <span class="review-total">(0)</span>
            <a
              href="/review/brand?productid=2121212199000167427&amp;brandid=3616200100000000201&amp;brandname=ALEXANDER%2520MCQUEEN"
              class="to-review-all"
            >查看全部 ▶</a>
          </h3>
          <!---->
        </div>
        <!-- 大家都在看 -->
        <div class="block-desc" customer-type="2">
          <h3 class="block-heading">大家都在看</h3>
          <div class="container">
            <div
              data-spm="ProductDetailHot"
              class="product-item"
              v-for="DetailHot in DetailHot"
              :key="DetailHot.id"
            >
              <!-- TODO: -->
              <a
                href="/productdetail?eventCode=2042204290000005976&amp;glsCode=A1N-460-00121-C"
                class="router-link-active"
              >
                <div class="pic">
                  <img
                    alt="ALEXANDER MCQUEEN 白色牛皮系带黑色鞋尾女士运动休闲鞋"
                    :src="DetailHot.imgUrl"
                    lazy="loaded"
                  />
                </div>
                <!-- <div class="product-icon">
                  <div>
                    <div class="tag clearfix"></div>
                  </div>
                </div>-->
                <div class="product-info">
                  <span class="product-brand">{{DetailHot.brand_name}}</span>
                  <span class="product-name">{{DetailHot.product_name}}</span>
                </div>
                <div class="product-price-box">
                  <div>
                    <span class="product-price">￥ {{DetailHot.price}}</span>
                    <del class="product-price-del">￥ {{DetailHot.market_price}}</del>
                  </div>
                  <div class="discount">{{DetailHot.discount}}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="car-bottom-bar">
      <div class="left-area">
        <div>
          <a href="/shoppingcart" class="shop-car btn-space">
            <span class="iconfont">&#xe6e9;</span>
            <p class="btn-text">购物袋</p>
          </a>
        </div>
      </div>
      <div class="submit-btn">
        <span class="x1x2 add-to-cart btn-space">加入购物车</span>
        <span class="add-to-checkout x1x2">立即购买</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import swiper from '@/components/Swiper'
import probar from '@/components/Probar'

export default {
  components: {
    swiper,
    probar
  },
  data () {
    return {
      detalinfo: null,
      images: null,
      labels: null,
      sizeLabel: null,
      heading: null,
      product: null,
      isFixed: false
    }
  },

  props: ['id'],
  beforeMount () {
    // bus.$emit('maizuo',false)
    this.$store.commit('delfootTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('showfootTabbar', true)
  },
  mounted () {
    axios
      .get(
        `http://www.meihigo.hk/appapi/product/detail/v3?categoryId=2040204090000006978&productId=${this.$route.params.id}&platform_code=H5&timestamp=1562745003249&summary=ac93fd94b0f33ccdfb67b79a7e53cc2d`
      )
      .then(res => {
        console.log(res.data.infos)
        this.detalinfo = res.data.infos
        this.images = res.data.infos.images
        this.labels = res.data.infos.service_labels
        this.sizeLabel = res.data.infos.size
        this.heading = res.data.infos.description.attributesList
        this.product = res.data.infos.description.product_img1
      }),
    axios
      .get(
        `http://www.meihigo.hk/appapi/product/hot/v3?categoryId=2042204290000006533&productId=${this.$route.params.id}&platform_code=H5`
      )
      .then(item => {
        console.log(item.data.categoryList)
        this.DetailHot = item.data.categoryList
      })

    window.onscroll = this.handleScroll
  },
  beforeDestroy () {
    window.onscroll = null
  }
}
</script>
<style lang="scss">
#topbar {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: hsla(0, 0%, 100%, 0.95);
  }
  .title {
    padding-top: 0.2rem;
    span {
      display: block;
      width: 5.7rem;
      height: 0.29rem;
      padding: 0.026667rem;
      font-size: 0.28rem;
      overflow: hidden;
      line-height: 0.4rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-transform: uppercase;
      text-align: center;
      font-weight: bold;
    }
    span:last-of-type {
      font-size: 0.2rem;
      color: #dd2828;
    }
  }

#productdetail-swiper-pagination {
  width: 6.7rem;
  padding: 0 0.4rem 0.5rem;
  position: relative;
  top: -1.173333rem;

  .product-base {
    width: 100%;
    padding-bottom: 0.32rem;
    .product-title {
      h1 {
        padding-top: 0.2rem;
        font-size: 0.359rem;
        color: #000;
        font-weight: 500;
      }
    }
    .product-price {
      del {
        display: block;
        margin-bottom: 0.05rem;
        line-height: 0.32rem;
        color: #ccc;
        font-size: 0.2rem;
      }
      strong {
        display: inline-block;
        margin-right: 0.133333rem;
        color: #dd2828;
        font-size: 0.32rem;
      }
    }
    .detail-tags {
      display: inline-block;
      vertical-align: text-bottom;
      .new-labels {
        display: inline-block;
        vertical-align: text-top;
        margin-right: 0.1rem;
        height: 0.3rem;
        line-height: 0.3rem;
        padding: 0.05rem;
        a {
          background: rgb(255, 255, 255);
          color: rgb(0, 0, 0);
          border: 0.01rem solid rgb(0, 0, 0);
          display: inline-block;
          padding: 0.02rem;
          font-size: 0.01rem;
        }
      }
    }
  }
  .delivery {
    padding-bottom: 0.58rem;
    font-size: 0.2rem;
    .flag {
      width: 0.28rem;
      height: 0.28rem;
      display: inline-block;
      vertical-align: text-top;
      border-radius: 0.186667rem;
    }
    strong {
      padding: 0.1rem;
    }
  }
  .other-info-block {
    .other-info-item {
      border-bottom: 0.013333rem solid #eee;
      .service-labels {
        padding: 0.42rem 0 0.26rem;
        font-size: 0.373333rem;
        .click-area {
          overflow: hidden;
          a {
            position: absolute;
            right: 0.4rem;
            font-size: 0.28rem;
            color: #666;
          }
          span {
            font-size: 0.28rem;
            color: #666;
            float: left;
          }
          .labels {
            width: 5.28rem;
            float: left;
            padding-left: 0.4rem;
            .label-item {
              line-height: 0.4rem;
              color: #666;
              font-size: 0.28rem;
              em {
                word-break: break-all;
                vertical-align: top;
                padding-bottom: 0.2rem;
                font-weight: 400;
                font-style: normal;
                font-size: 0.1rem;
              }
            }
            .label-item::after {
              content: "|";
              padding: 0 0.16rem;
            }
            .label-item:last-child:after {
              content: "";
              padding: 0;
            }
          }
        }
      }
      .color-size-list {
        padding-top: 0.6rem;
        padding-bottom: 0.3rem;
        .size-list {
          overflow: hidden;
          .title {
            float: left;
            color: #666;
            font-size: 0.2933rem;
            line-height: 0.6rem;
          }
          .color,
          .size {
            width: 5.7rem;
            float: left;
            padding-left: 0.335rem;
            .size-item {
              width: auto;
              min-width: 0.453333rem;
              height: 0.56rem;
              margin: 0 0.3rem 0.3rem 0;
              padding: 0 0.1022rem;
              float: left;
              line-height: 0.56rem;
              text-align: center;
              color: #ccc;
              font-size: 0.25rem;
              background-color: #f5f5f5;
            }
          }
        }
      }
    }
    .other-info-item :last-of-type {
      border-bottom: none;
    }

    section {
      border-top: 0.01rem solid #eee;
      border-bottom: 0.01rem solid #eee;
    }
    .block-desc {
      position: relative;
      :after {
        content: "";
        width: 7.08rem;
        height: 0.02rem;
        overflow: hidden;
        background-color: #e5e5e5;
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .block-heading {
        padding: 0.5rem 0 0.4rem;
        color: #000;
        font-size: 0.36rem;
        font-weight: 700;
        a {
          span {
            float: right;
            padding-right: 0.2rem;
            color: #666;
            font-size: 0.28rem;
            font-weight: 400;
          }
        }
        .to-review-all {
          float: right;
          padding-right: 0.2rem;
          color: #666;
          font-size: 0.28rem;
          font-weight: 400;
        }
      }

      .block-info {
        position: relative;
        padding-bottom: 0.5rem;
        .params-list {
          padding: 0 0 0.3rem;
          overflow: hidden;
          li {
            float: left;
            width: 100%;
            padding: 0 0 0.3rem;
          }
          label {
            width: 2.25rem;
            color: #999;
            font-size: 0.28rem;
            float: left;
          }
          span {
            float: left;
            width: 4.45rem;
            color: #000;
            font-size: 0.28rem;
          }
        }
        .images {
          .pic {
            img {
              width: 100%;
              display: block;
            }
          }
          .tio {
            font-size: 0.12rem;
          }
        }
        img {
          width: 100%;
          display: block;
          margin-bottom: 0.4rem;
        }
        p {
          line-height: 0.4rem;
          font-size: 0.28rem;
          color: #000;
        }
        // TODO:
        .more {
          width: 100%;
          height: 1.16rem;
          padding-bottom: 0.5rem;
          background: linear-gradient(bottom, #fff 70%, hsla(0, 0%, 100%, 0.4));
          position: absolute;
          left: 0;
          bottom: 0;
          a {
            color: #000;
            display: block;
            width: 100%;
            height: 0.8797rem;
            text-indent: -1000em;
            margin-top: 0.373333rem;
          }
        }
      }
      .container {
        width: 6.9rem;
        margin: 0 auto;
        padding-bottom: 0.5rem;
        .product-item:nth-child(odd) {
          margin-right: 0.3rem;
        }
        .product-item {
          width: 3.3rem;
          height: 6.04rem;
          margin-bottom: 0.3rem;
          display: inline-block;
          vertical-align: top;
          position: relative;
          .pic {
            width: 3.3rem;
            height: 4.4rem;
            margin-bottom: 0.133333rem;
            position: relative;
            img {
              display: block;
              width: 100%;
            }
          }

          .product-icon {
            padding-bottom: 0.1rem;
            overflow: hidden;
          }
          .product-icon:after {
            content: "";
            width: 0rem;
          }

          .product-info {
            padding-bottom: 0.05rem;
            span {
              display: block;
              width: 100%;
              margin-bottom: 0.05rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .product-brand {
              height: 0.29rem;
              line-height: 0.29rem;
              text-transform: uppercase;
              font-weight: 700;
              font-size: 0.28rem;
            }
            .product-brand:after {
              content: "";
              width: 0rem;
            }

            .product-name {
              padding: 0.02rem 0;
              height: 0.227rem;
              line-height: 0.227rem;
              font-size: 0.1rem;
            }
            .product-name:after {
              content: "";
              width: 0rem;
            }
          }
          .product-price-box {
            display: flex;
            justify-content: space-between;
            div {
              span {
                color: #dd2828;
                font-size: 0.32rem;
                font-weight: 700;
              }
              .product-price {
                padding-right: 0.2rem;
              }
              .product-price::after {
                content: "";
                width: 0rem;
              }

              del {
                color: #ccc;
                font-size: 0.28rem;
              }
              del::after {
                content: "";
                width: 0rem;
              }
            }

            div::after {
              content: "";
              width: 0rem;
            }
          }
          .product-price-box::after {
            content: "";
            width: 0rem;
          }

          .discount {
            color: #666;
            font-size: 0.28rem;
          }

          .discount::after {
            content: "";
            width: 0rem;
          }

          .product-price-box del,
          .product-price-box em,
          .product-price-box span {
            display: inline-block;
            vertical-align: top;
            line-height: 0.346667rem;
            font-size: 0.12rem;
          }

          .pic::after {
            content: "";
            width: 0rem;
          }
          .router-link-active::after {
            content: "";
            width: 0rem;
          }
        }
        .product-info::after {
          content: "";
          width: 0rem;
        }

        .product-item::after {
          content: "";
          width: 0rem;
        }
      }
    }
  }

  #swiper-detail {
    .swiper-pagination-bullet {
      position: relative;
      bottom: -0.4rem;
    }
    .swiper-pagination-bullet {
      width: 0.09rem;
      height: 0.09rem;
      display: inline-block;
      border-radius: 0;
      background: #000;
      opacity: 0.2;
    }
    .swiper-pagination-bullet-active {
      opacity: 1;
      background: #000;
    }

    .poster {
      display: block;
      width: 6.7rem;
      height: 10.3rem;
    }
  }
  .product-show-box {
    box-shadow: 0 0rem 0.1rem 0.06rem rgba(0, 0, 0, 0.05);
  }
}
.car-bottom-bar {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 0.98rem;
  box-shadow: 0 -0.04rem 0.08rem 0 rgba(0, 0, 0, 0.05);
  .left-area {
    width: 1.5rem;
    .shop-car {
      width: 1.5rem;
      height: 1.306667rem;
      float: left;
      text-align: center;
      position: relative;
      span {
        display: block;
        width: 0.38rem;
        height: 0.42rem;
        margin: 0.15rem auto 0.066667rem;
        position: relative;
        font-size: 0.5rem;
      }
    }
  }
  span {
    display: block;
    position: relative;
  }
  .x1x2 {
    width: 50%;
  }
  .submit-btn {
    width: 6rem;
    height: 1.3rem;
    float: right;
    line-height: 0.99rem;
    font-size: 0.32rem;
    text-align: center;
    font-weight: 700;
    display: flex;
    justify-content: center;
    .btn-space {
      border-right: 0.01rem solid #ccc;
    }
    .add-to-checkout {
      color: #dd2828;
    }
  }
}
</style>
