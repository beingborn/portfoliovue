import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import blogMain from './components/blogMain.vue';
import Detail from './components/Detail.vue';

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/blogmain",
    component : blogMain,
  },
  {
    path : "/detail/:id",
    component : Detail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 