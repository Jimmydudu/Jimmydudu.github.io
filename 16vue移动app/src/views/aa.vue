<template>
  <div>
    <div class="mask">
      <!-- 顶部 -->
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
        <h1 class="mint-header-title">商品详情</h1>
        <div class="mint-header-button is-right">
          <button class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon">
              <i class="mintui mintui-more"></i>
            </span>
            <label class="mint-button-text"></label>
          </button>
        </div>
      </header>

    
        <aa3></aa3>
<!-- </div> -->
    <!-- 底部导航 -->
    <van-goods-action class="gouwuche">
  <van-goods-action-icon
    icon="like-o"
    @click="addlike"
    class="like-o"
    text="收藏"
  />
  <van-goods-action-icon
  to="/car"
  v-if="this.$store.state.newcarlrnght==0"
  v-bind:info="0" 
    icon="cart-o"
    text="购物车"
  />
   <!-- v-bind:info="this.$store.state.newcarlrnght" -->
  <van-goods-action-icon
v-else
  to="/car"
  v-bind:info="this.$store.state.newcarlrnght"
    icon="cart-o"
    text="购物车"
    
  />

  <van-goods-action-icon
    icon="shop-o"
    text="店铺"
  />
  <van-goods-action-button
    type="warning"
    text="加入购物车"
    @click="onClickButton"
  />
  <van-goods-action-button
    type="danger"
    text="立即购买"
  />
</van-goods-action>
    <!-- 底部导航end -->
    </div>
  </div>
</template>

<script>
import swipe2 from "../components/swipe2.vue";
// import  aa1 from "../components/aa1.vue"
// import  aa2 from "../components/aa2.vue"
import  aa3 from "../components/aa3.vue"
import { Toast } from 'vant';
export default {
  data() {
    return {
      
      ifon:this.$store.state.newcarlrnght ,
      msg:0
    }
  },
  components: {
    swipe2,
    aa3
  },
  methods: {
    onClickIcon() {
      
      Toast('点击图标');
    },
    onClickButton() {
      Toast('加入购物车成功');
      this.msg++
      this.ifon +=1
      this.$store.commit("addcar" ,{ifon:this.ifon ,index:this.$route.query.id,geshu:this.msg})
    },
    addlike(){   //加入收藏列表
      Toast('收藏成功');
      document.getElementsByClassName("like-o")[0].style.color="red"
      console.log(this.$route.query.id); //商品id
      this.$store.state.likearray.push(this.$store.state.shudanxiangqing[this.$route.query.id])
      console.log(this.$store.state.likearray);
      this.$store.state.likenum +=1     
    }
  }

};
</script>

<style lang="scss">
.mask {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 1000px;
  background-color: #efeff4;
  z-index: 2;
  .mint-header {
    background: white;
    color: #333;
    border-bottom: 1px solid #d8d8d8;
  }
}
.promo_label_banner {
//   margin-top: 44px;
  position: relative;
  z-index: 2;
  
}
.detail {
  text-indent: 58px;
   background: white;
  background-image: url(../assets/img/icon_zy.png);
  background-position: 5px 1px;
  background-repeat: no-repeat;
  background-size: 50px 21px;
}
article {
  display: -webkit-box;
//   margin: 3px 3px 3px 3px;
  font-size: 13px;
  color: #4d525d;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-break: break-all;
  font-size: 15px;
}
.product_subname{
    background: white;
    color: rgb(150,150,150);
        font-size: 12px;
    // margin: 0 6px 0px 6px;
}
.new_price_div{
    overflow: hidden;
    background: white;
}
.new_left{
    font-size: 17px;
    color: #ff463c;
    padding-left: 3px;
    // padding-right: 15px;
    float: left;
}
.discount{
    display: block;
    float: left;
    color: #969696;
    
}
.main_price_div{
    float: left;
}
#main_price{
    margin-right: 10px;
}
.van-goods-action-icon.van-hairline{
  font-size: 13px;
}
</style>
