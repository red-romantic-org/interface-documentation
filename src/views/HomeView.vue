<template>
  <div>
    <div class="container row" id="con"></div>
    <div class="pag">
      <a-pagination v-model="current" :total="50" show-less-items />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
$(function () {
  for (let i = 0; i < 8; i++) {
    $(
      "<div class='card ant-card ant-card-bordered ant-card-hoverable' id='card' style='width: 300px'><div class='ant-card-cover'><img alt='example' src='https://stq555.com/img/202203261815442.jpg'/></div><div class='ant-card-body'><div class='ant-card-meta' style='text-align: center'><div class='ant-card-meta-detail'><div class='ant-card-meta-title' id='ant-card-meta-title'>Card title</div><div class='ant-card-meta-description'>This is the description</div></div></div></div></div>"
    ).appendTo($("#con"));
  }
});

export default {
  data() {
    return {
      current: 1,
      //卡片内容
      content: {
        data: [
          {
            id: 1,
            title: 1,
            description: 1,
          },
          {
            id: 2,
            title: 2,
            description: 2,
          },
          {
            id: 3,
            title: 3,
            description: 3,
          },
          {
            id: 4,
            title: 4,
            description: 4,
          },
        ],
      },
    };
  },
  methods: {},
};
</script>

<style>
body {
  -ms-overflow-style: none;
}

body::-webkit-scrollbar {
  display: none;
}

.container {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-content: flex-start;
}

.container .card {
  width: 270px;
  margin: 2% 2.5%;
  flex: 0 0 18%;
  box-shadow: rgb(0 0 0 / 28%) 0px 15px 21px 5px,
    rgb(0 0 0 / 25%) 3px 14px 25px 4px;
}

.pag {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}
</style>
