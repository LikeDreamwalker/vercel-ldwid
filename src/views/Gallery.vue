<template>
  <div>
    <v-hover v-for="item in mainArray" :key="item.name">
      <template v-slot:default="{ hover }">
        <v-card color="#111111">
          <p v-if="!status" class="d-flex align-center justify-center">
            如果你看到这行文本，请尝试刷新该页面
            <br />
            这是一个原因不明的偶发跨域问题
          </p>
          <v-row no-gutters>
            <v-col cols="12">
              <v-img
                :src="item.src"
                :lazy-src="item.lazy_src"
                contain
                gradient="to top, #00000040 0%, #00000000 5%, #00000000 95%, #00000040 100%"
              >
              </v-img>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="#20202084"
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
    overlay: false
  }),
  mounted() {
    Axios.get(
      "https://ldwid-1258491808.cos.ap-beijing.myqcloud.com/ldwid.com/gallery_index/gI.json"
    ).then(response => {
      this.mainArray = response.data;
      this.status = true;
    });
  }
};
</script>

<style lang="scss" scoped></style>
