<template>
    <div>
        <div class="head">
            <img src="../assets/del.png" @click="handclick" class="rec">
        </div>
        <section>
        <div class="mid">
            <h6>账号密码登录</h6>
            <p>注册即送2600元新人红包</p>
        </div>
        <div class="logintext">
            <input type="text" placeholder="手机号/邮箱">
            <input type="password" placeholder="密码">
            <input type="submit" value="登录" class="sub">
        </div>
        <div class="foot">
            <img src="../assets/login.png">
        </div>
        </section>
    </div>
</template>
<script>
export default {
    methods:{
        handclick(){
            this.$router.push('/recomment')
        }
    },
    beforeMount () {
    this.$store.commit('delfootTabbar', false)
  },
  beforeDestroy () {
    this.$store.commit('showfootTabbar', true)
  }
}
</script>

<style lang="scss" scoped>
.heade{
    width: 100%;
    height: 1.2rem;
}
section{
    width: 100%;
    padding: 0.7rem;
    .mid{
        height: 1.6rem;
        h6{
            font-size: 0.38rem;
            line-height: 0.8rem;
        }
    }
    .logintext{
        height: 6.2rem;
        width: 6rem;
        input{
            width: 100%;
            border:0.02rem solid #ccc;
            box-sizing: border-box;
            height: 1.2rem;
            padding-left: 0.8rem;
            line-height: 1.2rem;
        }
        .sub{
            margin-top: 0.4rem;
            color: white;
            padding-left: 0;
            font-size: 0.4rem;
            background: #666;
        }
    }
}
</style>

