<template>
  <div class="car1">
    <!-- <h1>顶部</h1> -->
    <header class="mint-header">
      <div class="mint-header-button is-left">
        <router-link to="/home" class="router-link-active" id="fanhui" tag="a">
          <button class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon">
              <i class="mintui mintui-back"></i>
            </span>
            <label class="mint-button-text"></label>
          </button>
        </router-link>
      </div>

      <h1 class="mint-header-title">购物车</h1>
      <div class="mint-header-button is-right">
        <button class="mint-button mint-button--default mint-button--normal">
          <span class="mint-button-icon">
            <i class="mintui mintui-more"></i>
          </span>
          <label class="mint-button-text"></label>
        </button>
      </div>
    </header>
    <!-- 顶部end -->

    <!-- 购物车为空的时候 -->
    <div v-if="this.$store.state.newcarlrnght==0">
      <div class="list_null">
        <p class="desc">您还没有购买任何商品</p>
        <div>
          <router-link to="/home" tag="a">逛一逛</router-link>
          <!-- <a href></a> -->
          <a href>我的收藏</a>
        </div>
      </div>
    </div>
    <!-- 购物车为空的时候 -->

    <!-- 购物车不为空的时候 -->
    <div v-else>
      <!-- 复选框 -->
      <div class="carlist">
          <van-checkbox
            v-for="(item,index) in CartList"
            :key="index"
            :name="item"
            class="car3"
            checked-color="#e53e30"
            v-model="item.isshow"
          >
            <img :src="item.imgsrc" alt srcset class="carimg">
            <p>{{item.article}}</p>
            <span>{{item.price1}}{{item.paice2}}</span>
            <br>
            <i>x{{item.times}}</i>
            <!-- 步进器 -->
            <div class="stepper2">
              <van-button size="mini" @click="xiugai1(index)" class="btnjia">+</van-button>
              <van-button size="mini" @click="xiugai2(index)" class="btnjia">-</van-button>
              <div class="dele">
                <van-icon name="delete"  @click="dele(index)"/>
              </div>
            </div>
          </van-checkbox>
      </div>
    </div>
    <!-- 购物车不为空的时候 -->
    <div class="em1">
      <img src="../assets/img/xiazai.png" alt srcset>
      <span>根据您的偏好猜您可能喜欢</span>
    </div>
    <div class="like">
    <like></like>
    </div>

    <van-submit-bar :price="Tprice"  button-text="提交订单" v-if="this.$store.state.newcarlrnght!=0"
    @submit="adddinglist"
    >
      <van-checkbox v-model="checked" checked-color="#e53e30" @click="checkeds">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import like from "../components/like.vue";
import { log } from "util";
export default {
  data() {
    return {
      // isshow:true,
      //  value: this.$store.state.newcar[times],
       CartList: [],
      Tprice:0,
      value: 1,
      // list: ['a', 'b', 'c'],
      // result: ['a', 'b'],
      list: [],
      result1: this.$store.state.newcar,
      checked: true,
      
    };
  },
  components: {
    like
  },
  mounted() {},
  methods: {
    xiugai1(index) {
      // .times++
      event.stopPropagation();
      this.$store.commit("xiugai11", index);
    },
    xiugai2(index) {
      // .times--
      event.stopPropagation();
      this.$store.commit("xiugai22", index);
    },
    dele(index) {
      event.stopPropagation();
      this.$store.commit("deld", index);
      // this.$store.state.newcar.splice( this.$store.state.newcar[index],1)
    },
    totalPrice(){ //总价格计算
        var num1 = 0;
        this.CartList.forEach((data)=>{
          if(data.isshow){
            num1 += data.times * data.paice2;
          }
        })
        this.Tprice = num1*100 ;
    },
    checkeds(){ //控制选择
      this.CartList.forEach((data)=>{
        return data.isshow = !this.checked;
      })
    },
     datachecked(){
      var num2 = 0;
      this.CartList.forEach((data)=>{
          if(data.isshow){
            num2++;
          }else{
            num2--;
          }
      })

      if(Math.abs(num2) == this.CartList.length){
          this.checked = this.CartList[0].isshow;
      }else{
        this.checked = false;
      }
    },
    adddinglist(){      //添加订单
        // console.log(this.CartList);
        this.$router.push("/likelist")
        this.$store.state.dingarray=[]
         this.CartList.forEach((data)=>{
          if(data.isshow){
           this.$store.state.dingarray.push(data)
           console.log( this.$store.state.dingarray);
          }
        })
        
    }
  },
  created(){
    this.CartList = this.$store.state.newcar;
    console.log(this.$store.state.newcar); 
    this.totalPrice();
  },
  beforeUpdate(){
    this.totalPrice();
    this.datachecked();
  },
};
</script>


<style lang="scss" scoped>
.car1 {
  background: white;
  // margin-bottom: 55px;
}
.list_null {
  width: 100%;
  padding-bottom: 41px;
  // height: 250px;
  padding: 45px 80px;
  padding-top: 190px;
  background-size: 14.1rem 11.7rem;
  background: url(../assets/img/bg.gif) no-repeat;
  background-position: center;
  background-size: 120px 99px;
  border-bottom: solid 1px #ebebeb;
}
.list_null p {
  color: #777;
  font-size: 11px;
  text-align: center;
}
.list_null a {
  display: block;
  float: left;
  width: 84px;
  line-height: 25px;
  border: 1px solid #777;
  border-radius: 6px;
  color: #777;
  margin: 0 6px;
  padding: 4px;
  text-align: center;
  font-size: 13px;
}
#fanhui {
  border: none;
  text-align: left;
}
.mint-header {
  background-color: white;
  color: #464646;
}
div.em1 {
  width: 186px;
  margin: 0 auto;
  margin-bottom: 20px;
  // position: relative;
  top: 23px;
}
.em1 img {
  width: 18px;
  height: 18px;
}
.em1 span {
  font-size: 14px;
  text-align: center;
}
.carlist{
  clear: both;
}
.carimg {
  width: 90px;
  height: 90px;
  display: block;
  float: left;
}
.carlist{
  // background: #efeff4;
   border: 1px solid #efeff4;
}
.carlist p {
  display: block;
  height: 39px;
  overflow: hidden;
  color: #323232;
  font-size: 14px;
}
.car3 {
  margin: 15px;
  // padding: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #efeff4;
}

input.van-stepper__input {
  width: 28px;
  height: 28px;
  margin: 0;
  padding: 0;
}
.van-submit-bar__button {
  width: 30%;
}
.btnjia {
  width: 20px;
  height: 29px;
  line-height: 20px;
  font-size: 20px;
}
.dele {
  display: inline-block;
  position: relative;
  top: 5px;
  left: 34px;
  z-index: 20;
}
div.van-submit-bar__bar{
  margin-left: 11px;
}
.like{
  overflow: hidden;
}
</style>