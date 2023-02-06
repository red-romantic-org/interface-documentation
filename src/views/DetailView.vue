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
          font-family: 楷体;
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
          >
            <a-icon :type="childrenMenu.icon"></a-icon>
            <span>{{ childrenMenu.title }}</span>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else :key="item.key">
          <a-icon :type="item.icon"></a-icon>
          <span>{{ item.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0"> </a-breadcrumb>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Interface Documentation ©2023 Created by Red Romantic
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
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
          title: "监控系统",
          path: "www.baidu.com",
          icon: "laptop",
        },
        {
          key: "2",
          title: "模块接口",
          path: null,
          icon: "bars",
          children: [
            {
              key: "2.1",
              title: "订单模块",
              path: "www.baidu.com",
              icon: "italic",
            },
          ],
        },
        {
          key: "3",
          title: "关于",
          path: "www.baidu.com",
          icon: "info",
        },
      ],
    };
  },
  created() {
    console.log(this.cardid);
  },
  methods: {},
  components: {},
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
