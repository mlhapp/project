<template>
  <div>
    <div class="banner" @click="jump">
      <img :src="data.main_image" />
      <section>
        <h3>{{data.main_title}}</h3>
        <p>{{data.sub_title}}</p>
        <p>{{data.description}}</p>
      </section>
    </div>
    <newbar class="new">
      <li v-for="data in newlist" :key="data.categoryTwoId" @click="url(data.categoryOneId,data.siloId,data.categroyTwoName,data.categoryOneName)">
        <img :src="data.categoryImgStr" />
      </li>
    </newbar>
    <section
      id="loadbox"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false"
    >
      <div v-for="da in datalist" :key="da.eventId" id="myload" @click="detail(da.eventId)">
        <img :src="da.imageUrl" />
        <div class="info">
          <p>{{da.englishName}}</p>
          <p>{{da.chineseName}}</p>
          <p>{{da.discountText}}</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import newbar from '@/components/Newbar'
export default {
  data () {
    return {
      data: null,
      datalist: [],
      loading: false,
      current: 1,
      newlist: []
    }
  },
  mounted () {
    axios({
      url:
        'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000003&platform_code=PLATEFORM_H5'
    }).then(res => {
      // console.log(res.data.banners[0]);
      this.data = res.data.banners[0]
      // console.log(this.data.link_url)
    })

    axios({
      url:
        'http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=1&timestamp=1562398651366&summary=fb275853678d0e0f5fc1447aaeaf4a7c&platform_code=H5'
    }).then(item => {
      // console.log(item.data.eventList);
      this.datalist = item.data.eventList
      this.totalPages = item.data.totalPages
    })
    axios({
      url:
        'http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000003&ids=2042000100000000431&timestamp=1562633823135&summary=cfa106d52a1936a20287ce8aaf7e9d06&platform_code=H5'
    }).then(res => {
      this.newlist = res.data.resultList[0].data
      // console.log(this.newlist);
    })
  },
  methods: {
    loadMore () {
      if (this.current === this.totalPages) {
        return
      }
      this.loading = true
      this.current++
      axios({
        url: `http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=${this.current}&timestamp=1562398651366&summary=fb275853678d0e0f5fc1447aaeaf4a7c&platform_code=H5`
      }).then(item => {
        this.datalist = [...this.datalist, ...item.data.eventList]
        this.loading = false
      })
    },
    detail (id) {
      this.$router.push(`/productlist/${id}`)
    },
    jump () {
      this.$router.push(`/list`)
    },
    url (id, id1, more, more1) {
      this.$router.push(`/listmore/${id}/${id1}/${more}/${more1}`)
    }
  },
  components: {
    newbar
  }

}
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 9rem;
  position: relative;

  section {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2rem;
    top: 6.3rem;
    color: black;
    h3 {
      width: 100%;
      font-size: 0.52rem;
      color: #fff;
      text-align: center;
      margin: 0 0 0.06rem;
    }
    p {
      width: 100%;
      text-align: center;
      font-size: 0.28rem;
      color: #fff;
    }
  }
  img {
    width: 100%;
  }
}
.new {
  display: flex;
  justify-content:center;
  padding-top:.1rem;
  margin-left:-.08rem;
  li {
    width:1.236rem;
    list-style: none;
    margin-left:.18rem;
    img {
      width:1.236rem;
      display: block;

    }
  }
}

#loadbox {
  width: 100%;
  #myload {
    position: relative;
    margin: 0 0.3rem 0.2rem 0.3rem;
    img {
      width: 100%;
      display: block;
    }
    .info {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2rem;
      width: 100%;
      z-index: 1;
      background: linear-gradient(
        to top,
        rgba(125, 125, 125, 0.5) 0%,
        rgba(226, 226, 226, 0) 100%
      );
      p {
        color: white;
        font-size: 0.28rem;
        text-align: left;
        line-height: 0.4rem;
        font-size: 0.28rem;
        text-indent: 0.1rem;
      }
      p:nth-of-type(1) {
        padding-top: 0.7rem;
        font-size: 0.32rem;
      }
    }
  }
}
</style>
