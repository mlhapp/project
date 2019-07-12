<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- Add Pagination -->
    <!-- <div class="swiper-pagination"></div> -->
  </div>
</template>

  <!-- Swiper JS -->

  <!-- Initialize Swiper -->
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  props: ['perview', 'myclass'],
  mounted () {
    new Swiper('.' + this.myclass, {
      slidesPerView: this.perview,
      spaceBetween: 10,
      freeMode: true
    })
  }
}
</script>
