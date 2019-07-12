<template>
    <div>
        <input type="text" >
        <span>取消</span>
        <div>
            <p>搜索发现</p>
        </div>
        <div>
            <p>历史搜索</p>
        </div>
    </div>
</template>

<script>
export default {
     beforeMount () {
    // bus.$emit('maizuo',false)
    this.$store.commit('delfootTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('showfootTabbar', true)
  },
}
</script>
<style lang="scss" scoped>
input{
    width:5.76rem;
    height:.64rem;
    background: #f5f5f5;
    border:0;
    outline: none;
}
</style>
