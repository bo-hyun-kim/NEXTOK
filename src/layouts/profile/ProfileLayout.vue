<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="300"
      class="q-pt-md bg-white text-white"
    >
      <q-tabs
        v-model="tab"
        dense
        class="text-black"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="mails" label="개인" />
        <q-tab name="alarms" label="소속" />
        <q-tab name="movies" label="전체" />
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="mails">
          <q-input v-model="search" filled type="search">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-tree
            :nodes="simple"
            node-key="label"
            no-connectors
            v-model:expanded="expanded"
          />
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <q-input v-model="search" filled type="search">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-tab-panel>

        <q-tab-panel name="movies">
          <q-input v-model="search" filled type="search">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-tab-panel>
      </q-tab-panels>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
const tab = ref('mails');
const search = ref('사용자검색');

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

const expanded = ref(['인천힘찬종합병원', 'Good food (with icon)']);

const simple = [
  {
    label: '인천힘찬종합병원',
    children: [
      {
        label: '의료원장(병원장)',
        children: [{ label: 'Quality ingredients' }, { label: 'Good recipe' }],
      },
      {
        label: '진료원장',
        disabled: true,
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
      {
        label: '의료행정본부장',
        disabled: true,
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
      {
        label: '진료부원장',
        children: [
          {
            label: '소화기내과',
            children: [
              {
                label: '김소화',
                icon: 'account_circle',
              },
              {
                label: '이내과',
                icon: 'account_circle',
              },
            ],
          },
          { label: '신경내과' },
          { label: '홍길동', icon: 'account_circle' },
          { label: '김대장', icon: 'account_circle' },
          { label: '이협력', icon: 'account_circle' },
          { label: '박본부', icon: 'account_circle' },
        ],
      },
      {
        label: '응급의료센터',
        disabled: true,
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
      {
        label: '간호과',
        disabled: true,
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
      {
        label: '종합행정과',
        disabled: true,
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
      {
        label: '원무과',
        disabled: true,
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
    ],
  },
];
</script>
