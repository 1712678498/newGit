<template>
  <div class="app">
    <Header />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import UserPage from "./views/UserPage";
export default {
  components: { Header, UserPage },
};
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  .content {
    margin: 0 auto;
    .markdown-text {
      p {
        img {
          display: inline-block;
          width: 100%;
        }
      }
    }
  }
  a {
    text-decoration: none;
  }
  background-image: url("https://res.gimmgimm.com/static2/images/bg.body.png?v=0.11");
  .main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
    .box {
      margin: 15px auto;
      margin-top: 40px;
      display: flex;
      .left {
        min-width: 1000px;
        margin-right: 50px;
        .info {
          span {
            display: inline-block;
          }
          .top {
            background-color: #80bd01;
            color: #fff;
            padding: 2px 4px;
            border-radius: 5px;
          }
          .good {
            background-color: #7fdbff;
            color: #fff;
            padding: 2px 4px;
            border-radius: 5px;
          }
          .share {
            background-color: #39cccc;
            color: #fff;
            padding: 2px 4px;
            border-radius: 5px;
          }
          .ask {
            background-color: #ffdc00;
            color: #fff;
            padding: 2px 4px;
            border-radius: 5px;
          }
          .job {
            background-color: #f012be;
            color: #fff;
            padding: 2px 4px;
            border-radius: 5px;
          }
        }
      }
      .right {
        width: 320px;
        height: 250px;
        background-color: #fff;
        border-radius: 5px;
        .header {
          height: 60px;
          line-height: 58px;
          color: #9d9d9d;
          background-color: #f6f6f6;
          border-radius: 5px;
          span {
            margin-left: 20px;
          }
        }
        .content {
          margin: 0 auto;
          .markdown-text {
            p {
              img {
                display: inline-block;
                width: 100%;
              }
            }
          }
          .content-box {
            margin: 15px;
            .content-item-1 {
              float: left;
              width: 80px;
              height: 80px;
              img {
                width: 100%;
              }
            }
            .content-item-2 {
              span {
                padding: 20px;
                line-height: 80px;
                font-size: 18px;
                color: #9d9d9d;
              }
            }
            .content-item-3 {
              line-height: 24px;
              margin: 15px 0;
            }
          }
          .content-item-3 {
            p {
              text-align: center;
              line-height: 40px;
            }
            .loginning {
              margin-top: 10px;
              margin-left: 115px;
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
        }
      }
    }
  }
}
</style>