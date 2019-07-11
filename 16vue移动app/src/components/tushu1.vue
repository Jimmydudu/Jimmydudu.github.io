<template>
  <div>
    <img src="../assets/img/tushu1.jpg" alt srcset>
<bangdan></bangdan>
<xiaoshuo></xiaoshuo>

  </div>
</template>

<script>
import mui from "../assets/mui/js/mui.js";
import bangdan from "./bangdan.vue";
import xiaoshuo from "./xiaoshuo.vue";
export default {
  components:{
    bangdan,
    xiaoshuo
  },
  methods: {},
  mounted() {
    mui.init();
  }
};
</script>

