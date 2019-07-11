<template>
    <div>
         <div class="xx">
      <div class="picture_text_b">
        <h3 class="android">
          <a dd_name="标题链接_小说" class="title_link">
            <em class="android">小说</em>
            <i></i>
          </a>
          <a class="more android" dd_name="更多_小说">畅销榜</a>
        </h3>
        <ul class="clearfix only_text">
          <li>
            <div>
              <a dd_name="社会">
                <span>社会</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a dd_name="侦探/悬疑/推理">
                <span>侦探/悬疑/推理</span>
              </a>
            </div>
            <del class="hot_icon"></del>
          </li>
          <li>
            <div>
              <a dd_name="情感">
                <span>情感</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a dd_name="世界名著">
                <span>世界名著</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a dd_name="历史">
                <span>历史</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>


    <div class="zhankai">
      <li class="mui-table-view-cell mui-collapse">
        <a class="mui-navigate-right" href="#">展开</a>
        <div class="mui-collapse-content">

          <span class="zhankai1">魔幻</span>

          <span class="zhankai1">惊悚/恐怖</span>

          <span class="zhankai1">武侠</span>

          <span class="zhankai1">官场</span>

          <span class="zhankai1">军事</span>

          <span class="zhankai1">都市</span>

          <span class="zhankai1">乡土</span>

          <span class="zhankai1">职场</span>

          <span class="zhankai1">财经</span>


        </div>
        </li>

    </div>


    </div>
</template>

<style lang="scss" scoped>
.title_link i {
  display: inline-block;
  line-height: 28px;
  margin-left: 10px;
  background: url(../assets/img/title_link_icon.png) center center no-repeat;
  background-size: contain;
  width: 5px;
  height: 24px;
  vertical-align: middle;
}
    em.android {
  margin-left: 10px;
  color: #1e1e1e;
  font-size: 13px;
  font-weight: bold;
  line-height: 22px;
  display: inline-block;
  vertical-align: middle;
  // padding-top: 3px;
}
a.more.android {
  font-size: 13px;
  font-weight: bold;
  color: #1e1e1e;
  line-height: 28px;
  float: right;
  margin-right: 12px;
}
div.xx li {
  width: 33.33%;
  height: 40px;
  border-bottom: 1px solid #f0f0f0;
  float: left;
  list-style: none;
  text-align: center;
}
div.xx li a {
  color: #1e1e1e;
  display: inline-block;
  width: 100%;
  height: 40px;
}
div.xx li span {
  display: inline-block;
  width: 98%;
border-bottom: 1px solid #e1e1e1;
  line-height: 40px;
  vertical-align: middle;
  font-size: 13px;
}
div.xx li a::after {
  content: "";
  display: inline-block;
  width: 1px;
  height: 30px;
  vertical-align: middle;
  background: #e1e1e1;
}
.paiban {
  height: 200px;
}
.zhankai{
  li{
    list-style: none;
    overflow: visible;
    padding: 0;
    a{
      display: block;
      width: 89.66px;
      height: 40px;
      line-height: 40px;
      position: absolute;
      top: -29px;
      left: 194px;
      z-index: 100;
      text-align: center;
      border-bottom: 1px solid #f0f0f0;
      font-size: 13px;
    }
 
    .mui-collapse-content{
      width: 279px;
    margin-left: 0px;
    margin-top: 1px;
    padding: 0;
    margin: 0;
    .zhankai1{
      display: inline-block;
      width: 33.33%;
      height: 40px;
      font-size: 13px;
      text-align: center;
    line-height: 40px;

    }
    }
  }
}
.zhankai1::after{
  content: "";
  display: inline-block;
  width: 1px;
  height: 30px;
  vertical-align: middle;
  background: #e1e1e1;
  float: right;
}
  div.mui-collapse-content{
      width: 279px;
    margin-left: 0px;
    margin-top: 1px;
    padding: 0;
    margin: 0;}
</style>