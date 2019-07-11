<template>
  <div>
    <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in lunbotuList" :key="index">
        <img v-bind:src="item" alt="" srcset="">
      </div>

    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>

  </div>
</template>

<script>
import Swiper from 'swiper';
export default {

  data(){
    return {
      lunbotuList:[
        "../assets/img/21.jpg",
        "../assets/img/22.jpg",
        "../assets/img/23.jpg",
        "../assets/img/24.jpg"
      ]
    }
  },
  mounted() {
     new Swiper('.swiper-container', {
       autoplay:true,
      pagination: {
        el: '.swiper-pagination',
        
      },
    });
  },
};
</script>

 <style lang="scss" >
 .swiper-pagination-bullet{
   background: #000;
   
 }
 .swiper-pagination-bullet-active{
     background: red  !important;
   }
.mint-swipe{
    height:100px;
    width: 100%;
    
  }
  #img3{
      width: 100%;
      height: 100%;

  }
</style>

