<template>
    <div>
        <div class="dingding" v-if="this.$store.state.dingarray==0">
            <img src="../assets/img/order_empty.png" alt="" srcset="">
            <p class="noding">还没有订单，去逛逛吧</p>
        </div>
        <div class="dingding" v-else v-for="(item, index) in this.$store.state.dingarray" :key="index">
           <p>你的订单已经成功提交</p>
           <!-- <p class="time">{{this.$store.state.nowtime}}</p> -->
           <div class="dd1">
            <img :src="item.imgsrc" alt srcset class="dingimg">
            <div class="txt">
            <span class="dd1art">{{item.article}}</span>
            </div>
            </div>
            <div class="order">
                　需付款：<em><b class="iconfont">¥</b>{{item.paice2}}</em><span></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
Date.prototype.format = function(format){ 
var o = { 
"M+" : this.getMonth()+1, //month 
"d+" : this.getDate(), //day 
"h+" : this.getHours(), //hour 
"m+" : this.getMinutes(), //minute 
"s+" : this.getSeconds(), //second 
"q+" : Math.floor((this.getMonth()+3)/3), //quarter 
"S" : this.getMilliseconds() //millisecond 
} 

if(/(y+)/.test(format)) { 
format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
} 

for(var k in o) { 
if(new RegExp("("+ k +")").test(format)) { 
format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
} 
} 
return format; 
} 

//使用方法 
var now = new Date(); 
var nowStr = now.format("yyyy-MM-dd hh:mm:ss"); 

this.$store.state.nowtime=nowStr
console.log(this.$store.state.nowtime);

    

}
}
</script>

<style lang="scss">

    .dingding{
        width: 93%;
        height: 165px;
        margin: 0 auto;
        margin-top: 15px;
        background: white;
        img{
            width: 100%;
            height:100%
        }
        .noding{
            text-align: center;
        }
        
        .dd1{
            overflow: hidden;
            .dingimg{
            width: 30%;
            float: left;
            display: block;
        }
            .txt{
                margin-left: 5px;
                color: #1e1e1e;
                width:68%;
                float: left;
                .dd1art{
                    font-size: 13px;
                }
            }
           
        }
        .order{
            float: right;
            margin-right: 16px;
        }
    }
</style>