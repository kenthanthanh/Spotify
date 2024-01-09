import "./assets/main.css";

import { createApp } from "vue";
import { createStore } from "vuex";
import router from "./router";

import storeConfigs from "./stores";
import App from "./App.vue";

const app = createApp(App);
// Create a store
const store = createStore(storeConfigs);
// Store state in local storage
store.subscribe((mutations, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

app.use(router).use(store).mount("#app");
