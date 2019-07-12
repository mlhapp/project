<template>
    <div>
        <h6>品牌上新<span>|09 JUL</span></h6>
        <div class="chizhuang">
            <h6>{{onename.englishName}}</h6>
            <p><span>{{onename.newBrandCountContent}}</span>{{onename.chineseName}}</p>
            <ul>
                <li v-for="data in datalist" :key="data.productId">
                    <img class="le" :src="data.imageUrl">
                    <p>{{data.itemPriceDto.price}}</p>
                    <p>{{data.marketPrice}}</p>
                </li>
                <li v-for="data in smalllist" class="r" :key="data.productId">
                    <img :src="data.imageUrl">
                </li>
            </ul>
        </div>
        <div class="chizhuang">
            <h6>{{twoname.englishName}}</h6>
            <p><span>{{twoname.newBrandCountContent}}</span>{{twoname.chineseName}}</p>
            <ul>
                <li v-for="data in onelist" :key="data.productId">
                    <img class="le" :src="data.imageUrl">
                    <p>{{data.itemPriceDto.price}}</p>
                    <p>{{data.marketPrice}}</p>
                </li>
                <li v-for="data in twolist" class="r" :key="data.productId">
                    <img :src="data.imageUrl">
                </li>
            </ul>
        </div>
        <div class="chizhuang">
            <h6>{{therename.englishName}}</h6>
            <p><span>{{therename.newBrandCountContent}}</span>{{therename.chineseName}}</p>
            <ul>
                <li v-for="data in therelist" :key="data.productId">
                    <img class="le" :src="data.imageUrl">
                    <p>{{data.itemPriceDto.price}}</p>
                    <p>{{data.marketPrice}}</p>
                </li>
                <li v-for="data in fourelist" class="r" :key="data.productId">
                    <img :src="data.imageUrl">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      smalllist: [],
      onelist: [],
      twolist: [],
      therelist: [],
      fourelist: [],
      onename: [],
      twoname: [],
      therename: []
    }
  },
  mounted () {
    axios.get(
      'https://www.mei.com/appapi/ninenew/newBrandEvent/v1?pageIndex=1&credential'
    ).then(res => {
      console.log(res.data.eventList[1])
      this.datalist.push(res.data.eventList[0].products[0], res.data.eventList[0].products[1])
      this.onelist.push(res.data.eventList[1].products[0], res.data.eventList[0].products[1])
      this.therelist.push(res.data.eventList[2].products[0], res.data.eventList[0].products[1])
      this.smalllist.push(res.data.eventList[0].products[2], res.data.eventList[0].products[3],
        res.data.eventList[0].products[4], res.data.eventList[0].products[5])
      this.twolist.push(res.data.eventList[1].products[2], res.data.eventList[1].products[3],
        res.data.eventList[1].products[4], res.data.eventList[1].products[5])
      this.fourelist.push(res.data.eventList[2].products[2], res.data.eventList[2].products[3],
        res.data.eventList[2].products[4], res.data.eventList[2].products[5])

      this.onename = res.data.eventList[0]
      this.twoname = res.data.eventList[1]
      this.therename = res.data.eventList[2]
    })
  }
}
</script>
<style lang="scss" scoped>
div{
    background: #F5F5F5;
    height: 16.2rem;
    h6{
        width: 100%;
        line-height: 1.2rem;
        height: 1.2rem;
        font-size: 0.38rem;
        color: black;
        padding-left:0.3rem;
        box-sizing: border-box;
        span{
            color: #777;
        }
    }
    .chizhuang{
        margin: 0 0.28rem 0.28rem 0.28rem;
        height: 4.72rem;
        background: white;
        border-radius: 0.1rem;
        h6{
            height: 0.7rem;
            width: 5rem;
             line-height: 0.7rem;
        }
        p{
            height: 0.3rem;
            font-size: 0.2rem;
            line-height: 0.3rem;
            padding-left:0.3rem;
            box-sizing: border-box;
            span{
                border:0.02rem solid black;
            }
        }
        ul{
            list-style: none;
            li{
                    width: 2rem;
                   float: left;
                   padding: 0.2rem;
                .le{
                    width: 100%;
                }
                p{
                    height: 0.28rem;
                    text-align: center;
                }
            }
            .r{
                width: 0.5rem;
                img{
                    width: 0.6rem;
                    float: left;
                }
            }
        }
    }
}
</style>
