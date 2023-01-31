<template>
  <div>
    <div class="container row" id="con">
      <a-card
        hoverable
        style="width: 300px"
        v-for="user in content.data"
        v-bind:key="user.id"
        class="card"
        id="card"
        @click="changeView()"
      >
        <img slot="cover" alt="example" v-bind:src="getImage(content.imgs)" />
        <a-card-meta :title="user.title" :description="user.description">
        </a-card-meta>
      </a-card>
    </div>
    <div class="pag">
      <a-pagination v-model="current" :total="50" show-less-items />
    </div>
  </div>
</template>

<script>
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
            page: 1,
          },
          {
            id: 2,
            title: 2,
            description: 2,
            page: 1,
          },
          {
            id: 3,
            title: 3,
            description: 3,
            page: 1,
          },
          {
            id: 4,
            title: 4,
            description: 4,
            page: 1,
          },
          {
            id: 5,
            title: 5,
            description: 5,
            page: 1,
          },
          {
            id: 6,
            title: 6,
            description: 6,
            page: 1,
          },
        ],
        imgs: [
          "https://stq555.com/img/202203261814360.jpg",
          "https://stq555.com/img/202202111929321.jpg",
          "https://stq555.com/img/wallhaven-9mzjwk1.jpg",
          "https://stq555.com/img/202202111935251.png",
          "https://stq555.com/img/202203261815441.jpg",
        ],
      },
    };
  },
  methods: {
    getImage(imagePath) {
      imagePath =
        this.content.imgs[Math.floor(Math.random() * this.content.imgs.length)];
      return imagePath;
    },
    changeView() {
      setTimeout(() => {
        this.$router.push("/detail");
      }, 700);
    },
  },
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
  margin: 1.6% 2.5%;
  text-align: center;
  box-shadow: rgb(0 0 0 / 28%) 0px 15px 21px 5px,
    rgb(0 0 0 / 25%) 3px 14px 25px 4px;
}

.pag {
  display: flex;
  justify-content: center;
  margin-top: 1.5%;
}
</style>
