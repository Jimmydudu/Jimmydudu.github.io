<template>
  <div class="home">
    <div class="search_box">
      <span class="iconfont con icon-dangdang1 dangdang2"></span>
      <van-search placeholder="搜索商品/店铺" shape="round" class="searchvan" @click="search"/>
      <span class="iconfont con icon-fenlei som"></span>
    </div>
    <swipe></swipe>
    <img class="img1" src="../assets/img/25.jpg" alt srcset>
    <!-- 书本 -->
    <div class="list">
      <list></list>
    </div>
    <!-- 书本end -->
    <!-- 品牌 -->
    <div>
      <img class="biaoti1" src="../assets/img/biaoti1.jpg" alt srcset>
    </div>
    <!-- 品牌end -->
    <div>
      <img class="biaoti2" src="../assets/img/biaoti2.jpg" alt srcset>
    </div>
    <div class="lii2">
      <img class="likeing" src="../assets/img/xiazai.png" alt srcset>
      <b class="like">根据您的偏好猜您可能喜欢</b>
    </div>

    <div>
      <like></like>
    </div>
    <!-- <aa></aa> -->
    <!-- <router-view></router-view> -->
    <img class="redpic" src="../assets/img/redpic.gif" alt srcset>
  </div>
</template>

<script>
import search from "../components/search.vue";
import swipe from "../components/swipe.vue";
import list from "../components/list.vue";
import like from "../components/like.vue";
// import aa from './aa.vue'
export default {
  components: {
    search,
    swipe,
    list,
    like
    // aa
  },
  methods: {
    search() {
      this.$router.push("/search");
    }
  }
};
</script>

<style lang="scss" >
.search_box {
  background: white;
  padding-top: 0;
  height: 60px;
  .dangdang2 {
    display: block;
    float: left;
    width: 10%;
    font-size: 39px;
    line-height: 52px;
    color: #e53e30;
  }
  .searchvan {
    background: none;
    display: block;
    float: left;
    width: 80%;
    padding: 0;
    .van-search__content.van-search__content--round {
      background: white;
    }
    .van-cell.van-cell--borderless.van-field {
      padding-bottom: 0px;
      margin-top: 6px;
      .van-field__left-icon {
        position: relative;
        top: 6px;
        left: 27px;
        i.van-icon.van-icon-search {
          font-size: 20px;
           display: none;
        }
      }
    }
  }
}

input.van-field__control {
  margin: 0;
  border-radius: 17px !important;
}

.con {
  display: block;
  margin: 0 auto;
  line-height: 59px;
  // color: #e53e30;
}
.icon-fenlei {
  // font-size: 23px;
  // color: #818181;
  float: right;
  margin-right: -30px;
}
.som {
  float: right;
  margin-right: 8px;
}
.img1 {
  height: 150px;
  width: 100%;
}
.biaoti1 {
  width: 100%;
  height: 40px;
}
.biaoti2 {
  width: 100%;
  height: 60px;
}
.like {
  color: #313c47;
  font-size: 17px;
  display: block;
  display: inline-block;
  text-align: center;
  margin: 0 auto;
}
b.like {
  font-size: 14px;
  font-weight: 500;
}
.redpic {
  display: block;
  position: fixed;
  top: 360px;
  right: 0;
  width: 50px;
  height: 50px;
}
input.van-field__control {
  margin: 0;
  border-radius: 17px !important;
  padding-left: 26px;
}
.likeing {
  display: inline-block;
  width: 18px;
  height: 18px;
}
.lii2 {
  width: 190px;
  margin: 0 auto;
  font-size: 14px;
}

</style>


