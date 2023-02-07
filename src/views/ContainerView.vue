<template>
  <div class="container">
    <div class="title">{{ this.menukey }}</div>
    <div class="detail">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContainerView",
  data() {
    return {
      menukey: JSON.parse(sessionStorage.getItem("key")).key,
      detailList: [
        {
          id: "1.1",
          title: "查询用户信息",
        },
        {
          id: "1.2",
          title: "修改用户信息",
        },
        {
          id: "1.3",
          title: "登录",
        },
        {
          id: "1.4",
          title: "注册",
        },
        {
          id: "1.5",
          title: "删除用户",
        },
      ],
    };
  },
  created() {},
  watch: {
    menukey(newValue, oldValue) {
      console.log("new" + newValue);
      console.log("old" + oldValue);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.title {
  font-size: 1.7rem;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.get {
  display: block;
  width: 38px;
  color: #41ca9d;
  font-size: 12px;
  font-weight: 700;
}
.post {
  display: block;
  width: 38px;
  color: #ed8936;
  font-size: 12px;
  font-weight: 700;
}
.put {
  display: block;
  width: 38px;
  color: #1890ff;
  font-size: 12px;
  font-weight: 700;
}
.delete {
  display: block;
  width: 38px;
  color: #fa541c;
  font-size: 12px;
  font-weight: 700;
}
</style>
