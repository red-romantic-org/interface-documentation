<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div
        class="logo"
        style="
          text-align: center;
          font-size: 1.2rem;
          line-height: 2rem;
          color: white;
          font-family: 楷体, serif;
          font-weight: 700;
        "
      >
        {{ collapsed ? "文档" : "开发文档" }}
      </div>
      <a-menu
        theme="dark"
        :inline-collapsed="collapsed"
        mode="inline"
        v-for="item in menuList"
        v-bind:key="item.key"
        :default-selected-keys="selectedKeys"
        :default-open-keys="openKeys"
      >
        <a-sub-menu :key="item.key" v-if="item.children">
          <span slot="title" v-if="item.children.length !== 0"
            ><a-icon :type="item.icon" /><span>{{ item.title }}</span></span
          >
          <a-menu-item
            :key="childrenMenu.key"
            v-for="childrenMenu in item.children"
            @click="consoleInfo(childrenMenu.key), reloadView()"
          >
            <span :class="childrenMenu.class" style="float: left">{{
              childrenMenu.class
            }}</span>
            <span style="vertical-align: middle; display: flex">{{
              childrenMenu.title
            }}</span>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else :key="item.key">
          <a-icon :type="item.icon"></a-icon>
          <span>{{ item.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout style="background-color: white">
      <a-layout-content
        style="
          background-color: white;
          margin-top: 2%;
          margin-left: 4%;
          padding: 8px 15px 8px 15px;
        "
      >
        <a-breadcrumb> </a-breadcrumb>
        <ContainerView></ContainerView>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Interface Documentation ©2023 Created by Red Romantic
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import ContainerView from "@/views/ContainerView";
export default {
  data() {
    return {
      collapsed: false,
      cardid: JSON.parse(sessionStorage.getItem("cardid")).cardid,
      title: "开发文档",
      selectedKeys: [],
      openKeys: [],
      menuList: [
        {
          key: "1",
          title: "用户",
          path: "www.baidu.com",
          icon: "laptop",
          children: [
            {
              key: "1.1",
              title: "查询用户信息",
              path: "www.baidu.com",
              class: "get",
            },
            {
              key: "1.2",
              title: "修改用户信息",
              path: "www.baidu.com",
              class: "put",
            },
            {
              key: "1.3",
              title: "登录",
              path: "www.baidu.com",
              class: "get",
            },
            {
              key: "1.4",
              title: "注册",
              path: "www.baidu.com",
              class: "post",
            },
            {
              key: "1.5",
              title: "删除用户",
              path: "www.baidu.com",
              class: "delete",
            },
          ],
        },
        {
          key: "2",
          title: "管理员",
          path: null,
          icon: "bars",
          children: [
            {
              key: "2.1",
              title: "查询管理员信息",
              path: "www.baidu.com",
              class: "get",
            },
          ],
        },
        {
          key: "3",
          title: "商品",
          path: "www.baidu.com",
          icon: "info",
        },
      ],
    };
  },
  created() {
    console.log(this.cardid);
  },
  methods: {
    consoleInfo(key) {
      console.log(key);
      const menuInfo = { key: key };
      sessionStorage.setItem("key", JSON.stringify(menuInfo));
    },
    reloadView() {
      window.location.reload();
    },
  },
  components: { ContainerView },
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
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
