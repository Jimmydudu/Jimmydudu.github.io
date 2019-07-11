<template>
    <div>
         <van-card v-for="(item, index) in this.$store.state.likearray" :key="index"
      num="1"
      v-bind:price="item.paice2"
      v-bind:desc="item.part"
      v-bind:title="item.article"
      v-bind:thumb="item.imgsrc"
      v-bind:id="item.id"
      class="shoucang"
      @click="checkxq(index)"
    />
    <!-- <button>dd</button> -->
    
    </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  // created() {
  //   this.dataId = this.$route.query.id;
  //   console.log(this.dataId);
    
  // },
   methods: {
     checkxq(index){
      //  console.log();
       console.log(this.index);
       this.$store.state.shudanxiangqing.forEach(element => {
         if (element==this.$store.state.likearray[index]) {
          //  return element
           console.log(element);
           console.log(element.to);
           this.$router.push(element.to)
           
           
         }
       });
        // this.$router.push("/aa/?id=2");
        // console.log(this.$store.state.shudanxiangqing[index]);
        
     }
   },
}
</script>

<style lang="scss">
  .shoucang{
    margin: 10px;
  }
</style>