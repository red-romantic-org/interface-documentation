<template>
  <div class="contain">
    <div class="title">{{ this.title }}</div>
    <div class="detail" style="display: flex">
      <div :class="method">{{ this.method }}</div>
      <div class="url">{{ this.url }}</div>
      <div :class="state"></div>
      <div class="state">{{ this.stateCH }}</div>
    </div>
    <div class="mes">{{ this.mes }}</div>
    <div class="param">{{ this.param }}</div>
    <a-table
      :columns="columns"
      :data-source="data1"
      bordered
      :pagination="false"
    >
    </a-table>
  </div>
</template>

<script>
export default {
  name: "ContainerView",
  data() {
    return {
      param: "请求参数",
      menukey: JSON.parse(sessionStorage.getItem("key")).key,
      title: "",
      method: "",
      url: "",
      state: "",
      stateCH: "",
      mes: "",
      columns: [
        {
          title: "参数名",
          dataIndex: "name",
        },
        {
          title: "位置",
          dataIndex: "position",
        },
        {
          title: "类型",
          dataIndex: "type",
        },
        {
          title: "必填",
          dataIndex: "fill",
        },
        {
          title: "说明",
          dataIndex: "explain",
        },
      ],
      data1: [
        {
          key: "1",
          name: "id",
          position: "path",
          type: "text",
          fill: "是",
          explain: "示例值: 5 \n 说明: 用户ID",
        },
        {
          key: "2",
          name: "type",
          position: "query",
          type: "string",
          fill: "否",
          explain: "示例值: normal \n 说明: 类型",
        },
        {
          key: "3",
          name: "X-Client-Version",
          position: "header",
          type: "",
          fill: "是",
          explain: "示例值: 1.0.0 \n 说明: 客户端版本号",
        },
      ],
      detailList: [
        {
          id: "1.1",
          title: "查询用户信息",
          method: "GET",
          url: "http://127.0.0.1/users/{id}",
          state: "ing",
          stateCH: "开发中",
          mes: "获取单个用户的个人资料信息，仅已登录用户可查询",
        },
        {
          id: "1.2",
          title: "修改用户信息",
          method: "PUT",
          url: "http://127.0.0.1/users/{id}",
          state: "finished",
          stateCH: "开发完成",
          mes: "修改单个用户的个人资料信息，仅已登录用户可修改",
        },
        {
          id: "1.3",
          title: "登录",
          method: "GET",
          url: "http://127.0.0.1/users/{id}",
          state: "finished",
          stateCH: "开发完成",
          mes: "进行用户登录",
        },
        {
          id: "1.4",
          title: "注册",
          method: "POST",
          url: "http://127.0.0.1/users/{id}",
          state: "finished",
          stateCH: "开发完成",
          mes: "进行用户注册",
        },
        {
          id: "1.5",
          title: "删除用户",
          method: "DELETE",
          url: "http://127.0.0.1/users/{id}",
          state: "nostarted",
          stateCH: "未进行",
          mes: "进行用户删除",
        },
        {
          id: "2.1",
          title: "查询管理员信息",
          method: "GET",
          url: "http://127.0.0.1/managers/{id}",
          state: "ing",
          stateCH: "开发中",
          mes: "获取单个管理员的个人资料信息，仅已登录管理员可查询",
        },
        {
          id: "3.1",
          title: "查询商品信息",
          method: "GET",
          url: "http://127.0.0.1/goods/{id}",
          state: "ing",
          stateCH: "开发中",
          mes: "获取单个商品的资料信息，仅已入库商品可查询",
        },
      ],
    };
  },
  created() {
    const key = this.menukey;
    for (let i = 0; i < this.detailList.length; i++) {
      if (key === this.detailList[i].id) {
        this.title = this.detailList[i].title;
        this.url = this.detailList[i].url;
        this.method = this.detailList[i].method;
        this.state = this.detailList[i].state;
        this.stateCH = this.detailList[i].stateCH;
        this.mes = this.detailList[i].mes;
      }
    }
  },
  watch: {},
};
</script>

<style scoped>
.title {
  font-size: 1.7rem;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.GET {
  display: block;
  width: 40px;
  height: 24px;
  border-radius: 15%;
  background-color: #41ca9d;
  text-align: center;
  color: white;
  font-weight: 700;
  line-height: 24px;
}
.POST {
  display: block;
  width: 45px;
  height: 24px;
  border-radius: 15%;
  background-color: #ed8936;
  text-align: center;
  color: white;
  font-weight: 700;
  line-height: 24px;
}
.PUT {
  display: block;
  width: 40px;
  height: 24px;
  border-radius: 15%;
  background-color: #1890ff;
  text-align: center;
  color: white;
  font-weight: 700;
  line-height: 24px;
}
.DELETE {
  display: block;
  width: 55px;
  height: 24px;
  border-radius: 15%;
  background-color: #fa541c;
  text-align: center;
  color: white;
  font-weight: 700;
  line-height: 24px;
}
.ing {
  margin-left: 2%;
  margin-top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #1890ff;
}
.finished {
  margin-left: 2%;
  margin-top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: chartreuse;
}
.nostarted {
  margin-left: 2%;
  margin-top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: grey;
}
.detail {
  margin-top: 2%;
}
.url {
  margin-left: 2%;
  font-size: 1rem;
  font-weight: 700;
}
.state {
  margin-left: 1%;
  font-size: 1rem;
}
.mes {
  font-size: 1rem;
  margin-top: 2%;
}
.param {
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 2.5%;
  margin-bottom: 1%;
}
</style>
