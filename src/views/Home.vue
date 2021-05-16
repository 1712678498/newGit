<template>
  <div class="home">
    <div class="box">
      <div class="left">
        <Panel>
          <template #header>
            <div class="nav-top">
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/good">精华</router-link></li>
              <li><router-link to="/share">分享</router-link></li>
              <li><router-link to="/ask">问答</router-link></li>
              <li><router-link to="/job">招聘</router-link></li>
              <li><router-link to="/dev">客户端测试</router-link></li>
            </div>
          </template>
          <template #content>
            <div v-if="posts.length">
              <div class="post-item" v-for="post in posts" :key="post.id">
                <div class="item-content">
                  <img
                    class="avatar"
                    :title="post.author.loginname"
                    :src="post.author.avatar_url"
                    alt=""
                  />
                  <div class="info">
                    <!-- <span class="reply_count">{{ post.reply_count }}</span>
                    /
                    <span class="visit_count">{{ post.visit_count }}</span> -->
                    <span class="tab" :class="post | isColor">{{
                      post | getPostChineseTab
                    }}</span>
                    <span class="title" @click="getAuthor(post.id)">
                      {{ post.title }}
                    </span>
                  </div>
                </div>
                <div class="reply-content">
                  <span class="reply_count">回复 {{ post.reply_count }}</span>
                  <span class="visit_count">阅读 {{ post.visit_count }}</span>
                  <span class="visit_time"
                    >{{ $moment(post.last_reply_at).fromNow(true) }}前</span
                  >
                </div>
              </div>
            </div>
          </template>
        </Panel>
      </div>
      <div class="right">
        <Panel
          v-if="!$route.path.includes('login')"
          class="right"
          width="300px"
        >
          <template #header>
            <span v-if="myInfo">个人信息</span>
            <span v-else>CNode：Node.js专业中文社区</span>
          </template>
          <template #content>
            <div class="content-box" v-if="myInfo">
              <div class="content-item-1">
                <img :src="myInfo.avatar_url" alt="" />
              </div>
              <div class="content-item-2">
                <span>{{ myInfo.loginname }}</span>
              </div>
              <div class="content-item-3">
                <i>“这个家伙很懒，什么都没有留下”</i>
              </div>
            </div>
            <div class="content-item-3" v-else>
              <p>你可以点击下面的按钮登录</p>
              <div class="loginning">
                <router-link to="/login">登录</router-link>
              </div>
            </div>
          </template>
        </Panel>
        <div style="margin-top: 20px">
          <Panel class="thissrc">
            <template #content>
              <div class="comments-add"><a>发布话题</a></div>
            </template>
          </Panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from "../layout/Panel.vue";
export default {
  components: { Panel },
  name: "Home",
  data() {
    return {
      posts: [],
      isColor: "",
    };
  },
  created() {
    this.$store.commit("getMyInfo", this.myInfo);
    sessionStorage.removeItem("userId");
    const token = sessionStorage.getItem("token");
    if (token !== null) {
      this.$store.dispatch("getMyInfo", token);
    }
  },
  methods: {
    getAuthor(id) {
      sessionStorage.setItem("userId", id);
      this.$axios.get(`/topic/${id}`);
      this.$store.dispatch("UserPage", id);
      this.$router.push(`/topic/${id}`);
    },
  },
  watch: {
    tab: {
      async handler(newValue) {
        const queryTab = newValue ? `&tab=${newValue}` : "";
        const res = await this.$axios.get(`/topics?page=1&limit=40${queryTab}`);
        this.posts = res.data;
      },

      immediate: true,
    },
  },
  computed: {
    //  ecf878d1-6052-476a-8262-824760c7872b
    myInfo() {
      return this.$store.state.myInfo;
    },
    tab() {
      return this.$route.params.tab;
    },
  },
};
</script>
<style lang="less">
// scoped
.thissrc .header{
  display: none;
}
.box {
  // margin: 15px auto;
  // display: flex;
  .left {
    .nav-top {
      background-color: #fff;
      height: 60px;
      border-radius: 3px;
      margin-bottom: 30px;
      height: 60px;
      display: flex;
      li {
        display: inline-block;
        list-style-type: none;
        margin-right: 20px;
        line-height: 60px;
        text-align: center;
        .router-link-exact-active.router-link-active {
          color: #409eff;
          border-bottom: #409eff 1px solid;
        }
        a {
          font-size: 16px;
          color: #9d9d9d;
          padding: 20px;
        }
      }
    }
    .post-item {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      border-top: #ccc 1px solid;
      background-color: #fff;
      .item-content {
        display: flex;
        align-items: center;
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: #409eff 2px solid;
        }
        .tab {
          margin: 0 5px;
        }
        .info {
          display: flex;
          align-items: center;
          justify-content: start;

          .title {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            // 超出隐藏，变为三个点
          }
        }
      }
      .reply-content {
        color: #9d9d9d;
        display: flex;
        align-items: center;
        white-space: nowrap;
        span {
          margin-right: 5px;
          font-size: 13px;
        }
        .visit_time {
          color: #000;
        }
      }
    }
    // .reply-content {
    // }
  }
  .right {
    .content {
      background-color: #fff;
      padding: 20px;
      .comments-add {
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
</style>
