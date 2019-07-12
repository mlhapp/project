<template>
    <article>
        <img class="banner" src="http://cdn13.mei.com/category/20180601/816c4a87ab4a9ecc4440b206ef0f40ca25aecd78fee7fcaf.jpg">
        <div class="youhui">
            <div class="left">
                <span>￥{{youhui.amount}}</span>
            </div>
            <div class="mid">
                <h6>NEW</h6>
                <p>{{youhui.des1}}</p>
                <p>{{youhui.des2}}</p>
                <span>{{youhui.beginTime}}-{{youhui.endTime}}</span>
            </div>
            <div class="right">领取优惠券</div>
        </div>
    </article>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      youhui: []
    }
  },
  mounted () {
    axios.get(`https://www.mei.com/appapi/mkt/newZoneCoupon?credential=`).then(
      res => {
        this.youhui = res.data
      })
  }
}
</script>
<style lang="scss" scoped>
article{
    .banner{
        width: 100%;
    }
    .youhui{
        width: 85%;
        height: 2.2rem;
        padding: 0.4rem;
        .left{
            height: 2rem;
            width: 2.4rem;
            float: left;
            color: #DD2828;
            text-indent: 0.2rem;
            font-size: 0.68rem;
            line-height: 2rem;
            box-sizing: border-box;
            border:0.02rem solid #ccc;
            border-radius: 0.2rem 0 0 0.2rem;
            border-right: none;
        }
        .mid{
            height: 2rem;
            width: 3rem;
            float: left;
            padding: 0.2rem 0;
            box-sizing: border-box;
            border-top:0.02rem solid #ccc;
            border-bottom:0.02rem solid #ccc;
            h6{
                background: #DD2828;
                color: white;
                display: inline-block;
            }
            p{
                color: black;
            }
            span{
                display: block;
                color: #aaa;
                font-size: 0.18rem;
            }
        }
        .right{
            height: 2rem;
            width: 0.88rem;
            float: left;
            background: #DD2828;
            border-radius: 0 0.2rem 0.2rem 0;
            color: white;
            font-size: 0.24rem;
            padding:0.1rem 0.3rem;
            box-sizing: border-box;
        }
    }
}
</style>
