<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white" bordered>
      <q-toolbar class="text-h5">
        <div class="text-indigo">Himchan-</div>
        <div class="text-amber-10">Talk</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="80"
      class="text-grey bg-primary"
    >
      <q-tabs vertical align="left">
        <q-route-tab
          to="/profile/profile"
          label="사용자"
          icon="person"
          active-class="text-white"
        />
        <q-route-tab
          to="/chat/chat"
          label="체팅"
          icon="chat"
          active-class="text-white"
        />
        <q-route-tab
          to="/page3"
          label="쪽지"
          icon="mail"
          active-class="text-white"
        />
      </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- footer -->
    <!-- <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
