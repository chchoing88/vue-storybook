import Vue from 'vue';
import VueRouter from 'vue-router';
import Todo from '../views/Todo';
import About from '../views/About';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

export default router;

// const routesTest = [
//   {
//     path: '/admin',
//     component: Admin,
//     children: [
//       { path: 'setting', component: AdminSetting },
//       { path: 'manage', component: AdminManage },
//       { path: 'info', component: AdminInfo },
//       { path: 'memstatus', component: AdminMemStatus },
//       { path: 'groupstatus', component: AdminMemStatus },
//     ],
//   },
//   {
//     path: '/group',
//     component: Group,
//     children: [
//       { path: 'setting', component: GroupSetting },
//       { path: 'manage', component: GroupManage },
//       { path: 'info', component: GroupInfo },
//       { path: 'memstatus', component: GroupMemStatus },
//     ],
//   },
//   {
//     path: '/user',
//     component: User,
//     children: [{ path: 'info', component: UserInfo }],
//   },
// ];
