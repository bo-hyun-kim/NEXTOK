<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer show-if-above side="left" bordered :breakpoint="800">
      <q-card flat style="width: 100%; height: 50px">
        <div class="row justify-between">
          <div style="width: 100%">
            <q-input
              outlined
              dense
              bg-color="white"
              placeholder="채팅방, 참여자 검색"
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </div>
      </q-card>
      <q-list>
        <q-item clickable v-ripple active-class="bg-yellow" to="/chat/message">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label width="100%" lines="1"
              >{{ personName }}
              <q-badge style="margin: auto" color="blue" rounded>
                <q-icon name="person" color="white" />
                {{ person }}
              </q-badge></q-item-label
            >
            <q-item-label width="100%" lines="2" caption>{{
              lastContent
            }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label caption class="row justify-end">
              {{ time }}
            </q-item-label>
            <q-badge style="margin: auto" color="red" rounded>
              {{ counter }}
            </q-badge>
          </q-item-section>
        </q-item>

        <q-separator inset="item" />
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

const main = useCounterStore();
const { personName, person, time, lastContent, counter } = storeToRefs(main);
</script>
