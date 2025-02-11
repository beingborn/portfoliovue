import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import blogMain from './components/blogMain.vue';
import Detail from './components/Detail.vue';
import NoFind from "./components/NoFind.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";

const routes = [
  // 라우트 순서에 따라 중요도가 달라짐 (위에 있을 수록 우선도 ^)
  {
    path: "/list",
    component: {
      List : List,
      Comment : Comment
    }
  },
  {
    path: "/blogmain",
    component : blogMain,
  },
  {
    path : "/detail/:id(\\d+)", // 숫자만
    // path : "/detail/:id",
    component : Detail,
    children : [
      {
        // 해당 패스는 상대경로로 들어가야함
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      }
    ]
  },
  {
    path : "/:anything",
    component : NoFind,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 