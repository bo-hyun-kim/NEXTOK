import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/profile',
        component: () => import('layouts/profile/ProfileLayout.vue'),
      },
      {
        path: '/chat',
        component: () => import('layouts/chat/ChatLayout.vue'),
        children: [
          {
            path: '/chat/message',
            component: () => import('layouts/chat/MessageLayout.vue'),
          },
        ],
      },
    ],
  },

  {
    path: '/auth/login',
    component: () => import('layouts/auth/LoginLayout.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
