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
        <!--        {{ this.title }}-->
      </div>
      <a-menu
        theme="dark"
        :default-selected-keys="['1']"
        mode="inline"
        v-for="item in menuList"
        v-bind:key="item.key"
      >
        <a-sub-menu :key="item.key" v-if="item.children">
          <span slot="title" v-if="item.children.length !== 0"
            ><a-icon :type="item.iconType" /><span>{{ item.name }}</span></span
          >
          <a-menu-item :key="item.children.key">
            <a-icon :type="item.children.iconType"></a-icon>
            <span>{{ item.children.name }}</span>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else :key="item.key">
          <a-icon :type="item.iconType"></a-icon>
          <span>{{ item.name }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0"> </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          开发文档
        </div>
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
      menuList: [
        {
          name: "监控系统",
          key: "1",
          url: "www.baidu.com",
          iconType: "laptop",
        },
        {
          key: "sub1",
          name: "模块接口",
          url: null,
          iconType: "bars",
          children: [
            {
              name: "订单模块",
              key: "2",
              url: "www.baidu.com",
              iconType: "italic",
            },
          ],
        },
        {
          name: "关于",
          key: "3",
          url: "www.baidu.com",
          iconType: "info",
        },
      ],
    };
  },
  created() {
    console.log(this.cardid);
  },
  methods: {},
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
