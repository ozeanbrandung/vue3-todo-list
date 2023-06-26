import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { LOCAL_STORAGE_KEY } from "@/consts";

store.subscribe((mutation, state) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.todos));
});

createApp(App).use(store).use(router).mount("#app");
