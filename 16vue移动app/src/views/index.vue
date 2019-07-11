<template>
  <div >
     <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
         <img alt="Vue logo" src="../assets/img/yindao.png" />
         <h1>我的当当新登场</h1>
         <h2>功能全掌握</h2>
         </div>
      <div class="swiper-slide"><img alt="Vue logo" src="../assets/img/yindao3.png" />
         <h1>新增品牌商家</h1>
         <h2>优惠享不停</h2>
         </div>
      <div class="swiper-slide"><img alt="Vue logo" src="../assets//img/yindao4.jpg" />
         <h1>全新体验，猜您喜欢</h1>
         <h2>为您量身定制的精品书</h2>
         <van-button plain type="primary" url="/gg" class="btn">点击体验</van-button>
         </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from 'swiper';

export default {
mounted() {
   new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
},
created(){
  if(localStorage.One){
    this.$router.push("/gg");
    // this.$router.push("/gg")
  }else{
    localStorage.One = true;
  }
}
}
</script>

<style lang="scss" scoped>
 
    .swiper-container {
      position: fixed;
      top: 0;
      left: 0;;
      width: 100%;
      height: 100%;
      text-align: center;
      z-index: 2;
    }
    .swiper-slide {
      background: #fffef9;
      h1{
        color: #d3d7d4;
        margin-top: 10px;
        font-size: 22px;
      }
      h2{
        color: #464547;
        margin-top: 10px;
        font-size: 33px;
      }
      img{
        width: 200px;
        height: 200px;
        margin-top: 100px;
      }
      .btn{
    margin-top: 39px;
    border: 1px solid #ccc;
    color: black;
    background: none;
      }
    }
</style>
