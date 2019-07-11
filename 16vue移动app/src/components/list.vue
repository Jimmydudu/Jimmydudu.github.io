<template>
    <div class="books">
    <li v-for="(item, index) in booklist" :key="index">
        <img id="img2" :src="item" alt="">
    </li>
    </div>
</template>
<script>
export default {
    data() {
        return {
            booklist:require["../assets/img/i1.png",
            "../assets/img/i2.png",
            "../assets/img/i3.png",
            "../assets/img/i4.png",
            "../assets/img/i5.png",
            "../assets/img/i6.jpg",
            "../assets/img/i7.png",
            "../assets/img/i8.png",
            "../assets/img/i9.png",
            "../assets/img/i0.jpg"

            ]
        }
    },
}
</script>

 <style lang="scss">
 .books{
     overflow: hidden;
 }
   .books li{
        width: 20%;
        height: 73px;
        float: left;
        list-style: none;
        
    }
    #img2{
            width: 100%;
            height: 100%;
        }
</style>

