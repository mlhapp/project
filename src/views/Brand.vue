<template>
  <div>
    <img :src="data.brandPageImage" alt class="post" />
    <h1 class="letter">{{data.brandName}}</h1>
    <div class="mask"></div>
    <p ref="word">
      {{data.brandStoryText}}
      <span @click="more()" ref="More">更多</span>
    </p>
    <div v-show="isHad" class="SS">
      <h2>精选上新</h2>
      <brandswiper class="swiper newswiper" perview="2.5" myclass="newswiper" :key="newlist.length">
        <div class="swiper-slide swiper-a" v-for="data in newlist" :key="data.productId">
          <img :src="data.fileUrl" class="swiper-img" />
          <div class="mask1"></div>
          <div class="price">
            <span class="s1">￥{{data.price}}</span>
            <span class="s2">￥{{data.marketPrice}}</span>
          </div>
        </div>
      </brandswiper>
    </div>
    <div v-show="isHad2" class="SS">
      <h2>人气热销</h2>
      <brandswiper class="swiper hotswiper" perview="2.5" myclass="hotswiper" :key="hotlist.length">
        <div class="swiper-slide swiper-a" v-for="data in hotlist" :key="data.productId">
          <img :src="data.fileUrl" class="swiper-img" />
          <div class="mask1"></div>
          <div class="price">
            <span class="s1">￥{{data.price}}</span>
            <span class="s2">￥{{data.marketPrice}}</span>
          </div>
        </div>
      </brandswiper>
    </div>
    <ul class="nav">
      <li
        class="cli"
        v-for="data in prolist"
        :key="data.categoryId"
        @click="changePro(data.categoryId)"
      >{{data.categoryName}}</li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios'
import brandswiper from '@/components/BrandSwiper'
import bus from '@/bus'
export default {
  props: ['id'],
  data () {
    return {
      data: null,
      newlist: null,
      hotlist: null,
      isHad: true,
      isHad2: true,
      datalist: null,
      prolist: null,
      routerId: null
    }
  },
  components: {
    brandswiper
  },
  beforeMount () {
    // bus.$emit('maizuo',false)
    this.$store.commit('delfootTabbar', false)
  },

  mounted () {
    this.routerId = this.$route.params.id
    setTimeout(function () {
      var cli = document.querySelectorAll('.cli')
      cli[0].click()
      // cli[0].
    }, 1000)
    setTimeout(function () {
      var cli = document.querySelectorAll('.cli')
      cli[0].click()
    }, 1000)
    axios
      .get(
        `http://www.mei.com/appapi/brand/viewCms/v3?logoId=${this.$route.params.id}`
      )
      .then(res => {
        this.data = res.data.body.brandDetail
      })
    axios
      .get(
        `http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=${this.$route.params.id}`
      )
      .then(res => {
        this.newlist = res.data.body.newProductTop10
        if (this.newlist.length === 0) {
          this.isHad = false
        } else {
          this.isHad = true
        }
        // console.log(this.newlist);
        this.hotlist = res.data.body.hotProductTop10
        if (this.hotlist.length === 0) {
          this.isHad2 = false
        } else {
          this.isHad2 = true
        }
        // console.log(this.newlist);
      })
    axios
      .get(
        `http://www.mei.com/appapi/brand/product/secCategoryProduct/v3?logoId=${this.$route.params.id}&pageIndex=1`
      )
      .then(res => {
        // console.log(res.data.body.categories);
        this.datalist = res.data.body
        this.prolist = res.data.body.categories
        // console.log( res.data.body)
      })
  },
  beforeDestroy () {
    this.$store.commit('showfootTabbar', true)
  },
  methods: {
    more () {
      if (this.$refs.More.innerHTML === '更多') {
        this.$refs.More.innerHTML = '收起'
        this.$refs.word.style.overflow = 'inherit'
        this.$refs.More.style.position = 'relative'
        this.$refs.More.style.marginBottom = '-.4rem'
        this.$refs.word.style.height = 'auto'
        this.$refs.word.style.marginBottom = '.88rem'
      } else {
        this.$refs.More.innerHTML = '更多'
        this.$refs.More.style.bottom = 0
        this.$refs.word.style.overflow = 'hidden'
        this.$refs.More.style.position = 'absolute'
        this.$refs.More.style.marginBottom = 0
        this.$refs.word.style.height = '2.5rem'
        this.$refs.word.style.marginBottom = 0
      }
    },
    changePro (id) {
      this.$router.push(`/brand/${this.routerId}/categories/${id}`)
      bus.$emit('tranrouter', { router: this.routerId })
      // console.log("发送", this.routerId);
    }
  }
}
</script>
<style lang="scss" scoped>
.post {
  height: 4.5rem;
  display: block;
  width: 100%;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 4.5rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.letter {
  font-size: 0.46rem;
  color: #fff;
  height: 0.54rem;
  width: 100%;
  line-height: 0.54rem;
  position: absolute;
  top: 3.5rem;
  text-align: center;
  z-index: 3;
  background: rgba(0, 0, 0, 0);
}
p {
  font-size: 0.28rem;
  color: #666;
  padding: 0 0.5rem;
  overflow: hidden;
  line-height: 0.5rem;
  margin: 0 0 0.2rem;
  height: 2.5rem;
  position: relative;
  span {
    font-size: 0.24rem;
    color: #d88358;
    height: 0.88rem;
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), #fff);
    line-height: 0.88rem;
    text-align: center;
  }
}
.SS {
  margin-top: 0.4rem;
  h2 {
    text-indent: 0.4rem;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .swiper {
    margin-left: 0.4rem;
    .swiper-a {
      width: 2.7rem;
      height: 3.6rem;
      img {
        width: 2.7rem;
        display: block;
        position: relative;
      }
      .mask1 {
        width: 2.7rem;
        height: 3.6rem;
        background: rgba(0, 0, 0, 0.04);
        position: absolute;
        top: 0;
        left: 0;
      }
      .price {
        text-align: center;
        height: 0.28rem;
        line-height: 0.28rem;
        .s1 {
          font-size: 0.24rem;
          display: inline-block;
          margin-right: 0.1rem;
          color: black;
        }
        .s2 {
          font-size: 0.24rem;
          color: #ccc;
          text-decoration: line-through;
          display: inline-block;
          margin-left: 0.08rem;
        }
      }
    }
  }
}
.nav {
  list-style: none;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  height: 0.87rem;
  line-height: 0.87rem;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  li {
    width: 2.5rem;
    display: inline-block;
    text-align: center;
    height: 0.87rem;
    line-height: 0.7rem;
    position: relative;
    box-sizing: border-box;
    font-size: 0.28rem;
    color: #666;
    padding: 0 0.3rem;
  }
  li::after {
    width: 0.546333rem;
    height: 0.040333rem;
    transition: all 0.5s ease 0s;
    transform: scale(0);
    content: "";
    position: absolute;
    bottom: 0.26667rem;
    left: 50%;
    text-align: center;
    margin-left: -0.266667rem;
    opacity: 1;
    background-color: #000;
  }
  // li:nth-of-type(1)::after{
  //    transform: scale(1);
  // }
  li:hover::after {
    opacity: 1;
    transform: scale(1);
    // background: #d88358;
  }
}
</style>
