<template>
  <div class="swiper-container">
    <div class="swiper-wrapper change">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" id="recomment-swiper-pagination"></div>
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
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
<style lang="scss">
#recomment-swiper-pagination {
  position: absolute;
  bottom: 0.7rem;
  width: 100%;
  text-align: center;
  .swiper-pagination-bullet {
    width: 0.103333rem;
    height: 0.103333rem;
    border-radius: 0;
    background: #fff;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    width: 0.3rem;
    height: 0.103333rem;
    border-radius: 0;
    background: #fff;
    opacity: 1;
  }
}
</style>
