<template>
    <div class="gg">
        <div class="miao"> 广告页面{{num}}s后自动关闭</div>
        <div class="gg1img">
       
       </div>
        <!-- <h2>广告只打三秒</h2> -->
        <!-- <h1 style="font-size:50px;">{{num}}</h1> -->
    </div>
</template>
<script>
import { setTimeout, setInterval, clearInterval } from 'timers';
export default {
    data() {
        return {
            num:5,
            cleardata:null
        }
    },
    created(){
        this.cleardata = setInterval(()=>{
            if(this.num == 0){
                this.$router.push("/home");
                console.log(11);
            }else{
                this.num--;
            }
        },1000)
        
    },
    beforeDestroy(){  //销毁数据与方法
        clearInterval(this.cleardata);
    }
}
</script>

<style lang="scss">
    .gg1img{
        width: 100%;
        height: 619px;
        background: url("../assets/img/gg.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        top: 0;
        left: 0;
        z-index: 30;
    }
    .ggiimg{
          width: 100%;
        height: 100%;
        position: relative;
        top: 0;
        left: 0;
        z-index: 30;
    }
</style>
