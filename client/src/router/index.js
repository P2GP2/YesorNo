import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/join",
        name: "Join",
        component: () => import("../views/children/Join.vue"),
      },
      {
        path: "/waiting-room",
        name: "WaitingRoom",
        component: () => import("../views/children/WaitingRoom.vue"),
      },
      {
        path: "/game",
        name: "Game",
        component: () => import("../views/children/Game.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // const isGame = store.state.isGame;
  if (to.name !== "Join" && store.state.userId === "") {
    next({ name: "Join" });
  } else {
    next();
  }
});

export default router;
