<template>
  <q-layout view="hhh lpR fFf">
    <q-header>
      <!-- <q-toolbar class="text-h5 q-pl-md q-pb-sm q-pr-none">
        <div class="text-indigo text-h6">Himchan-</div>
        <div class="text-amber-10 text-h6">Talk</div>
        <q-space />
        <q-btn icon="minimize" flat dense color="grey-8"></q-btn>
        <q-btn icon="crop_square" flat dense color="grey-8"></q-btn>
        <q-btn icon="close" flat dense color="grey-8"></q-btn>
      </q-toolbar> -->
      <q-bar style="height: 35px" class="q-electron-drag titleBar-color">
        <div class="text-h6" style="color: #5d69c0">
          Himchan-<span style="color: #e99a65">Talk</span>
        </div>
        <div class="text-amber-10 text-h6"></div>
        <q-space />
        <q-btn
          @click="minimize"
          icon="minimize"
          flat
          dense
          color="grey-6"
        ></q-btn>
        <q-btn
          @click="toggleMaximize"
          icon="crop_square"
          flat
          dense
          color="grey-6"
        ></q-btn>
        <q-btn @click="closeApp" icon="close" flat dense color="grey-6"></q-btn>
      </q-bar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="60"
      :breakpoint="0"
      class="text-grey bg-primary"
    >
      <q-tabs
        vertical
        class="text-grey-2"
        align="left"
        active-color="white"
        indicator-color="transparent"
      >
        <div class="q-pt-sm"></div>
        <q-route-tab to="/profile" label="사용자" icon="person" />
        <q-route-tab to="/chat" label="채팅" icon="chat" />
        <q-route-tab label="쪽지" icon="mail" />
      </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

function minimize() {
  if (process.env.MODE === 'electron') {
    window.myWindowAPI.minimize();
  }
}

function toggleMaximize() {
  if (process.env.MODE === 'electron') {
    window.myWindowAPI.toggleMaximize();
  }
}

function closeApp() {
  if (process.env.MODE === 'electron') {
    window.myWindowAPI.close();
  }
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style>
.titleBar-color {
  background: #f2f4f8 !important;
}
</style>
