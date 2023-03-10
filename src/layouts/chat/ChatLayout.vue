<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer show-if-above side="left" bordered :breakpoint="800">
      <q-card flat style="width: 100%; height: 50px">
        <div class="row justify-between">
          <div class="q-pa-sm q-ml-md">
            <p class="text-h6">채팅</p>
          </div>
          <div class="q-pa-sm">
            <q-btn flat dense icon="playlist_add_check" size="md"></q-btn>
            <q-btn flat dense icon="add" size="md"></q-btn>
          </div>
        </div>
      </q-card>
      <q-list>
        <q-item clickable v-ripple to="/chat/message">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">{{ personName }}</q-item-label>
            <q-item-label>{{ person }}</q-item-label>
            <q-item-label lines="2" caption>{{ lastContent }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="row justify-end" right side>{{
              time
            }}</q-item-label>
            <q-badge
              style="margin: auto"
              color="red"
              rounded
              class="row justify-end"
            >
              {{ counter }}
            </q-badge>
          </q-item-section>
        </q-item>

        <q-separator inset="item" />

        <q-item clickable v-ripple to="/chat/message">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">김보현</q-item-label>
            <q-item-label caption lines="2">
              으아아아아아아앙아아아아
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 5 분전 </q-item-section>
        </q-item>

        <q-separator inset="item" />

        <q-item clickable v-ripple to="/chat/message">
          <q-item-section avatar> </q-item-section>

          <q-item-section>
            <q-item-label lines="1">김광휘</q-item-label>
            <q-item-label caption lines="2"> 헤헤헤헿 </q-item-label>
          </q-item-section>

          <q-item-section side top> 11 분전 </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useCounterStore } from 'src/stores/chatStore';
import { storeToRefs } from 'pinia';

const chat = useCounterStore();
const { personName, person, time, lastContent, counter } = storeToRefs(chat);
</script>
