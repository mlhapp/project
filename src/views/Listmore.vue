<template>
<div>
  <probar>
      <li class="probar">{{this.$route.params.more1}}</li>
    </probar>
   <section id="loadbox" ref="load"
        v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="0"
             infinite-scroll-immediate-check="false" >
    <ul>
      <li v-for="data in datalist" :key="data.productId" @click="jump(data.productId)">
        <img :src="data.imageUrl" alt />
        <div>
          <p>{{data.tagListDto.tag}}</p>
          <p class="p2">{{data.brandName}}</p>
          <p class="p3">{{data.productName}}</p>
          <span class="s1">￥{{data.price}}</span>
          <span class="s2">￥{{data.marketPrice}}</span>
          <span class="s3">{{data.discount}}折</span>
        </div>
      </li>
    </ul>
   </section>
   </div>
   <!-- <div>
       listmore
   </div> -->
</template>
<script>
import axios from 'axios'
import probar from '@/components/Probar'
export default {
  props: ['id', 'id1', 'more', 'more1'],
  data () {
    return {
      datalist: [],
      loading: false,
      current: 1,
      title: null
    }
  },
  components: {
    probar
  },
  mounted () {
    console.log(this.$route.params.more1)
    console.log(this.$route.params.more)
    axios
      .get(
        `http://www.mei.com/appapi/secondcategory/search/v3?brandNames=&chineseCodes=&pageIndex=1&categoryId=${this.$route.params.id}&siloId=${this.$route.params.id1}&thirdCategories=${this.$route.params.more}&key=&sort=&timestamp=1562893563425&summary=7a6286e1332c3ddd8e6233e1d797fa8d&platform_code=H5`
      )
      .then(res => {
        if (res.data.products.length === 0) {
          this.$refs.load.innerHTML = '没有更多数据'
          this.$refs.load.style.width = '100%'
          this.$refs.load.style.textAlign = 'center'
          this.$refs.load.style.marginTop = '4rem'
          this.$refs.load.style.color = '#aaa'
          this.$refs.load.style.fontSize = '.32rem'
        }
        this.datalist = res.data.products
        this.totalPages = res.data.totalPages
        // this.title =
        console.log(res.data)
      })
    // console.log(this.$route.params.id,this.$route.params.more)
  },
  beforeMount () {
    // bus.$emit('maizuo',false)
    this.$store.commit('delfootTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('showfootTabbar', true)
  },
  methods: {
    loadMore () {
      if (this.current === this.totalPages) {
        return
      }
      this.loading = true
      this.current++
      axios({
        url: `http://www.mei.com/appapi/secondcategory/search/v3?brandNames=&chineseCodes=&pageIndex=${this.current}&categoryId=${this.$route.params.id}&siloId=${this.$route.params.id1}&thirdCategories=${this.$route.params.more}&key=&sort=&timestamp=1562893563425&summary=7a6286e1332c3ddd8e6233e1d797fa8d&platform_code=H5`
      }).then(item => {
        this.datalist = [...this.datalist, ...item.data.products]
        this.loading = false
        // console.log(item.data.products)
      })
    },
    jump (id) {
      this.$router.push(`/productdetail/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  height: auto;
  .probar {
    width: 5.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 3.3rem;
      position: relative;
      margin-left:.3rem;
      img {
        width: 100%;
        display: block;
        margin-bottom: 0.08rem;
      }
      .p2 {
        font-size: 0.28rem;
        font-weight: bold;
        margin-bottom: 0.05rem;
      }
      .p3 {
        font-size: 0.24rem;
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 0.05rem;
      }
      span {
        font-size: 0.24rem;
      }
      .s1 {
        color: #dd2828;
      }
      .s2 {
        color: #ccc;
        text-decoration: line-through;
        padding-left: 0.2rem;
      }
      .s3 {
        color: #666;
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
