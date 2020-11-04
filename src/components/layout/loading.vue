<template>
  <div>
    <v-title>一个小问题... - ldwid.com</v-title>
    <v-card
      flat
      tile
      :min-height="$vuetify.breakpoint.mdAndUp ? '100vh' : '100vh'"
      style="overflow: hidden;"
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
              class="text-center font-weight-heavy mt-10"
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:3.5rem'
                  : 'font-size:2rem'
              "
            >
              你来到了DOM树的边缘...
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
              我还没有设计好这个页面
            </h3>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-btn
              text
              color="primary"
              style="font-size:1rem"
              class="d-flex justify-center align-center text-decoration-none"
              to="/"
            >
              访问首页 〉
            </v-btn>
          </v-row>
        </v-col>
        <v-col
          :cols="$vuetify.breakpoint.mdAndUp ? '6' : '12'"
          class="d-flex justify-center"
        >
          <v-progress-circular
            color="primary"
            indeterminate
            :size="size"
            width="3"
          >
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    size: null
  }),
  created() {
    let mql = window.matchMedia("(orientation: portrait)");
    let __this = this;
    // mql.matches为true时为竖屏
    this.size = document.body.clientWidth * 0.4;
    // 监听
    // eslint-disable-next-line no-unused-vars
    function handleOrientationChange(mql) {
      __this.size = document.body.clientWidth * 0.4;
    }
    mql.addListener(handleOrientationChange);
  }
};
</script>

<style lang="scss" scoped></style>
