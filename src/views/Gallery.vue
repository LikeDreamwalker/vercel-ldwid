<template>
  <div>
    <v-title>文章 - ldwid.com</v-title>
    <p v-if="!status && timeout" class="d-flex justify-center">
      如果你长时间看到这行文本，请尝试刷新该页面
      <br />
      这是一个原因不明的偶发跨域问题
    </p>
    <v-hover v-for="item in mainArray" :key="item.name">
      <template v-slot:default="{ hover }">
        <v-card color="#111111">
          <v-row no-gutters>
            <v-col cols="12">
              <v-img
                :src="item.src"
                :lazy-src="item.lazy_src"
                width="100vw"
                contain
                gradient="to top, #00000040 0%, #00000000 5%, #00000000 95%, #00000040 100%"
              >
              </v-img>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="#2020204D"
                  style="backdrop-filter:blur(1rem)"
                >
                  <v-btn
                    rounded
                    color="primary"
                    style="font-size:1rem;text-shadow:0px 0px 0px #000000"
                    :to="{ name: 'Image', params: { name: item.name } }"
                    depressed
                    >了解 {{ item.name }}</v-btn
                  >
                </v-overlay>
              </v-fade-transition>
            </v-col>
            <v-col cols="12"></v-col>
          </v-row>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data: () => ({
    // status
    status: false,
    // mainArray
    mainArray: [],
    // overlay
    overlay: false,
    // timeout
    timeout: false
  }),
  mounted() {
    //axios请求拦截器
    Axios.interceptors.request.use(
      config => {
        if (/get/i.test(config.method)) {
          //判断get请求
          config.params = config.params || {};
          config.params.t = Date.parse(new Date()) / 1000; //添加时间戳
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    Axios.get(
      "https://ldwid-1258491808.cos.ap-beijing.myqcloud.com/ldwid.com/gallery_index/gI.json"
    ).then(response => {
      this.mainArray = response.data;
      this.status = true;
    });
    setTimeout(() => {
      this.timeout = true;
    }, 1500);
  }
};
</script>

<style lang="scss" scoped></style>
