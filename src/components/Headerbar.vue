<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
div{
  height: .96rem;
  width: 100%;
  z-index: 2;
  top:0;
  left:0;
  position: fixed;
  color: white;
}
</style>
