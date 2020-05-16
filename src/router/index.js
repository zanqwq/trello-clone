import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BoardsAndTemplates from "../views/BoardsAndTemplates.vue";
import Board from "../views/Board";
import Pricing from "../views/Pricing.vue";
import Platforms from "../views/Platforms.vue";
import Blog from "../views/Blog.vue";
import About from "../views/About.vue";
import Help from "../views/Help.vue";
import User from "../views/User.vue";
import Profile from "../views/user/Profile.vue";
import Activity from "../views/user/Activity.vue";
import Cards from "../views/user/Cards.vue";
import Account from "../views/user/Account.vue";
import Billing from "../views/user/Billing.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Signup from "../views/Signup";
import NotFound from "../views/NotFound.vue";
import Test from "../views/Test.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/test",
    component: Test
  },
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/templates",
    name: "templates",
    component: BoardsAndTemplates
  },
  {
    path: "/:username/boards",
    name: "user-boards",
    component: BoardsAndTemplates,
    beforeEnter(to, from, next) {
      if (to.params.username && !store.state.user) {
        next({ name: "not-found" });
      }
      next();
    }
  },
  {
    path: "/board/:id/:title",
    name: "board",
    component: Board
  },
  {
    path: "/pricing",
    name: "pricing",
    component: Pricing
  },
  {
    path: "/platforms",
    name: "platforms",
    component: Platforms
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/help",
    name: "help",
    component: Help
  },
  {
    path: "/:username",
    name: "user",
    component: User,
    beforeEnter(to, from, next) {
      if (
        !store.state.user ||
        store.state.user.username !== to.params.username
      ) {
        next({ name: "not-found" });
      }
    },
    children: [
      {
        path: "profile",
        name: "user-profile",
        component: Profile
      },
      {
        path: "activity",
        name: "user-activity",
        component: Activity
      },
      {
        path: "cards",
        name: "user-cards",
        component: Cards
      },
      {
        path: "account",
        name: "user-account",
        component: Account
      },
      {
        path: "billing",
        name: "user-billing",
        component: Billing
      }
    ]
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
