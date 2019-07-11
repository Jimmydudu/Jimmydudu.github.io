<template>
  <div>
    <router-link
      v-for="(item, index) in this.$store.state.shudanxiangqing"
      :key="index"
      v-bind:to="item.to"
      class="renjian"
    >

       <aside>
        <img v-bind:src="item.imgsrc" alt srcset>
      </aside>
      <span class="name">{{item.article}}</span>
      <p class="labels android">
        <span class="label_common android">{{item.lia}}</span>
        <span class="label_common android label1">{{item.lic}}</span>
      </p>
      <em class="money">
        <i class="left">{{item.price1}}</i>
        <i class="middle">{{item.paice2}}</i>
      </em>
    </router-link>
  </div>
</template>



<style>
.renjian {
  width: 50%;
  float: left;
  padding: 5px;
}
img {
  width: 100%;
}
.name {
  color: #232323;
  font-size: 13px;
}
span.label_common.android {
  /* float: left; */
  border: 1px solid #f2303c;
  padding: 0 2px;
  padding-top: 1px;
  box-sizing: border-box;
  margin-right: 0.125rem;
  color: #f2303c;
  border-radius: 2px;
}
em.money {
  color: #e53e30;
  font-size: 14px;
  margin-left: 0.1rem;
  float: left;
  margin-right: 0.35rem;
}
span.label_common.android.label1 {
  background: #f2303c;
  color: #ffffff;
}
.renjian {
  background: white;
  box-sizing: border-box;
  padding-right: 1px;
  border-right: 5px solid #f2f2f2;
  margin-bottom: .2083rem;
  border-bottom: 3px solid #f2f2f2;
}
span.name{
  display: block;
  height: 39px;
  overflow: hidden;
}
</style>