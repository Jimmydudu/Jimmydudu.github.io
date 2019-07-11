<template>
  <div class="aa3">
    <!-- <swipe2end> -->
    <div class="lunbo">
      <mt-swipe :auto="4000" height="360px">
        <mt-swipe-item
          v-for="item in this.$store.state.shudanxiangqing[this.dataId ].imglist"
          :key="item"
        >
          <img id="img3" :src="item" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- </swipe2end> -->
    <div class="promo_label_banner">
      <img src="../assets/img/618.jpg">
    </div>
    <div class="detail">
      <article class="dangdang_icon">{{this.$store.state.shudanxiangqing[this.dataId ].article}}</article>
    </div>
    <div
      class="product_subname"
      style="-webkit-line-clamp: 3;"
    >{{this.$store.state.shudanxiangqing[this.dataId ].part}}</div>

    <div class="new_price_div">
      <div class="new_left">
        <div class="main_price_div">
          ¥
          <span
            class="main_price"
            id="main_price"
          >{{this.$store.state.shudanxiangqing[this.dataId ].paice2}}</span>
        </div>
        <span
          class="discount"
          style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
        >{{this.$store.state.shudanxiangqing[this.dataId ].zhe}}</span>
      </div>
    </div>
    <!-- <aa1> -->
    <div class="aa1">
      <section class="jump linkto_author_bang">
        <a dd_name="作者查看作品" class="arrow_con">
          <div class="arrow link_line">
            <span class="linkto_name">作者</span>
            <span class="linkto_value">{{this.$store.state.shudanxiangqing[this.dataId ].author}}</span>
            <span class="linkto_look">查看作品</span>
          </div>
        </a>
        <a dd_name="出版社查看作品" class="arrow_con">
          <div class="arrow link_line">
            <span class="linkto_name">出版</span>
            <span class="linkto_value">{{this.$store.state.shudanxiangqing[this.dataId ].chuban}}</span>
            <span class="linkto_look">查看作品</span>
          </div>
        </a>

        <a dd_name="排名查看榜单" class="arrow_con">
          <div class="arrow link_line">
            <span class="linkto_name">排名</span>
            <span class="linkto_value">
              小说畅销榜第
              <time class="bang_rank">{{this.$store.state.shudanxiangqing[this.dataId ].rank}}</time>
            </span>
            <span class="linkto_look">查看榜单</span>
          </div>
        </a>

        <a dd_name="分类" class="arrow_con">
          <div class="arrow link_line">
            <span class="linkto_name">分类</span>
            <span
              class="linkto_value category_text"
            >{{this.$store.state.shudanxiangqing[this.$route.name].fenlei}}</span>
          </div>
        </a>
      </section>
    </div>

    <!-- </aa1end> -->
    <!-- <aa2> -->

    <div class="pinglunde">
      <div class="review_header">
        <a>
          <h4 style="line-height:2.6rem;">
            短评（364024）
            <span class="good_rate">99.9%好评</span>
          </h4>
        </a>

        <div
          id="writeScore"
          class="writeScoreBtn"
          data-href="http://product.m.dangdang.com/review.php?action=write_score&amp;pid=25126128&amp;main_pid=&amp;product_medium=0&amp;category_path=01.03.45.00.00.00&amp;shop_id=0&amp;img_url=http://img3m8.ddimg.cn/27/20/25126128-1_e_2.jpg"
        >写短评</div>
      </div>

      <div class="book_user_info">
        <a dd_name="评论中用户头像和昵称" href="javascript:void(0)">
          <img class="book_img" alt src="../assets/img/header_e.jpg">
        </a>
        <div class="star_div paddingTop">
          <p class="name">
            <a class="name_text" href="javascript:void(0)">匿名用户</a>
          </p>
        </div>
      </div>

      <p class="content_text indent">{{this.$store.state.shudanxiangqing[this.dataId].say}}</p>
    </div>
    <!-- </aa2> -->
  </div>
</template>

<script>
import swipe2 from "../components/swipe2.vue";
export default {
  components: {
    swipe2
  },
  created() {
    this.dataId = this.$route.query.id;
  }
};
</script>

<style lang="scss">
.aa3{
  padding-bottom: 50px;
}
.lunbo {
  height: 360px;
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
  font-size: 13px;
  color: #4d525d;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-break: break-all;
  font-size: 15px;
}
.product_subname {
  background: white;
  color: rgb(150, 150, 150);
  font-size: 12px;
}
.new_price_div {
  overflow: hidden;
  background: white;
}
.new_left {
  font-size: 17px;
  color: #ff463c;
  padding-left: 3px;
  // padding-right: 15px;
  float: left;
}
.discount {
  display: block;
  float: left;
  color: #969696;
}
.main_price_div {
  float: left;
}
#main_price {
  margin-right: 10px;
}
.van-goods-action-icon.van-hairline {
  font-size: 13px;
}
.aa1 {
  margin-top: 10px;
  .jump {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    background-color: white;
    a {
      margin: 0 0.5rem;
      padding: 6px 0;
      border-bottom: 1px solid rgb(223, 223, 223);
      clear: both;
      .arrow {
        color: #4d525d;
        font-size: 13px;
        line-height: 23px;
        font-weight: normal;
        height: 26px;
        .linkto_name {
          color: #969696;
          display: block;
          float: left;
          width: 15%;
          padding-left: 2%;
        }
        .linkto_value {
          display: block;
          float: left;
          width: 55%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .linkto_look {
          float: right;
          margin-right: 26px;
        }
      }
    }
  }
}
div {
  // background: white;
  .review_header {
    display: block;
    height: 2.6rem;
    overflow: hidden;
    h4 {
      display: block;
      float: left;
      color: #4d525d;
      font-size: 13px;
      line-height: 10px;
      font-weight: normal;
      .good_rate {
        margin-left: 10px;
        color: #ff8161;
      }
    }
  }
}
#writeScore {
  display: block;
  float: right;
  width: 53px;
  margin-top: 11px;
  text-align: center;
  line-height: 21px;
  font-size: 13px;
  color: #ff8161;
  border: 1px solid #ff8161;
  border-radius: 0.3rem;
}
.review_list li .book_user_info {
  display: block;
  position: relative;
  overflow: hidden;
  padding-bottom: 0.275rem;
}

.star_div {
  float: left;
}

.review_list li .review_content {
  position: relative;
  font-size: 0.6rem;
  color: rgb(60, 60, 60);
  max-height: 3rem;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
}
.review_list .review_content .indent {
  text-indent: 1.8rem;
  margin-top: 44px;
  padding: 0px 9px;
}
.mint-swipe {
  position: relative;
  // top: 42px;
  height: 360px;
  width: 100%;
  z-index: 2;
}
#img3 {
  width: 100%;
  height: 100%;
}
.book_user_info {
  overflow: hidden;
  .book_img {
    width: 40px;
    height: 40px;
    float: left;
    display: block;
    border-radius: 1rem;
  }
  p.name {
    height: 1.125rem;
    line-height: 1.125rem;
    font-size: 14px;
    color: #464646;
  }
  p.content_text indent{
    height: 1.125rem;
    line-height: 1.125rem;
    font-size: 14px;
    color: #464646;
    height: 42px;
    overflow: hidden;
  }
}
.pinglunde{
  padding: 10px;
  background: white;
  height: 152px;
  overflow: hidden;
}
</style>