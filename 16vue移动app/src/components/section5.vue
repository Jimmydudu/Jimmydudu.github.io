<template>
    <div>
       <section class="s-section">
                
        <a class="slide-link" v-for="(item, index) in wdlist" :key="index">
            <img v-bind:src="item.src">
            {{item.msg}}       </a>
            </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            wdlist:[{src:"../assets/img/wd1png.png",msg:"我的礼券  "},
            {src:"../assets/img/wd2.png",msg:"积分抵现  "},
            {src:"../assets/img/wd3.png",msg:"我的电子书  "},
            {src:"../assets/img/wd4.png",msg:"我的礼品卡  "},
            {src:"../assets/img/wd5.png",msg:"收货地址  "}]
        }
    },

}
</script>
<style>
.s-section a{
    display: block;
    color: #4d525d;
        border-bottom: 1px solid rgb(246,246,246);
}
section.s-section{
    line-height: 46px;
    background: white;
}
section.s-section img{
    width: 22px;
    height: 22px;
    margin-left: 5px;
}
</style>