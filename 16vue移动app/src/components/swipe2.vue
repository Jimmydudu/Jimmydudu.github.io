<template>
  <div>
    <mt-swipe :auto="4000">  
      <mt-swipe-item v-for="item in lunbotuList" :key="item">
        <img  id="img3" :src="item" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data(){
    return {
      lunbotuList:[
        "../assets/img/xiangqing1.jpg",
        "../assets/img/xiangqing2.jpg",
        "../assets/img/xiangqing3.jpg",
        "../assets/img/xiangqing4.jpg",
        "../assets/img/xiangqing5.jpg"
      ]
    }
  }
};
</script>

 <style lang="scss" scoped>
.mint-swipe{
    position: relative;
    // top: 42px;
    height:360px;
    width: 100%;
        z-index: 2;
  }
  #img3{

      width: 100%;
      height: 100%;

  }
</style>

