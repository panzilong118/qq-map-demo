import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: () => import('../views/Layout/Overview.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        title: '情报处理',
        component: () => import('../views/Home/index.vue')
      },
      {
        path: '/info-center',
        name: 'about',
        title: '情报系统',
        component: () => import('../views/About/index.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
