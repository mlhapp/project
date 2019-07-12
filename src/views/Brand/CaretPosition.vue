<template>
  <section id="loadbox"
        v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="0"
             infinite-scroll-immediate-check="false" >
    <ul class="post">
      <li v-for="data in datalist" :key="data.productId">
        <img :src="data.fileUrl" alt />
        <div>
          <!-- <p>{{data.tagListDto.tag}}</p> -->
          <p class="p2">{{data.brandName}}</p>
          <p class="p3">{{data.productName}}</p>
          <span class="s1">￥{{data.price}}</span>
          <span class="s2">￥{{data.marketPrice}}</span>
          <span class="s3">{{data.discount}}折</span>
        </div>
      </li>
    </ul>
 </section>
</template>
<script>
import axios from "axios";
import bus from "@/bus";
export default {
  props: ["id"],
  data() {
    return {
      datalist: [],
      routeId: null,
      loading: false,
      current: 1,
      hasNext:true
    };
  },
  beforeMount() {
    bus.$on("tranrouter", ({ router }) => {
      this.routeId = router;
      //  console.log('接收',this.routeId)
      axios
        .get(
          ` http://www.mei.com/appapi/brand/product/secCategoryProduct/v3?logoId=${this.routeId}&pageIndex=1&categoryId=${this.$route.params.id}`
        )
        .then(res => {
          this.datalist = res.data.body.categoryProducts;
        //   console.log(this.datalist);
        });
    });
  },
  methods: {
    loadMore () {
      if (this.hasNext === false) {
        return
      }
      this.loading = true
      this.current++
      axios({
        url: `http://www.mei.com/appapi/brand/product/secCategoryProduct/v3?logoId=${this.routeId}&pageIndex=${this.current}&categoryId=${this.$route.params.id}`
      }).then(item => {
        this.datalist = [...this.datalist, ... item.data.body.categoryProducts]
        this.loading = false
        this.hasNext = item.data.body.categoryProducts.hasNext
        // console.log(item.data)
      })
    }
  }
};
</script>
<style lang="scss" scoped>
div {
   .post {
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
