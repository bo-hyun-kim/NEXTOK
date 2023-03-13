<template>
  <q-layout view="lHr lpR lFr">
    <q-toolbar>
      <q-toolbar-title style="font-size: 16px"
        >의료행정부 {{ quantity }}</q-toolbar-title
      >
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
    </q-toolbar>
    <q-separator />
    <q-page-container>
      <div v-for="(message, i) in messages" :key="i">
        <q-chat-message
          :key="i"
          :name="message.name"
          :text="[message.text]"
          :stamp="message.stamp"
          size="10"
          avatar="https://cdn.quasar.dev/img/avatar4.jpg"
          text-color="black"
          bg-color="white"
        />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useCounterStore } from 'src/stores/chatStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const chat = useCounterStore();
const { messages } = storeToRefs(chat);
const quantity = ref('13');
</script>
