<template>
  <div style="margin-top: -36px;overflow: hidden;">
    <v-title>交个朋友 - ldwid.com </v-title>
    <v-card
      flat
      tile
      color="#111111"
      :height="$vuetify.breakpoint.mdAndUp ? '100vh' : '100vh'"
      style="overflow: hidden;"
      class="d-flex justify-center align-center"
    >
      <v-row>
        <v-col
          :cols="$vuetify.breakpoint.mdAndUp ? '6' : '12'"
          style="padding:0px"
          align-self="center"
        >
          <v-row class="d-flex justify-center">
            <h2
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:4rem'
                  : 'font-size:2rem'
              "
              style="letter-spacing:-0.2rem"
            >
              <span class="font-weight-black font-italic primary--text"
                >LIKE
              </span>
              <span class="font-weight-thin primary--text">DREAMWALKER</span>
            </h2>
          </v-row>
          <v-row class="d-flex justify-center white--text">
            <v-col cols="12">
              <h3
                class="font-weight-light text-center"
                :style="
                  $vuetify.breakpoint.mdAndUp
                    ? 'font-size:2rem;color='
                    : 'font-size:1.5rem'
                "
              >
                a@ldwid.com <br class="hidden-md-and-up" />
                ldw@ldwid.com(仅备用)
              </h3>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-btn text color="primary" style="font-size:1rem">
              <a
                target="_blank"
                href="https://www.zhihu.com/people/likedreamwalker"
                class="text-decoration-none"
                >访问我的知乎 〉
              </a>
            </v-btn>
            <v-btn text color="primary" style="font-size:1rem">
              <a
                target="_blank"
                href="https://github.com/LikeDreamwalker"
                class="text-decoration-none"
                >访问我的Github 〉
              </a>
            </v-btn>
          </v-row>
        </v-col>
        <!-- img -->
        <v-col
          :cols="$vuetify.breakpoint.mdAndUp ? '6' : '12'"
          style="padding:0px"
          align-self="center"
        >
          <v-row class="d-flex justify-center align-end">
            <v-img
              lazy-src="https://ldwid-1258491808.file.myqcloud.com/ldwid.com/LNOE_Profile_WEB.png?imageMogr2/thumbnail/!50p/quality/100/blur/50x10"
              src="https://ldwid-1258491808.file.myqcloud.com/ldwid.com/LNOE_Profile_WEB.png"
              class="mt-5"
              contain
              :max-width="$vuetify.breakpoint.mdAndUp ? '30vw' : '60vw'"
              style="border-radius:30%"
            >
            </v-img>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
