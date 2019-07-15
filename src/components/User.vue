<template>
  <div v-if="user" class="wrap">
    <div class="article">
      <div class="article-one">
        <router-link class="zhuye" to="/">
          <span>主页 /</span>
        </router-link>
        <div class="user">
          <img :style="{width:'30px',height:'30px'}" :src="user.avatar_url" alt />
          <span>{{user.loginname}}</span>
        </div>
        <span class="jifen">{{user.score}}积分</span>
        <span class="zhuceshijian">
          注册时间:
          {{myMoment(user.create_at)
          }}
        </span>
      </div>
      <h4>最近创建的话题</h4>
      <div class="panel">
        <div class="cell" v-for="recent_topic in user.recent_topics" :key="recent_topic.id">
          <router-link :to="`/user/${recent_topic.author.loginname}`">
            <img :src="recent_topic.author.avatar_url" alt class="avatar" />
          </router-link>
          <div class="count">
            <span class="reply-count">{{recent_topic.reply_count}}</span>
            <span></span>
            <span class="visit-count">{{recent_topic.visit_count}}</span>
          </div>
          <div class="title">
            <router-link :to="`/topics/${recent_topic.id}`">{{recent_topic.title}}</router-link>
          </div>
          <span class="time">{{myMoment(recent_topic.last_reply_at)}}</span>
        </div>
      </div>
      <h4>最近参与的话题</h4>
      <div class="panel">
        <div class="cell" v-for="recent_replie in user.recent_replies" :key="recent_replie.id">
          <router-link :to="`/user/${recent_replie.author.loginname}`">
            <img :src="recent_replie.author.avatar_url" alt class="avatar" />
          </router-link>
          <div class="count">
            <span class="reply-count">{{recent_replie.reply_count}}</span>
            <span></span>
            <span class="visit-count">{{recent_replie.visit_count}}</span>
          </div>
          <div class="title">
            <router-link :to="`/topics/${recent_replie.id}`">{{recent_replie.title}}</router-link>
          </div>
          <span class="time">{{myMoment(recent_replie.last_reply_at)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "user",
  data() {
    return {
      user: null
    };
  },
  created() {
    // 获取路由的动态参数     $route
    const { loginname } = this.$route.params;
    axios.get(`https://www.vue-js.com/api/v1/user/${loginname}`).then(res => {
      console.log(res.data.data);
      this.user = res.data.data;
    });
  },
  methods: {
    myMoment(time) {
      moment.locale("zh-cn");
      return moment(time).fromNow();
    }
  }
};
</script>

<style>
.wrap .article {
  width: 900px;
  margin-left: 120px;
}
.wrap .article-one {
  background-color: #fff;
  width: 100%;
  height: 170px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 3px 3px 0 0;
}
.wrap .article-one span {
  width: 100%;
  line-height: 20px;
}
.wrap .zhuye {
  color: green;
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
}
.wrap .user {
  padding: 10px;
}
.wrap .user img {
  margin-right: 10px;
}
.wrap .jifen {
  padding: 0 10px;
  color: #e5e5e5;
}
.wrap .zhuceshijian {
  padding: 10px;
  color: #777;
}
.wrap .panel {
  background: #fff;
  margin-bottom: 15px;
}
.wrap .panel .header,
.wrap .top {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  font-size: 14px;
}
.wrap .top {
  border-bottom: 1px solid #ccc;
}
.wrap .panel .cell {
  display: flex;
  border-top: 1px solid #f0f0f0;
  overflow: hidden;
  position: relative;
  padding: 8px 0 8px 8px;
  font-size: 14px;
}
.wrap .panel .cell .time {
  margin-right: 10px;
}
.wrap .panel .cell .avatar {
  width: 30px;
  height: 30px;
  border-radius: 3px;
  margin-right: 4px;
  flex-shrink: 0;
}
.wrap .panel .cell .title {
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.wrap .panel .cell .title > a {
  margin-left: 4px;
  color: #08c;
  max-width: 70%;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
}
.wrap .cell .title > a:hover {
  text-decoration: underline;
}
</style>
