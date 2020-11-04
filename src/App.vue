<template>
  <v-app>
    <AppBar></AppBar>

    <Tabs></Tabs>

    <v-main class="animateBGLight">
      <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn fastest"
        leave-active-class="animated fadeOut fastest"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    AppBar: () => import("@/components/layout/appbar.vue"),
    Footer: () => import("@/components/layout/footer.vue"),
    Tabs: () => import("@/components/layout/tabs.vue")
  },
  data: () => ({}),
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  }
};
</script>

<style>
/*
  引入Google Font
  family=字+体
*/
@import "https://fonts.googleapis.com/css?family=Noto+Sans+SC:100,300,400,500,700,900";
/* 引入animate.css */
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css";
.fastest {
  --animate-duration: 0.2s;
}
/* 动态背景动画  */
@keyframes bganimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
/* 定义类 */
.animateBG {
  background-image: linear-gradient(150deg, #00bbff, #0099ff, #006eff, #0066ff);
  background-size: 400%;
  animation-name: bganimation;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  /* animation-delay: 0.5s; */
  /* animation-direction: alternate; */
}
.animateBGLight {
  background-image: linear-gradient(150deg, #e9f7fc, #b6e3ff, #9cc7ff, #fbfdff);
  background-size: 400%;
  animation-name: bganimation;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}
</style>
