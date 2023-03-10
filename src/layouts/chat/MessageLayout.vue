<template>
  <q-layout view="lHr lpR lFr">
    <q-toolbar>
      <q-toolbar-title>의료행정부 13</q-toolbar-title>

      <q-btn flat round dense icon="menu" class="q-mr-sm" />
    </q-toolbar>
    <q-separator />
    <q-page-container>
      <q-chat-message
        v-for="(message, i) in messages"
        :key="i"
        :name="message.name"
        :text="[message.text]"
        :stamp="message.stamp"
        size="10"
        text-color="black"
        bg-color="white"
      />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useCounterStore } from 'src/stores/chatStore';
import { storeToRefs } from 'pinia';

const chat = useCounterStore();
const { personName, person, time, lastContent, counter, messages } =
  storeToRefs(chat);
</script>
