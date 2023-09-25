require("./bootstrap");

// import App from "./components/App.vue";
// import VueAxios from "vue-axios";
// import axios from "axios";

// import * as VueRouter from "vue-router";
// import { routes } from "./routes";
// import * as Vue from "vue";
// const router = new VueRouter.createRouter({
//     mode: "history",
//     routes: routes,
// });

// const app = new Vue({
//     el: "#app",
//     router: router,
//     render: (h) => h(App),
// });
import { createApp } from "vue";
import App from "./components/App.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(router);
app.use(VueAxios, axios);

app.mount("#app");
