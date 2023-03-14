<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer show-if-above side="left" bordered :breakpoint="800">
      <q-card flat style="width: 100%; height: 50px" class="q-mb-sm">
        <div class="row justify-between">
          <div style="width: 100%">
            <q-input
              outlined
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
      <q-list v-for="(list, i) in lists" :key="i">
        <q-item
          ref="element"
          clickable
          v-ripple
          :id="i"
          :active="i === seq"
          @click="seq = i"
          to="/auth/login"
          active-class="bg-yellow-2"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label width="100%" lines="1"
              >{{ list.personName }}
              <q-badge
                v-if="list.person"
                style="margin: auto"
                color="blue"
                rounded
              >
                <q-icon name="person" color="white" />
                {{ list.person }}
              </q-badge></q-item-label
            >
            <q-item-label width="100%" lines="2" caption>{{
              list.lastContent
            }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label caption class="row justify-end">
              {{ list.time }}
            </q-item-label>
            <q-badge
              v-if="list.counter"
              style="margin: auto"
              color="red"
              rounded
            >
              {{ list.counter }}
            </q-badge>
          </q-item-section>
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
import { ref, onMounted, onUpdated } from 'vue';

const main = useCounterStore();
const element = ref(null);
const { lists } = storeToRefs(main);
const seq = ref('');
</script>
