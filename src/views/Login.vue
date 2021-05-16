<template>
  <div class="login">
    <div><input type="text" v-model.trim="token" /></div>
    <div class="loginning" @click="login">
      <a>登录</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
    };
  },
  methods: {
    login() {
      sessionStorage.setItem("token", this.token);
      const res = sessionStorage.getItem("token");
      console.log(res);
      this.$store
        .dispatch("getMyInfo", this.token)
        .then(() => {
          sessionStorage.setItem("isLogin", true);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
          alert("token 有误");
        });
    },
  },
};
</script>

<style lang="less" >
.login {
  margin: 0 auto;
  text-align: center;
  input {
    margin-top: 100px;
    display: inline-block;
    width: 500px;
    height: 40px;
    font-size: 20px;
    line-height: 18px;
  }
  .loginning {
    margin-top: 50px;
    text-align: center;
    display: inline-block;
    width: 80px;
    height: 50px;
    background-color: #409eff;
    border-radius: 5px;
    a {
      line-height: 48px;
      font-size: 18px;
      color: #fff;
    }
  }
}
</style>