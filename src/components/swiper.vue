<template>
  <div class="swiper-container ">
    <div class="swiper-wrapper change">
       <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted () {
    new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 2000
    },
    //如果需要分页器
    pagination: {
      el: '.swiper-pagination'
    }
    })
  }
}
</script>
<style lang="scss" scoped>
// .swiper-pagination{
//   top:8rem;
// }
</style>
