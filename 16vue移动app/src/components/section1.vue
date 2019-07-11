<template>
  <div>
    <section class="user-basic">
      <div class="table ">
        <div class="cell " v-if="this.$store.state.iflog==0">
          <router-link to="/login" tag="a" class="login-link j_loginLink">登录/注册</router-link>
          <!-- <a class="login-link j_loginLink" href="javascript:void(0);" data-url>登录/注册</a> -->
        </div>
        <div class="cell " v-else>
          用户名：
          <span>
           
            {{this.whatname}}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      whatname:this.$store.state.yonghuming
    }
  },
}
</script>

<style lang="scss">
section.user-basic {
  position: relative;
  z-index: 2;
  background: url(../assets/img/user-bg.jpg)
    no-repeat center center;
  background-size: 100% 100%;
  width: 360px;
  height: 100px;
}
div.table{
      display: table;
    width: 100%;
    height: 6px;
}
div.cell{
      position: relative;
    top: 42px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #ffffff;
}
a.login-link.j_loginLink {
    display: inline-block;
    line-height: 1.85rem;
    padding: 0 1.125rem;
    border: .05rem solid #ffffff;
    border-radius: .95rem;
    font-size: .8rem;
    text-align: center;
    
     color: #ffffff !important;
    
}
</style>