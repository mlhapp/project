<template>
<div>
    <ul v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="0"
             infinite-scroll-immediate-check="false" :key="datalist.length">
        <li v-for="(data,dataindex) in datalist" :key="dataindex">
            <img :src="data.imageUrl">
            <h5>{{data.brandName}}</h5>
            <p>{{data.productName}}</p>
            <h6 class="l">￥{{data.price}}<span>￥{{data.marketPrice}}</span></h6>
        </li>
    </ul>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      current: 1
    }
  },
  mounted () {
    axios.get(
      `https://www.mei.com/appapi/ninenew/getCategoryProductList/v3?pageIndex=1&sort&key&newType=2&minPrice&maxPrice&brandNames&frontFirstCategoryIds=414&frontSecondCategoryIds&frontThirdCategoryIds&productSizes&cmsId&size`
    ).then(res => {
      //   console.log(res.data.products);
      this.datalist = res.data.products
      this.totalPage = res.data.totalPage
    })
  },
  methods: {
    loadMore () {
      this.loading = true
      this.current++
      if (this.current === this.totalPage) {
        return
      }
      axios({
        url: `https://www.mei.com/appapi/ninenew/getCategoryProductList/v3?pageIndex=${this.current}&sort&key&newType=2&minPrice&maxPrice&brandNames&frontFirstCategoryIds=414&frontSecondCategoryIds&frontThirdCategoryIds&productSizes&cmsId&size`
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.products]
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
ul{
    list-style: none;
    li{
        width: 3.56rem;
        float: left;
        overflow: hidden;
        height: 5.8rem;
        margin:0.09rem;
        img{
            width: 3.36rem;
        }
        h5,p,h6{
            width: 3.36rem;
            overflow: hidden;
            white-space:nowrap;
        }
    }
}
</style>
