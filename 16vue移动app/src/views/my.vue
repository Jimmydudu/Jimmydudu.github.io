<template>
  <div>
   <header class="mint-header">
      <div class="mint-header-button is-left">
        <router-link to="/home" tag="a" class="router-link-active" id="fanhui">
          <button class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon">
              <i class="mintui mintui-back"></i>
            </span>
            <label class="mint-button-text"></label>
          </button>
     
        </router-link>
      </div>
      <h1 class="mint-header-title">我的当当</h1>
      <div class="mint-header-button is-right">
        <button class="mint-button mint-button--default mint-button--normal">
          <span class="mint-button-icon">
            <i class="mintui mintui-more"></i>
          </span>
          <label class="mint-button-text"></label>
        </button>
      </div>
    </header>

    <section1></section1>
    <section2></section2>
   
   <router-link to="/likelist" class="slide-link dingdan">
    <!-- <a class="slide-link dingdan" href=""> -->
            <img   src="../assets/img/tag1.png">
            我的订单            <em>查看全部购买商品</em>
        <!-- </a> -->
        </router-link>
        <section3></section3>
        <section4></section4>
        <section5></section5>

  </div>
</template>

<script>
import section1 from '../components/section1.vue'
import section2 from '../components/section2.vue'
import section3 from '../components/section3.vue'
import section4 from '../components/section4.vue'
import section5 from '../components/section5.vue'
// import shoucang from '../components/shoucang.vue'
export default {
  components:{
    section1,
    section2,
    section3,
    section4,
    section5,
    // shoucang,
  }
}
</script>

<style scoped>
.mint-header{
  background-color: white;
      color: #464646;
}
.slide-link.dingdan{
  display: block;
  width: 100%;
  color: #999;
  padding: 5px 5px;
  font-size: 13px;
  height:36px;
  background-color: white;
  border-bottom: 1px solid rgb(246,246,246);
  vertical-align: middle;
}

.dingdan img{
    width: 22px;
    height: 22px;
    float: left;
    
  }

  em{
    float: right;
        color: #999;
  }
</style>
