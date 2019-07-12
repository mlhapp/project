<template>
   <section id="loadbox"
        v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="0"
             infinite-scroll-immediate-check="false" >
    <ul>
      <li v-for="data in datalist" :key="data.productId">
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
   <!-- <div>
       list
   </div> -->
</template>
<script>
import axios from 'axios'
import probar from '@/components/Probar'
export default {
//   props: ['id'],
  data () {
    return {
      datalist: [],
      loading: false,
      current: 1
    }
  },
  beforeMount () {
    // bus.$emit('maizuo',false)
    this.$store.commit('delfootTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('showfootTabbar', true)
  },
  components:{
    probar
  },
  mounted () {
    axios
      .get(
        `http://www.mei.com/appapi/search/searchKey/v3?pageIndex=1&q=%E4%B8%AA%E6%8A%A4%E7%BE%8E%E5%A6%86+%E5%8C%96%E5%A6%86%E6%B0%B4&sort=&key=&spm=a2o1p.9077418.0.0.4bf24cabx3ORem&searchKeyWord=%E4%B8%AA%E6%8A%A4%E7%BE%8E%E5%A6%86+%E5%8C%96%E5%A6%86%E6%B0%B4`
      )
      .then(res => {
        this.datalist = res.data.products
        this.totalPages = res.data.totalPages
        // console.log(res.data)
      })
  },
  methods: {
    loadMore () {
      if (this.current === this.totalPages) {
        return
      }
      this.loading = true
      this.current++
      axios({
        url: `http://www.mei.com/appapi/search/searchKey/v3?pageIndex=${this.current}&q=%E4%B8%AA%E6%8A%A4%E7%BE%8E%E5%A6%86+%E5%8C%96%E5%A6%86%E6%B0%B4&sort=&key=&spm=a2o1p.9077418.0.0.4bf24cabx3ORem&searchKeyWord=%E4%B8%AA%E6%8A%A4%E7%BE%8E%E5%A6%86+%E5%8C%96%E5%A6%86%E6%B0%B4`
      }).then(item => {
        this.datalist = [...this.datalist, ...item.data.products]
        this.loading = false
        // console.log(item.data.products)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  height: auto;
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
