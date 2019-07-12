<template>
    <div>
        <section id="title">
            <h3>热卖排行</h3>
        </section>
        <section id="newnav">
        <ul>
            <router-link to="/hotcomlist/hotall" tag="li" activeClass="myactive" class="myfocus">全部</router-link>
            <router-link to="/hotcomlist/hotwoman" tag="li" activeClass="myactive">女装</router-link>
            <router-link to="/hotcomlist/hotman" tag="li" activeClass="myactive">男装</router-link>
            <router-link to="/hotcomlist/hotbag" tag="li" activeClass="myactive">箱包</router-link>
            <router-link to="/hotcomlist/hotshoe" tag="li" activeClass="myactive">鞋履</router-link>
         </ul>
         <ul>
            <router-link to="/hotcomlist/hotshipin" tag="li" activeClass="myactive">饰品</router-link>
            <router-link to="/hotcomlist/hotmeizhuang" tag="li" activeClass="myactive">个性美妆</router-link>
            <router-link to="/hotcomlist/hotshenghuo" tag="li" activeClass="myactive">生活方式</router-link>
            <router-link to="/hotcomlist/hotneiyi" tag="li" activeClass="myactive">贴身衣物</router-link>
        </ul>
        </section>
    </div>
</template>
<script>
export default {
  mounted () {
    setTimeout(() => {
      var myfocus = document.querySelector('.myfocus')
      myfocus.click()
    }, 1200)
  }
}
</script>
<style lang="scss" scoped>
div{
    #title{
        margin: 0.14rem 0;
        height: 0.46rem;
        line-height: 0.46rem;
        text-indent: 0.16rem;
    }
#newnav{
    border: 0.02rem solid #aaa;
    ul{
        height: 0.7rem;
        border-left: none;border-right: none;
        padding: 0 0.1rem;list-style: none;
        li{
            float: left;
            text-align: center;
            width: 1.3rem;
            margin: 0.06rem;
            line-height: 0.5rem;
        }
        .myactive{
            border: 0.01rem solid red;
            border-radius: 0.1rem;
        }
    }
}
}
</style>
