import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Loading from "../components/layout/loading.vue";
import VTitle from "../components/layout/title";
Vue.component("Loading", Loading);
Vue.component("VTitle", VTitle);

Vue.use(VueRouter);
// 解决重复跳转在console报错
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// };

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/*webpackChunkName:"Gallery" */ "../views/Gallery.vue"),
    children: [
      {
        path: "image/:name",
        name: "Image",
        component: () =>
          import(/*webpackChunkName:"Image" */ "../views/Image.vue")
      }
    ]
  },
  {
    path: "/application",
    name: "Application",
    component: () =>
      import(/*webpackChunkName:"Application" */ "../views/Application.vue")
  },
  {
    path: "/answer",
    name: "Answer",
    component: () =>
      import(/*webpackChunkName:"Answer" */ "../views/Answer.vue")
  },
  {
    path: "/article",
    name: "Article",
    component: () =>
      import(/*webpackChunkName:"Article" */ "../views/Article.vue")
  },
  {
    path: "/music",
    name: "Music",
    component: () => import(/*webpackChunkName:"Music" */ "../views/Music.vue")
  },
  {
    path: "/video",
    name: "Video",
    component: () => import(/*webpackChunkName:"Video" */ "../views/Video.vue")
  },
  {
    path: "/meetLDW",
    name: "MeetLDW",
    component: () =>
      import(/*webpackChunkName:"MeetLDW" */ "../views/MeetLDW.vue")
  },
  {
    path: "/connectMe",
    name: "ConnectMe",
    component: () =>
      import(/*webpackChunkName:"ConnectMe" */ "../views/ConnectMe.vue")
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
