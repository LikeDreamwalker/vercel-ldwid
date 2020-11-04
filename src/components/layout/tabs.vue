<template>
  <div id="content">
    <v-tabs
      height="36px"
      centered
      :grow="$vuetify.breakpoint.mdAndUp ? false : true"
      show-arrows
      dark
      color="#0066ff"
      background-color="#4D4D4D3D"
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab.path"
        :to="tab.path"
        class="font-weight-normal active"
        style="color: white"
        >{{ tab.title }}</v-tab
      >
    </v-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    tabs: [
      {
        title: "首页",
        path: "/"
      },
      {
        title: "应用",
        path: "/application"
      },
      {
        title: "回答",
        path: "/answer"
      },
      {
        title: "文章",
        path: "/article"
      },
      {
        title: "相册",
        path: "/gallery"
      },
      {
        title: "音乐",
        path: "/music"
      },
      {
        title: "视频",
        path: "/video"
      },
      {
        title: "遇见 LikeDreamwalker",
        path: "/meetLDW"
      },
      {
        title: "联系我",
        path: "/connectMe"
      }
    ],
    r: null
  })

  // watch: {
  //   // eslint-disable-next-line no-unused-vars
  //   $route(to, from) {
  //     console.log(this.$route.path);
  //   }
  // }
};
</script>

<style lang="scss" scoped>
#content {
  position: sticky;
  top: 0px;
  z-index: 200;
  backdrop-filter: saturate(180%) blur(20px);
}
</style>
