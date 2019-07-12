<template>
  <div>
    <probar>
      <li class="probar">{{title.eventName}}</li>
    </probar>
    <section
      id="loadbox"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false"
    >
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
</template>
<script>
import axios from 'axios'
import probar from '@/components/Probar'
// import bus from '@/bus'
// import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from '@/type'
export default {
  props: ['id'],
  data () {
    return {
      datalist: [],
      loading: false,
      current: 1,
      title: null
    }
  },
  beforeMount () {
    // bus.$emit('maizuo',false)
    this.$store.commit('delfootTabbar', false)
  },
  components: {
    probar
  },
  mounted () {
    axios
      .get(
        `http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.$route.params.id}&key=&sort=&timestamp=1562719371783&summary=5c55e0f68413a24a83e0fb0eacb498c1&platform_code=H5`
      )
      .then(res => {
        this.datalist = res.data.products
        this.totalPages = res.data.totalPages
        this.title = res.data
        // console.log(this.title)
      })
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
        url: `http://www.mei.com/appapi/event/product/v3?pageIndex=${this.current}&categoryId=${this.$route.params.id}&key=&sort=&timestamp=1562723464455&summary=5ad37ff2f806a6ef695506ea86583ac2&platform_code=H5`
      }).then(item => {
        this.datalist = [...this.datalist, ...item.data.products]
        this.loading = false
        console.log(item.data.products)
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
      margin-left: 0.3rem;
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
