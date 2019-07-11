<template>
    <div>
        <form
        id="index_search_form"
        method="get"
        action="http://search.m.dangdang.com/search.php?t=1560856838"
        target="_parent"
        onsubmit="return submit_search();"
      >
        <div class="search">
          <div class="text_box">
            <input
              id="keyword"
              name="keyword"
              type="text"
              placeholder="百万图书，每满100减50"
              class="keyword text android"
              onkeydown="this.style.color='#404040'"
              autocomplete="off"
              link="http://touch.m.dangdang.com/topics.php?page_id=mix_20190610_jfmj"
              homedefault="百万图书，每满100减50"
              popdefault="百万图书，每满100减50"
              nokeyword="0"
            >
          </div>
        </div>
      </form>
    </div>
</template>

<style >
#index_search_form{
    width: 100%;
    float: left;
    /* margin: 0 auto; */
    background: white;
}
#keyword{
  background: #e8ecf0;
  margin-bottom: 0;
  width: 100%;
}
 .search_box {
   margin: 0 auto;
   padding-top: 10px;
   height: 50px;
 }
</style>