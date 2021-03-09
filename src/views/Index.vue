<template>
  <div style="margin-top: -36px; overflow: hidden">
    <v-title>遇见 LikeDreamwalker - ldwid.com</v-title>
    <!-- 镜湖 -->
    <v-card
      flat
      tile
      style="overflow: hidden"
      class="d-flex justify-center align-center"
      color="#111111"
    >
      <v-img
        :src="
          $vuetify.breakpoint.mdAndUp
            ? 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/mirrorlake_index_169.jpg'
            : 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/mirrorlake_index_919.jpg'
        "
        :lazy-src="
          $vuetify.breakpoint.mdAndUp
            ? 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/mirrorlake_index_169.jpg/lazy_src'
            : 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/mirrorlake_index_919.jpg/lazy_src'
        "
        class="white--text align-center justify-center"
        contain
        max-width="100vw"
        gradient="to top, #00000040 0%, #00000000 25%, #00000000 75%, #00000040 100%"
      >
        <v-row style="text-shadow: 2px 2px 5px #0000007d; margin-top: -5vh">
          <v-col cols="12" class="d-flex justify-center align-center">
            <h2
              class="font-weight-light"
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:3.5rem'
                  : 'font-size:2rem'
              "
            >
              <b class="font-weight-bold">镜湖</b>主题编辑器
            </h2>
          </v-col>
          <v-col
            cols="12"
            class="d-flex justify-center align-center"
            style="margin-top: -2vh"
          >
            <h3
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:2rem'
                  : 'font-size:1.5rem'
              "
              style="color: white"
              class="font-weight-light"
            >
              mirrorlake - theme - editor
            </h3>
          </v-col>
          <v-col cols="12" class="d-flex justify-center align-center mt-2">
            <v-row align="center">
              <v-col cols="6" class="d-flex justify-end">
                <v-btn
                  rounded
                  color="primary"
                  style="font-size: 1rem"
                  href="https://github.com/LikeDreamwalker/mirrorlake-theme-editor"
                  depressed
                  class="ma-1"
                  elevation="24"
                >
                  访问 Github 〉
                </v-btn>
              </v-col>
              <v-col cols="6" class="d-flex justify-start">
                <v-btn
                  rounded
                  color="primary"
                  style="font-size: 1rem"
                  to="meetLDW"
                  depressed
                  class="ma-1"
                  href="https://zhuanlan.zhihu.com/p/355716265"
                  elevation="24"
                >
                  开发者解说：镜湖 〉
                </v-btn>
              </v-col>
              <v-col cols="12" class="d-flex justify-center">
                <v-btn
                  rounded
                  color="primary"
                  style="font-size: 1rem"
                  to="meetLDW"
                  depressed
                  class="ma-1"
                  href="https://lte.ldwid.com"
                  elevation="24"
                >
                  立刻使用 〉
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
    <!-- meet LDW -->
    <v-card
      flat
      tile
      style="overflow: hidden"
      class="d-flex justify-center align-center"
      color="#111111"
    >
      <v-img
        :src="
          $vuetify.breakpoint.mdAndUp
            ? 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/LNOE_169.jpg'
            : 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/LNOE_919.jpg'
        "
        :lazy-src="
          $vuetify.breakpoint.mdAndUp
            ? 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/LNOE_169.jpg/lazy_src'
            : 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/LNOE_919.jpg/lazy_src'
        "
        class="white--text align-start justify-center"
        contain
        max-width="100vw"
        gradient="to top, #00000040 0%, #00000000 25%, #00000000 75%, #00000040 100%"
      >
        <v-row
          :style="
            $vuetify.breakpoint.mdAndUp ? 'margin-top:15vh' : 'margin-top:5vh'
          "
        >
          <v-col cols="12" class="d-flex justify-center align-center">
            <h2
              class="font-weight-light"
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:3.5rem'
                  : 'font-size:2rem'
              "
            >
              <b class="font-weight-black">LAST NIGHT</b> ON EARTH
            </h2>
          </v-col>
          <v-col
            cols="12"
            class="d-flex justify-center align-center"
            style="margin-top: -2vh"
          >
            <h3
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:2rem'
                  : 'font-size:1.5rem'
              "
              style="color: white"
              class="font-weight-medium"
            >
              with
              <span
                class="font-weight-black font-italic white--text"
                style="letter-spacing: -0.05rem"
                >LIKE
              </span>
              <span
                class="font-weight-thin white--text"
                style="letter-spacing: -0.05rem"
                >DREAMWALKER
              </span>
            </h3>
          </v-col>
          <v-col
            cols="12"
            class="d-flex justify-center align-center"
            style="margin-top: -2vh"
          >
            <v-btn
              rounded
              color="primary"
              style="font-size: 1rem"
              to="meetLDW"
              depressed
            >
              遇见 LikeDreamwalker 〉
            </v-btn>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
    <!-- gallery -->
    <v-card
      flat
      tile
      style="overflow: hidden; text-shadow: 2px 2px 5px #0000007d"
      color="#111111"
    >
      <v-img
        :src="
          $vuetify.breakpoint.mdAndUp
            ? 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/FSTO_blue_2020R.jpg'
            : 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/FSTO_blue_2020R_919.jpg'
        "
        :lazy-src="
          $vuetify.breakpoint.mdAndUp
            ? 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/FSTO_blue_2020R.jpg/lazy_src'
            : 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/FSTO_blue_2020R_919.jpg/lazy_src'
        "
        class="white--text d-flex align-center"
        contain
        max-width="100vw"
      >
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <h2
              class="font-weight-light"
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:3.5rem'
                  : 'font-size:2rem'
              "
            >
              from <b class="font-weight-black">Stars</b> to the
              <b class="font-weight-black">Ocean</b>.
            </h2>
          </v-col>
          <v-col
            cols="12"
            style="margin-top: -2vh"
            class="d-flex justify-center"
          >
            <h3
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:2rem'
                  : 'font-size:1.5rem'
              "
              style="color: white"
              class="font-weight-light"
            >
              我有龙井，还有故事
            </h3>
          </v-col>
          <v-col
            cols="12"
            style="margin-top: -2vh"
            class="d-flex justify-center"
          >
            <v-btn
              rounded
              color="primary"
              style="font-size: 1rem; text-shadow: 0px 0px 0px #000000"
              to="gallery"
              depressed
            >
              访问 相册 〉
            </v-btn>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
    <!-- vte -->
    <v-card
      flat
      tile
      color="#111111"
      min-height="100vh"
      style="overflow: hidden"
      class="d-flex justify-center align-center"
    >
      <v-row>
        <v-col
          :cols="$vuetify.breakpoint.mdAndUp ? '12' : '12'"
          style="padding: 0px"
          align-self="center"
        >
          <v-row class="d-flex justify-center">
            <h2
              class="font-weight-medium mt-10"
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:3.5rem'
                  : 'font-size:2rem'
              "
              style="color: white"
            >
              vuetify-theme-editor
            </h2>
          </v-row>
          <v-row class="d-flex justify-center">
            <h3
              class="font-weight-light"
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:2rem'
                  : 'font-size:1.5rem'
              "
              style="color: white"
            >
              即时 即刻 立刻
            </h3>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-btn text color="primary" style="font-size: 1rem">
              <a
                target="_blank"
                href="https://github.com/LikeDreamwalker/vuetify-theme-editor"
                class="text-decoration-none"
                >了解更多 〉
              </a>
            </v-btn>
            <v-btn text color="primary" style="font-size: 1rem">
              <a
                target="_blank"
                href="https://vte.ldwid.com"
                class="text-decoration-none"
                >立即使用 〉
              </a>
            </v-btn>
          </v-row>
        </v-col>
        <!-- img -->
        <v-col
          :cols="$vuetify.breakpoint.mdAndUp ? '12' : '12'"
          style="padding: 0px"
          align-self="center"
        >
          <v-row class="d-flex justify-center align-end">
            <v-img
              :src="
                $vuetify.breakpoint.mdAndUp
                  ? 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/vte.png'
                  : 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/vte_long.png'
              "
              :lazy-src="
                $vuetify.breakpoint.mdAndUp
                  ? 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/vte.png/lazy_src'
                  : 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/vte_long.png/lazy_src'
              "
              class="mt-5"
              contain
              :max-height="$vuetify.breakpoint.mdAndUp ? '75vh' : '70vh'"
              max-width="80vw"
            >
            </v-img>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <!-- zag -->
    <v-card
      flat
      tile
      min-height="100vh"
      style="overflow: hidden"
      class="d-flex justify-center align-center"
    >
      <v-row>
        <!-- 定义col内部居中 -->
        <v-col
          :cols="$vuetify.breakpoint.mdAndUp ? '6' : '12'"
          align-self="center"
        >
          <!-- 定义row内部居中 -->
          <v-row class="d-flex justify-center">
            <h2
              class="text-center font-weight-medium mt-16"
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:3.5rem'
                  : 'font-size:2rem'
              "
            >
              zhihu-api-generator
            </h2>
          </v-row>
          <v-row class="d-flex justify-center">
            <!-- text -->
            <h3
              class="text-center font-weight-light"
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:2rem'
                  : 'font-size:1.5rem'
              "
            >
              一触即发
            </h3>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-btn
              text
              color="primary"
              style="font-size: 1rem"
              class="d-flex justify-center align-center"
            >
              <a
                target="_blank"
                href="https://github.com/LikeDreamwalker/zhihu-api-generator"
                class="text-decoration-none"
                >了解更多 〉</a
              >
            </v-btn>
          </v-row>
        </v-col>
        <v-col
          :cols="$vuetify.breakpoint.mdAndUp ? '6' : '12'"
          class="d-flex justify-center"
        >
          <v-img
            :src="
              $vuetify.breakpoint.mdAndUp
                ? 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/zaa_short.png'
                : 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/zaa_long.png'
            "
            :lazy-src="
              $vuetify.breakpoint.mdAndUp
                ? 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/zaa_short.png/lazy_src'
                : 'https://ldwid-1258491808.file.myqcloud.com/ldwid.com/zaa_long.png/lazy_src'
            "
            contain
            :max-width="$vuetify.breakpoint.mdAndUp ? '40vw' : '100vw'"
            :max-height="$vuetify.breakpoint.mdAndUp ? '100vh' : '70vh'"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
// import Axios from "axios";
export default {
  data: () => ({
    // // status
    // status: false,
    // // mainArray
    // mainArray: []
  })
  // mounted() {
  //   Axios.get(
  //     "https://ldwid-1258491808.cos.ap-beijing.myqcloud.com/ldwid.com/gallery_index/gI.json"
  //   ).then(response => {
  //     this.mainArray = response.data;
  //     this.status = true;
  //   });
  // }
};
</script>

<style></style>
