<template>
  <div>
    <v-footer padless>
      <v-card flat tile class="primary white--text animateBG" width="100vw">
        <v-card-text
          class="white--text font-weight-thin pb-0 "
          style="font-size:0.75rem"
        >
          <p
            :class="$vuetify.breakpoint.mdAndUp ? 'text-right' : 'text-center'"
            :style="
              $vuetify.breakpoint.mdAndUp
                ? 'font-size:0.75rem'
                : 'font-size:1rem'
            "
          >
            ldwid.com托管于Github，部署于Vercel，基于Vue2与Vuetify构建，通过COS与CDN托管静态资源并提供API，展示基于知乎的创作内容
            <br />
            <v-btn
              text
              color="white"
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:0.75rem'
                  : 'font-size:1rem'
              "
              to="/connectMe"
            >
              联系我 〉
            </v-btn>
          </p>
        </v-card-text>

        <v-divider dark></v-divider>

        <v-card-text
          :class="
            $vuetify.breakpoint.mdAndUp
              ? 'd-flex justify-end white-text'
              : 'd-flex justify-center white-text'
          "
          style="letter-spacing:-0.05rem;font-size:1.5rem"
        >
          <span class="font-weight-black font-italic white--text">LIKE </span
          ><span class="font-weight-thin white--text">DREAMWALKER</span>
        </v-card-text>
        <v-divider dark></v-divider>
        <v-card-text
          class="white--text font-weight-thin pb-0"
          style="font-size:1rem"
        >
          <p
            :class="$vuetify.breakpoint.mdAndUp ? 'text-right' : 'text-center'"
          >
            2012 - 2020 保留所有权利
          </p>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
