<template>
  <div class="category1">
    <!-- 搜索框 -->
    <div class="box1">
      <!-- <router-link to="/home" tag="a">
        <span class="iconfont con icon-dangdang1"></span>
      </router-link>
      <search class="search2"></search>
      <div class="menupic">
        <img src="../assets/img/menu.png" alt srcset>
      </div>-->

      <span class="iconfont con icon-dangdang1 dangdang3"></span>
      <van-search placeholder="搜索商品/店铺" shape="round" class="searchvan2"/>
      <div class="menupic">
        <img src="../assets/img/menu.png" alt srcset>
      </div>
    </div>

    <!-- 搜索框end -->

    <div class="mui-content mui-row mui-fullscreen">
      <div class="mui-col-xs-3">
        <router-link to="/category/tushu1" tag="a" class="xsa">{{tab[0]}}</router-link>
        <router-link to="/category/tushu2" tag="a" class="xsa">{{tab[1]}}</router-link>
        <router-link to="/category/tushu3" tag="a" class="xsa">{{tab[2]}}</router-link>
        <router-link to="/category/tushu4" tag="a" class="xsa">{{tab[3]}}</router-link>
        <router-link to="/category/tushu5" tag="a" class="xsa">{{tab[4]}}</router-link>
        <router-link to="/category/tushu6" tag="a" class="xsa">{{tab[5]}}</router-link>
        <router-link to="/category/tushu7" tag="a" class="xsa">{{tab[6]}}</router-link>
        <router-link to="/category/tushu8" tag="a" class="xsa">{{tab[7]}}</router-link>
        <router-link to="/category/tushu9" tag="a" class="xsa">{{tab[8]}}</router-link>
        <router-link to="/category/tushu10" tag="a" class="xsa">{{tab[9]}}</router-link>
        <router-link to="/category/tushu11" tag="a" class="xsa">{{tab[10]}}</router-link>
      </div>
      <div
        id="segmentedControlContents"
        class="mui-col-xs-9"
        style="border-left: 1px solid #c8c7cc;"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import search from "../components/search.vue";
import tushu1 from "../components/tushu1.vue";
// import tushu2 from "../components/tushu2.vue";
// import tushu3 from "../components/tushu3.vue";
// import tushu4 from "../components/tushu4.vue";
// import tushu5 from "../components/tushu5.vue";
// import tushu6 from "../components/tushu6.vue";
// import tushu7 from "../components/tushu7.vue";
// import tushu8 from "../components/tushu8.vue";
// import tushu9 from "../components/tushu9.vue";
// import tushu10 from "../components/tushu10.vue";
// import tushu11 from "../components/tushu11.vue";
import mui from "../assets/mui/js/mui.js";
export default {
  data() {
    return {
      tab: [
        "图书",
        "童书",
        "电子书",
        "听书",
        "网络文学书",
        "创意文具",
        "拍卖/旧书",
        "女装",
        "男装",
        "男女鞋",
        "童装童鞋"
      ]
    };
  },
  methods: {},
  mounted() {
    // 关于如何在vue-cli3.0中引入mui.js和相关扩展
    // http://ask.dcloud.net.cn/article/13509
    mui.init();
  },
  components: {
    search,
    tushu1,
    // tushu2,
    // tushu3,
    // tushu4,
    // tushu5,
    // tushu6,
    // tushu7,
    // tushu8,
    // tushu9,
    // tushu10,
    // tushu11
  }
};
</script>

<style lang="scss" scoped>
div.category1 {
  background: white;
  overflow: hidden;
}

.mui-fullscreen {
  background: white;
  margin-top: 52px;
  // border-top: 10px solid white;
}
.mui-col-xs-3 {
  background: white;
  height: 600px;
  box-sizing: border-box;
  border-right: 9px solid #f2f2f2;
}
.mui-col-xs-9 {
  height: 100%;
  background: white;
}
a.mui-control-item {
  width: 100%;
}
.mui-table-view-cell {
  width: 100%;
}
// .search2 {
//   height: 50px;
//   width: 80%;
//   display: inline-block;
// }
// #index_search_form {
//   margin: 0 auto;
//   padding-top: 10px;
//   height: 50px;
// }
// .search_box {
//   margin: 0 auto;
//   padding-top: 10px;
//   height: 50px;
// }
.box1 {
  .dangdang3 {
    display: block;
    float: left;
    width: 10%;
    font-size: 39px;
    line-height: 52px;
    color: #e53e30;
  }
  .menupic {
  width: 30px;
  height: 44px;
  display: inline-block;
  line-height: 44px;
  float: right;
}
  .searchvan2 {
    background: none;
    display: block;
    float: left;
    width: 80%;
    padding: 0;
    input.van-field__control {
      margin: 0;
      border-radius: 17px !important;
    }
    .van-search__content.van-search__content--round {
      background: white;
    }
    .van-cell.van-cell--borderless.van-field {
      padding-bottom: 0px;
      margin-top: 6px;
      border-radius:17px;
    }
  }
}
a {
  display: block;
  width: 10%;
  float: left;
  height: 38px;
}
.xsa {
  width: 100%;
  height: 50px;
  text-align: center;
  color: #3c3c3c;
  line-height: 50px;
}
a.xsa.router-link-exact-active {
  color: #3c3c3c;
  line-height: 50px;
}
a.xsa.router-link-exact-active.is-selected {
  color: red;
  background: #f2f2f2;
  line-height: 50px;
}
.app-container {
  background: white;
}


</style>
