<template>
    <div>
        <section id="title">
            <div>今日新品</div>
            <div class="mid">本周新品</div>
            <div class="last">筛选</div>
        </section>
        <section id="newnav">
        <ul>
            <router-link to="/newcomlist/newall" tag="li" activeClass="myactive" class="myfocus">全部</router-link>
            <router-link to="/newcomlist/newwoman" tag="li" activeClass="myactive">女装</router-link>
            <router-link to="/newcomlist/newman" tag="li" activeClass="myactive">男装</router-link>
            <router-link to="/newcomlist/newbag" tag="li" activeClass="myactive">箱包</router-link>
            <router-link to="/newcomlist/newshoe" tag="li" activeClass="myactive">鞋履</router-link>
         </ul>
         <ul>
            <router-link to="/newcomlist/newshipin" tag="li" activeClass="myactive">饰品</router-link>
            <router-link to="/newcomlist/newyintong" tag="li" activeClass="myactive">婴童</router-link>
            <router-link to="/newcomlist/newneiyi" tag="li" activeClass="myactive">贴身衣物</router-link>
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
        display: flex;
        justify-content: space-between;
        div{
            line-height: 0.46rem;
            font-size: 0.28rem;
            padding:0 0.08rem;
        }
        .mid{
            border-bottom: 0.04rem solid black;
        }
        .last{
            border-left: 0.02rem solid black;
        }
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
