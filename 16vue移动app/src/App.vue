<template>
  <div  class="app-container">    
    <!-- 内容部分  设置动画效果 -->
    <transition mode="out-in">
       <router-view></router-view>
    </transition>
    <!-- 内容部分end -->

    <!-- 底部导航 -->
    <div class="mint-tabbar is-fixed" v-show="tabbarshow">
      <router-link class="mint-tab-item" to="/home">
        <div class="mint-tab-item-icon">
          <span class="iconfont con icon-index tutu"></span>
        </div>
        <div class="mint-tab-item-label">首页</div>
      </router-link>
      <router-link class="mint-tab-item" to="/category">
        <div class="mint-tab-item-icon">
          <span class="iconfont con icon-fenlei tutu tutu1"></span>
        </div>
        <div class="mint-tab-item-label">分类</div>
      </router-link>
       <router-link class="mint-tab-item " to="/car">
        <div class="mint-tab-item-icon">
          <span class="iconfont con icon-zhidemai tutu"></span>
        </div>
        <div class="mint-tab-item-label">购物车</div>
      </router-link>
      <router-link class="mint-tab-item " to="/my">
        <div class="mint-tab-item-icon">
          <span class="iconfont con icon-wode tutu "></span>
        </div>
        <div class="mint-tab-item-label">我的当当</div>
      </router-link>
    </div>

    <!-- <van-tabbar v-model="active" v-show="tabbarshow" fixed>
      <van-tabbar-item icon="home-o" name="home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" name="category" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" name="cart" to="/car">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" name="my" to="/my">我的</van-tabbar-item>
    </van-tabbar> -->
    <!-- 底部导航end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:0,
      tabbarshow:true
    }
  },
  created(){
    if(this.$route.path == "/" || this.$route.path=='/car' ||this.$route.path=='/gg' || this.$route.path == "/search" || this.$route.path == "/login"){
        this.tabbarshow = false;
      }else{
        this.tabbarshow = true;
      }
  },
    watch:{
    "$route.path":function(newpath,oldpath){
      console.log(newpath);
      if(newpath == "/aa" || newpath == "/car" || newpath == "/gg" || newpath == "/search" || newpath == "/login" ){
        this.tabbarshow = false;
      }else{
        this.tabbarshow = true;
      }
    }
  }

}
</script>

 <style lang="scss" >
.app-container {
  // padding-top: 40px;
  padding-bottom: 55px;
  overflow: hidden;
  height: 100%;
  // background: white;
  
}
.mint-tab-item {
  color: #818181;
}

.mint-tabbar > .mint-tab-item.is-selected{
  color: #e53e30 ;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(100%);
  
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
.tutu{
  font-size: 20px;
  line-height: 27px;
  margin-right: 0;
}
.tutu1{
  font-size: 14px;
}
</style>

<style lang="scss" scoped>
  .mint-tab-item {
  color: #818181;
}

.mint-tabbar > .mint-tab-item.is-selected{
  color: #e53e30 ;
}
.tutu{
  font-size: 20px;
  line-height: 27px;
  margin-right: 0;
}
</style>




