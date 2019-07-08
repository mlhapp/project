<template>
  <div>
    <swiper :key="datalist.length" class="swiper">
      <li v-for="data in datalist" :key="data.id" class="swiper-slide">
        <img :src="data.main_image" />
      </li>
    </swiper>
  </div>
</template>

<script>
import swiper from '@/components/Swiper'
import axios from 'axios'
export default {
  components: {
    swiper
  },
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios
      .get(
        'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5'
      )
      .then(res => {
        this.datalist = res.data.banners
        console.log(this.datalist)
      })
  }
}
</script>
<style lang="scss" scoped>
.swiper {
  height: 9.2rem;
  img {
    width: 100%;
  }
}
</style>
