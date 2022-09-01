import { defineStore, createPinia } from "pinia";
export const useMainStore = defineStore({
  id: "mian",
  state: () => ({
    name: "超级管理员",
  }),
});

const pinia = createPinia();
export default pinia;
