<template>
    <div>
        <header class="mint-header">
      <div class="mint-header-button is-left">
        <a href="#/" class="router-link-active">
          <button class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon">
              <i class="mintui mintui-back"></i>
            </span>
            <label class="mint-button-text"></label>
          </button>
        </a>
      </div>
      <h1 class="mint-header-title">{{mess[0]}}</h1>
      <div class="mint-header-button is-right">
        <button class="mint-button mint-button--default mint-button--normal">
          <span class="mint-button-icon">
            <i class="mintui mintui-more"></i>
          </span>
          <label class="mint-button-text"></label>
        </button>
      </div>
    </header>
    </div>
</template>


<script>
export default {
    data() {
        return {
            mess:["购物车","我的当当"]
        }
    },

}
</script>
<style lang="scss">
    .mint-header{
  background-color: white;
      color: #464646;
}
</style>