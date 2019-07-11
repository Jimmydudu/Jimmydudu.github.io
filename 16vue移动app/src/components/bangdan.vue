<template>
    <div>
            <div class="shuone">
      <div class="picture_text_b">
        <h3 class="android">
          <a dd_name="标题链接_榜单" href="javascript:void(0);" class="title_link">
            <em class="android">榜单</em>
          </a>
        </h3>
        <ul class="clearfix only_pic">
          <li>
            <div>
              <a
                href="http://touch.m.dangdang.com/tushu_bang.php?cat_path=01.00.00.00.00.00&amp;bang_name=bestsell&amp;bang_name_text=图书畅销榜&amp;cat_path_text=总榜&amp;time_region_text=近7天&amp;time_region=recent7"
                dd_name="总榜"
              >
                <div class="cate_icon_div">
                  <img
                    class="cate_icon_img"
                    src="http://img60.ddimg.cn/upload_img/00791/xmj/zongbang-1560136593.png"
                    alt="总榜"
                  >
                </div>
                <span>总榜</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="http://touch.m.dangdang.com/tushu_bang.php?cat_path=01.00.00.00.00.00&amp;bang_name=newhotsell&amp;bang_name_text=新书热卖榜&amp;cat_path_text=总榜&amp;time_region_text=近7天&amp;time_region=recent7"
                dd_name="新书榜"
              >
                <div class="cate_icon_div">
                  <img
                    class="cate_icon_img"
                    src="http://img61.ddimg.cn/upload_img/00791/xmj/ne-1560838559.png"
                    alt="新书榜"
                  >
                </div>
                <span>新书榜</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="http://touch.m.dangdang.com/tongshu_bang.php?cat_path=01.41.00.00.00.00&amp;bang_name=tongshu&amp;bang_name_text=童书畅销榜&amp;cat_path_text=总榜&amp;time_region_text=近7天&amp;time_region=recent7"
                dd_name="童书榜"
              >
                <div class="cate_icon_div">
                  <img
                    class="cate_icon_img"
                    src="http://img61.ddimg.cn/upload_img/00779/xmj/kid-1559021776.png"
                    alt="童书榜"
                  >
                </div>
                <span>童书榜</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
</template>



<style lang="scss">
.shuone .only_pic li {
  width: 33.33%;
  height: 158px;
  float: left;
  list-style: none;
}
.shuone .only_pic li a {
  padding: 14px 4px;
  text-align: center;
}
.shuone .only_pic li img {
  width: 100%;
  padding: 10px;
}
.shuone span {
  color: #1e1e1e;
  font-size: 13px;
  text-align: center;
  display: block;
}
.picture_text_b {
  background: white;
  // margin-top: 8px;
  border-top: 5px solid #f2f2f2;
}
em.android {
  margin-left: 10px;
  color: #1e1e1e;
  font-size: 15px;
  font-weight: bold;
  line-height: 22px;
  display: inline-block;
  vertical-align: middle;
  // padding-top: 3px;
}

</style>
