<template>
  <div>
    <section class="user-stat clearFix">
      <!-- <a
        id="
      > -->
      <router-link to="/shoucang" id="product_collect_number">
        <em>{{this.$store.state.likenum}}</em>收藏的商品
        </router-link>
      <!-- </a> -->
      <a
        id="shop_collect_number"
        
      >
        <em>0</em>关注的店铺
      </a>
      <a
        id="read_history_count"
       
      >
        <em>2</em>我的足迹
      </a>
    </section>
  </div>
</template>

<style lang="scss" scoped>
    section.user-stat.clearFix{
        background-color: #ffffff;
    color: #000000;
    overflow: hidden;
    height: 50px;
    border-bottom: 1px solid #f6f6f6;
    }
    a{
        color: #000000;
        float: left;
    display: block;
    width: 33.3333%;
    // padding: .5rem 0;
    text-align: center;
    line-height: 23px;
    font-size: 13px;
    color: inherit;
    }
    em{
        display: block;
    }
</style>