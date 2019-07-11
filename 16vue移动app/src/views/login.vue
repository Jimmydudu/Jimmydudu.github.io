<template>
  <div class="login">
    <form v-if="!isReg">
      <div>用户名:</div>
      <input type="text" v-model="name" />
      <div>密码:</div>
      <input type="password" v-model="password" />
      <van-button type="info" @click="login()" class="btnlog">登录</van-button>
      <van-button type="info" @click="reg()" class="btnlog">注册</van-button>
    </form>
    <form v-else>
      <div>用户名:</div>
      <input type="text" v-model="name" />
      <div>密码:</div>
      <input type="password" v-model="password" />
      <div>再次输入密码:</div>
      <input type="password" v-model="repeat" />
        <van-button type="info" @click="addUser()" class="btnlog">确定</van-button>
      <van-button type="info" @click="cancel()" class="btnlog">取消</van-button>
    </form>
  </div>
</template>
 
<script>
export default {
  name: "login",
  data() {
    return {
      isReg: false,
      name: "",
      password: "",
      repeat: ""
    };
  },
  methods: {
    login() {
      //验证姓名和密码是否与locastorage一致
      if (
        localStorage.getItem("name") === this.name &&
        localStorage.getItem("password") === this.password
        
      ) {
        //清空输入框
        this.$store.state.yonghuming= localStorage.getItem("name");
        this.name = "";
        this.password = "";
        this.$router.push("/home");
        this.$store.state.iflog=true;
        
      } else {
        alert("用户名或密码不正确");
      }
    },
    reg() {
      this.isReg = true;
    },
    cancel() {
      this.isReg = false;
    },
    addUser() {
      //验证两次输入密码是否一致
      if (this.password === this.repeat) {
        //将名字和密码存入localstorage中
        localStorage.setItem("name", this.name);
        localStorage.setItem("password", this.password);
        // this.$store.commit("xiugai22", index);
        this.$store.state.iflog=true;
        //清空输入框
        // this.name = "";
        // this.password = "";
        // this.isReg = false;
        // this.$store.state.iflog
         this.$router.push("/home");
      } else {
        alert("两次密码不一致");
      }
    }
  }
};
</script>
 
<style lang="scss">
body {
  background: url(../assets/img/web_login_bg.jpg) no-repeat center;
  background-size: cover;
}
.login{
    // height: 600px;
     margin: 150px auto 0 auto;
    // min-height: 420px;
    max-width: 420px;
    padding: 40px;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
    /* overflow-x: hidden; */
    box-sizing: border-box;
        margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 150px;
}
input[type=text],
input[type=file],
input[type=password],
input[type=email], select {
    border: 1px solid #DCDEE0;
    vertical-align: middle;
    border-radius: 3px;
    height: 50px;
    padding: 0px 16px;
    font-size: 14px;
    color: #555555;
    outline:none;
    width:100%;
}
input[type=text]:focus,
input[type=file]:focus,
input[type=password]:focus,
input[type=email]:focus, select:focus {
    border: 1px solid #27A9E3;
}
.btnlog{
    background: #27A9E3;
    border: 1px solid #27A9E3;
    margin-left: 14px;
}
</style>
